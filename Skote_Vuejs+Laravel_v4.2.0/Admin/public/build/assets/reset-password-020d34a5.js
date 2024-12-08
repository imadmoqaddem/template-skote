import{p as v}from"./profile-img-1e13af7a.js";import{l as y}from"./logo-9faa3827.js";import{a as V}from"./axios-7a713374.js";import{_ as C,e as R,a as e,w as t,r as a,o as k,b as o,d as i,t as u,u as x}from"../js/app2.js";const E={data(){return{email:"",password:"",password_confirmation:"",error:"",isResetError:!1,profileImg:v,logo:y}},mounted(){this.isResetError=!!this.error},methods:{async reset(){this.processing=!0,await V.post("/api/reset-password",{email:this.email,token:this.$route.params.token,password:this.password,password_confirmation:this.password_confirmation}).then(({data:l})=>{l.success==!0&&l.message=="success"?this.$router.push("/login"):l.data==400&&(this.error=l.message,this.isResetError=!0,this.processing=!1)}).catch(({response:{data:l}})=>{console.log(l)}).finally(()=>{this.processing=!1})}}},P={class:"account-pages my-5 pt-5"},I={class:"bg-primary-subtle"},S=["src"],F={class:"avatar-md profile-user-wid mb-4"},U={class:"avatar-title rounded-circle bg-light"},N=["src"],T={class:"p-2"},j={action:"javascipt:void(0)",method:"POST"},A={class:"form-group row mb-0"},D={class:"col-12 text-end"},G={class:"mt-5 text-center"};function O(l,s,Y,q,r,_){const d=a("BCol"),c=a("BRow"),f=a("router-link"),w=a("BAlert"),m=a("BFormInput"),p=a("BFormGroup"),g=a("BButton"),B=a("BCardBody"),b=a("BCard"),h=a("BContainer");return k(),R("div",P,[e(h,null,{default:t(()=>[e(c,{class:"justify-content-center"},{default:t(()=>[e(d,{md:"8",lg:"6",xl:"5"},{default:t(()=>[e(b,{"no-body":"",class:"overflow-hidden"},{default:t(()=>[o("div",I,[e(c,null,{default:t(()=>[e(d,{cols:"7"},{default:t(()=>s[5]||(s[5]=[o("div",{class:"text-primary p-4"},[o("h5",{class:"text-primary"},"Reset Password"),o("p",null,"Re-Password with Skote.")],-1)])),_:1}),e(d,{cols:"5",class:"align-self-end"},{default:t(()=>[o("img",{src:r.profileImg,alt:"",class:"img-fluid"},null,8,S)]),_:1})]),_:1})]),e(B,{class:"pt-0"},{default:t(()=>[o("div",null,[e(f,{to:"/"},{default:t(()=>[o("div",F,[o("span",U,[o("img",{src:r.logo,alt:"",height:"34"},null,8,N)])])]),_:1})]),o("div",T,[e(w,{modelValue:r.isResetError,"onUpdate:modelValue":s[0]||(s[0]=n=>r.isResetError=n),class:"mb-4",variant:"danger",dismissible:""},{default:t(()=>[i(u(r.error),1)]),_:1},8,["modelValue"]),o("form",j,[x(l.$slots,"default"),e(p,{id:"email",label:"email",value:r.email,"label-for":"email"},{default:t(()=>[e(m,{id:"email",modelValue:r.email,"onUpdate:modelValue":s[1]||(s[1]=n=>r.email=n),name:"email",type:"email",placeholder:"Enter email"},null,8,["modelValue"])]),_:1},8,["value"]),e(p,{id:"password-group",label:"Password","label-for":"password"},{default:t(()=>[e(m,{id:"password",modelValue:r.password,"onUpdate:modelValue":s[2]||(s[2]=n=>r.password=n),name:"password",type:"password",placeholder:"Enter password"},null,8,["modelValue"])]),_:1}),e(p,{label:"Confirm Password","label-for":"password-confirm"},{default:t(()=>[e(m,{id:"password-confirm",modelValue:r.password_confirmation,"onUpdate:modelValue":s[3]||(s[3]=n=>r.password_confirmation=n),name:"password_confirmation",type:"password",placeholder:"Confirm password"},null,8,["modelValue"])]),_:1}),o("div",A,[o("div",D,[e(g,{type:"submit",disabled:l.processing,onClick:s[4]||(s[4]=n=>_.reset()),variant:"primary",class:"btn-block"},{default:t(()=>[i(u(l.processing?"Please wait":"Reset Password"),1)]),_:1},8,["disabled"])])])])])]),_:3})]),_:3}),o("div",G,[o("p",null,[s[7]||(s[7]=i(" Remember It ? ")),e(f,{to:"/login",class:"fw-medium text-primary"},{default:t(()=>s[6]||(s[6]=[i("Sign In here")])),_:1})]),o("p",null,[i(" © "+u(new Date().getFullYear())+" Skote. Crafted with ",1),s[8]||(s[8]=o("i",{class:"mdi mdi-heart text-danger"},null,-1)),s[9]||(s[9]=i(" by Themesbrand "))])])]),_:3})]),_:3})]),_:3})])}const L=C(E,[["render",O]]);export{L as default};
