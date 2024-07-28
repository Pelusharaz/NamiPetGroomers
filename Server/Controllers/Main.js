const multer = require('multer');
const fs = require('fs');
const path = require('path');   
const nodemailer = require('nodemailer');
const cloudinary = require('../Cloudinary');
const ServicesModel = require('../Models/Services');
const ContactModel = require('../Models/Contact');
const FeedbackModel = require('../Models/Feedback');
const PricingModel = require('../Models/Pricing');
const VeterinariansModel = require('../Models/Veterinarians');
const MessagesModel = require('../Models/Messages');
const AnimalGroomingModel = require('../Models/AnimalGrooming');
const ContactUsInquiriesModel = require('../Models/ContactUsInquiries');
const BlogModel = require('../Models/Blogs');
const SubscribersModel = require('../Models/Subscribers');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({storage: storage})

//create nodemailer transporter

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'namipetgroomers@gmail.com',
        pass: 'xmio vocx aquu aejb' // Generated app password
    }
});


//SERVICES

//1. POST A SERVICE

const Services = async (req, res) => {

    try {

       const body = req.body;


       const services = new ServicesModel(body);

        const result = await services.save();

       res.status(200).json({message: 'Services', result});

    } catch (error) {
        console.log(error);
    }
}

//2. GET A SERVICE
const getServices = (req, res) =>{
    try {
        ServicesModel.find({}, (err, data) => {
            if(err){
                res.status(500).json({message: 'Error', err});
            }else{
                res.status(200).json({message: 'Success', data});
            }
        });
    } catch (error) {
        console.log(error);
    }
}
//UPDATE A SERVICE
const updateService = (req, res) => {

    try {
        
        const body = req.body;
        const id = req.params.id;

        //console.log(body, id);

        ServicesModel.findByIdAndUpdate(id, body, {new: true}, (err, data) => {
            if(err){
                res.status(500).json({message: 'Error', err});
            }else{
                res.status(200).json({message: 'Success', data});
            }
        });

    } catch (error) {
        console.log(error);
    }
}

//DELETE A SERVICE

const deleteService = (req, res) => {
    try {
        const id = req.params.id;

        ServicesModel.findByIdAndDelete(id, (err, data) => {
            if(err){
                res.status(500).json({message: 'Error', err});
            }else{
                res.status(200).json({message: 'Success, service deleted', data});
            }
        });
    } catch (error) {
        console.log(error);
    }

}



const Contact = async (req, res) => {

    try {

       const body = req.body;

         const contact = new ContactModel(body);

        const result = await contact.save();

         res.status(200).json({message: 'Contact', result});  

    } catch (error) {
        console.log(error);
    }
}

const Feedback = async (req, res) => {
    try {
        
        upload.any()(req, res, async (err) => {
            if (err) {
                console.log(err);
            } else {
                const {clientsName, clientsFeedback, clientsRating, clientsPosition} = req.body;
                const file = req.files[0];

                cloudinary.uploader.upload(file.path, { resource_type: 'image' }, async (error, result) => {
                    if (error) {
                        console.log(error);
                    } else {
                        
                        const feedback = new FeedbackModel({
                            clientsName,
                            clientsFeedback,
                            clientsRating,
                            clientsPosition,
                            clientsProfilePicture: result.secure_url
                        });

                        const saveResult = await feedback.save();


                        res.status(200).json({message: 'Feedback created successfully', saveResult});
                    }
                })
            }
        });
       
    } catch (error) {
        console.log(error);
    }
}

const Pricing = async (req, res) => {
    try {
        const body = req.body;

        const pricing = new PricingModel(body);

        const result = await pricing.save();
        
        res.status(200).json({message: 'Pricing', result});
    } catch (error) {
        console.log(error);
    }
}

//get all Pricings
const getPricings = (req, res) => {
    try {
        PricingModel.find({}, (err, data) => {
            if(err){
                res.status(500).json({message: 'Error', err});
            }else{
                res.status(200).json({message: 'Success', data});
            }
        });
    } catch (error) {
        console.log(error);
    }
}

//get pricing by id
const getPricing = (req, res) => {
    try {
        const id = req.params.id;

        PricingModel.findById(id, (err, data) => {
            if(err){
                res.status(500).json({message: 'Error', err});
            }else{
                res.status(200).json({message: 'Success', data});
            }
        });
    } catch (error) {
        console.log(error);
    }
}

