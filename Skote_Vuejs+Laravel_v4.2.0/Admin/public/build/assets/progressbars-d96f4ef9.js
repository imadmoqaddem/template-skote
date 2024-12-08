import{L as c}from"./main-061e9df4.js";import{P as x}from"./page-header-5e34e666.js";import{_ as y,c as _,w as a,r as n,o as B,a as s,d as l,b as e}from"../js/app2.js";import"./logo-light-deb27e23.js";import"./logo-9faa3827.js";import"./avatar-1-15b743f1.js";import"./avatar-3-36dc574b.js";const w={components:{Layout:c,PageHeader:x},data(){return{}}},P={class:"pt-2"},C={class:"custom-progess mb-5"},h={class:"custom-progess mb-5"},S={class:"custom-progess mb-4"},z={class:"mt-5"},k={class:"position-relative m-4"};function L(T,t,A,E,H,$){const b=n("PageHeader"),d=n("BCardTitle"),r=n("BProgress"),i=n("BCardBody"),u=n("BCard"),o=n("BCol"),m=n("BRow"),p=n("BProgressBar"),f=n("BProgress-bar"),g=n("BButton"),v=n("Layout");return B(),_(v,null,{default:a(()=>[s(b,{title:"Progress Bars",pageTitle:"UI Elements"}),s(m,null,{default:a(()=>[s(o,{lg:"6"},{default:a(()=>[s(u,{"no-body":""},{default:a(()=>[s(i,null,{default:a(()=>[s(d,null,{default:a(()=>t[0]||(t[0]=[l("Default Examples")])),_:1}),t[1]||(t[1]=e("p",{class:"card-title-desc"}," Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. ",-1)),s(r,{value:25,max:100,class:"mb-4"}),s(r,{value:50,max:100,class:"mb-4"}),s(r,{value:75,max:100,class:"mb-4"}),s(r,{value:100})]),_:1})]),_:1})]),_:1}),s(o,{lg:"6"},{default:a(()=>[s(u,{"no-body":""},{default:a(()=>[s(i,null,{default:a(()=>[s(d,null,{default:a(()=>t[2]||(t[2]=[l("Backgrounds")])),_:1}),t[3]||(t[3]=e("p",{class:"card-title-desc"}," Use background utility classes to change the appearance of individual progress bars. ",-1)),s(r,{value:25,max:100,class:"mb-4",variant:"success"}),s(r,{value:50,max:100,class:"mb-4",variant:"info"}),s(r,{value:75,max:100,class:"mb-4",variant:"warning"}),s(r,{value:100,variant:"danger"})]),_:1})]),_:1})]),_:1})]),_:1}),s(m,null,{default:a(()=>[s(o,{lg:"6"},{default:a(()=>[s(u,{"no-body":""},{default:a(()=>[s(i,null,{default:a(()=>[s(d,null,{default:a(()=>t[4]||(t[4]=[l("Labels Example")])),_:1}),t[5]||(t[5]=e("p",{class:"card-title-desc"},[l(" Add labels to your progress bars by placing text within the "),e("code",{class:"highlighter-rouge"},".progress-bar"),l(". ")],-1)),s(r,{value:25,max:100,"show-value":""})]),_:1})]),_:1})]),_:1}),s(o,{lg:"6"},{default:a(()=>[s(u,{"no-body":""},{default:a(()=>[s(i,null,{default:a(()=>[s(d,null,{default:a(()=>t[6]||(t[6]=[l("Multiple bars")])),_:1}),t[7]||(t[7]=e("p",{class:"card-title-desc"},"Include multiple progress bars in a progress component if you need.",-1)),s(r,{class:"mt-2",max:100},{default:a(()=>[s(p,{value:45*(6/10)}),s(p,{value:45*(2.5/10),variant:"success"}),s(p,{value:45*(1.5/10),variant:"info"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(m,null,{default:a(()=>[s(o,{lg:"6"},{default:a(()=>[s(u,{"no-body":""},{default:a(()=>[s(i,null,{default:a(()=>[s(d,null,{default:a(()=>t[8]||(t[8]=[l("Height")])),_:1}),t[9]||(t[9]=e("p",{class:"card-title-desc"},[l(" We only set a "),e("code",{class:"highlighter-rouge"},"height"),l(" value on the "),e("code",{class:"highlighter-rouge"},".progress-bar"),l(", so if you change that value the outer "),e("code",{class:"highlighter-rouge"},".progress"),l(" will automatically resize accordingly. ")],-1)),t[10]||(t[10]=e("h5",{class:"font-size-13"},"Progress sm",-1)),s(r,{class:"progress-sm mb-3",value:20}),t[11]||(t[11]=e("h5",{class:"font-size-13"},"Progress md",-1)),s(r,{class:"progress-md mb-3",value:40,variant:"success"}),t[12]||(t[12]=e("h5",{class:"font-size-13"},"Progress lg",-1)),s(r,{class:"progress-lg mb-3",value:60,variant:"warning"}),t[13]||(t[13]=e("h5",{class:"font-size-13"},"Progress xl",-1)),s(r,{class:"progress-xl mb-3",value:80,variant:"danger"})]),_:1})]),_:1})]),_:1}),s(o,{lg:"6"},{default:a(()=>[s(m,null,{default:a(()=>[s(o,{lg:"12"},{default:a(()=>[s(u,{"no-body":""},{default:a(()=>[s(i,null,{default:a(()=>[s(d,null,{default:a(()=>t[14]||(t[14]=[l("Striped")])),_:1}),t[15]||(t[15]=e("p",{class:"card-title-desc"},[l("Add "),e("code",null,".progress-bar-striped"),l(" to any "),e("code",null,".progress-bar"),l(" to apply a stripe via CSS gradient over the progress bar’s background color.")],-1)),s(r,{class:"mb-3",value:30,max:100,striped:""}),s(r,{variant:"success",value:60,max:100,striped:""})]),_:1})]),_:1})]),_:1})]),_:1}),s(m,null,{default:a(()=>[s(o,{lg:"12"},{default:a(()=>[s(u,{"no-body":""},{default:a(()=>[s(i,null,{default:a(()=>[s(d,null,{default:a(()=>t[16]||(t[16]=[l("Animated stripes")])),_:1}),t[17]||(t[17]=e("p",{class:"card-title-desc"},[l(" The striped gradient can also be animated. Add "),e("code",{class:"highlighter-rouge"},".progress-bar-animated"),l(" to "),e("code",{class:"highlighter-rouge"},".progress-bar"),l(" to animate the stripes right to left via CSS3 animations. ")],-1)),s(r,{value:75,max:100,animated:""})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(m,null,{default:a(()=>[s(o,{lg:"6"},{default:a(()=>[s(u,{"no-body":""},{default:a(()=>[s(i,{class:"pb-0"},{default:a(()=>[s(d,null,{default:a(()=>t[18]||(t[18]=[l("Striped")])),_:1}),t[19]||(t[19]=e("p",{class:"card-title-desc"},[l(" Add "),e("code",{class:"highlighter-rouge"},".progress-bar-striped"),l(" to any "),e("code",{class:"highlighter-rouge"},".progress-bar"),l(" to apply a stripe via CSS gradient over the progress bar’s background color. ")],-1)),s(r,{value:10,max:100,class:"mb-4",animated:""}),s(r,{value:25,max:100,class:"mb-4",variant:"success",animated:""}),s(r,{value:50,max:100,class:"mb-4",variant:"info",animated:""}),s(r,{value:75,max:100,class:"mb-4",variant:"warning",animated:""}),s(r,{value:100,max:100,class:"mb-4",variant:"danger",animated:""})]),_:1})]),_:1})]),_:1}),s(o,{lg:"6"},{default:a(()=>[s(u,{"no-body":""},{default:a(()=>[s(i,null,{default:a(()=>[s(d,null,{default:a(()=>t[20]||(t[20]=[l("Custom progress")])),_:1}),t[24]||(t[24]=e("p",{class:"card-title-desc mb-4"},"Example of Custom progress",-1)),e("div",P,[e("div",C,[s(r,{value:84,max:100,class:"mb-4 progress-sm",variant:"danger"}),t[21]||(t[21]=e("div",{class:"avatar-xs progress-icon"},[e("span",{class:"avatar-title rounded-circle border border-danger"},[e("i",{class:"bx bxl-html5 text-danger font-size-18"})])],-1))]),e("div",h,[s(r,{value:75,max:100,class:"mb-4 progress-sm"}),t[22]||(t[22]=e("div",{class:"avatar-xs progress-icon"},[e("span",{class:"avatar-title rounded-circle border border-primary"},[e("i",{class:"bx bxl-css3 text-primary font-size-18"})])],-1))]),e("div",S,[s(r,{value:62,max:100,class:"mb-4 progress-sm",variant:"info"}),t[23]||(t[23]=e("div",{class:"avatar-xs progress-icon"},[e("span",{class:"avatar-title rounded-circle border border-info"},[e("i",{class:"bx bxl-jquery text-info font-size-18"})])],-1))])])]),_:1})]),_:1})]),_:1})]),_:1}),s(m,null,{default:a(()=>[s(o,{xl:"6"},{default:a(()=>[s(u,{"no-body":""},{default:a(()=>[s(i,null,{default:a(()=>[s(d,null,{default:a(()=>t[25]||(t[25]=[l("Progress Example")])),_:1}),t[29]||(t[29]=e("p",{class:"card-title-desc"},"You can use these classes with existing components to create new ones.",-1)),e("div",z,[e("div",k,[s(r,{max:100,style:{height:"1px"}},{default:a(()=>[s(f,{variant:"primary",style:{width:"50%"}})]),_:1}),s(g,{variant:"primary",type:"button",class:"position-absolute top-0 start-0 translate-middle btn btn-sm rounded-pill",style:{width:"2rem",height:"2rem"}},{default:a(()=>t[26]||(t[26]=[l("1")])),_:1}),s(g,{variant:"primary",type:"button",class:"position-absolute top-0 start-50 translate-middle btn btn-sm rounded-pill",style:{width:"2rem",height:"2rem"}},{default:a(()=>t[27]||(t[27]=[l("2")])),_:1}),s(g,{variant:"secondary",type:"button",class:"position-absolute top-0 start-100 translate-middle btn btn-sm rounded-pill",style:{width:"2rem",height:"2rem"}},{default:a(()=>t[28]||(t[28]=[l("3")])),_:1})])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const q=y(w,[["render",L]]);export{q as default};
