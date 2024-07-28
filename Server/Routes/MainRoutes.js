const express = require('express')
const router = express.Router()
const  {
    Services,
    Contact,
    Feedback,
    Pricing,
    Veterinarians,
    getServices,
    updateService,
    deleteService,
    getVeterinarians,
    updateVeterinarian,
    deleteVeterinarian,
    getPricings,
    Messages,
    getMessages,
    deleteMessage,
    addAnimalGrooming,
    getAnimalGroomings,
    updateAnimalGrooming,
    deleteAnimalGrooming,
    ContactUsInquiries,
    getContactUsInquiries,
    sendReply,
    sendSubscribeReply,
    getPricing,
    updatePricing,
    deletePricing,
    Blogs,
    getBlogs,
    updateBlog,
    deleteBlog,
    Subscribers,
    getSubscribers,
    deleteSubscriber,
    updateSubscriber,

} = require('../Controllers/Main')

//post routes
router.route('/services').post(Services)
router.route('/contact').post(Contact)
router.route('/feedback').post(Feedback)
router.route('/pricing').post(Pricing)
router.route('/veterinarians').post(Veterinarians)
router.route('/messages').post(Messages)
router.route('/addAnimalGrooming').post(addAnimalGrooming)
router.route('/contactUsInquiries').post(ContactUsInquiries)
router.route('/sendReply').post(sendReply)
router.route('/sendSubscribeReply').post(sendSubscribeReply)
router.route('/blogs').post(Blogs)
router.route('/subscribers').post(Subscribers)

//get routes
router.route('/getServices').get(getServices)
router.route('/getVeterinarians').get(getVeterinarians)
router.route('/getPricings').get(getPricings)
router.route('/getMessages').get(getMessages)
router.route('/getAnimalGroomings').get(getAnimalGroomings)
router.route('/getContactUsInquiries').get(getContactUsInquiries)
router.route('/getPricing/:id').get(getPricing)
router.route('/getBlogs').get(getBlogs)
router.route('/getSubscribers').get(getSubscribers)


//update routes
router.route('/updateService/:id').patch(updateService)
router.route('/updateVeterinarian/:id').patch(updateVeterinarian)
router.route('/updateAnimalGrooming/:id').patch(updateAnimalGrooming)
router.route('/updateBlog/:id').patch(updateBlog)
router.route('/updateSubscriber/:id').patch(updateSubscriber)
router.route('/updatePricing/:id').patch(updatePricing)


//deleteRoutes
router.route('/deleteService/:id').delete(deleteService)
router.route('/deleteVeterinarian/:id').delete(deleteVeterinarian)
router.route('/deleteMessage/:id').delete(deleteMessage)
router.route('/deleteAnimalGrooming/:id').delete(deleteAnimalGrooming)
router.route('/deleteBlog/:id').delete(deleteBlog)
router.route('/deleteSubscriber/:id').delete(deleteSubscriber)
router.route('/deletePricing/:id').delete(deletePricing)


module.exports = router;