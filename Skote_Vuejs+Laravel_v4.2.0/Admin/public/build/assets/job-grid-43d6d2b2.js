import{L as S}from"./main-061e9df4.js";import{P as D}from"./page-header-5e34e666.js";import{P as E}from"./pagination-7d28e4a2.js";import{C as Y}from"./flatpickr-2f7b93b9.js";import{c as M,a as Q,b as V,f as J,m as I,l as A,d as j,s as G,r as H}from"./spotify-eb9e2ee9.js";import{a as N}from"./adobe-photoshop-834272c6.js";import{_ as q,c as x,w as o,r as i,g as R,o as y,a as t,b as l,d as a,h as z,e as K,f as O,F as W,t as d}from"../js/app2.js";import"./logo-light-deb27e23.js";import"./logo-9faa3827.js";import"./avatar-1-15b743f1.js";import"./avatar-3-36dc574b.js";const X="/build/icons/upwork.svg",Z="/build/icons/wordpress.svg",k=[{id:1,title:"Magento Developer",experience:"(0-2 Yrs Exp)",company:"Skote Technology Pvt.Ltd",location:"California",salary:"$250 - $800 / month",employmentType:"Full Time",urgency:"Urgent",privacy:"Private",imageUrl:M},{id:2,title:"Product Designer",experience:"(0-2 Yrs Exp)",company:"Skote Technology Pvt.Ltd",location:"California",salary:"$250 - $800 / month",employmentType:"Full Time",urgency:"Urgent",privacy:"Private",imageUrl:N},{id:3,title:"Marketing Director",experience:"(0-2 Yrs Exp)",company:"Skote Technology Pvt.Ltd",location:"California",salary:"$250 - $800 / month",employmentType:"Full Time",urgency:"Urgent",privacy:"Private",imageUrl:Q},{id:4,title:"Project Manager",experience:"(0-2 Yrs Exp)",company:"Skote Technology Pvt.Ltd",location:"California",salary:"$250 - $800 / month",employmentType:"Full Time",urgency:"Urgent",privacy:"Private",imageUrl:V},{id:5,title:"HTML Developer",experience:"(0-2 Yrs Exp)",company:"Skote Technology Pvt.Ltd",location:"California",salary:"$250 - $800 / month",employmentType:"Full Time",urgency:"Urgent",privacy:"Private",imageUrl:J},{id:6,title:"Business Associate",experience:"(0-2 Yrs Exp)",company:"Skote Technology Pvt.Ltd",location:"California",salary:"$250 - $800 / month",employmentType:"Full Time",urgency:"Urgent",privacy:"Private",imageUrl:I},{id:7,title:"Product Sales Specialist",experience:"(0-2 Yrs Exp)",company:"Skote Technology Pvt.Ltd",location:"California",salary:"$250 - $800 / month",employmentType:"Full Time",urgency:"Urgent",privacy:"Private",imageUrl:A},{id:8,title:"Magento Developer",experience:"(0-2 Yrs Exp)",company:"Skote Technology Pvt.Ltd",location:"California",salary:"$250 - $800 / month",employmentType:"Full Time",urgency:"Urgent",privacy:"Private",imageUrl:j},{id:9,title:"Magento Developer",experience:"(0-2 Yrs Exp)",company:"Skote Technology Pvt.Ltd",location:"California",salary:"$250 - $800 / month",employmentType:"Full Time",urgency:"Urgent",privacy:"Private",imageUrl:Z},{id:10,title:"Magento Developer",experience:"(0-2 Yrs Exp)",company:"Skote Technology Pvt.Ltd",location:"California",salary:"$250 - $800 / month",employmentType:"Full Time",urgency:"Urgent",privacy:"Private",imageUrl:X},{id:11,title:"Magento Developer",experience:"(0-2 Yrs Exp)",company:"Skote Technology Pvt.Ltd",location:"California",salary:"$250 - $800 / month",employmentType:"Full Time",urgency:"Urgent",privacy:"Private",imageUrl:G},{id:11,title:"Magento Developer",experience:"(0-2 Yrs Exp)",company:"Skote Technology Pvt.Ltd",location:"California",salary:"$250 - $800 / month",employmentType:"Full Time",urgency:"Urgent",privacy:"Private",imageUrl:H}],ee={components:{Layout:S,PageHeader:D,flatPickr:Y,Pagination:E},data(){return{jobData:k,searchQuery:null,defaultDateConfig:{dateFormat:"d M, Y",defaultDate:"25 Dec, 2021"},page:1,perPage:7,resultQuery:k}},watch:{searchQuery(c){if(c){const e=c.toLowerCase();this.resultQuery=this.displayedPosts.filter(p=>p.title.toLowerCase().includes(e)||p.location.toLowerCase().includes(e)||p.company.toLowerCase().includes(e))}else this.resultQuery=this.displayedPosts}},computed:{displayedPosts(){return this.jobData}},methods:{paginate(c){let e=this.page,p=this.perPage,b=e*p-p,m=e*p;return c.slice(b,m)}}},te={class:"position-relative"},oe={class:"position-relative"},le={class:"position-relative"},ae={class:"position-relative"},ie={class:"position-relative h-100 hstack gap-3"},ne={class:"pt-4"},se={class:"favorite-icon"},re=["src"],pe={class:"fs-17 mb-2"},de={class:"text-muted fw-normal"},ce={class:"list-inline mb-0"},me={class:"list-inline-item"},ue={class:"text-muted fs-14 mb-1"},fe={class:"list-inline-item"},ye={class:"text-muted fs-14 mb-0"},ge={class:"list-inline-item"},ve={class:"text-muted fs-14 mb-0"},_e={class:"mt-3 hstack gap-2"},xe={class:"badge rounded-1 badge-soft-success"},be={class:"badge rounded-1 badge-soft-warning"},he={class:"badge rounded-1 badge-soft-info"},ke={class:"mt-4 hstack gap-2"},Ce={"aria-label":"Page navigation example",class:"mb-0"};function Te(c,e,p,b,m,Pe){const C=i("PageHeader"),g=i("BFormInput"),s=i("BCol"),T=i("flat-pickr"),P=i("BButton"),f=i("BLink"),r=i("BFormCheckbox"),h=i("BFormCheckboxGroup"),u=i("BRow"),B=i("BCollapse"),F=i("BForm"),v=i("BCardBody"),_=i("BCard"),U=i("Blink"),L=i("pagination"),w=i("Layout"),$=R("b-toggle");return y(),x(w,null,{default:o(()=>[t(C,{title:"Jobs Grid",pageTitle:"Jobs"}),t(u,null,{default:o(()=>[t(s,{lg:"12"},{default:o(()=>[t(_,{"no-body":"",class:"job-filter"},{default:o(()=>[t(v,{class:"p-3"},{default:o(()=>[t(F,{action:"javascript:void(0);"},{default:o(()=>[t(u,{class:"g-3"},{default:o(()=>[t(s,{xxl:"4",lg:"4"},{default:o(()=>[l("div",te,[t(g,{type:"text",class:"form-control",id:"searchJob",autocomplete:"off",placeholder:"Search your job",modelValue:m.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=n=>m.searchQuery=n)},null,8,["modelValue"])])]),_:1}),t(s,{xxl:"2",lg:"4"},{default:o(()=>[l("div",oe,[t(g,{type:"text",class:"form-control",id:"locationInput",autocomplete:"off",placeholder:"San Francisco, LA"})])]),_:1}),t(s,{xxl:"2",lg:"4"},{default:o(()=>[l("div",le,[t(g,{type:"text",class:"form-control",id:"jobCategories",autocomplete:"off",placeholder:"Job Categories"})])]),_:1}),t(s,{xxl:"2",lg:"6"},{default:o(()=>[l("div",ae,[t(T,{modelValue:c.date6,"onUpdate:modelValue":e[1]||(e[1]=n=>c.date6=n),config:m.defaultDateConfig,class:"form-control",placeholder:"Select date"},null,8,["modelValue","config"])])]),_:1}),t(s,{xxl:"2",lg:"6"},{default:o(()=>[l("div",ie,[t(P,{variant:"primary",type:"submit",class:"h-100 w-100"},{default:o(()=>e[2]||(e[2]=[l("i",{class:"bx bx-search-alt align-middle"},null,-1),a(" Find Jobs")])),_:1}),z((y(),x(f,{"data-bs-toggle":"collapse",class:"btn btn-secondary h-100 w-100"},{default:o(()=>e[3]||(e[3]=[l("i",{class:"bx bx-filter-alt align-middle"},null,-1),a(" Advance")])),_:1})),[[$,void 0,void 0,{collapseExample:!0}]])])]),_:1}),t(B,{id:"collapseExample",class:"mt-4"},{default:o(()=>[l("div",ne,[t(u,{class:"g-3"},{default:o(()=>[t(s,{xxl:"4",lg:"6"},{default:o(()=>[t(h,null,{default:o(()=>[e[9]||(e[9]=l("label",{for:"experience",class:"form-label d-flex"},"Experience",-1)),t(r,{id:"inlineCheckbox1",value:"option1"},{default:o(()=>e[4]||(e[4]=[a("All")])),_:1}),t(r,{id:"inlineCheckbox2",value:"option1"},{default:o(()=>e[5]||(e[5]=[a("Fresher")])),_:1}),t(r,{id:"inlineCheckbox3",value:"option2"},{default:o(()=>e[6]||(e[6]=[a("1-2")])),_:1}),t(r,{id:"inlineCheckbox4",value:"option2"},{default:o(()=>e[7]||(e[7]=[a("2-3")])),_:1}),t(r,{id:"inlineCheckbox5",value:"option3"},{default:o(()=>e[8]||(e[8]=[a("4+")])),_:1})]),_:1})]),_:1}),t(s,{xxl:"4",lg:"6"},{default:o(()=>[t(h,null,{default:o(()=>[e[14]||(e[14]=l("label",{for:"jobType",class:"form-label d-flex"},"Job Type",-1)),t(r,{id:"inlineCheckbox6",value:"option3"},{default:o(()=>e[10]||(e[10]=[a("Full Time")])),_:1}),t(r,{id:"inlineCheckbox7",value:"option3"},{default:o(()=>e[11]||(e[11]=[a("Part Time")])),_:1}),t(r,{id:"inlineCheckbox8",value:"option3"},{default:o(()=>e[12]||(e[12]=[a("Freelance")])),_:1}),t(r,{id:"inlineCheckbox9",value:"option3"},{default:o(()=>e[13]||(e[13]=[a("Internship")])),_:1})]),_:1})]),_:1}),t(s,{xxl:"4",lg:"4"},{default:o(()=>e[15]||(e[15]=[l("div",{class:"position-relative form-group"},[l("label",{for:"qualificationInput",class:"form-label"},"Qualification"),l("input",{type:"text",class:"form-control",id:"qualificationInput",autocomplete:"off",placeholder:"Qualification"}),l("i",{class:"ri-government-line filter-icon"})],-1)])),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(u,{id:"jobgrid-list"},{default:o(()=>[(y(!0),K(W,null,O(m.resultQuery,n=>(y(),x(s,{xl:"3",md:"6",key:n.id},{default:o(()=>[t(_,{"no-body":""},{default:o(()=>[t(v,null,{default:o(()=>[l("div",se,[t(f,{href:"javascript:void(0)"},{default:o(()=>e[16]||(e[16]=[l("i",{class:"uil uil-heart-alt fs-18"},null,-1)])),_:1})]),l("img",{src:n.imageUrl,alt:"",height:"50",class:"mb-3"},null,8,re),l("h5",pe,[t(f,{href:"javascript:void(0);",class:"text-dark"},{default:o(()=>[a(d(n.title),1)]),_:2},1024),e[17]||(e[17]=a()),l("small",de,d(n.experience),1)]),l("ul",ce,[l("li",me,[l("p",ue,d(n.company),1)]),l("li",fe,[l("p",ye,[e[18]||(e[18]=l("i",{class:"mdi mdi-map-marker"},null,-1)),a(" "+d(n.location),1)])]),l("li",ge,[l("p",ve,[e[19]||(e[19]=l("i",{class:"uil uil-wallet"},null,-1)),a(" "+d(n.salary),1)])])]),l("div",_e,[l("span",xe,d(n.employmentType),1),l("span",be,d(n.urgency),1),l("span",he,d(n.privacy),1)]),l("div",ke,[t(f,{href:"#!","data-bs-toggle":"modal",class:"btn btn-soft-success w-100"},{default:o(()=>e[20]||(e[20]=[a("View Profile")])),_:1}),t(U,{href:"#applyJobs","data-bs-toggle":"modal",class:"btn btn-soft-primary w-100"},{default:o(()=>e[21]||(e[21]=[a("Apply Now")])),_:1})])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),t(u,{class:"justify-content-between align-items-center mb-3"},{default:o(()=>[t(s,{class:"col-auto me-auto"},{default:o(()=>e[22]||(e[22]=[l("p",{class:"text-muted mb-0"},[a("Showing "),l("b",null,"1"),a(" to "),l("b",null,"12"),a(" of "),l("b",null,"45"),a(" entries")],-1)])),_:1}),t(s,{class:"col-auto"},{default:o(()=>[t(_,{"no-body":"",class:"d-inline-block ms-auto mb-0"},{default:o(()=>[t(v,{class:"p-0"},{default:o(()=>[l("nav",Ce,[t(L)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const Qe=q(ee,[["render",Te]]);export{Qe as default};