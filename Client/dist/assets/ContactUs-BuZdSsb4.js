import{r as i,j as e,a as x,B as u}from"./index-B4gll2XM.js";const j="/assets/img-CAaAVr-W.jpg",f=()=>{const[s,l]=i.useState({name:"",email:"",subject:"",message:""}),[o,m]=i.useState(!1),[n,c]=i.useState(""),a=t=>{const{name:r,value:h}=t.target;l({...s,[r]:h})},d=async t=>{t.preventDefault();try{(await x.post("/api/v1/contactUsInquiries",s)).status===200&&(m(!0),c(""),u.success("Message sent successfully"))}catch{c("Failed to send message. Please try again later.")}};return e.jsxs("div",{className:"contact-us",children:[e.jsxs("div",{className:"contact-header",children:[e.jsx("h2",{children:"Contact"}),e.jsx("p",{children:"Home / Contact"})]}),e.jsxs("div",{className:"contact-content",children:[e.jsx("div",{className:"info-title",children:e.jsx("h1",{children:"Our Hotlines"})}),e.jsxs("div",{className:"contact-info",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("i",{className:"fas fa-map-marker-alt"}),e.jsx("p",{children:"198 West 21th Street, Suite 721 Kiambu Ruiru"})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("i",{className:"fas fa-phone"}),e.jsx("p",{children:"+254 70123456"})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("i",{className:"fas fa-envelope"}),e.jsx("p",{children:"namipetgroomers@gmail.com"})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("i",{className:"fas fa-globe"}),e.jsx("p",{children:"namipetgroomers.com"})]})]}),e.jsxs("div",{className:"contact-form-section",children:[e.jsxs("div",{className:"contact-form",children:[e.jsx("h3",{children:"Contact Us"}),o?e.jsx("p",{children:"Thank you for your message. We will get back to you soon."}):e.jsxs("form",{onSubmit:d,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Full Name"}),e.jsx("input",{type:"text",name:"name",placeholder:"Name",value:s.name,onChange:a,required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Email Address"}),e.jsx("input",{type:"email",name:"email",placeholder:"Email",value:s.email,onChange:a,required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Subject"}),e.jsx("input",{type:"text",name:"subject",placeholder:"Subject",value:s.subject,onChange:a,required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Message"}),e.jsx("textarea",{name:"message",placeholder:"Message",value:s.message,onChange:a,required:!0})]}),e.jsx("button",{type:"submit",children:"Send Message"}),n&&e.jsx("p",{className:"error-message",children:n})]})]}),e.jsx("div",{className:"contact-image",children:e.jsx("img",{src:j,alt:"Contact"})})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{textAlign:"center",fontSize:"20px",marginTop:"20px",marginBottom:"10px",fontWeight:700},children:" Grab a cup of coffee with us"}),e.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.010913817372!2d36.97353247480324!3d-1.1526952988362664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f47669d1b7c6d%3A0xc6d72bd8a6f657c4!2sNami%20pet%20groomers!5e0!3m2!1sen!2ske!4v1719314385913!5m2!1sen!2ske",width:"100%",height:"450",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})]})]})};export{f as default};