const updatePricing = (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;

        PricingModel.findByIdAndUpdate (id, body, {new: true}, (err, data) => {
            if(err){
                res.status(500).json({message: 'Error', err});
            }else{

                res.status(200).json({message: 'Success', data});
            }
        });
    } catch (error) {
        console.log(error);
    }
}

const deletePricing = (req, res) => {
    try {
        const id = req.params.id;

        PricingModel.findByIdAndDelete(id, (err, data) => {
            if(err){
                res.status(500).json({message: 'Error', err});
            }else{
                res.status(200).json({message: 'Success, pricing deleted', data});
            }
        });
    } catch (error) {
        console.log(error);

    }
}   


const Veterinarians = async (req, res) => {
    try {
        const uploadMiddleware = upload.any();
        uploadMiddleware(req, res, async (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: 'Upload error', error: err });
            } else {
                const { veterinarianName, veterinarianSpecialty, veterinarianDescription, veterinarianContactNumber, veterinarianEmail, veterinarianFacebook, veterinarianInstagram, veterinarianTwitter } = req.body;
                const file = req.files[0];

                if (!file) {
                    return res.status(400).json({ message: 'No file uploaded' });
                }

                // Read the file from the disk
                const filePath = file.path;

                // Upload the file to Cloudinary
                cloudinary.uploader.upload(filePath, { resource_type: 'image' }, async (error, result) => {
                    if (error) {
                        console.log(error);
                        return res.status(500).json({ message: 'Cloudinary upload error', error });
                    } else {
                        const veterinarianProfilePicture = result.secure_url;
                        const veterinarians = new VeterinariansModel({
                            veterinarianName,
                            veterinarianSpecialty,
                            veterinarianDescription,
                            veterinarianContactNumber,
                            veterinarianEmail,
                            veterinarianFacebook,
                            veterinarianInstagram,
                            veterinarianTwitter,
                            veterinarianProfilePicture
                        });

                        const saveResult = await veterinarians.save();

                        // Optionally, delete the file from the disk after uploading to Cloudinary
                        fs.unlink(filePath, (err) => {
                            if (err) console.log(err);
                        });

                        res.status(200).json({ message: 'Veterinarian created successfully', saveResult });
                    }
                });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error });
    }
};


//GET A VETERINARIAN

const getVeterinarians = (req, res) => {
    try {
        VeterinariansModel.find({}, (err, data) => {
            if(err){
                res.status(500).json({message: 'Error', err});
            }else{
                res.status(200).json({message: 'Success', data});
            }
        });
    } catch (error) {
        console.log(error);
    }

}

//UPDATE A VETERINARIAN
const updateVeterinarian = (req, res) => {
    try {
        upload.any()(req, res, async (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: 'Upload error', error: err });
            } else {
                const id = req.params.id;
                const { veterinarianName, veterinarianSpecialty, veterinarianDescription, veterinarianContactNumber, veterinarianEmail, veterinarianFacebook, veterinarianInstagram, veterinarianTwitter, veterinarianProfilePicture } = req.body;
                const file = req.files && req.files[0];

                let veterinarianProfileUrl = veterinarianProfilePicture;

                if (file) {
                    cloudinary.uploader.upload(file.path, { resource_type: 'image' }, async (error, result) => {
                        if (error) {
                            console.log(error);
                            return res.status(500).json({ message: 'Cloudinary upload error', error });
                        } else {
                            veterinarianProfileUrl = result.secure_url;

                            const body = {
                                veterinarianName,
                                veterinarianSpecialty,
                                veterinarianDescription,
                                veterinarianContactNumber,
                                veterinarianEmail,
                                veterinarianFacebook,
                                veterinarianInstagram,
                                veterinarianTwitter,
                                veterinarianProfilePicture: veterinarianProfileUrl
                            };

                            VeterinariansModel.findByIdAndUpdate(id, body, { new: true }, (err, data) => {
                                if (err) {
                                    res.status(500).json({ message: 'Error', err });
                                } else {
                                    res.status(200).json({ message: 'Success', data });
                                }
                            });
                        }
                    });
                } else {
                    const body = {
                        veterinarianName,
                        veterinarianSpecialty,
                        veterinarianDescription,
                        veterinarianContactNumber,
                        veterinarianEmail,
                        veterinarianFacebook,
                        veterinarianInstagram,
                        veterinarianTwitter,
                        veterinarianProfilePicture: veterinarianProfileUrl
                    };

                    VeterinariansModel.findByIdAndUpdate(id, body, { new: true }, (err, data) => {
                        if (err) {
                            res.status(500).json({ message: 'Error', err });
                        } else {
                            res.status(200).json({ message: 'Success', data });
                        }
                    });
                }
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error });
    }
};


