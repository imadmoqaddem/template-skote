import{p as v}from"./profile-img-1e13af7a.js";import{l as h}from"./logo-9faa3827.js";import{a as w}from"./axios-7a713374.js";import{_ as R,e as x,a as t,w as o,r,o as C,b as e,d as n,t as m,u as V,h as k,v as T}from"../js/app2.js";const E={data(){return{email:"",error:"",status:"",isResetError:!1,tryingToReset:!1,processing:!1,profileImg:v,logo:h}},mounted(){this.isResetError=!!this.error,this.tryingToReset=!!this.status},methods:{async forget(){this.processing=!0,await w.post("/api/forget-password",{email:this.email}).then(({data:i})=>{i.success==!0&&i.message=="success"?(this.status="Password reset link send in your email.",this.tryingToReset=!0):i.data==400&&(this.error=i.message,this.isResetError=!0)}).catch(({response:{data:i}})=>{console.log(i)}).finally(()=>{this.processing=!1})}}},P={class:"account-pages my-5 pt-5"},S={class:"bg-primary-subtle"},F=["src"],I={class:"avatar-md profile-user-wid mb-4"},D={class:"avatar-title rounded-circle bg-light"},N=["src"],U={class:"p-2"},j={class:"mb-3"},A={class:"mt-5 text-center"};function M(i,s,O,Y,l,f){const d=r("BCol"),u=r("BRow"),c=r("router-link"),p=r("BAlert"),_=r("BButton"),g=r("BForm"),B=r("BCardBody"),y=r("BCard"),b=r("BContainer");return C(),x("div",P,[t(b,null,{default:o(()=>[t(u,{class:"justify-content-center"},{default:o(()=>[t(d,{md:"8",lg:"6",xl:"5"},{default:o(()=>[t(y,{"no-body":"",class:"overflow-hidden"},{default:o(()=>[e("div",S,[t(u,null,{default:o(()=>[t(d,{cols:"7"},{default:o(()=>s[4]||(s[4]=[e("div",{class:"text-primary p-4"},[e("h5",{class:"text-primary"},"Reset Password"),e("p",null,"Re-Password with Skote.")],-1)])),_:1}),t(d,{cols:"5",class:"align-self-end"},{default:o(()=>[e("img",{src:l.profileImg,alt:"",class:"img-fluid"},null,8,F)]),_:1})]),_:1})]),t(B,{class:"pt-0"},{default:o(()=>[e("div",null,[t(c,{to:"/"},{default:o(()=>[e("div",I,[e("span",D,[e("img",{src:l.logo,alt:"",height:"34"},null,8,N)])])]),_:1})]),e("div",U,[t(p,{modelValue:l.isResetError,"onUpdate:modelValue":s[0]||(s[0]=a=>l.isResetError=a),class:"mb-4",variant:"danger",dismissible:""},{default:o(()=>[n(m(l.error),1)]),_:1},8,["modelValue"]),t(p,{modelValue:l.tryingToReset,"onUpdate:modelValue":s[1]||(s[1]=a=>l.tryingToReset=a),class:"mb-4",variant:"success",dismissible:""},{default:o(()=>[n(m(l.status),1)]),_:1},8,["modelValue"]),t(g,{action:"javascript:void(0)",method:"POST"},{default:o(()=>[V(i.$slots,"default"),e("div",j,[s[5]||(s[5]=e("label",{for:"useremail"},"Email",-1)),k(e("input",{type:"email",name:"email","onUpdate:modelValue":s[2]||(s[2]=a=>l.email=a),class:"form-control",id:"useremail",placeholder:"Enter email"},null,512),[[T,l.email]])]),t(u,{class:"form-group mb-0"},{default:o(()=>[t(d,{cols:"12",class:"text-end"},{default:o(()=>[t(_,{variant:"primary",type:"submit",disabled:l.processing,onClick:s[3]||(s[3]=a=>f.forget()),class:"btn-block"},{default:o(()=>[n(m(l.processing?"Please wait":"Forget Password"),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:3})])]),_:3})]),_:3}),e("div",A,[e("p",null,[s[7]||(s[7]=n(" Remember It ? ")),t(c,{to:"/login",class:"fw-medium text-primary"},{default:o(()=>s[6]||(s[6]=[n("Sign In here")])),_:1})]),e("p",null,[n(" © "+m(new Date().getFullYear())+" Skote. Crafted with ",1),s[8]||(s[8]=e("i",{class:"mdi mdi-heart text-danger"},null,-1)),s[9]||(s[9]=n(" by Themesbrand "))])])]),_:3})]),_:3})]),_:3})])}const J=R(E,[["render",M]]);export{J as default};
