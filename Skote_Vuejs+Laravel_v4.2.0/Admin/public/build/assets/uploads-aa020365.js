import{L as w}from"./main-061e9df4.js";import{P as D}from"./page-header-5e34e666.js";import{u as k}from"./index-73567543.js";import{_ as L,x as _,B as R,c as S,w as r,r as s,o as i,a as n,d as c,b as t,l as T,e as f,f as E,F as P,t as v}from"../js/app2.js";import{D as V}from"./dropZone-9dfe5a9d.js";import"./logo-light-deb27e23.js";import"./logo-9faa3827.js";import"./avatar-1-15b743f1.js";import"./avatar-3-36dc574b.js";const H={methods:{deleteRecord(o){o.target.parentElement.parentElement.parentElement.remove()},getFileSrc(o){return URL.createObjectURL(o)}},setup(){let o=_([]),e=_("");const u=a=>{e.value=a.dataTransfer.files[0],o.value.push(e.value)},l=()=>{const a=document.querySelector(".dropzoneFile").files;e.value=[...e.value,...a],o.value=e.value};return R(()=>[...o.value],a=>a),{dropzoneFile:e,files:o,drop:u,selectedFile:l,v$:k()}},components:{Layout:w,PageHeader:D,DropZone:V}},N={class:"list-unstyled my-2",id:"dropzone-preview"},U={class:"d-flex p-2"},Z={class:"flex-shrink-0 me-3"},j={class:"avatar-sm bg-light rounded"},q=["src"],J={class:"flex-grow-1"},K={class:"pt-1"},M={class:"fs-14 mb-1","data-dz-name":""},O={class:"fs-13 text-muted mb-0","data-dz-size":""},A={class:"flex-shrink-0 ms-3"};function G(o,e,u,l,a,p){const g=s("PageHeader"),B=s("BCardTitle"),m=s("BCardBody"),h=s("DropZone"),x=s("BButton"),C=s("BCard"),z=s("BCol"),F=s("BRow"),y=s("Layout");return i(),S(y,null,{default:r(()=>[n(g,{title:"Form File Upload",pageTitle:"Forms"}),n(F,null,{default:r(()=>[n(z,{lg:"12"},{default:r(()=>[n(C,{"no-body":""},{default:r(()=>[n(m,null,{default:r(()=>[n(B,null,{default:r(()=>e[0]||(e[0]=[c("Dropzone")])),_:1})]),_:1}),n(m,null,{default:r(()=>[e[4]||(e[4]=t("p",{class:"text-muted"}," DropzoneJS is an open source library that provides drag’n’drop file uploads with image previews. ",-1)),n(h,{onDrop:T(l.drop,["prevent"]),onChange:l.selectedFile},null,8,["onDrop","onChange"]),t("ul",N,[(i(!0),f(P,null,E(l.files,(d,b)=>(i(),f("div",{class:"border rounded",key:b},[t("div",U,[t("div",Z,[t("div",j,[t("img",{"data-dz-thumbnail":"",class:"img-fluid rounded d-block h-100",src:p.getFileSrc(d)},null,8,q)])]),t("div",J,[t("div",K,[t("h5",M,v(d.name),1),t("p",O,[t("strong",null,v((d.size/1024).toFixed(2)),1),e[1]||(e[1]=c(" KB "))]),e[2]||(e[2]=t("strong",{class:"error text-danger","data-dz-errormessage":""},null,-1))])]),t("div",A,[n(x,{variant:"danger",size:"sm","data-dz-remove":"",onClick:p.deleteRecord},{default:r(()=>e[3]||(e[3]=[c(" Delete ")])),_:1},8,["onClick"])])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const se=L(H,[["render",G]]);export{se as default};