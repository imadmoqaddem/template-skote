import{L as g}from"./main-061e9df4.js";import{P as y}from"./page-header-5e34e666.js";import{_ as B,c as u,w as s,r as n,o as i,a as o,b as e,e as v,f as h,F as k,t as l,n as C,d as a}from"../js/app2.js";import"./logo-light-deb27e23.js";import"./logo-9faa3827.js";import"./avatar-1-15b743f1.js";import"./avatar-3-36dc574b.js";const w=[{name:"Starter",text:"Neque quis est",icon:"bx-walk",price:19},{name:"Professional",text:"Quis autem iure",icon:"bx-run",price:29},{name:"Enterprise",text:"Sed ut neque unde",icon:"bx-cycling",price:39},{name:"Unlimited",text:"Itaque earum hic",icon:"bx-car",price:49}],q={components:{Layout:g,PageHeader:y},data(){return{pricingData:w}}},L={class:"d-flex"},P={class:"flex-grow-1"},N={class:"text-muted"},S={class:"ms-3"},T={class:"py-4"},$={class:"text-center plan-btn"};function D(F,t,U,H,m,V){const d=n("PageHeader"),c=n("BCol"),p=n("BRow"),x=n("BLink"),_=n("BCardBody"),b=n("BCard"),f=n("Layout");return i(),u(f,null,{default:s(()=>[o(d,{title:"Pricing",pageTitle:"Utility"}),o(p,{class:"justify-content-center"},{default:s(()=>[o(c,{lg:"6"},{default:s(()=>t[0]||(t[0]=[e("div",{class:"text-center mb-5"},[e("h4",null,"Choose your Pricing plan"),e("p",{class:"text-muted"},"To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words If several languages coalesce")],-1)])),_:1})]),_:1}),o(p,null,{default:s(()=>[(i(!0),v(k,null,h(m.pricingData,r=>(i(),u(c,{xl:"3",md:"6",key:r.price},{default:s(()=>[o(b,{"no-body":"",class:"plan-box"},{default:s(()=>[o(_,{class:"p-4"},{default:s(()=>[e("div",L,[e("div",P,[e("h5",null,l(r.name),1),e("p",N,l(r.text),1)]),e("div",S,[e("i",{class:C(`bx ${r.icon} h1 text-primary`)},null,2)])]),e("div",T,[e("h2",null,[t[1]||(t[1]=e("sup",null,[e("small",null,"$")],-1)),a(" "+l(r.price)+"/ ",1),t[2]||(t[2]=e("span",{class:"font-size-13"},"Per month",-1))])]),e("div",$,[o(x,{href:"javascript: void(0);",class:"btn btn-primary btn-sm position-relative"},{default:s(()=>t[3]||(t[3]=[a("Sign up Now")])),_:1})]),t[4]||(t[4]=e("div",{class:"plan-features mt-5"},[e("p",null,[e("i",{class:"bx bx-checkbox-square text-primary me-2"}),a(" Free Live Support ")]),e("p",null,[e("i",{class:"bx bx-checkbox-square text-primary me-2"}),a(" Unlimited User ")]),e("p",null,[e("i",{class:"bx bx-checkbox-square text-primary me-2"}),a(" No Time Tracking ")]),e("p",null,[e("i",{class:"bx bx-checkbox-square text-primary me-2"}),a(" Free Setup ")])],-1))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const G=B(q,[["render",D]]);export{G as default};
