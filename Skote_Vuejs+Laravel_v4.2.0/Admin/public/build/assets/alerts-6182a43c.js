import{L as g}from"./main-061e9df4.js";import{P as V}from"./page-header-5e34e666.js";import{_ as B,c as x,w as i,r,o as C,a as e,d as s,b as d,t as U}from"../js/app2.js";import"./logo-light-deb27e23.js";import"./logo-9faa3827.js";import"./avatar-1-15b743f1.js";import"./avatar-3-36dc574b.js";const D={components:{Layout:g,PageHeader:V},data(){return{dismissSecs:5,dismissCountDown:0,dismissibleAlert:!0,dismissibleAlert1:!0,dismissibleAlert2:!0,dismissibleAlert3:!0,dismissibleAlert4:!0,dismissibleAlert5:!0,dismissibleAlert6:!0,dismissibleAlert7:!0,dismissibleAlert8:!0,dismissibleAlert9:!0,dismissibleAlert10:!0,dismissibleAlert11:!0}},methods:{countDownChanged(b){this.dismissCountDown=b},showAlert(){this.dismissCountDown=this.dismissSecs}}},L={class:""},j={class:""},T={class:""},G={class:""},P={class:""};function H(b,l,N,S,t,W){const A=r("PageHeader"),u=r("BCardTitle"),n=r("BAlert"),a=r("BCardBody"),m=r("BCard"),p=r("BCol"),f=r("BLink"),v=r("BRow"),w=r("BProgress"),k=r("BButton"),y=r("Layout");return C(),x(y,null,{default:i(()=>[e(A,{title:"Alerts",pageTitle:"UI Elements"}),e(v,null,{default:i(()=>[e(p,{xl:"6"},{default:i(()=>[e(m,{"no-body":""},{default:i(()=>[e(a,null,{default:i(()=>[e(u,null,{default:i(()=>l[15]||(l[15]=[s("Default Alerts")])),_:1}),l[22]||(l[22]=d("p",{class:"card-title-desc"},[s("Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the four "),d("strong",null,"required"),s(" contextual classes (e.g., "),d("code",null,".alert-success"),s("). For inline dismissal, use the alerts jQuery plugin.")],-1)),d("div",L,[e(n,{"model-value":!0,variant:"primary"},{default:i(()=>l[16]||(l[16]=[s(" A simple primary alert—check it out! ")])),_:1}),e(n,{"model-value":!0,variant:"secondary"},{default:i(()=>l[17]||(l[17]=[s(" A simple secondary alert—check it out! ")])),_:1}),e(n,{"model-value":!0,variant:"success"},{default:i(()=>l[18]||(l[18]=[s(" A simple success alert—check it out! ")])),_:1}),e(n,{"model-value":!0,variant:"danger"},{default:i(()=>l[19]||(l[19]=[s(" A simple danger alert—check it out! ")])),_:1}),e(n,{"model-value":!0,variant:"warning"},{default:i(()=>l[20]||(l[20]=[s(" A simple warning alert—check it out! ")])),_:1}),e(n,{"model-value":!0,variant:"info",class:"mb-0"},{default:i(()=>l[21]||(l[21]=[s(" A simple info alert—check it out! ")])),_:1})])]),_:1})]),_:1})]),_:1}),e(p,{xl:"6"},{default:i(()=>[e(m,{"no-body":""},{default:i(()=>[e(a,null,{default:i(()=>[e(u,null,{default:i(()=>l[23]||(l[23]=[s("Link color")])),_:1}),l[42]||(l[42]=d("p",{class:"card-title-desc"},[s("Use the "),d("code",null,".alert-link"),s(" utility class to quickly provide matching colored links within any alert.")],-1)),d("div",j,[e(n,{"model-value":!0,variant:"primary"},{default:i(()=>[l[25]||(l[25]=s(" A simple primary alert with ")),e(f,{href:"javascript: void(0);",class:"alert-link"},{default:i(()=>l[24]||(l[24]=[s("an example link")])),_:1}),l[26]||(l[26]=s(". Give it a click if you like. "))]),_:1}),e(n,{"model-value":!0,variant:"secondary"},{default:i(()=>[l[28]||(l[28]=s(" A simple secondary alert with ")),e(f,{href:"javascript: void(0);",class:"alert-link"},{default:i(()=>l[27]||(l[27]=[s("an example link")])),_:1}),l[29]||(l[29]=s(". Give it a click if you like. "))]),_:1}),e(n,{"model-value":!0,variant:"success"},{default:i(()=>[l[31]||(l[31]=s(" A simple success alert with ")),e(f,{href:"javascript: void(0);",class:"alert-link"},{default:i(()=>l[30]||(l[30]=[s("an example link")])),_:1}),l[32]||(l[32]=s(". Give it a click if you like. "))]),_:1}),e(n,{"model-value":!0,variant:"danger"},{default:i(()=>[l[34]||(l[34]=s(" A simple danger alert with ")),e(f,{href:"javascript: void(0);",class:"alert-link"},{default:i(()=>l[33]||(l[33]=[s("an example link")])),_:1}),l[35]||(l[35]=s(". Give it a click if you like. "))]),_:1}),e(n,{"model-value":!0,variant:"warning"},{default:i(()=>[l[37]||(l[37]=s(" A simple warning alert with ")),e(f,{href:"javascript: void(0);",class:"alert-link"},{default:i(()=>l[36]||(l[36]=[s("an example link")])),_:1}),l[38]||(l[38]=s(". Give it a click if you like. "))]),_:1}),e(n,{"model-value":!0,variant:"info"},{default:i(()=>[l[40]||(l[40]=s(" A simple info alert with ")),e(f,{href:"javascript: void(0);",class:"alert-link"},{default:i(()=>l[39]||(l[39]=[s("an example link")])),_:1}),l[41]||(l[41]=s(". Give it a click if you like. "))]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1}),e(v,null,{default:i(()=>[e(p,{xl:"6"},{default:i(()=>[e(m,{"no-body":""},{default:i(()=>[e(a,null,{default:i(()=>[e(u,null,{default:i(()=>l[43]||(l[43]=[s("Dismissing")])),_:1}),l[50]||(l[50]=d("p",{class:"card-title-desc"},[s(" Add a dismiss button and the "),d("code",null,".alert-dismissible"),s(" class, which adds extra padding to the right of the alert and positions the "),d("code",null,".btn-close"),s(" button. ")],-1)),d("div",T,[e(n,{variant:"primary",modelValue:t.dismissibleAlert,"onUpdate:modelValue":l[0]||(l[0]=o=>t.dismissibleAlert=o),show:"",dismissible:""},{default:i(()=>l[44]||(l[44]=[s(" A simple primary alert—check it out! ")])),_:1},8,["modelValue"]),e(n,{variant:"secondary",modelValue:t.dismissibleAlert1,"onUpdate:modelValue":l[1]||(l[1]=o=>t.dismissibleAlert1=o),show:"",dismissible:""},{default:i(()=>l[45]||(l[45]=[s(" A simple secondary alert—check it out! ")])),_:1},8,["modelValue"]),e(n,{variant:"success",modelValue:t.dismissibleAlert2,"onUpdate:modelValue":l[2]||(l[2]=o=>t.dismissibleAlert2=o),show:"",dismissible:""},{default:i(()=>l[46]||(l[46]=[s(" A simple success alert—check it out! ")])),_:1},8,["modelValue"]),e(n,{variant:"danger",modelValue:t.dismissibleAlert3,"onUpdate:modelValue":l[3]||(l[3]=o=>t.dismissibleAlert3=o),show:"",dismissible:""},{default:i(()=>l[47]||(l[47]=[s(" A simple danger alert—check it out! ")])),_:1},8,["modelValue"]),e(n,{variant:"warning",modelValue:t.dismissibleAlert4,"onUpdate:modelValue":l[4]||(l[4]=o=>t.dismissibleAlert4=o),show:"",dismissible:""},{default:i(()=>l[48]||(l[48]=[s(" A simple warning alert—check it out! ")])),_:1},8,["modelValue"]),e(n,{variant:"info",modelValue:t.dismissibleAlert5,"onUpdate:modelValue":l[5]||(l[5]=o=>t.dismissibleAlert5=o),show:"",dismissible:""},{default:i(()=>l[49]||(l[49]=[s(" A simple info alert—check it out! ")])),_:1},8,["modelValue"])])]),_:1})]),_:1})]),_:1}),e(p,{xl:"6"},{default:i(()=>[e(m,{"no-body":""},{default:i(()=>[e(a,null,{default:i(()=>[e(u,{class:"mb-4"},{default:i(()=>l[51]||(l[51]=[s("With Icon")])),_:1}),d("div",G,[e(n,{variant:"primary",dismissible:"",modelValue:t.dismissibleAlert6,"onUpdate:modelValue":l[6]||(l[6]=o=>t.dismissibleAlert6=o),show:""},{default:i(()=>l[52]||(l[52]=[d("i",{class:"mdi mdi-bullseye-arrow me-2"},null,-1),s(" A simple primary alert—check it out! ")])),_:1},8,["modelValue"]),e(n,{variant:"secondary",dismissible:"",modelValue:t.dismissibleAlert7,"onUpdate:modelValue":l[7]||(l[7]=o=>t.dismissibleAlert7=o),show:""},{default:i(()=>l[53]||(l[53]=[d("i",{class:"mdi mdi-grease-pencil me-2"},null,-1),s(" A simple secondary alert—check it out! ")])),_:1},8,["modelValue"]),e(n,{variant:"success",dismissible:"",modelValue:t.dismissibleAlert8,"onUpdate:modelValue":l[8]||(l[8]=o=>t.dismissibleAlert8=o),show:""},{default:i(()=>l[54]||(l[54]=[d("i",{class:"mdi mdi-check-all me-2"},null,-1),s(" A simple success alert—check it out! ")])),_:1},8,["modelValue"]),e(n,{variant:"danger",dismissible:"",modelValue:t.dismissibleAlert9,"onUpdate:modelValue":l[9]||(l[9]=o=>t.dismissibleAlert9=o),show:""},{default:i(()=>l[55]||(l[55]=[d("i",{class:"mdi mdi-block-helper me-2"},null,-1),s(" A simple danger alert—check it out! ")])),_:1},8,["modelValue"]),e(n,{variant:"warning",dismissible:"",modelValue:t.dismissibleAlert10,"onUpdate:modelValue":l[10]||(l[10]=o=>t.dismissibleAlert10=o),show:""},{default:i(()=>l[56]||(l[56]=[d("i",{class:"mdi mdi-alert-outline me-2"},null,-1),s(" A simple warning alert—check it out! ")])),_:1},8,["modelValue"]),e(n,{variant:"info",dismissible:"",modelValue:t.dismissibleAlert11,"onUpdate:modelValue":l[11]||(l[11]=o=>t.dismissibleAlert11=o),show:""},{default:i(()=>l[57]||(l[57]=[d("i",{class:"mdi mdi-alert-circle-outline me-2"},null,-1),s(" A simple info alert—check it out! ")])),_:1},8,["modelValue"])])]),_:1})]),_:1})]),_:1})]),_:1}),e(v,null,{default:i(()=>[e(p,{xl:"6"},{default:i(()=>[e(m,{"no-body":""},{default:i(()=>[e(a,null,{default:i(()=>[e(u,null,{default:i(()=>l[58]||(l[58]=[s("Live Example")])),_:1}),l[60]||(l[60]=d("p",{class:"card-title-desc"},"Click the button below to show an alert (hidden with inline styles to start), then dismiss (and destroy) it with the built-in close button.",-1)),e(n,{modelValue:t.dismissCountDown,"onUpdate:modelValue":l[12]||(l[12]=o=>t.dismissCountDown=o),dismissible:"",variant:"warning",onCloseCountdown:l[13]||(l[13]=o=>b.countdown=o)},{default:i(()=>[d("p",null,"This alert will dismiss after "+U(b.countdown/1e3)+" seconds...",1),e(w,{variant:"warning",max:t.dismissCountDown,value:b.countdown,height:"4px"},null,8,["max","value"])]),_:1},8,["modelValue"]),e(k,{onClick:l[14]||(l[14]=o=>t.dismissCountDown=t.dismissCountDown+1e3),variant:"primary",class:"m-1"},{default:i(()=>l[59]||(l[59]=[s(" Add a second to the alert with countdown timer ")])),_:1})]),_:1})]),_:1})]),_:1}),e(p,{xl:"6"},{default:i(()=>[e(m,{"no-body":""},{default:i(()=>[e(a,null,{default:i(()=>[e(u,null,{default:i(()=>l[61]||(l[61]=[s("Additional content")])),_:1}),l[63]||(l[63]=d("p",{class:"card-title-desc"},"Alerts can also contain additional HTML elements like headings, paragraphs and dividers.",-1)),d("div",P,[e(n,{variant:"success","model-value":!0},{default:i(()=>l[62]||(l[62]=[d("h4",{class:"alert-heading"},"Well done!",-1),d("p",null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.",-1),d("hr",null,null,-1),d("p",{class:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy.",-1)])),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const z=B(D,[["render",H]]);export{z as default};