//DELETE A VETERINARIAN
const deleteVeterinarian = (req, res) => {
    try {
        const id = req.params.id;

        VeterinariansModel.findByIdAndDelete(id, (err, data) => {
            if(err){
                res.status(500).json({message: 'Error', err});
            }else{
                res.status(200).json({message: 'Success, veterinarian deleted', data});
            }
        });
    } catch (error) {
        console.log(error);
    }

}
     
const Messages = async (req, res) => {
    try {
        const body = req.body;

        const messages = new MessagesModel(body);

        const result = await messages.save();

        res.status(200).json({message: 'Messages', result});
    } catch (error) {
        console.log(error);
    }
}

const getMessages = (req, res) => {
    try {
        MessagesModel.find({}, (err, data) => {
            if(err){
                res.status(500).json({message: 'Error', err});
            }else{
                res.status(200).json({message: 'Success', data});
            }
        });
    } catch (error) {
        console.log(error);
    }
}

const deleteMessage = (req, res) => {
    try {
        const id = req.params.id;
       

        MessagesModel.findByIdAndDelete(id, (err, data) => {
            if(err){
                res.status(500).json({message: 'Error', err});
            }else{
                res.status(200).json({message: 'Success, message deleted', data});
            }
        });
    } catch (error) {
        console.log(error);
    }

}
// 
const addAnimalGrooming = async (req, res) => {
    try {
        upload.fields([{ name: 'beforeImage', maxCount: 1 }, { name: 'afterImage', maxCount: 1 }])(req, res, async (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: 'Upload error', error: err });
            }

            const { animalName, animalBreed, animalType } = req.body;
            const beforeImage = req.files['beforeImage'][0];
            const afterImage = req.files['afterImage'][0];

            if (!beforeImage || !afterImage) {
                return res.status(400).json({ message: 'Both before and after images are required' });
            }

            const beforeImagePath = beforeImage.path;
            const afterImagePath = afterImage.path;

            const [beforeResult, afterResult] = await Promise.all([
                cloudinary.uploader.upload(beforeImagePath, { resource_type: 'image' }),
                cloudinary.uploader.upload(afterImagePath, { resource_type: 'image' })
            ]);

            const animalGrooming = new AnimalGroomingModel({
                animalName,
                animalBreed,
                animalType,
                groomingImages: {
                    before: beforeResult.secure_url,
                    after: afterResult.secure_url,
                }
            });

            const result = await animalGrooming.save();

            fs.unlink(beforeImagePath, (err) => { if (err) console.log(err); });
            fs.unlink(afterImagePath, (err) => { if (err) console.log(err); });

            res.status(200).json({ message: 'Animal Grooming added successfully', result });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error });
    }
};

const getAnimalGroomings = (req, res) => {
    try {
        AnimalGroomingModel.find({}, (err, data) => {
            if (err) {
                res.status(500).json({ message: 'Error', err });
            } else {
                res.status(200).json({ message: 'Success', data });
            }
        });
    } catch (error) {
        console.log(error);
    }
};

const updateAnimalGrooming = (req, res) => {
    try {
        upload.any()(req, res, async (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: 'Upload error', error: err });
            } else {
                const id = req.params.id;
                const { animalName, animalBreed, animalType, groomingImages } = req.body;
                const files = req.files;

                let updatedBeforeUrl = groomingImages ? groomingImages.before : undefined;
                let updatedAfterUrl = groomingImages ? groomingImages.after : undefined;

                const beforeImageFile = files.find(file => file.fieldname === 'beforeImage');
                const afterImageFile = files.find(file => file.fieldname === 'afterImage');

                if (beforeImageFile) {
                    const beforeUploadResult = await cloudinary.uploader.upload(beforeImageFile.path, { resource_type: 'image' });
                    updatedBeforeUrl = beforeUploadResult.secure_url;
                }

                if (afterImageFile) {
                    const afterUploadResult = await cloudinary.uploader.upload(afterImageFile.path, { resource_type: 'image' });
                    updatedAfterUrl = afterUploadResult.secure_url;
                }

                const updateData = {
                    animalName,
                    animalBreed,
                    animalType,
                    groomingImages: {
                        before: updatedBeforeUrl,
                        after: updatedAfterUrl
                    }
                };

                AnimalGroomingModel.findByIdAndUpdate(id, updateData, { new: true }, (err, data) => {
                    if (err) {
                        res.status(500).json({ message: 'Error', err });
                    } else {
                        res.status(200).json({ message: 'Success', data });
                    }
                });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error });
    }
};


