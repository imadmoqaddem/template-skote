import{L as J,s as N}from"./main-061e9df4.js";import{P as V}from"./page-header-5e34e666.js";import{c as F}from"./img-1-ff40be1b.js";import{c as X,a as Y}from"./img-3-5bee347a.js";import{i as R}from"./img-1-68886c16.js";import{_ as q,c as B,w as e,r as n,o as c,a as l,b as t,d as o,e as f,f as h,F as _,n as u,t as i}from"../js/app2.js";import"./logo-light-deb27e23.js";import"./logo-9faa3827.js";import"./avatar-1-15b743f1.js";import"./avatar-3-36dc574b.js";new Date("01 Mar 2012").getTime();const K=[{id:1,color:"primary",name:"Buy BTC",date:"14 Mar, 2020",text:"0.016 BTC",price:"$125.20"},{id:2,color:"danger",name:"Sell ETH",date:"15 Mar, 2020",text:"0.56 ETH",price:"$112.34"},{id:3,color:"primary",name:"Buy LTC",date:"16 Mar, 2020",text:"1.88 LTC",price:"$94.22"},{id:4,color:"primary",name:"Buy ETH",date:"17 Mar, 2020",text:"0.42 ETH",price:"$84.32"},{id:5,color:"danger",name:"Sell BTC",date:"18 Mar, 2020",text:"0.018 BTC",price:"$145.80"},{id:6,color:"primary",name:"Buy BTC",date:"14 Mar, 2020",text:"0.016 BTC",price:"$125.20"},{id:7,color:"danger",name:"Sell ETH",date:"14 Mar, 2020",text:"0.56 ETH",price:"$112.34"}],G=[{name:"Bitcoin",price:9134.39,icon:"bitcoin",iconColor:"warning",change:{value:"+ 0.0012",percentage:" 0.2",direction:"up",color:"success"},chartData:{series:[{name:"BTC",data:[12,14,2,47,42,15,47,75,65,19,14]}],chartOptions:{chart:{type:"area",height:40,sparkline:{enabled:!0}},stroke:{curve:"smooth",width:2},colors:["#f1b44c"],fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[25,100,100,100]}},tooltip:{fixed:{enabled:!1},x:{show:!1},marker:{show:!1}}}}},{name:"Ethereum",price:245.44,icon:"ethereum",iconColor:"primary",change:{value:"- 4.102",percentage:"0.1",direction:"down",color:"danger"},chartData:{series:[{name:"ETH",data:[25,66,41,89,63,25,44,12,36,9,54]}],chartOptions:{chart:{type:"area",height:40,sparkline:{enabled:!0}},stroke:{curve:"smooth",width:2},colors:["#3452e1"],fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[25,100,100,100]}},tooltip:{fixed:{enabled:!1},x:{show:!1},marker:{show:!1}}}}},{name:"Litecoin",price:63.61,icon:"litecoin",iconColor:"info",change:{value:"+ 1.792",percentage:" 0.1",direction:"up",color:"success"},chartData:{series:[{name:"LTC",data:[35,53,93,47,54,24,47,75,65,19,14]}],chartOptions:{chart:{type:"area",height:40,sparkline:{enabled:!0}},stroke:{curve:"smooth",width:2},colors:["#50a5f1"],fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[25,100,100,100]}},tooltip:{fixed:{enabled:!1},x:{show:!1},marker:{show:!1}}}}}],Q=[{title:"Donec vitae sapien ut",description:"If several languages coalesce, the grammar of the resulting language",author:"Joseph",date:"12 Mar, 2020",imageSrc:F},{title:"Cras ultricies mi eu turpis",description:"To an English person, it will seem like simplified English, as a skeptical Cambridge",author:"Jerry",date:"13 Mar, 2020",imageSrc:X},{title:"Duis arcu tortor suscipit",description:"It va esser tam simplic quam occidental in fact, it va esser occidental.",author:"Calvin",date:"14 Mar, 2020",imageSrc:Y},{title:"Donec vitae sapien ut",description:"If several languages coalesce, the grammar of the resulting language",author:"Joseph",date:"12 Mar, 2020",imageSrc:F}],U={components:{Layout:J,PageHeader:V,simplebar:N},data(){return{title:"Crypto",transactionsData:K,cryptoData:G,dataList:Q,img1:R,walletData:[{title:"Wallet Balance",text:"Available Balance",amount:"$ 6134.39",subamount:"+ 0.0012.23 ( 0.2 % )",income:"$ 2632.46",expense:"$ 924.38",chartSeries:[76,67,61],balancelist:[{text:"Ethereum",coin:"4.5701 ETH",amount:"$ 1123.64"},{text:"Bitcoin",coin:"0.4412 BTC",amount:"$ 4025.32"},{text:"Litecoin",coin:"35.3811 LTC",amount:"$ 2263.09"}]}],chartOptions:{chart:{height:300,type:"radialBar"},plotOptions:{radialBar:{offsetY:0,startAngle:0,endAngle:270,hollow:{margin:5,size:"35%",background:"transparent",image:void 0},track:{show:!0,startAngle:void 0,endAngle:void 0,background:"#f2f2f2",strokeWidth:"97%",opacity:1,margin:12,dropShadow:{enabled:!1,top:0,left:0,blur:3,opacity:.5}},dataLabels:{name:{show:!0,fontSize:"16px",fontWeight:600,offsetY:-10},value:{show:!0,fontSize:"14px",offsetY:4,formatter:function(p){return p+"%"}},total:{show:!0,label:"Total",color:"#373d3f",fontSize:"16px",fontFamily:void 0,fontWeight:600,formatter:function(p){return p.globals.seriesTotals.reduce(function(s,M){return s+M},0)+"%"}}}}},stroke:{lineCap:"round"},colors:["#3452e1","#f1b44c","#50a5f1"],labels:["Ethereum","Bitcoin","Ethereum"],legend:{show:!1}},series:[{data:[[13273596e5,30.95],[1327446e6,31.34],[13275324e5,31.18],[13276188e5,31.05],[1327878e6,31],[13279644e5,30.95],[13280508e5,31.24],[13281372e5,31.29],[13282236e5,31.85],[13284828e5,31.86],[13285692e5,32.28],[13286556e5,32.1],[1328742e6,32.65],[13288284e5,32.21],[13290876e5,32.35],[1329174e6,32.44],[13292604e5,32.46],[13293468e5,32.86],[13294332e5,32.75],[13297788e5,32.54],[13298652e5,32.33],[13299516e5,32.97],[1330038e6,33.41],[13302972e5,33.27],[13303836e5,33.27],[133047e7,32.89],[13305564e5,33.1],[13306428e5,33.73],[1330902e6,33.22],[13309884e5,31.99],[13310748e5,32.41],[13311612e5,33.05],[13312476e5,33.64],[13315068e5,33.56],[13315932e5,34.22],[13316796e5,33.77],[1331766e6,34.17],[13318524e5,33.82],[13321116e5,34.51],[1332198e6,33.16],[13322844e5,33.56],[13323708e5,33.71],[13324572e5,33.81],[13327128e5,34.4],[13327992e5,34.63],[13328856e5,34.46],[1332972e6,34.48],[13330584e5,34.31],[13333176e5,34.7],[1333404e6,34.31],[13334904e5,33.46],[13335768e5,33.59],[13339224e5,33.22],[13340088e5,32.61],[13340952e5,33.01],[13341816e5,33.55],[1334268e6,33.18],[13345272e5,32.84],[13346136e5,33.84],[13347e8,33.39],[13347864e5,32.91],[13348728e5,33.06],[1335132e6,32.62],[13352184e5,32.4],[13353048e5,33.13],[13353912e5,33.26],[13354776e5,33.58],[13357368e5,33.55],[13358232e5,33.77],[13359096e5,33.76],[1335996e6,33.32],[13360824e5,32.61],[13363416e5,32.52],[1336428e6,32.67],[13365144e5,32.52],[13366008e5,31.92],[13366872e5,32.2],[13369464e5,32.23],[13370328e5,32.33],[13371192e5,32.36],[13372056e5,32.01],[1337292e6,31.31],[13375512e5,32.01],[13376376e5,32.01],[1337724e6,32.18],[13378104e5,31.54],[13378968e5,31.6],[13382424e5,32.05],[13383288e5,31.29],[13384152e5,31.05],[13385016e5,29.82],[13387608e5,30.31],[13388472e5,30.7],[13389336e5,31.69],[133902e7,31.32],[13391064e5,31.65],[13393656e5,31.13],[1339452e6,31.77],[13395384e5,31.79],[13396248e5,31.67],[13397112e5,32.39],[13399704e5,32.63],[13400568e5,32.89],[13401432e5,31.99],[13402296e5,31.23],[1340316e6,31.57],[13405752e5,30.84],[13406616e5,31.07],[1340748e6,31.41],[13408344e5,31.17],[13409208e5,32.37],[134118e7,32.19],[13412664e5,32.51],[13414392e5,32.53],[13415256e5,31.37],[13417848e5,30.43],[13418712e5,30.44],[13419576e5,30.2],[1342044e6,30.14],[13421304e5,30.65],[13423896e5,30.4],[1342476e6,30.65],[13425624e5,31.43],[13426488e5,31.89],[13427352e5,31.38],[13429944e5,30.64],[13430808e5,30.02],[13431672e5,30.33],[13432536e5,30.95],[134334e7,31.89],[13435992e5,31.01],[13436856e5,30.88],[1343772e6,30.69],[13438584e5,30.58],[13439448e5,32.02],[1344204e6,32.14],[13442904e5,32.37],[13443768e5,32.51],[13444632e5,32.65],[13445496e5,32.64],[13448088e5,32.27],[13448952e5,32.1],[13449816e5,32.91],[1345068e6,33.65],[13451544e5,33.8],[13454136e5,33.92],[13455e8,33.75],[13455864e5,33.84],[13456728e5,33.5],[13457592e5,32.26],[13460184e5,32.32],[13461048e5,32.06],[13461912e5,31.96],[13462776e5,31.46],[1346364e6,31.27],[13467096e5,31.43],[1346796e6,32.26],[13468824e5,32.79],[13469688e5,32.46],[1347228e6,32.13],[13473144e5,32.43],[13474008e5,32.42],[13474872e5,32.81],[13475736e5,33.34],[13478328e5,33.41],[13479192e5,32.57],[13480056e5,33.12],[1348092e6,34.53],[13481784e5,33.83],[13484376e5,33.41],[1348524e6,32.9],[13486104e5,32.53],[13486968e5,32.8],[13487832e5,32.44],[13490424e5,32.62],[13491288e5,32.57],[13492152e5,32.6],[13493016e5,32.68],[1349388e6,32.47],[13496472e5,32.23],[13497336e5,31.68],[134982e7,31.51],[13499064e5,31.78],[13499928e5,31.94],[1350252e6,32.33],[13503384e5,33.24],[13504248e5,33.44],[13505112e5,33.48],[13505976e5,33.24],[13508568e5,33.49],[13509432e5,33.31],[13510296e5,33.36],[1351116e6,33.4],[13512024e5,34.01],[1351638e6,34.02],[13517244e5,34.36],[13518108e5,34.39],[135207e7,34.24],[13521564e5,34.39],[13522428e5,33.47],[13523292e5,32.98],[13524156e5,32.9],[13526748e5,32.7],[13527612e5,32.54],[13528476e5,32.23],[1352934e6,32.64],[13530204e5,32.65],[13532796e5,32.92],[1353366e6,32.64],[13534524e5,32.84],[13536252e5,33.4],[13538844e5,33.3],[13539708e5,33.18],[13540572e5,33.88],[13541436e5,34.09],[135423e7,34.61],[13544892e5,34.7],[13545756e5,35.3],[1354662e6,35.4],[13547484e5,35.14],[13548348e5,35.48],[1355094e6,35.75],[13551804e5,35.54],[13552668e5,35.96],[13553532e5,35.53],[13554396e5,37.56],[13556988e5,37.42],[13557852e5,37.49],[13558716e5,38.09],[1355958e6,37.87],[13560444e5,37.71],[13563036e5,37.53],[13564764e5,37.55],[13565628e5,37.3],[13566492e5,36.9],[13569084e5,37.68],[13570812e5,38.34],[13571676e5,37.75],[1357254e6,38.13],[13575132e5,37.94],[13575996e5,38.14],[1357686e6,38.66],[13577724e5,38.62],[13578588e5,38.09],[1358118e6,38.16],[13582044e5,38.15],[13582908e5,37.88],[13583772e5,37.73],[13584636e5,37.98],[13588092e5,37.95],[13588956e5,38.25],[1358982e6,38.1],[13590684e5,38.32],[13593276e5,38.24],[1359414e6,38.52],[13595004e5,37.94],[13595868e5,37.83],[13596732e5,38.34],[13599324e5,38.1],[13600188e5,38.51],[13601052e5,38.4],[13601916e5,38.07],[1360278e6,39.12],[13605372e5,38.64],[13606236e5,38.89],[136071e7,38.81],[13607964e5,38.61],[13608828e5,38.63],[13612284e5,38.99],[13613148e5,38.77],[13614012e5,38.34],[13614876e5,38.55],[13617468e5,38.11],[13618332e5,38.59],[13619196e5,39.6]]}],overviewchartOptions:{chart:{type:"area",height:240,toolbar:"false"},stroke:{curve:"smooth",width:2},colors:["#f1b44c"],dataLabels:{enabled:!1},markers:{size:0,style:"hollow"},xaxis:{type:"datetime",min:new Date("01 Mar 2012").getTime(),tickAmount:6},tooltip:{x:{format:"dd MMM yyyy"}},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.7,opacityTo:.9,stops:[0,100]}}},selection:"one_year"}},methods:{onChange(p){switch(p.target.value){case"february":this.walletData=[{title:"Wallet Balance",text:"Available Balance",amount:"$ 2111.39",subamount:"+ 0.0014.23 ( 0.2 % )",income:"$ 2168.46",expense:"$ 927.38",chartSeries:[32,22,38],balancelist:[{text:"Ethereum",color:"text-primary",coin:"2.5701 ETH",amount:"$ 1123.64"},{text:"Bitcoin",color:"text-warning",coin:"0.8552 BTC",amount:"$ 4025.32"},{text:"Litecoin",color:"text-info",coin:"35.7411 LTC",amount:"$ 2263.09"}]}];break;case"january":this.walletData=[{title:"Wallet Balance",text:"Available Balance",amount:"$ 1211.39",subamount:"+ 0.0014.23 ( 0.2 % )",income:"$ 468.46",expense:"$ 127.38",chartSeries:[47,68,49],balancelist:[{text:"Ethereum",color:"text-primary",coin:"2.5701 ETH",amount:"$ 723.64"},{text:"Bitcoin",color:"text-warning",coin:"0.8552 BTC",amount:"$ 1225.32"},{text:"Litecoin",color:"text-info",coin:"35.7411 LTC",amount:"$ 4563.09"}]}];break;case"december":this.walletData=[{title:"Wallet Balance",text:"Available Balance",amount:"$ 1011.39",subamount:"+ 0.0014.23 ( 0.2 % )",income:"$ 668.46",expense:"$ 427.38",chartSeries:[36,58,78],balancelist:[{text:"Ethereum",color:"text-primary",coin:"2.5701 ETH",amount:"$ 523.64"},{text:"Bitcoin",color:"text-warning",coin:"0.8552 BTC",amount:"$ 1025.32"},{text:"Litecoin",color:"text-info",coin:"14.7411 LTC",amount:"$ 6563.09"}]}];break;case"march":this.walletData=[{title:"Wallet Balance",text:"Available Balance",amount:"$ 2111.39",subamount:"+ 0.0014.23 ( 0.2 % )",income:"$ 2168.46",expense:"$ 927.38",chartSeries:[38,78,48],balancelist:[{text:"Ethereum",color:"text-primary",coin:"2.5701 ETH",amount:"$ 1123.64"},{text:"Bitcoin",color:"text-warning",coin:"0.8552 BTC",amount:"$ 4025.32"},{text:"Litecoin",color:"text-info",coin:"35.7411 LTC",amount:"$ 2263.09"}]}];break;default:this.walletData=[{title:"Wallet Balance",text:"Available Balance",amount:"$ 1011.39",subamount:"+ 0.0014.23 ( 0.2 % )",income:"$ 668.46",expense:"$ 427.38",chartSeries:[25,58,47],balancelist:[{text:"Ethereum",color:"text-primary",coin:"2.5701 ETH",amount:"$ 523.64"},{text:"Bitcoin",color:"text-warning",coin:"0.8552 BTC",amount:"$ 1025.32"},{text:"Litecoin",color:"text-info",coin:"14.7411 LTC",amount:"$ 6563.09"}]}];break}},updateData:function(p){switch(this.selection=p,p){case"one_month":this.$refs.chart.zoomX(new Date("28 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"six_months":this.$refs.chart.zoomX(new Date("27 Sep 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"one_year":this.$refs.chart.zoomX(new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"all":this.$refs.chart.zoomX(new Date("23 Jan 2012").getTime(),new Date("27 Feb 2013").getTime());break}}}},Z={class:"mt-4 mt-sm-0"},t0={class:"d-inline-flex align-items-center mt-1"},e0={class:"text-center"},l0=["src"],s0={class:"row"},a0={class:"text-muted mb-4"},o0={class:"text-muted text-truncate mb-0"},i0={class:"float-end"},n0={class:"mt-4"},r0={class:"text-muted mb-4"},c0={class:"mt-4"},d0={class:"mb-2"},u0={class:"text-muted font-size-14"},m0={id:"overview-chart",class:"apex-charts",dir:"ltr"},p0={class:"toolbar button-items text-center"},f0={class:"font-size-14 mb-1"},b0={class:"text-muted mb-0"},x0={class:"text-end"},g0={class:"font-size-14 mb-0"},h0={class:"text-end"},_0={class:"font-size-14 text-muted mb-0"},v0={class:"font-size-14 mb-1"},y0={class:"text-muted mb-0"},w0={class:"text-end"},B0={class:"font-size-14 mb-0"},T0={class:"text-end"},C0={class:"font-size-14 text-muted mb-0"},$0={class:"font-size-14 mb-1"},k0={class:"text-muted mb-0"},D0={class:"text-end"},z0={class:"font-size-14 mb-0"},L0={class:"text-end"},S0={class:"font-size-14 text-muted mb-0"},E0={class:"list-group",style:{"max-height":"390px"}},A0={class:"d-flex"},M0={class:"avatar-xs me-3"},H0={class:"avatar-title rounded-circle bg-light"},F0=["src"],I0={class:"flex-grow-1"},O0={class:"font-size-14"},W0={class:"text-muted"},P0={class:"float-end"},j0={class:"text-muted mb-0"},J0={class:"text-muted mb-0"},N0={class:"text-center"},V0={class:"text-center"};function X0(p,s,M,Y0,d,T){const I=n("PageHeader"),z=n("BDropdownItem"),O=n("BDropdown"),b=n("BCardBody"),r=n("BCol"),v=n("BLink"),x=n("BRow"),W=n("BCardFooter"),g=n("BCard"),L=n("apexchart"),C=n("BCardTitle"),y=n("BButton"),m=n("BTd"),S=n("BTr"),E=n("BTbody"),A=n("BTableSimple"),D=n("simplebar"),$=n("BTab"),H=n("BTabs"),P=n("Layout");return c(),B(P,null,{default:e(()=>[l(I,{title:"Crypto",pageTitle:"Dashboards"}),l(x,null,{default:e(()=>[l(r,{xl:"4"},{default:e(()=>[l(g,{"no-body":""},{default:e(()=>[l(b,null,{default:e(()=>[l(O,{class:"float-end ms-2",variant:"white",right:"","toggle-class":"text-muted p-0","menu-class":"dropdown-menu-end"},{"button-content":e(()=>s[5]||(s[5]=[t("i",{class:"mdi mdi-dots-horizontal font-size-18"},null,-1)])),default:e(()=>[l(z,null,{default:e(()=>s[6]||(s[6]=[o("Action")])),_:1}),l(z,null,{default:e(()=>s[7]||(s[7]=[o("Another action")])),_:1}),l(z,null,{default:e(()=>s[8]||(s[8]=[o("Something else here")])),_:1})]),_:1}),s[9]||(s[9]=t("div",null,[t("div",{class:"mb-4 me-3"},[t("i",{class:"mdi mdi-account-circle text-primary h1"})]),t("div",null,[t("h5",null,"Henry Wells"),t("p",{class:"text-muted mb-1"},"henrywells@abc.com"),t("p",{class:"text-muted mb-0"},"Id no: #SK0234")])],-1))]),_:1}),l(b,{class:"border-top"},{default:e(()=>[l(x,null,{default:e(()=>[l(r,{sm:"6"},{default:e(()=>s[10]||(s[10]=[t("div",null,[t("p",{class:"fw-medium mb-2"},"Balance :"),t("h4",null,"$ 6134.39")],-1)])),_:1}),l(r,{sm:"6"},{default:e(()=>[t("div",Z,[s[14]||(s[14]=t("p",{class:"fw-medium mb-2"},"Coin :",-1)),t("div",t0,[l(v,{href:"javascript: void(0);",class:"m-1","data-toggle":"tooltip","data-placement":"top",title:"Bitcoin"},{default:e(()=>s[11]||(s[11]=[t("div",{class:"avatar-xs"},[t("span",{class:"avatar-title rounded-circle bg-soft bg-warning-subtle text-warning font-size-18"},[t("i",{class:"mdi mdi-bitcoin"})])],-1)])),_:1}),l(v,{href:"javascript: void(0);",class:"m-1","data-toggle":"tooltip","data-placement":"top",title:"Ethereum"},{default:e(()=>s[12]||(s[12]=[t("div",{class:"avatar-xs"},[t("span",{class:"avatar-title rounded-circle bg-soft bg-primary-subtle text-primary font-size-18"},[t("i",{class:"mdi mdi-ethereum"})])],-1)])),_:1}),l(v,{href:"javascript: void(0);",class:"m-1","data-toggle":"tooltip","data-placement":"top",title:"Litecoin"},{default:e(()=>s[13]||(s[13]=[t("div",{class:"avatar-xs"},[t("span",{class:"avatar-title rounded-circle bg-soft bg-info-subtle text-info font-size-18"},[t("i",{class:"mdi mdi-litecoin"})])],-1)])),_:1})])])]),_:1})]),_:1})]),_:1}),l(W,{class:"bg-transparent border-top"},{default:e(()=>[t("div",e0,[l(v,{href:"javascript: void(0);",class:"btn btn-outline-light me-2 w-md text-body"},{default:e(()=>s[15]||(s[15]=[o("Deposit ")])),_:1}),l(v,{href:"javascript: void(0);",class:"btn btn-primary me-2 w-md ms-1"},{default:e(()=>s[16]||(s[16]=[o("Buy / Sell")])),_:1})])]),_:1})]),_:1})]),_:1}),l(r,{xl:"8"},{default:e(()=>[l(g,{"no-body":""},{default:e(()=>[t("div",null,[l(x,null,{default:e(()=>[l(r,{lg:"9",sm:"8"},{default:e(()=>s[17]||(s[17]=[t("div",{class:"p-4"},[t("h5",{class:"text-primary"},"Welcome Back !"),t("p",null,"Skote Crypto Dashboard"),t("div",{class:"text-muted"},[t("p",{class:"mb-1"},[t("i",{class:"mdi mdi-circle-medium align-middle text-primary me-1"}),o(" If several languages coalesce ")]),t("p",{class:"mb-1"},[t("i",{class:"mdi mdi-circle-medium align-middle text-primary me-1"}),o(" Sed ut perspiciatis unde ")]),t("p",{class:"mb-0"},[t("i",{class:"mdi mdi-circle-medium align-middle text-primary me-1"}),o(" It would be necessary ")])])],-1)])),_:1}),l(r,{lg:"3",sm:"4",class:"align-self-center"},{default:e(()=>[t("div",null,[t("img",{src:d.img1,alt:"",class:"img-fluid d-block"},null,8,l0)])]),_:1})]),_:1})])]),_:1}),t("div",s0,[(c(!0),f(_,null,h(d.cryptoData,(a,k)=>(c(),B(r,{key:k,sm:"4"},{default:e(()=>[l(g,{"no-body":""},{default:e(()=>[l(b,null,{default:e(()=>[t("p",a0,[t("i",{class:u(`mdi mdi-${a.icon} h2 text-${a.iconColor} align-middle mb-0 me-3`)},null,2),o(" "+i(a.name),1)]),l(x,null,{default:e(()=>[l(r,{cols:"6"},{default:e(()=>[t("div",null,[t("h5",null,i(`$ ${a.price}`),1),t("p",o0,[o(i(` ${a.change.value} (${a.change.percentage} % )`)+" ",1),t("i",{class:u(`mdi mdi-arrow-${a.change.direction} ms-1 text-${a.change.color}`)},null,2)])])]),_:2},1024),l(r,{cols:"6"},{default:e(()=>[t("div",null,[l(L,{class:"apex-charts",height:"40",type:"area",dir:"ltr",series:a.chartData.series,options:a.chartData.chartOptions},null,8,["series","options"])])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))])]),_:1})]),_:1}),l(x,null,{default:e(()=>[l(r,{xl:"8"},{default:e(()=>[(c(!0),f(_,null,h(d.walletData,(a,k)=>(c(),B(g,{"no-body":"",key:k},{default:e(()=>[l(b,null,{default:e(()=>[t("div",i0,[t("select",{class:"form-select form-select-sm ms-2",onChange:s[0]||(s[0]=w=>T.onChange(w))},s[18]||(s[18]=[t("option",{value:"march",selected:""},"March",-1),t("option",{value:"february"},"February",-1),t("option",{value:"january"},"January",-1),t("option",{value:"december"},"December",-1)]),32)]),l(C,{class:"mb-3"},{default:e(()=>[o(i(a.title),1)]),_:2},1024),l(x,null,{default:e(()=>[l(r,{lg:"4"},{default:e(()=>[t("div",n0,[t("p",null,i(a.text),1),t("h4",null,i(a.amount),1),t("p",r0,[o(i(a.subamount)+" ",1),s[19]||(s[19]=t("i",{class:"mdi mdi-arrow-up ms-1 text-success"},null,-1))]),l(x,null,{default:e(()=>[l(r,{cols:"6"},{default:e(()=>[t("div",null,[s[20]||(s[20]=t("p",{class:"mb-2"},"Income",-1)),t("h5",null,i(a.income),1)])]),_:2},1024),l(r,{cols:"6"},{default:e(()=>[t("div",null,[s[21]||(s[21]=t("p",{class:"mb-2"},"Expense",-1)),t("h5",null,i(a.expense),1)])]),_:2},1024)]),_:2},1024),t("div",c0,[l(v,{href:"#",class:"btn btn-primary btn-sm"},{default:e(()=>s[22]||(s[22]=[o("View more "),t("i",{class:"mdi mdi-arrow-right ms-1"},null,-1)])),_:1})])])]),_:2},1024),l(r,{lg:"4",sm:"6"},{default:e(()=>[t("div",null,[l(L,{class:"apex-charts",dir:"ltr",type:"radialBar",height:"275",series:a.chartSeries,options:d.chartOptions},null,8,["series","options"])])]),_:2},1024),l(r,{lg:"4",sm:"6",class:"align-self-center"},{default:e(()=>[(c(!0),f(_,null,h(a.balancelist,(w,j)=>(c(),f("div",{key:j,class:"mt-4 pt-2"},[t("p",d0,[t("i",{class:u(["mdi mdi-circle align-middle font-size-10 me-2",w.color])},null,2),o(" "+i(w.text),1)]),t("h5",null,[o(i(w.coin)+" = ",1),t("span",u0,i(w.amount),1)])]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),l(r,{xl:"4"},{default:e(()=>[l(g,{"no-body":""},{default:e(()=>[l(b,null,{default:e(()=>[l(C,{class:"mb-3"},{default:e(()=>s[23]||(s[23]=[o("Overview")])),_:1}),t("div",null,[t("div",m0,[t("div",p0,[l(y,{variant:"light",size:"sm",id:"one_month",class:u(["ms-2",{active:d.selection==="one_month"}]),onClick:s[1]||(s[1]=a=>T.updateData("one_month"))},{default:e(()=>s[24]||(s[24]=[o(" 1M ")])),_:1},8,["class"]),l(y,{variant:"light",size:"sm",id:"six_months",class:u(["ms-2",{active:d.selection==="six_months"}]),onClick:s[2]||(s[2]=a=>T.updateData("six_months"))},{default:e(()=>s[25]||(s[25]=[o(" 6M ")])),_:1},8,["class"]),l(y,{variant:"light",size:"sm",id:"one_year",class:u(["ms-2",{active:d.selection==="one_year"}]),onClick:s[3]||(s[3]=a=>T.updateData("one_year"))},{default:e(()=>s[26]||(s[26]=[o(" 1Y ")])),_:1},8,["class"]),l(y,{variant:"light",size:"sm",id:"all",class:u(["ms-2",{active:d.selection==="all"}]),onClick:s[4]||(s[4]=a=>T.updateData("all"))},{default:e(()=>s[27]||(s[27]=[o(" ALL ")])),_:1},8,["class"])]),l(L,{ref:"chart",type:"area",height:240,class:"apex-charts",options:d.overviewchartOptions,series:d.series},null,8,["options","series"])])])]),_:1})]),_:1})]),_:1})]),_:1}),l(x,null,{default:e(()=>[l(r,{xl:"4"},{default:e(()=>[l(g,{"no-body":""},{default:e(()=>[l(b,null,{default:e(()=>[l(C,{class:"mb-4"},{default:e(()=>s[28]||(s[28]=[o("Transactions")])),_:1}),l(H,{pills:"","nav-class":"bg-light rounded crypto-buy-tabs","content-class":"mt-4"},{default:e(()=>[l($,{title:"All",active:""},{default:e(()=>[l(D,{style:{"max-height":"330px"}},{default:e(()=>[l(A,{class:"table table-centered table-nowrap align-middle"},{default:e(()=>[l(E,null,{default:e(()=>[(c(!0),f(_,null,h(d.transactionsData,a=>(c(),B(S,{key:a.icon},{default:e(()=>[l(m,{style:{width:"50px"}},{default:e(()=>[t("div",{class:u(`font-size-22 text-${a.color}`)},[t("i",{class:u({"bx bx-down-arrow-circle":`${a.color}`=="primary","bx bx-up-arrow-circle":`${a.color}`=="danger"})},null,2)],2)]),_:2},1024),l(m,null,{default:e(()=>[t("div",null,[t("h5",f0,i(a.name),1),t("p",b0,i(a.date),1)])]),_:2},1024),l(m,null,{default:e(()=>[t("div",x0,[t("h5",g0,i(a.text),1)])]),_:2},1024),l(m,null,{default:e(()=>[t("div",h0,[t("h5",_0,i(a.price),1)])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}),l($,{title:"Buy"},{default:e(()=>[l(D,{style:{"max-height":"330px"}},{default:e(()=>[l(A,{class:"table table-centered table-nowrap align-middle"},{default:e(()=>[l(E,null,{default:e(()=>[(c(!0),f(_,null,h(d.transactionsData,a=>(c(),B(S,{key:a.id},{default:e(()=>[l(m,{style:{width:"50px"}},{default:e(()=>[t("div",{class:u(`font-size-22 text-${a.color}`)},[t("i",{class:u({"bx bx-down-arrow-circle":`${a.color}`=="primary","bx bx-up-arrow-circle":`${a.color}`=="danger"})},null,2)],2)]),_:2},1024),l(m,null,{default:e(()=>[t("div",null,[t("h5",v0,i(a.name),1),t("p",y0,i(a.date),1)])]),_:2},1024),l(m,null,{default:e(()=>[t("div",w0,[t("h5",B0,i(a.text),1)])]),_:2},1024),l(m,null,{default:e(()=>[t("div",T0,[t("h5",C0,i(a.price),1)])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}),l($,{title:"Sell"},{default:e(()=>[l(D,{style:{"max-height":"330px"}},{default:e(()=>[l(A,{class:"table-centered table-nowrap align-middle"},{default:e(()=>[l(E,null,{default:e(()=>[(c(!0),f(_,null,h(d.transactionsData,a=>(c(),B(S,{key:a.id},{default:e(()=>[l(m,{style:{width:"50px"}},{default:e(()=>[t("div",{class:u(`font-size-22 text-${a.color}`)},[t("i",{class:u({"bx bx-down-arrow-circle":`${a.color}`=="primary","bx bx-up-arrow-circle":`${a.color}`=="danger"})},null,2)],2)]),_:2},1024),l(m,null,{default:e(()=>[t("div",null,[t("h5",$0,i(a.name),1),t("p",k0,i(a.date),1)])]),_:2},1024),l(m,null,{default:e(()=>[t("div",D0,[t("h5",z0,i(a.text),1)])]),_:2},1024),t("td",null,[t("div",L0,[t("h5",S0,i(a.price),1)])])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(r,{xl:"4"},{default:e(()=>[l(g,{"no-body":""},{default:e(()=>[l(b,null,{default:e(()=>[l(C,{class:"mb-4"},{default:e(()=>s[29]||(s[29]=[o("Notifications")])),_:1}),l(D,{style:{"max-height":"390px"}},{default:e(()=>[t("ul",E0,[(c(!0),f(_,null,h(d.dataList,(a,k)=>(c(),f("li",{class:"list-group-item border-0",key:k},[t("div",A0,[t("div",M0,[t("span",H0,[t("img",{src:a.imageSrc,alt:"",height:"18"},null,8,F0)])]),t("div",I0,[t("h5",O0,i(a.title),1),t("p",W0,i(a.description),1),t("div",P0,[t("p",j0,[s[30]||(s[30]=t("i",{class:"mdi mdi-account me-1"},null,-1)),o(" "+i(a.author),1)])]),t("p",J0,i(a.date),1)])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),l(r,{xl:"4"},{default:e(()=>[l(g,{"no-body":""},{default:e(()=>[l(b,null,{default:e(()=>[l(C,{class:"mb-4"},{default:e(()=>s[31]||(s[31]=[o("Buy / Sell")])),_:1}),l(H,{pills:"","nav-class":"bg-light rounded crypto-buy-tabs","content-class":"mt-4"},{default:e(()=>[l($,{title:"Buy",active:""},{default:e(()=>[s[35]||(s[35]=t("div",{class:"float-end ms-2"},[t("h5",{class:"font-size-14"},[t("i",{class:"bx bx-wallet text-primary font-size-16 align-middle me-1"}),o(" $4235.23 ")])],-1)),s[36]||(s[36]=t("h5",{class:"font-size-14 mb-4"},"Buy Coin",-1)),t("div",null,[s[33]||(s[33]=t("div",{class:"form-group mb-3"},[t("label",null,"Payment method :"),t("select",{class:"form-select"},[t("option",null,"Credit / Debit Card"),t("option",null,"Paypal")])],-1)),s[34]||(s[34]=t("div",null,[t("label",null,"Add Amount :"),t("div",{class:"input-group mb-3"},[t("label",{class:"input-group-text"},"Amount"),t("select",{class:"form-select",style:{"max-width":"90px"}},[t("option",{value:"BT",selected:""},"BTC"),t("option",{value:"ET"},"ETH"),t("option",{value:"LT"},"LTC")]),t("input",{type:"text",class:"form-control"})]),t("div",{class:"input-group mb-3"},[t("div",{class:"input-group-prepend"},[t("label",{class:"input-group-text"},"Price")]),t("input",{type:"text",class:"form-control"}),t("div",{class:"input-group-append"},[t("label",{class:"input-group-text"},"$")])]),t("div",{class:"input-group mb-3"},[t("div",{class:"input-group-prepend"},[t("label",{class:"input-group-text"},"Total")]),t("input",{type:"text",class:"form-control"})])],-1)),t("div",N0,[l(y,{variant:"success",class:"w-md"},{default:e(()=>s[32]||(s[32]=[o(" Buy Coin ")])),_:1})])])]),_:1}),l($,{title:"Sell"},{default:e(()=>[s[40]||(s[40]=t("div",{class:"float-end ms-2"},[t("h5",{class:"font-size-14"},[t("i",{class:"bx bx-wallet text-primary font-size-16 align-middle me-1"}),o(" $4235.23 ")])],-1)),s[41]||(s[41]=t("h5",{class:"font-size-14 mb-4"},"Sell Coin",-1)),t("div",null,[s[38]||(s[38]=t("div",{class:"form-group mb-3"},[t("label",null,"Email :"),t("input",{type:"email",class:"form-control"})],-1)),s[39]||(s[39]=t("div",null,[t("label",null,"Add Amount :"),t("div",{class:"input-group mb-3"},[t("label",{class:"input-group-text"},"Amount"),t("select",{class:"form-select",style:{"max-width":"90px"}},[t("option",{value:"BT",selected:""},"BTC"),t("option",{value:"ET"},"ETH"),t("option",{value:"LT"},"LTC")]),t("input",{type:"text",class:"form-control"})]),t("div",{class:"input-group mb-3"},[t("div",{class:"input-group-prepend"},[t("label",{class:"input-group-text"},"Price")]),t("input",{type:"text",class:"form-control"}),t("div",{class:"input-group-append"},[t("label",{class:"input-group-text"},"$")])]),t("div",{class:"input-group mb-3"},[t("div",{class:"input-group-prepend"},[t("label",{class:"input-group-text"},"Total")]),t("input",{type:"text",class:"form-control"})])],-1)),t("div",V0,[l(y,{variant:"danger",class:"w-md"},{default:e(()=>s[37]||(s[37]=[o(" Sell Coin ")])),_:1})])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const s3=q(U,[["render",X0]]);export{s3 as default};
