import{p as x}from"./profile-img-1e13af7a.js";import{l as V}from"./logo-9faa3827.js";import{a as C}from"./axios-7a713374.js";import{_ as k,e as E,a as s,w as t,r as i,o as S,b as o,d as n,t as c,u as F}from"../js/app2.js";const R={data(){return{auth:{name:"",email:"",password:"",password_confirmation:""},profileImg:x,logo:V,processing:!1,regError:null,isRegisterError:!1}},methods:{async register(){this.processing=!0,await C.post("/api/register",this.auth).then(({data:r})=>{if(console.log("data",r),r.success==!0&&r.message=="success"){const e={login:!0,user_id:r.data.id,name:r.data.name,email:r.data.email};localStorage.setItem("user",JSON.stringify(e)),this.$router.push("/")}else r.data==400&&(this.regError=r.message,this.isRegisterError=!0)}).catch(({response:{data:r}})=>{console.log(r)}).finally(()=>{this.processing=!1})}}},j={class:"account-pages my-5 pt-5"},U={class:"bg-primary-subtle"},I=["src"],N={class:"avatar-md profile-user-wid mb-4"},P={class:"avatar-title rounded-circle bg-light"},T=["src"],A={class:"mt-4 d-grid"},G={class:"mt-4 text-center"},L={class:"list-inline"},D={class:"list-inline-item"},O={class:"list-inline-item"},z={class:"list-inline-item"},J={class:"mt-4 text-center"},Y={class:"mb-0"},q={class:"mt-5 text-center"};function H(r,e,K,M,l,_){const p=i("BCol"),f=i("BRow"),g=i("router-link"),w=i("BAlert"),d=i("BFormInput"),m=i("BFormGroup"),b=i("BButton"),u=i("BLink"),B=i("BForm"),h=i("BCardBody"),y=i("BCard"),v=i("BContainer");return S(),E("div",j,[s(v,null,{default:t(()=>[s(f,{class:"justify-content-center"},{default:t(()=>[s(p,{md:"8",lg:"6",xl:"5"},{default:t(()=>[s(y,{"o-body":"",class:"overflow-hidden"},{default:t(()=>[o("div",U,[s(f,null,{default:t(()=>[s(p,{cols:"7"},{default:t(()=>e[5]||(e[5]=[o("div",{class:"text-primary p-4"},[o("h5",{class:"text-primary"},"Free Register"),o("p",null,"Get your free Skote account now.")],-1)])),_:1}),s(p,{cols:"5",class:"align-self-end"},{default:t(()=>[o("img",{src:l.profileImg,alt:"",class:"img-fluid"},null,8,I)]),_:1})]),_:1})]),s(h,{class:"pt-0"},{default:t(()=>[o("div",null,[s(g,{to:"/"},{default:t(()=>[o("div",N,[o("span",P,[o("img",{src:l.logo,alt:"",class:"rounded-circle",height:"34"},null,8,T)])])]),_:1})]),s(w,{modelValue:l.isRegisterError,"onUpdate:modelValue":e[0]||(e[0]=a=>l.isRegisterError=a),class:"mt-3",variant:"danger",dismissible:""},{default:t(()=>[n(c(l.regError),1)]),_:1},8,["modelValue"]),s(B,{class:"p-2",action:"javascript:void(0)",method:"POST"},{default:t(()=>[F(r.$slots,"default"),s(m,{id:"email-group",label:"Name","label-for":"name",class:"mb-3"},{default:t(()=>[s(d,{id:"name",modelValue:l.auth.name,"onUpdate:modelValue":e[1]||(e[1]=a=>l.auth.name=a),name:"name",type:"text",placeholder:"Enter name"},null,8,["modelValue"])]),_:1}),s(m,{id:"fullname-group",label:"Email","label-for":"email",class:"mb-3"},{default:t(()=>[s(d,{id:"email",name:"email",modelValue:l.auth.email,"onUpdate:modelValue":e[2]||(e[2]=a=>l.auth.email=a),type:"email",placeholder:"Enter email"},null,8,["modelValue"])]),_:1}),s(m,{id:"password-group",label:"Password","label-for":"password",class:"mb-3"},{default:t(()=>[s(d,{id:"password",modelValue:l.auth.password,"onUpdate:modelValue":e[3]||(e[3]=a=>l.auth.password=a),name:"password",type:"password",placeholder:"Enter password"},null,8,["modelValue"])]),_:1}),s(m,{label:"Confirm Password","label-for":"password-confirm",class:"mb-3"},{default:t(()=>[s(d,{id:"password-confirm",modelValue:l.auth.password_confirmation,"onUpdate:modelValue":e[4]||(e[4]=a=>l.auth.password_confirmation=a),name:"password_confirmation",type:"password",placeholder:"Confirm password"},null,8,["modelValue"])]),_:1}),o("div",A,[s(b,{type:"submit",disabled:l.processing,onClick:_.register,variant:"primary",class:"btn-block"},{default:t(()=>[n(c(l.processing?"Please wait":"Register"),1)]),_:1},8,["disabled","onClick"])]),o("div",G,[e[9]||(e[9]=o("h5",{class:"font-size-14 mb-3"},"Sign in with",-1)),o("ul",L,[o("li",D,[s(u,{href:"javascript: void(0);",class:"social-list-item bg-primary text-white border-primary"},{default:t(()=>e[6]||(e[6]=[o("i",{class:"mdi mdi-facebook"},null,-1)])),_:1})]),o("li",O,[s(u,{href:"javascript: void(0);",class:"social-list-item bg-info text-white border-info"},{default:t(()=>e[7]||(e[7]=[o("i",{class:"mdi mdi-twitter"},null,-1)])),_:1})]),o("li",z,[s(u,{href:"javascript: void(0);",class:"social-list-item bg-danger text-white border-danger"},{default:t(()=>e[8]||(e[8]=[o("i",{class:"mdi mdi-google"},null,-1)])),_:1})])])]),o("div",J,[o("p",Y,[e[11]||(e[11]=n(" By registering you agree to the Skote ")),s(u,{href:"javascript: void(0);",class:"text-primary"},{default:t(()=>e[10]||(e[10]=[n("Terms of Use")])),_:1})])])]),_:3})]),_:3})]),_:3}),o("div",q,[o("p",null,[e[13]||(e[13]=n(" Already have an account ? ")),s(g,{to:"/login",class:"fw-medium text-primary"},{default:t(()=>e[12]||(e[12]=[n("Login")])),_:1})]),o("p",null,[n(" © "+c(new Date().getFullYear())+" Skote. Crafted with ",1),e[14]||(e[14]=o("i",{class:"mdi mdi-heart text-danger"},null,-1)),e[15]||(e[15]=n(" by Themesbrand "))])])]),_:3})]),_:3})]),_:3})])}const $=k(R,[["render",H]]);export{$ as default};