const deleteAnimalGrooming = (req, res) => {
    try {
        const id = req.params.id;
               

        AnimalGroomingModel.findByIdAndDelete(id, (err, data) => {
            if (err) {
                res.status(500).json({ message: 'Error', err });
            } else if (!data) {
                res.status(404).json({ message: 'Animal grooming not found' });
            } else {
                res.status(200).json({ message: 'Success, animal grooming deleted', data });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error });
    }
};


const ContactUsInquiries = async (req, res) => {
    try {
        const body = req.body;

        const contactUsInquiries = new ContactUsInquiriesModel(body);

        const result = await contactUsInquiries.save();

        res.status(200).json({ message: 'Contact Us Inquiry', result });
    } catch (error) {
        console.log(error);
    }
};


    const getContactUsInquiries = (req, res) => {
    try {
        ContactUsInquiriesModel.find({}, (err, data) => {
            if (err) {
                res.status(500).json({ message: 'Error', err });
            } else {
                res.status(200).json({ message: 'Success', data });
            }
        });
    } catch (error) {
        console.log(error);
    }
};


const sendReply = async (req, res) => {
    try {
        upload.any()(req, res, async (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: 'Upload error', error: err });
            } else {
                const { email, subject, reply } = req.body;
                const attachment = req.files && req.files[0];

                console.log(email, subject, reply, attachment);

                const mailOptions = {
                    from: 'namipetgroomers@gmail.com', // sender address
                    to: email, // list of receivers
                    subject: subject, // Subject line
                    text: reply, // plain text body
                    attachments: attachment ? [{
                        filename: attachment.originalname,
                        path: path.resolve(attachment.path)
                    }] : [],
                };

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                        return res.status(500).json({ message: 'Error sending email', error });
                    } else {
                        console.log('Email sent: ' + info.response);
                        if (attachment) {
                            // Delete the file from the server after sending the email
                            fs.unlink(attachment.path, (err) => {
                                if (err) console.log(err);
                            });
                        }
                        res.status(200).json({ message: 'Reply sent successfully!' });
                    }
                });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error });
    }
};

const sendSubscribeReply = async (req, res) => {
    try {
        const { email } = req.body;

        const subject = 'Subscription Confirmation';
        const reply = 'Thank you for subscribing to our standard plan. we will contact you with more details on how to proceed via email or your phone Number.';

        const mailOptions = {
            from: 'namipetgroomers@gmail.com', // sender address
            to: email, // list of receivers
            subject: subject, // Subject line
            text: reply, // plain text body
            /*attachments: attachment ? [{
                filename: attachment.originalname,
                path: path.resolve(attachment.path)
            }] : [],*/
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                return res.status(500).json({ message: 'Error sending email', error });
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).json({ message: 'Reply sent successfully!'+ info.response });
                if (attachment) {
                    // Delete the file from the server after sending the email
                    fs.unlink(attachment.path, (err) => {
                        if (err) console.log(err);
                    });
                }
                
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error });
    }
};


const Subscribers = async (req, res) => {

    try {

       const body = req.body;

       const subscribers = new SubscribersModel(body);

        const result = await subscribers.save();

       res.status(200).json({message: 'Subscribers', result});

    } catch (error) {
        console.log(error);
    }


}

const getSubscribers = (req, res) => {
    try {
        SubscribersModel.find({}, (err, data) => {
            if(err){
                res.status(500).json({message: 'Error', err});
            }else{
                res.status(200).json({message: 'Success', data});
            }
        });
    } catch (error) {
        console.log(error);
    }
}

const updateSubscriber = (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;

        SubscribersModel.findByIdAndUpdate (id, body, {new: true}, (err, data) => {
            if(err){
                res.status(500).json({message: 'Error', err});
            }else{

                res.status(200).json({message: 'Success', data});
            }
        });
    } catch (error) {
        console.log(error);
    }
}

