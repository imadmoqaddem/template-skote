import{L as v}from"./main-061e9df4.js";import{P as w}from"./page-header-5e34e666.js";import{T as D,S as y,e as p}from"./sidepanel-c13bcb2c.js";import{P as C}from"./pagination-7d28e4a2.js";import{_ as L,c as E,w as a,r as o,o as c,a as t,b as e,e as h,f as S,F as T,d,t as n,n as u}from"../js/app2.js";import"./logo-light-deb27e23.js";import"./logo-9faa3827.js";import"./avatar-1-15b743f1.js";import"./avatar-3-36dc574b.js";import"./ckeditor-11689603.js";import"./avatar-2-22bc0be9.js";import"./avatar-6-c6f5abaf.js";const $={components:{Layout:v,PageHeader:w,Toolbar:D,Pagination:C,Sidepanel:y},data(){return{emailData:p,paginatedEmailData:p,currentPage:1,perPage:15,emailIds:[],startIndex:1,endIndex:15}},computed:{rows(){return this.emailData.length}},created(){this.startIndex=0,this.endIndex=this.perPage,this.paginatedEmailData=this.emailData.slice(this.startIndex,this.endIndex)},methods:{onPageChange(){this.startIndex=(this.currentPage-1)*this.perPage,this.endIndex=(this.currentPage-1)*this.perPage+this.perPage,this.paginatedEmailData=this.emailData.slice(this.startIndex,this.endIndex)}}},j={class:"email-rightbar mb-3"},H={class:"btn-toolbar p-3"},N={class:"mt-3"},V={class:"message-list"},F={class:"col-mail col-mail-1"},R={class:"checkbox-wrapper-mail"},z=["id"],q=["for"],A={class:"col-mail col-mail-2"},G={class:"date"},J={class:"text-md-right float-end mt-2 pagination-rounded"};function K(M,O,Q,U,i,g){const f=o("PageHeader"),x=o("Sidepanel"),b=o("Toolbar"),P=o("BLink"),_=o("router-link"),I=o("BCard"),r=o("BCol"),k=o("Pagination"),m=o("BRow"),B=o("Layout");return c(),E(B,null,{default:a(()=>[t(f,{title:"Inbox",pageTitle:"Email"}),t(m,null,{default:a(()=>[t(r,{cols:"12"},{default:a(()=>[t(x),e("div",j,[t(I,{"no-body":""},{default:a(()=>[e("div",H,[t(b)]),e("div",N,[e("ul",V,[(c(!0),h(T,null,S(i.paginatedEmailData,(s,l)=>(c(),h("li",{class:u({unread:s.unread===!0}),key:l},[t(_,{to:`/email/reademail/${s.id}`},{default:a(()=>[e("div",F,[e("div",R,[e("input",{id:`chk-${l}`,type:"checkbox"},null,8,z),e("label",{for:`chk-${l}`},null,8,q)]),e("span",{class:u(`star-toggle far fa-star text-${s.text}`)},null,2),t(P,{class:"title"},{default:a(()=>[d(n(s.title),1)]),_:2},1024)]),e("div",A,[t(_,{to:"/email/reademail/1",class:"subject"},{default:a(()=>[d(n(s.subject),1)]),_:2},1024),e("div",G,n(s.date),1)])]),_:2},1032,["to"])],2))),128))])])]),_:1}),t(m,{class:"justify-content-md-between align-items-md-center"},{default:a(()=>[t(r,{xl:"7"},{default:a(()=>[d("Showing "+n(i.startIndex)+" - "+n(i.endIndex)+" of "+n(g.rows),1)]),_:1}),t(r,{xl:"5"},{default:a(()=>[e("div",J,[t(k)])]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})}const lt=L($,[["render",K]]);export{lt as default};