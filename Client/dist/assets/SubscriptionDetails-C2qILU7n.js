import{w as D,x as P,y as v,z as y,C as N,r as c,E as S,_ as w,j as e,G as b,H as T,I as k,J as E,D as F,p as A,q as R,T as m,K as B,t as I,v as g,a as x,B as h}from"./index-Cbx0FzZ0.js";import{i as M}from"./pricing-2-DwiU3LKj.js";function W(a){return D("MuiDialogContentText",a)}P("MuiDialogContentText",["root"]);const H=["children","className"],U=a=>{const{classes:s}=a,i=k({root:["root"]},W,s);return b({},s,i)},_=v(y,{shouldForwardProp:a=>N(a)||a==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(a,s)=>s.root})({}),$=c.forwardRef(function(s,d){const i=S({props:s,name:"MuiDialogContentText"}),{className:r}=i,u=w(i,H),l=U(u);return e.jsx(_,b({component:"p",variant:"body1",color:"text.secondary",ref:d,ownerState:u,className:T(l.root,r)},i,{classes:l}))}),O=()=>{const{id:a}=E(),[s,d]=c.useState(null),[i,r]=c.useState(!1),[u,l]=c.useState(""),[n,j]=c.useState({name:"",phoneNumber:"",email:""});c.useEffect(()=>{(async()=>{try{const o=await x.get(`http://localhost:5000/api/v1/getPricing/${a}`);d(o.data.data)}catch(o){console.error("Error fetching subscription details:",o)}})()},[a]);const p=t=>{const{name:o,value:C}=t.target;j({...n,[o]:C})};if(!s)return e.jsx("div",{children:"Loading..."});const f=async()=>{try{await x.post("http://localhost:5000/api/v1/sendSubscribeReply",{name:n.name,phoneNumber:`254${n.phoneNumber}`,email:n.email,amount:s.pricingPrice,subscriptionPlan:s.pricingName}).then(t=>{t.status===200&&h.success("Hello, you have successfully subscribed to our service. We will get back to you soon.")}).catch(t=>{console.log("Error sending reply:",t),h.error("Failed to subscribe. Please try again later.")});try{await x.post("http://localhost:5000/api/v1/payment",{phone:`254${n.phoneNumber}`,amount:s.pricingPrice}).then(t=>{t.status===200&&(l("Payment initiated successfully. Check your phone."),h.success("Payment initiated successfully. Check your phone."))}),l("Payment initiated successfully. Check your phone.")}catch{l("Failed to initiate payment")}r(!1)}catch{h.error("Failed to subscribe. Please try again later.")}};return e.jsxs("div",{className:"subscription-details",children:[e.jsxs("div",{className:"subscription-card",children:[e.jsx("img",{src:s.image||M,alt:s.pricingName}),e.jsxs("h2",{children:[s.pricingName," Plan"]}),e.jsxs("h3",{children:[s.pricingPrice," ",e.jsx("span",{children:"Ksh/mo"})]}),e.jsx("p",{children:s.pricingDescription}),e.jsx("h4",{children:"Benefits:"}),e.jsx("ul",{children:s.PricingBenefits.map((t,o)=>e.jsx("li",{children:t},o))})]}),e.jsxs("div",{className:"additional-details",children:[e.jsx("h3",{children:"How it works"}),e.jsx("p",{children:"Here you can add detailed information about how the subscription works, any special instructions, or additional benefits that users will get."}),e.jsx("h4",{children:"Additional Benefits:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"24/7 Customer Support"}),e.jsx("li",{children:"Access to premium features"}),e.jsx("li",{children:"Monthly newsletters"}),e.jsx("li",{children:"Special discounts on other services"})]})]}),e.jsx("div",{className:"call-to-action",children:e.jsx("button",{onClick:()=>r(!0),children:"Subscribe"})}),e.jsxs(F,{open:i,onClose:()=>r(!1),children:[e.jsx(A,{children:"Payment"}),e.jsxs(R,{children:[e.jsx($,{children:"Enter your name, phone number, and email address to subscribe."}),e.jsx(m,{margin:"dense",id:"name",label:"Name",type:"text",fullWidth:!0,name:"name",value:n.name,onChange:p}),e.jsx(m,{autoFocus:!0,margin:"dense",id:"phoneNumber",label:"Phone Number",type:"text",fullWidth:!0,name:"phoneNumber",value:n.phoneNumber,onChange:p,InputProps:{startAdornment:e.jsx(B,{position:"start",children:"+254"})}}),e.jsx(m,{margin:"dense",id:"email",label:"Email Address",type:"email",fullWidth:!0,name:"email",value:n.email,onChange:p}),u&&e.jsx(y,{color:"error",children:u})]}),e.jsxs(I,{children:[e.jsx(g,{onClick:()=>r(!1),color:"primary",children:"Cancel"}),e.jsx(g,{onClick:f,color:"primary",children:"Pay"})]})]})]})};export{O as default};