const deleteSubscriber = (req, res) => {
    try {
        const id = req.params.id;

        SubscribersModel.findByIdAndDelete(id, (err, data) => {
            if(err){
                res.status(500).json({message: 'Error', err});
            }else{
                res.status(200).json({message: 'Success, subscriber deleted', data});

            }
        });
    } catch (error) {
        console.log(error);

    }
}


const Blogs = async (req, res) => {
    try {
        const uploadMiddleware = upload.any();
        uploadMiddleware(req, res, async (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: 'Upload error', error: err });
            } else {
                const { title, content, author, datePosted } = req.body;
                const file = req.files[0];

                if (!file) {
                    return res.status(400).json({ message: 'No file uploaded' });
                }

                // Read the file from the disk
                const filePath = file.path;

                // Upload the file to Cloudinary
                cloudinary.uploader.upload(filePath, { resource_type: 'image' }, async (error, result) => {
                    if (error) {
                        console.log(error);
                        return res.status(500).json({ message: 'Cloudinary upload error', error });
                    } else {
                        const blog = new BlogModel({
                            title,
                            content,
                            author,
                            datePosted,
                            image: result.secure_url
                        });

                        const saveResult = await blog.save();

                        // Optionally, delete the file from the disk after uploading to Cloudinary
                        fs.unlink(filePath, (err) => {
                            if (err) console.log(err);
                        });

                        res.status(200).json({ message: 'Blog created successfully', saveResult });
                    }
                });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error });
    }
}

const getBlogs = (req, res) => {
    try {
        BlogModel.find({}, (err, data) => {
            if (err) {
                res.status(500).json({ message: 'Error', err });
            } else {
                res.status(200).json({ message: 'Success', data });
            }
        });
    } catch (error) {
        console.log(error);
    }

}

const updateBlog = (req, res) => {
    try {
        upload.any()(req, res, async (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: 'Upload error', error: err });
            } else {
                const id = req.params.id;
                const { title, content, author, datePosted, image } = req.body;
                const file = req.files && req.files[0];

                let imageUrl = image;

                if (file) {
                    cloudinary.uploader.upload(file.path, { resource_type: 'image' }, async (error, result) => {
                        if (error) {
                            console.log(error);
                            return res.status(500).json({ message: 'Cloudinary upload error', error });
                        } else {
                            imageUrl = result.secure_url;

                            const body = {
                                title,
                                content,
                                author,
                                datePosted,
                                image: imageUrl
                            };

                            BlogModel.findByIdAndUpdate(id, body, { new: true }, (err, data) => {
                                if (err) {
                                    res.status(500).json({ message: 'Error', err });
                                } else {
                                    res.status(200).json({ message: 'Success', data });
                                }
                            });
                        }
                    });
                } else {
                    const body = {
                        title,
                        content,
                        author,
                        datePosted,
                        image: imageUrl
                    };

                    BlogModel.findByIdAndUpdate(id, body, { new: true }, (err, data) => {
                        if (err) {
                            res.status(500).json({ message: 'Error', err });
                        } else {
                            res.status(200).json({ message: 'Success', data });
                        }
                    });
                }
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error });
    }
};

const deleteBlog = (req, res) => {
    try {
        const id = req.params.id;

        BlogModel.findByIdAndDelete(id, (err, data) => {
            if (err) {
                res.status(500).json({ message: 'Error', err });
            } else if (!data) {
                res.status(404).json({ message: 'Blog not found' });
            } else {
                res.status(200).json({ message: 'Success, blog deleted', data });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error });
    }
}



module.exports = {

    //post controllers
    Services,
    Contact,
    Feedback,
    Pricing,
    Veterinarians,
    Messages,
    addAnimalGrooming,
    ContactUsInquiries,
    sendReply,
    sendSubscribeReply,
    Blogs,
    Subscribers,


    //get controllers
    getServices,
    getVeterinarians,
    getPricings,
    getMessages,
    getAnimalGroomings,
    getContactUsInquiries,
    getPricing,
    getBlogs,
    getSubscribers,
    

    //update controllers
    updateService,
    updateVeterinarian,
    updateAnimalGrooming,
    updateBlog,
    updateSubscriber,
    updatePricing,


    //delete controllers
    deleteService,
    deleteVeterinarian,
    deleteMessage,
    deleteAnimalGrooming,
    deleteBlog,
    deleteSubscriber,
    deletePricing

}