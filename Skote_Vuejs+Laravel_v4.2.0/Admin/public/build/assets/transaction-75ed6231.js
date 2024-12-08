import{_ as k,o as c,e as x,s as M,u as S,n as v,r as i,c as B,w as l,b as s,a as e,d as a,f as V,F as I,t as p}from"../js/app2.js";import{I as L}from"./img-4-5d14ddcb.js";import{I as z}from"./img-7-59278e41.js";const D={data(){return{}},props:{loading:Boolean},mounted(){setTimeout(()=>{var m=document.getElementsByClassName("preloader-component");Array.prototype.forEach.call(m,function(r){r.style.display="none"});var t=document.getElementsByClassName("status");Array.prototype.forEach.call(t,function(r){r.style.display="none"})},1e3)}};function P(m,t,r,T,f,w){return c(),x("div",{class:v({"is-loading":r.loading})},[t[0]||(t[0]=M('<div class="preloader-component" data-v-85c56de1><div class="status" data-v-85c56de1><div class="spinner-chase" data-v-85c56de1><div class="chase-dot" data-v-85c56de1></div><div class="chase-dot" data-v-85c56de1></div><div class="chase-dot" data-v-85c56de1></div><div class="chase-dot" data-v-85c56de1></div><div class="chase-dot" data-v-85c56de1></div><div class="chase-dot" data-v-85c56de1></div></div></div></div>',1)),S(m.$slots,"default",{},void 0,!0)],2)}const E=k(D,[["render",P],["__scopeId","data-v-85c56de1"]]),A={components:{Loader:E},props:{transactions:{type:Array,default:function(){return[]},updating:{type:Boolean}}},data(){return{showModal:!1,Img7:z,Img4:L}}},F={class:"table-responsive mb-0"},H={class:"form-check font-size-16"},O=["id"],j=["for"],K={class:"table-responsive"},R=["src"],U=["src"];function W(m,t,r,T,f,w){const d=i("BTh"),u=i("BTr"),_=i("BThead"),n=i("BTd"),$=i("BLink"),g=i("BButton"),b=i("BTbody"),y=i("BTableSimple"),C=i("BModal"),N=i("Loader");return c(),B(N,{loading:m.updating},{default:l(()=>[s("div",F,[e(y,{class:"table-centered table-nowrap align-middle"},{default:l(()=>[e(_,{class:"table-light"},{default:l(()=>[e(u,null,{default:l(()=>[e(d,{style:{width:"20px"}},{default:l(()=>t[3]||(t[3]=[s("div",{class:"form-check font-size-16 align-middle"},[s("input",{class:"form-check-input",type:"checkbox",id:"transactionCheck01"}),s("label",{class:"form-check-label",for:"transactionCheck01"})],-1)])),_:1}),e(d,{class:"align-middle"},{default:l(()=>t[4]||(t[4]=[a("Order ID")])),_:1}),e(d,{class:"align-middle"},{default:l(()=>t[5]||(t[5]=[a("Billing Name")])),_:1}),e(d,{class:"align-middle"},{default:l(()=>t[6]||(t[6]=[a("Date")])),_:1}),e(d,{class:"align-middle"},{default:l(()=>t[7]||(t[7]=[a("Total")])),_:1}),e(d,{class:"align-middle"},{default:l(()=>t[8]||(t[8]=[a("Payment Status")])),_:1}),e(d,{class:"align-middle"},{default:l(()=>t[9]||(t[9]=[a("Payment Method")])),_:1}),e(d,{class:"align-middle"},{default:l(()=>t[10]||(t[10]=[a("View Details")])),_:1})]),_:1})]),_:1}),e(b,null,{default:l(()=>[(c(!0),x(I,null,V(r.transactions,o=>(c(),B(u,{key:o.id},{default:l(()=>[e(n,null,{default:l(()=>[s("div",H,[s("input",{id:`customCheck${o.index}`,type:"checkbox",class:"form-check-input"},null,8,O),s("label",{class:"form-check-label",for:`customCheck${o.index}`}," ",8,j)])]),_:2},1024),e(n,null,{default:l(()=>[e($,{href:"javascript: void(0);",class:"text-body fw-bold"},{default:l(()=>[a(p(o.id),1)]),_:2},1024)]),_:2},1024),e(n,null,{default:l(()=>[a(p(o.name),1)]),_:2},1024),e(n,null,{default:l(()=>[a(p(o.date),1)]),_:2},1024),e(n,null,{default:l(()=>[a(p(o.total),1)]),_:2},1024),e(n,null,{default:l(()=>[s("span",{class:v(["badge badge-pill badge-soft-success font-size-11",{"badge-soft-danger":`${o.status}`=="Chargeback","badge-soft-warning":`${o.status}`=="Refund"}])},p(o.status),3)]),_:2},1024),e(n,null,{default:l(()=>[s("i",{class:v(`fab ${o.payment[0]} me-1`)},null,2),a(" "+p(o.payment[1]),1)]),_:2},1024),e(n,null,{default:l(()=>[e(g,{variant:"primary",type:"button",class:"btn-sm btn-rounded",onClick:t[0]||(t[0]=q=>f.showModal=!0)},{default:l(()=>t[11]||(t[11]=[a(" View Details ")])),_:1})]),_:1})]),_:2},1024))),128))]),_:1})]),_:1}),e(C,{modelValue:f.showModal,"onUpdate:modelValue":t[2]||(t[2]=o=>f.showModal=o),title:"Order Details",centered:""},{"modal-footer":l(()=>[e(g,{variant:"secondary",onClick:t[1]||(t[1]=o=>f.showModal=!1)},{default:l(()=>t[25]||(t[25]=[a("Close")])),_:1})]),default:l(()=>[t[26]||(t[26]=s("p",{class:"mb-2"},[a(" Product id: "),s("span",{class:"text-primary"},"#SK2540")],-1)),t[27]||(t[27]=s("p",{class:"mb-4"},[a(" Billing Name: "),s("span",{class:"text-primary"},"Neal Matthews")],-1)),s("div",K,[e(y,{class:"table-centered table-nowrap"},{default:l(()=>[e(_,null,{default:l(()=>[e(u,null,{default:l(()=>[e(d,{scope:"col"},{default:l(()=>t[12]||(t[12]=[a("Product")])),_:1}),e(d,{scope:"col"},{default:l(()=>t[13]||(t[13]=[a("Product Name")])),_:1}),e(d,{scope:"col"},{default:l(()=>t[14]||(t[14]=[a("Price")])),_:1})]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(u,null,{default:l(()=>[e(d,{scope:"row"},{default:l(()=>[s("div",null,[s("img",{src:f.Img7,alt:"",class:"avatar-sm"},null,8,R)])]),_:1}),e(n,null,{default:l(()=>t[15]||(t[15]=[s("div",null,[s("h5",{class:"text-truncate font-size-14"}," Wireless Headphone (Black) "),s("p",{class:"text-muted mb-0"},"$ 225 x 1")],-1)])),_:1}),e(n,{class:"pt-4"},{default:l(()=>t[16]||(t[16]=[a("$ 255")])),_:1})]),_:1}),e(u,null,{default:l(()=>[e(d,{scope:"row"},{default:l(()=>[s("div",null,[s("img",{src:f.Img4,alt:"",class:"avatar-sm"},null,8,U)])]),_:1}),e(n,null,{default:l(()=>t[17]||(t[17]=[s("div",null,[s("h5",{class:"text-truncate font-size-14"}," Hoodie (Blue) "),s("p",{class:"text-muted mb-0"},"$ 145 x 1")],-1)])),_:1}),e(n,{class:"pt-4"},{default:l(()=>t[18]||(t[18]=[a("$ 145")])),_:1})]),_:1}),e(u,null,{default:l(()=>[e(n,{colspan:"2"},{default:l(()=>t[19]||(t[19]=[s("h6",{class:"m-0 text-right"},"Sub Total:",-1)])),_:1}),e(n,null,{default:l(()=>t[20]||(t[20]=[a("$ 400")])),_:1})]),_:1}),e(u,null,{default:l(()=>[e(n,{colspan:"2"},{default:l(()=>t[21]||(t[21]=[s("h6",{class:"m-0 text-right"},"Shipping:",-1)])),_:1}),t[22]||(t[22]=s("td",null,"Free",-1))]),_:1}),e(u,null,{default:l(()=>[e(n,{colspan:"2"},{default:l(()=>t[23]||(t[23]=[s("h6",{class:"m-0 text-right"},"Total:",-1)])),_:1}),e(n,null,{default:l(()=>t[24]||(t[24]=[a("$ 400")])),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["modelValue"])])]),_:1},8,["loading"])}const X=k(A,[["render",W]]);export{E as L,X as T};
