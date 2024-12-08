import{p as R}from"./profile-img-1e13af7a.js";import{l as S}from"./logo-9faa3827.js";import{c,r as v,e as $}from"./index-32e1334a.js";import{u as I}from"./index-73567543.js";import{_ as P,e as a,a as s,w as r,r as l,o as d,b as o,d as m,l as M,n as b,F as N,f as T,t as _,m as u}from"../js/app2.js";const L={setup(){return{v$:I()}},data(){return{profileImg:R,logo:S,submitted:!1,email:"",password:"",password_confirmation:""}},validations:{email:{required:c.withMessage("Email is required",v),email:c.withMessage("Please enter valid email",$)},password:{required:c.withMessage("Password is required",v)},password_confirmation:{required:c.withMessage("Confirm password is required",v)}},methods:{tryToResetpwd(){this.submitted=!0,this.v$.$touch(),this.v$.$invalid}}},U={class:"account-pages my-5 pt-5"},z={class:"bg-primary-subtle"},A=["src"],D={class:"avatar-md profile-user-wid mb-4"},G={class:"avatar-title rounded-circle bg-light"},j=["src"],Y={class:"p-2"},H={key:0},J={key:0,class:"invalid-feedback"},K={key:0},O={key:0,class:"invalid-feedback"},Q={key:0},W={class:"form-group row mb-0"},X={class:"mt-5 text-center"};function Z(ee,e,se,i,t,B){const p=l("BCol"),g=l("BRow"),y=l("BLink"),k=l("BAlert"),f=l("BFormInput"),w=l("BFormGroup"),h=l("BButton"),C=l("BForm"),V=l("BCardBody"),x=l("BCard"),q=l("router-link"),F=l("BContainer");return d(),a("div",U,[s(F,null,{default:r(()=>[s(g,{class:"justify-content-center"},{default:r(()=>[s(p,{md:"8",lg:"6",xl:"5"},{default:r(()=>[s(x,{"no-body":"",class:"overflow-hidden"},{default:r(()=>[o("div",z,[s(g,null,{default:r(()=>[s(p,{cols:"7"},{default:r(()=>e[3]||(e[3]=[o("div",{class:"text-primary p-4"},[o("h5",{class:"text-primary"},"Reset Password"),o("p",null,"Re-Password with Skote.")],-1)])),_:1}),s(p,{cols:"5"},{default:r(()=>[o("img",{src:t.profileImg,alt:"",class:"img-fluid"},null,8,A)]),_:1})]),_:1})]),s(V,{class:"pt-0"},{default:r(()=>[o("div",null,[s(y,{href:"/"},{default:r(()=>[o("div",D,[o("span",G,[o("img",{src:t.logo,alt:"",class:"rounded-circle",height:"34"},null,8,j)])])]),_:1})]),o("div",Y,[s(k,{"model-value":!0,variant:"success",class:"text-center mb-4"},{default:r(()=>e[4]||(e[4]=[m(" Enter your Email and instructions will be sent to you! ")])),_:1}),s(C,{class:"form-horizontal",onSubmit:M(B.tryToResetpwd,["prevent"])},{default:r(()=>[s(w,null,{default:r(()=>[e[5]||(e[5]=o("label",{for:"useremail"},"Email",-1)),s(f,{class:b(["mb-2",{"is-invalid":t.submitted&&i.v$.email.$error}]),modelValue:t.email,"onUpdate:modelValue":e[0]||(e[0]=n=>t.email=n),id:"useremail",placeholder:"Enter email"},null,8,["modelValue","class"]),(d(!0),a(N,null,T(i.v$.email.$errors,(n,E)=>(d(),a("div",{key:E,class:"invalid-feedback"},[n.$message?(d(),a("span",H,_(n.$message),1)):u("",!0)]))),128))]),_:1}),s(w,null,{default:r(()=>[e[6]||(e[6]=o("label",{for:"pwd"},"Password",-1)),s(f,{class:b(["mb-2",{"is-invalid":t.submitted&&i.v$.password.$error}]),type:"password",modelValue:t.password,"onUpdate:modelValue":e[1]||(e[1]=n=>t.password=n),id:"pwd",placeholder:"Enter password"},null,8,["modelValue","class"]),t.submitted&&i.v$.password.$error?(d(),a("div",J,[i.v$.password.required.$message?(d(),a("span",K,_(i.v$.password.required.$message),1)):u("",!0)])):u("",!0)]),_:1}),s(w,null,{default:r(()=>[e[7]||(e[7]=o("label",{for:"confirm_pwd"},"Confirm Password",-1)),s(f,{class:b(["mb-2",{"is-invalid":t.submitted&&i.v$.password_confirmation.$error}]),modelValue:t.password_confirmation,"onUpdate:modelValue":e[2]||(e[2]=n=>t.password_confirmation=n),type:"password",id:"confirm_pwd",placeholder:"Enter confirm password"},null,8,["modelValue","class"]),t.submitted&&i.v$.password_confirmation.$error?(d(),a("div",O,[i.v$.password_confirmation.required.$message?(d(),a("span",Q,_(i.v$.password_confirmation.required.$message),1)):u("",!0)])):u("",!0)]),_:1}),o("div",W,[s(p,{cols:"12",class:"text-end"},{default:r(()=>[s(h,{variant:"primary",class:"w-md",type:"submit"},{default:r(()=>e[8]||(e[8]=[m(" Reset ")])),_:1})]),_:1})])]),_:1},8,["onSubmit"])])]),_:1})]),_:1}),o("div",X,[o("p",null,[e[10]||(e[10]=m(" Remember It ? ")),s(q,{to:"/auth/login-1",class:"fw-medium text-primary"},{default:r(()=>e[9]||(e[9]=[m("Sign In here")])),_:1})]),o("p",null,[m(" © "+_(new Date().getFullYear())+" Skote. Crafted with ",1),e[11]||(e[11]=o("i",{class:"mdi mdi-heart text-danger"},null,-1)),e[12]||(e[12]=m(" by Themesbrand "))])])]),_:1})]),_:1})]),_:1})])}const ne=P(L,[["render",Z]]);export{ne as default};
