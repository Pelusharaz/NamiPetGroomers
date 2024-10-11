import{r as t,j as e,b as C,B as g}from"./index.js";import{C as v}from"./CustomTextField.js";import{C as I}from"./CustomButton.js";import{b as B}from"./index.esm.js";import{C as T}from"./CircularProgress.js";const k=()=>{const h=B(),[u,f]=t.useState(!1),[i,j]=t.useState({animalName:"",animalBreed:"",animalType:""}),[o,y]=t.useState(null),[m,N]=t.useState(null),[d,b]=t.useState({}),D=async a=>{var r,n;a.preventDefault();const s={};if(i.animalName||(s.animalName="Name is required"),i.animalBreed||(s.animalBreed="Breed is required"),i.animalType||(s.animalType="Type is required"),b(s),Object.keys(s).length===0){const l=new FormData;l.append("animalName",i.animalName),l.append("animalBreed",i.animalBreed),l.append("animalType",i.animalType),o&&l.append("beforeImage",o),m&&l.append("afterImage",m);try{f(!0),await C.post("/api/v1/addAnimalGrooming",l,{headers:{"Content-Type":"multipart/form-data"}}),g.success("Animal Grooming created successfully"),h.push("/admin/animalGallery")}catch(p){g.error(((n=(r=p.response)==null?void 0:r.data)==null?void 0:n.message)||"Failed to create Animal Grooming")}finally{f(!1)}}},x=(a,s)=>{s==="before"?y(a.target.files[0]):N(a.target.files[0])},F=a=>{const{name:s,value:r}=a.target;j(n=>({...n,[s]:r}))},c=(a,s,r,n="text",l=!1,p=1)=>e.jsxs("div",{className:"InputGroup",children:[e.jsx("label",{htmlFor:a,children:s}),e.jsx(v,{id:a,name:a,placeholder:r,size:"medium",type:n,multiline:l,rows:p,value:i[a],onChange:F,error:!!d[a],helperText:d[a]&&d[a]})]});return e.jsxs("div",{className:"AccomodationNew DisplayFlex",children:[e.jsxs("div",{className:"Header DisplayFlex",children:[e.jsx("span",{children:"Dashboard"})," ",e.jsx("i",{className:"fas fa-angle-right"}),e.jsx("span",{children:"Animal Groomings"})," ",e.jsx("i",{className:"fas fa-angle-right"}),e.jsx("span",{children:"Add"})]}),u?e.jsxs("div",{className:"loading-indicator DisplayFlex",children:[e.jsx(T,{}),e.jsx("p",{children:"updating, please wait..."})]}):e.jsxs("form",{onSubmit:D,className:"AccomodationNewContainer DisplayFlex",children:[e.jsxs("div",{className:"EventsTop DisplayFlex",children:[e.jsxs("div",{className:"EventImages DisplayFlex",children:[e.jsxs("div",{className:"UploadBox DisplayFlex",children:[e.jsx("input",{type:"file",id:"beforeImage",name:"beforeImage",style:{display:"none"},onChange:a=>x(a,"before")}),e.jsxs("label",{htmlFor:"beforeImage",className:"upload-label",children:[e.jsx("i",{className:"fa fa-cloud-upload-alt"}),e.jsx("p",{children:"Click here or drop file for Before Image"})]}),o&&e.jsx("p",{children:o.name})]}),e.jsxs("div",{className:"UploadBox DisplayFlex",children:[e.jsx("input",{type:"file",id:"afterImage",name:"afterImage",style:{display:"none"},onChange:a=>x(a,"after")}),e.jsxs("label",{htmlFor:"afterImage",className:"upload-label",children:[e.jsx("i",{className:"fa fa-cloud-upload-alt"}),e.jsx("p",{children:"Click here or drop file for After Image"})]}),m&&e.jsx("p",{children:m.name})]})]}),e.jsxs("div",{className:"EventDetails DisplayFlex",children:[e.jsx("h2",{children:"Animal Grooming Details"}),c("animalName","Name","e.g Animal name"),c("animalBreed","Breed","e.g Animal breed"),c("animalType","Type","e.g Dog, Cat, etc.")]})]}),e.jsx("div",{className:"BtnGroup DisplayFlex",children:e.jsx(I,{text:"Submit",type:"submit",customStyles:{backgroundColor:"var(--green)"}})})]})]})};export{k as default};
