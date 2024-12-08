import{L as E}from"./main-061e9df4.js";import{P as O}from"./page-header-5e34e666.js";import{_ as H,c as y,w as l,r as a,o as u,a as e,b as t,d as i,e as b,f as v,F as B,h as V,p as A,n as g,t as c}from"../js/app2.js";import"./logo-light-deb27e23.js";import"./logo-9faa3827.js";import"./avatar-1-15b743f1.js";import"./avatar-3-36dc574b.js";const F={series:[{type:"area",name:"BTC",data:[87,57,74,99,75,38,62,47,82,56,45,47]},{type:"area",name:"ETH",data:[28,41,52,42,13,18,29,18,36,51,55,35]},{type:"line",name:"LTC",data:[45,52,38,24,33,65,45,75,54,18,28,10]}],chartOptions:{chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2,dashArray:[0,0,3]},fill:{type:"solid",opacity:[.15,.05,1]},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},colors:["#f1b44c","#3452e1","#50a5f1"]}},N=[{id:"#SK3215",date:"03 Mar, 2020",type:"Buy",currency:"Bitcoin",amount:"1.00952 BTC",usd:"$ 9067.62"},{id:"#SK3216",date:"04 Mar, 2020",type:"Buy",currency:"Litecoin",amount:"0.00214 LTC",usd:"$ 9067.62"},{id:"#SK3217",date:"05 Mar, 2020",type:"Sell",currency:"Bitcoin",amount:"1.00952 BTC",usd:"$ 9067.62"},{id:"#SK3218",date:"03 Mar, 2020",type:"Sell",currency:"Ethereum",amount:"0.00413 ETH",usd:"$ 2123.01"},{id:"#SK3219",date:"08 Mar, 2020",type:"Buy",currency:"Litecoin",amount:"1.00124 LTC",usd:"$ 1802.62"},{id:"#SK3220",date:"06 Mar, 2020",type:"Sell",currency:"Ethereum",amount:"0.00413 ETH",usd:"$ 2123.01"},{id:"#SK3221",date:"05 Mar, 2020",type:"Buy",currency:"Bitcoin",amount:"1.00952 BTC",usd:"$ 9067.62"},{id:"#SK32122",date:"03 Mar, 2020",type:"Buy",currency:"Ethereum",amount:"0.00413 ETH",usd:"$ 2123.01"},{id:"#SK3223",date:"10 Mar, 2020",type:"Buy",currency:"Bitcoin",amount:"1.00952 BTC",usd:"$ 9067.62"},{id:"#SK3224",date:"18 Mar, 2020",type:"Buy",currency:"Litecoin",amount:"0.00224 LTC",usd:"$ 1773.01"},{id:"#SK3225",date:"03 Mar, 2020",type:"Buy",currency:"Bitcoin",amount:"1.00952 BTC",usd:"$ 9423.73"},{id:"#SK3226",date:"15 Mar, 2020",type:"Sell",currency:"Ethereum",amount:"0.00413 ETH",usd:"$ 2123.01"},{id:"#SK3227",date:"03 Mar, 2020",type:"Sell",currency:"Bitcoin",amount:"1.00952 BTC",usd:"$ 9067.62"},{id:"#SK3228",date:"01 Mar, 2020",type:"Sell",currency:"Litecoin",amount:"1.00217 LTC",usd:"$ 9067.62"}],I=[{id:1,iconClass:"bx bx-send",title:"Send",amount:"$ 654.42",buttonClass:"btn btn-primary btn-sm w-md",buttonLabel:"Send"},{id:2,iconClass:"bx bx-import",title:"Receive",amount:"$ 1054.32",buttonClass:"btn btn-primary btn-sm w-md",buttonLabel:"Receive"},{id:3,iconClass:"bx bx-wallet",title:"Withdraw",amount:"$ 824.34",buttonClass:"btn btn-primary btn-sm w-md",buttonLabel:"Withdraw"}],R=[{id:1,iconClass:"mdi mdi-bitcoin h2 text-warning mb-0",walletName:"Bitcoin Wallet",balance:"1.02356 BTC",conversion:" = $ 9148.00"},{id:2,iconClass:"mdi mdi-ethereum h2 text-primary mb-0",walletName:"Ethereum Wallet",balance:"0.04121 ETH",conversion:" = $ 8235.00"},{id:3,iconClass:"mdi mdi-litecoin h2 text-info mb-0",walletName:"Litecoin Wallet",balance:"0.00356 BTC",conversion:" = $ 4721.00"}],W={components:{Layout:E,PageHeader:O},data(){return{OveviewChart:F,items:I,walletData:R,activitiesData:N,totalRows:1,currentPage:1,perPage:10,pageOptions:[{text:"10",value:"10"},{text:"25",value:"25"},{text:"50",value:"50"},{text:"100",value:"100"}],filter:null,filterOn:[],sortBy:"id",sortDesc:!1,fields:[{key:"id",label:"ID No",sortable:!0},{key:"date",sortable:!0},{key:"type",sortable:!0},{key:"currency",sortable:!0},{key:"amount",sortable:!0},{key:"usd",label:"Amount in USD",sortable:!0}]}},computed:{rows(){return this.activitiesData.length}},mounted(){this.totalRows=this.items.length},methods:{onFiltered(h){this.totalRows=h.length,this.currentPage=1}}},z={class:"d-flex align-items-start"},U={class:"text-center"},$={class:"font-size-24 text-primary mb-2"},J={class:"text-muted mb-2"},j={class:"mt-3"},q={class:"d-flex"},G={class:"me-3 align-self-center"},Q={class:"flex-grow-1"},X={class:"text-muted mb-2"},Y={class:"mb-0"},Z={class:"font-size-14 text-muted"},ee={id:"tickets-table_length",class:"dataTables_length"},te={class:"d-inline-flex align-items-center fw-normal"},le=["value"],se={id:"tickets-table_filter",class:"dataTables_filter text-md-end"},ne={class:"d-inline-flex align-items-center"},oe={class:"table-responsive table-hover mb-0"},ae={class:"dataTables_paginate paging_simple_numbers float-end"},ie={class:"pagination pagination-rounded mb-0"};function re(h,s,de,ue,o,x){const C=a("PageHeader"),f=a("BDropdownItem"),T=a("BDropdown"),m=a("BCardBody"),r=a("BCol"),d=a("BRow"),S=a("BLink"),p=a("BCard"),w=a("BCardTitle"),L=a("apexchart"),k=a("BFormInput"),M=a("BTable"),D=a("BPagination"),_=a("BTab"),P=a("BTabs"),K=a("Layout");return u(),y(K,null,{default:l(()=>[e(C,{title:"Wallet",pageTitle:"Crypto"}),e(d,null,{default:l(()=>[e(r,{xl:"4"},{default:l(()=>[e(p,{"no-body":""},{default:l(()=>[e(m,null,{default:l(()=>[t("div",z,[s[7]||(s[7]=t("div",{class:"flex-shrink-0 me-4"},[t("i",{class:"mdi mdi-account-circle text-primary h1"})],-1)),s[8]||(s[8]=t("div",{class:"flex-grow-1"},[t("div",{class:"text-muted"},[t("h5",null,"Henry Wells"),t("p",{class:"mb-1"},"henrywells@abc.com"),t("p",{class:"mb-0"},"Id no: #SK0234")])],-1)),e(T,{variant:"white","toggle-class":"text-muted p-0","toggle-tag":"div",class:"job-list-dropdown"},{"button-content":l(()=>s[3]||(s[3]=[t("i",{class:"mdi mdi-dots-horizontal font-size-18"},null,-1)])),default:l(()=>[e(f,null,{default:l(()=>s[4]||(s[4]=[i("Action")])),_:1}),e(f,null,{default:l(()=>s[5]||(s[5]=[i("Another action")])),_:1}),e(f,null,{default:l(()=>s[6]||(s[6]=[i("Something else here")])),_:1})]),_:1})])]),_:1}),e(m,{class:"border-top"},{default:l(()=>[e(d,null,{default:l(()=>[e(r,{sm:"6"},{default:l(()=>s[9]||(s[9]=[t("div",null,[t("p",{class:"text-muted mb-2"},"Available Balance"),t("h5",null,"$ 9148.23")],-1)])),_:1}),e(r,{sm:"6"},{default:l(()=>s[10]||(s[10]=[t("div",{class:"text-sm-end mt-4 mt-sm-0"},[t("p",{class:"text-muted mb-2"},"Since last month"),t("h5",null,[i(" + $ 248.35 "),t("span",{class:"badge bg-success ms-1 align-bottom"},"+ 1.3 %")])],-1)])),_:1})]),_:1})]),_:1}),e(m,{class:"border-top"},{default:l(()=>[s[11]||(s[11]=t("p",{class:"text-muted mb-4"},"In this month",-1)),t("div",U,[e(d,null,{default:l(()=>[(u(!0),b(B,null,v(o.items,n=>(u(),y(r,{sm:"4",key:n.id},{default:l(()=>[t("div",null,[t("div",$,[t("i",{class:g(n.iconClass)},null,2)]),t("p",J,c(n.title),1),t("h5",null,c(n.amount),1),t("div",j,[e(S,{class:g(n.buttonClass)},{default:l(()=>[i(c(n.buttonLabel),1)]),_:2},1032,["class"])])])]),_:2},1024))),128))]),_:1})])]),_:1})]),_:1})]),_:1}),e(r,{xl:"8"},{default:l(()=>[e(d,null,{default:l(()=>[(u(!0),b(B,null,v(o.walletData,n=>(u(),y(r,{sm:"4",key:n.id},{default:l(()=>[e(p,{"no-body":"",class:"mini-stats-wid"},{default:l(()=>[e(m,null,{default:l(()=>[t("div",q,[t("div",G,[t("i",{class:g(n.iconClass)},null,2)]),t("div",Q,[t("p",X,c(n.walletName),1),t("h5",Y,[i(c(n.balance)+" ",1),t("span",Z,c(n.conversion),1)])])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),e(p,{"no-body":""},{default:l(()=>[e(m,null,{default:l(()=>[e(w,{class:"mb-3"},{default:l(()=>s[12]||(s[12]=[i("Overview")])),_:1}),t("div",null,[e(L,{class:"apex-charts",type:"line",height:240,dir:"ltr",series:o.OveviewChart.series,options:o.OveviewChart.chartOptions},null,8,["series","options"])])]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(r,{lg:"12"},{default:l(()=>[e(p,{"no-body":""},{default:l(()=>[e(m,null,{default:l(()=>[e(w,{class:"mb-4"},{default:l(()=>s[13]||(s[13]=[i("Activities")])),_:1}),e(P,{"content-class":"mt-3","nav-class":"nav-tabs-custom"},{default:l(()=>[e(_,{title:"All",active:""},{default:l(()=>[e(d,{class:"mt-4"},{default:l(()=>[e(r,{sm:"12",md:"6"},{default:l(()=>[t("div",ee,[t("label",te,[s[14]||(s[14]=i(" Show  ")),V(t("select",{"onUpdate:modelValue":s[0]||(s[0]=n=>o.perPage=n),size:"sm",class:"form-control form-select form-select-sm"},[(u(!0),b(B,null,v(o.pageOptions,n=>(u(),b("option",{key:n.value,value:n.value},c(n.text),9,le))),128))],512),[[A,o.perPage]]),s[15]||(s[15]=i("  entries "))])])]),_:1}),e(r,{sm:"12",md:"6"},{default:l(()=>[t("div",se,[t("label",ne,[s[16]||(s[16]=i(" Search: ")),e(k,{modelValue:o.filter,"onUpdate:modelValue":s[1]||(s[1]=n=>o.filter=n),type:"search",class:"form-control form-control-sm ms-2"},null,8,["modelValue"])])])]),_:1})]),_:1}),t("div",oe,[e(M,{items:o.activitiesData,fields:o.fields,responsive:"sm","per-page":o.perPage,"current-page":o.currentPage,"v-model:sort-by":o.sortBy,"v-model:sort-desc":o.sortDesc,filter:o.filter,"filter-included-fields":o.filterOn,onFiltered:x.onFiltered},null,8,["items","fields","per-page","current-page","v-model:sort-by","v-model:sort-desc","filter","filter-included-fields","onFiltered"])]),e(d,null,{default:l(()=>[e(r,null,{default:l(()=>[t("div",ae,[t("ul",ie,[e(D,{modelValue:o.currentPage,"onUpdate:modelValue":s[2]||(s[2]=n=>o.currentPage=n),"total-rows":x.rows,"per-page":o.perPage},null,8,["modelValue","total-rows","per-page"])])])]),_:1})]),_:1})]),_:1}),e(_,{title:"Buy",disabled:""}),e(_,{title:"Sell",disabled:""})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const ve=H(W,[["render",re]]);export{ve as default};
