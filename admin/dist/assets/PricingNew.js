import{r as a,j as e,b as v,B as u}from"./index.js";import{C as f}from"./CustomTextField.js";import{C as m}from"./CustomButton.js";import{b as F}from"./index.esm.js";import{C as S}from"./CircularProgress.js";const q=()=>{const x=F(),[h,p]=a.useState(!1),[s,l]=a.useState({pricingName:"",pricingDescription:"",pricingPrice:"",PricingBenefits:[]}),[t,j]=a.useState({}),[o,g]=a.useState(""),P=async i=>{i.preventDefault();const r={};if(s.pricingName||(r.pricingName="Name is required"),s.pricingDescription||(r.pricingDescription="Description is required"),s.pricingPrice||(r.pricingPrice="Price is required"),s.PricingBenefits.length===0&&(r.PricingBenefits="At least one benefit is required"),j(r),Object.keys(r).length===0)try{p(!0),await v.post("/api/v1/pricing",s),u.success("Pricing created successfully"),x.push("/admin/pricings")}catch(n){console.error("Error creating pricing:",n),u.error("Error creating pricing")}finally{p(!1)}},b=i=>{const{name:r,value:n}=i.target;l(c=>({...c,[r]:n}))},B=i=>{g(i.target.value)},N=()=>{o.trim()&&(l(i=>({...i,PricingBenefits:[...i.PricingBenefits,o.trim()]})),g(""))},y=i=>{l(r=>({...r,PricingBenefits:r.PricingBenefits.filter((n,c)=>c!==i)}))},d=(i,r,n,c="text",C=!1,D=1)=>e.jsxs("div",{className:"InputGroup",children:[e.jsx("label",{htmlFor:i,children:r}),e.jsx(f,{id:i,name:i,placeholder:n,size:"medium",type:c,multiline:C,rows:D,value:s[i],onChange:b,error:!!t[i],helperText:t[i]&&t[i]})]});return e.jsxs("div",{className:"PricingNew DisplayFlex",children:[e.jsxs("div",{className:"Header DisplayFlex",children:[e.jsx("span",{children:"Dashboard"})," ",e.jsx("i",{className:"fas fa-angle-right"}),e.jsx("span",{children:"Pricing"})," ",e.jsx("i",{className:"fas fa-angle-right"}),e.jsx("span",{children:"Add"})]}),h?e.jsxs("div",{className:"loading-indicator DisplayFlex",children:[e.jsx(S,{}),e.jsx("p",{children:"Loading, please wait..."})]}):e.jsxs("form",{onSubmit:P,className:"PricingNewContainer DisplayFlex",children:[e.jsxs("div",{className:"PricingDetails DisplayFlex",children:[e.jsx("h2",{children:"Pricing Details"}),d("pricingName","Name","e.g. Gold"),d("pricingDescription","Description","e.g. Best for business"),d("pricingPrice","Price","e.g. 1000","number"),e.jsxs("div",{className:"InputGroup",children:[e.jsx("label",{htmlFor:"benefitInput",children:"Benefits"}),e.jsx(f,{id:"benefitInput",name:"benefitInput",placeholder:"Enter a benefit and click Add",size:"medium",type:"text",value:o,onChange:B,helperText:t.PricingBenefits&&t.PricingBenefits}),e.jsx(m,{text:"Add",customStyles:{backgroundColor:"var(--green)"},onClick:N}),e.jsx("ul",{children:s.PricingBenefits.map((i,r)=>e.jsxs("li",{children:[i," ",e.jsx("button",{type:"button",onClick:()=>y(r),children:"Remove"})]},r))})]})]}),e.jsx("div",{className:"BtnGroup DisplayFlex",children:e.jsx(m,{text:"Submit",type:"submit",customStyles:{backgroundColor:"var(--green)"}})})]})]})};export{q as default};
