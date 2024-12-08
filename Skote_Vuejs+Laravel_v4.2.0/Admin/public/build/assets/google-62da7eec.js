import{j as N,ab as A,A as T,x as k,P as R,G as ee,B as j,a4 as I,D as V,C as te,o as H,e as oe,b as x,u as re,ac as ae,ad as ie,c as ne,w as p,r as P,a as u,d as L,I as O}from"../js/app2.js";import{L as le}from"./main-061e9df4.js";import{P as se}from"./page-header-5e34e666.js";import"./logo-light-deb27e23.js";import"./logo-9faa3827.js";import"./avatar-1-15b743f1.js";import"./avatar-3-36dc574b.js";(function(){try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(".mapdiv[data-v-d05fc6bc]{width:100%;height:100%}.custom-control-wrapper[data-v-d099a3a6]{display:none}.mapdiv .custom-control-wrapper[data-v-d099a3a6]{display:inline-block}.info-window-wrapper[data-v-cbe1707b]{display:none}.mapdiv .info-window-wrapper[data-v-cbe1707b]{display:inline-block}.custom-marker-wrapper[data-v-2d2d343a]{display:none}.mapdiv .custom-marker-wrapper[data-v-2d2d343a]{display:inline-block}")),document.head.appendChild(r)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();var ue=Object.defineProperty,ce=(r,e,t)=>e in r?ue(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,G=(r,e,t)=>(ce(r,typeof e!="symbol"?e+"":e,t),t);const Y=Symbol("map"),J=Symbol("api"),de=Symbol("marker"),pe=Symbol("markerCluster"),Z=Symbol("CustomMarker"),me=Symbol("mapTilesLoaded"),q=["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function he(r,e,t,i){function o(a){return a instanceof t?a:new t(function(n){n(a)})}return new(t||(t=Promise))(function(a,n){function c(d){try{f(i.next(d))}catch(s){n(s)}}function h(d){try{f(i.throw(d))}catch(s){n(s)}}function f(d){d.done?a(d.value):o(d.value).then(c,h)}f((i=i.apply(r,e||[])).next())})}var ge=function r(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var i,o,a;if(Array.isArray(e)){if(i=e.length,i!=t.length)return!1;for(o=i;o--!==0;)if(!r(e[o],t[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(a=Object.keys(e),i=a.length,i!==Object.keys(t).length)return!1;for(o=i;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[o]))return!1;for(o=i;o--!==0;){var n=a[o];if(!r(e[n],t[n]))return!1}return!0}return e!==e&&t!==t};const U="__googleMapsScriptId";var E;(function(r){r[r.INITIALIZED=0]="INITIALIZED",r[r.LOADING=1]="LOADING",r[r.SUCCESS=2]="SUCCESS",r[r.FAILURE=3]="FAILURE"})(E||(E={}));class w{constructor({apiKey:e,authReferrerPolicy:t,channel:i,client:o,id:a=U,language:n,libraries:c=[],mapIds:h,nonce:f,region:d,retries:s=3,url:m="https://maps.googleapis.com/maps/api/js",version:y}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=t,this.channel=i,this.client=o,this.id=a||U,this.language=n,this.libraries=c,this.mapIds=h,this.nonce=f,this.region=d,this.retries=s,this.url=m,this.version=y,w.instance){if(!ge(this.options,w.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(w.instance.options)}`);return w.instance}w.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?E.FAILURE:this.done?E.SUCCESS:this.loading?E.LOADING:E.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+="?callback=__googleMapsCallback",this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(i=>{i?t(i.error):e(window.google)})})}importLibrary(e){return this.execute(),google.maps.importLibrary(e)}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){var e,t;if(document.getElementById(this.id)){this.callback();return}const i={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(i).forEach(a=>!i[a]&&delete i[a]),!((t=(e=window==null?void 0:window.google)===null||e===void 0?void 0:e.maps)===null||t===void 0)&&t.importLibrary||(a=>{let n,c,h,f="The Google Maps JavaScript API",d="google",s="importLibrary",m="__ib__",y=document,l=window;l=l[d]||(l[d]={});const g=l.maps||(l.maps={}),v=new Set,b=new URLSearchParams,C=()=>n||(n=new Promise((_,S)=>he(this,void 0,void 0,function*(){var z;yield c=y.createElement("script"),c.id=this.id,b.set("libraries",[...v]+"");for(h in a)b.set(h.replace(/[A-Z]/g,D=>"_"+D[0].toLowerCase()),a[h]);b.set("callback",d+".maps."+m),c.src=this.url+"?"+b,g[m]=_,c.onerror=()=>n=S(Error(f+" could not load.")),c.nonce=this.nonce||((z=y.querySelector("script[nonce]"))===null||z===void 0?void 0:z.nonce)||"",y.head.append(c)})));g[s]?console.warn(f+" only loads once. Ignoring:",a):g[s]=(_,...S)=>v.add(_)&&C().then(()=>g[s](_,...S))})(i);const o=this.libraries.map(a=>this.importLibrary(a));o.length||o.push(this.importLibrary("core")),Promise.all(o).then(()=>this.callback(),a=>{const n=new ErrorEvent("error",{error:a});this.loadErrorCallback(n)})}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const t=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)}else this.onerrorEvent=e,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading||(this.loading=!0,this.setScript())}}}function fe(r){return class extends r.OverlayView{constructor(e){super(),G(this,"element"),G(this,"opts");const{element:t,...i}=e;this.element=t,this.opts=i,this.opts.map&&this.setMap(this.opts.map)}getPosition(){return this.opts.position?this.opts.position instanceof r.LatLng?this.opts.position:new r.LatLng(this.opts.position):null}getVisible(){if(!this.element)return!1;const e=this.element;return e.style.display!=="none"&&e.style.visibility!=="hidden"&&(e.style.opacity===""||Number(e.style.opacity)>.01)}onAdd(){if(!this.element)return;const e=this.getPanes();e&&e.overlayMouseTarget.appendChild(this.element)}draw(){if(!this.element)return;const e=this.getProjection(),t=e==null?void 0:e.fromLatLngToDivPixel(this.getPosition());if(t){this.element.style.position="absolute";const i=this.element.offsetHeight,o=this.element.offsetWidth;let a,n;switch(this.opts.anchorPoint){case"TOP_CENTER":a=t.x-o/2,n=t.y;break;case"BOTTOM_CENTER":a=t.x-o/2,n=t.y-i;break;case"LEFT_CENTER":a=t.x,n=t.y-i/2;break;case"RIGHT_CENTER":a=t.x-o,n=t.y-i/2;break;case"TOP_LEFT":a=t.x,n=t.y;break;case"TOP_RIGHT":a=t.x-o,n=t.y;break;case"BOTTOM_LEFT":a=t.x,n=t.y-i;break;case"BOTTOM_RIGHT":a=t.x-o,n=t.y-i;break;default:a=t.x-o/2,n=t.y-i/2}this.element.style.left=a+"px",this.element.style.top=n+"px",this.element.style.transform=`translateX(${this.opts.offsetX||0}px) translateY(${this.opts.offsetY||0}px)`,this.opts.zIndex&&(this.element.style.zIndex=this.opts.zIndex.toString())}}onRemove(){this.element&&this.element.remove()}setOptions(e){const{element:t,...i}=e;this.element=t,this.opts=i,this.draw()}}}let $;const F=["bounds_changed","center_changed","click","contextmenu","dblclick","drag","dragend","dragstart","heading_changed","idle","isfractionalzoomenabled_changed","mapcapabilities_changed","maptypeid_changed","mousemove","mouseout","mouseover","projection_changed","renderingtype_changed","rightclick","tilesloaded","tilt_changed","zoom_changed"],ye=N({props:{apiPromise:{type:Promise},apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places","marker"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},isFractionalZoomEnabled:{type:Boolean,required:!1,default:void 0},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},mapId:{type:String,required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1},nonce:{type:String,default:""}},emits:F,setup(r,{emit:e}){const t=k(),i=k(!1),o=k(),a=k(),n=k(!1);T(Y,o),T(J,a),T(me,n);const c=()=>{const s={...r};Object.keys(s).forEach(l=>{s[l]===void 0&&delete s[l]});const m=l=>{var g;return l?{position:(g=a.value)==null?void 0:g.ControlPosition[l]}:{}},y={scaleControlOptions:r.scaleControlStyle?{style:r.scaleControlStyle}:{},panControlOptions:m(r.panControlPosition),zoomControlOptions:m(r.zoomControlPosition),rotateControlOptions:m(r.rotateControlPosition),streetViewControlOptions:m(r.streetViewControlPosition),fullscreenControlOptions:m(r.fullscreenControlPosition),disableDefaultUI:r.disableDefaultUi};return{...s,...y}},h=j([a,o],([s,m])=>{const y=s,l=m;y&&l&&(y.event.addListenerOnce(l,"tilesloaded",()=>{n.value=!0}),setTimeout(h,0))},{immediate:!0}),f=()=>{try{const{apiKey:s,region:m,version:y,language:l,libraries:g,nonce:v}=r;$=new w({apiKey:s,region:m,version:y,language:l,libraries:g,nonce:v})}catch(s){console.error(s)}},d=s=>{a.value=I(s.maps),o.value=I(new s.maps.Map(t.value,c()));const m=fe(a.value);a.value[Z]=m,F.forEach(l=>{var g;(g=o.value)==null||g.addListener(l,v=>e(l,v))}),i.value=!0;const y=Object.keys(r).filter(l=>!["apiPromise","apiKey","version","libraries","region","language","center","zoom","nonce"].includes(l)).map(l=>A(r,l));j([()=>r.center,()=>r.zoom,...y],([l,g],[v,b])=>{var C,_,S;const{center:z,zoom:D,...X}=c();(C=o.value)==null||C.setOptions(X),g!==void 0&&g!==b&&((_=o.value)==null||_.setZoom(g));const Q=!v||l.lng!==v.lng||l.lat!==v.lat;l&&Q&&((S=o.value)==null||S.panTo(l))})};return te(()=>{r.apiPromise&&r.apiPromise instanceof Promise?r.apiPromise.then(d):(f(),$.load().then(d))}),V(()=>{var s;n.value=!1,o.value&&((s=a.value)==null||s.event.clearInstanceListeners(o.value))}),{mapRef:t,ready:i,map:o,api:a,mapTilesLoaded:n}}}),ve=(r,e)=>{const t=r.__vccOpts||r;for(const[i,o]of e)t[i]=o;return t},be={ref:"mapRef",class:"mapdiv"};function ke(r,e,t,i,o,a){return H(),oe("div",null,[x("div",be,null,512),re(r.$slots,"default",ae(ie({ready:r.ready,map:r.map,api:r.api,mapTilesLoaded:r.mapTilesLoaded})),void 0,!0)])}const B=ve(ye,[["render",ke],["__scopeId","data-v-d05fc6bc"]]);function _e(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var we=function r(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var i,o,a;if(Array.isArray(e)){if(i=e.length,i!=t.length)return!1;for(o=i;o--!==0;)if(!r(e[o],t[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(a=Object.keys(e),i=a.length,i!==Object.keys(t).length)return!1;for(o=i;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[o]))return!1;for(o=i;o--!==0;){var n=a[o];if(!r(e[n],t[n]))return!1}return!0}return e!==e&&t!==t};const Ce=_e(we),Se=r=>r==="Marker",Oe=r=>r===Z,W=(r,e,t,i)=>{const o=k(),a=R(Y,k()),n=R(J,k()),c=R(pe,k()),h=ee(()=>!!(c.value&&n.value&&(o.value instanceof n.value.Marker||o.value instanceof n.value[Z])));return j([a,t],(f,[d,s])=>{var m,y,l;const g=!Ce(t.value,s)||a.value!==d;!a.value||!n.value||!g||(o.value?(o.value.setOptions(t.value),h.value&&((m=c.value)==null||m.removeMarker(o.value),(y=c.value)==null||y.addMarker(o.value))):(Se(r)?o.value=I(new n.value[r](t.value)):Oe(r)?o.value=I(new n.value[r](t.value)):o.value=I(new n.value[r]({...t.value,map:a.value})),h.value?(l=c.value)==null||l.addMarker(o.value):o.value.setMap(a.value),e.forEach(v=>{var b;(b=o.value)==null||b.addListener(v,C=>i(v,C))})))},{immediate:!0}),V(()=>{var f,d;o.value&&((f=n.value)==null||f.event.clearInstanceListeners(o.value),h.value?(d=c.value)==null||d.removeMarker(o.value):o.value.setMap(null))}),o},K=["animation_changed","click","dblclick","rightclick","dragstart","dragend","drag","mouseover","mousedown","mouseout","mouseup","draggable_changed","clickable_changed","contextmenu","cursor_changed","flat_changed","rightclick","zindex_changed","icon_changed","position_changed","shape_changed","title_changed","visible_changed"],Ee=N({name:"Marker",props:{options:{type:Object,required:!0}},emits:K,setup(r,{emit:e,expose:t,slots:i}){const o=A(r,"options"),a=W("Marker",K,o,e);return T(de,a),t({marker:a}),()=>{var n;return(n=i.default)==null?void 0:n.call(i)}}}),Pe=N({name:"Polygon",props:{options:{type:Object,required:!0}},emits:q,setup(r,{emit:e}){const t=A(r,"options");return{polygon:W("Polygon",q,t,e)}},render:()=>null});q.concat(["bounds_changed"]);q.concat(["center_changed","radius_changed"]);var M;(function(r){r.CLUSTERING_BEGIN="clusteringbegin",r.CLUSTERING_END="clusteringend",r.CLUSTER_CLICK="click"})(M||(M={}));Object.values(M);const Re={__name:"google",setup(r){const e={key:"AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",center1:{lat:2,lng:2},zoom1:5,center2:{lat:40.689247,lng:-74.044502},zoom2:1,markerOptions:{position:{lat:40.689247,lng:-74.044502},label:"L",title:"LADY LIBERTY"},center3:{lat:1.38,lng:103.8},zoom3:12,center4:{lat:4,lng:4},zoom4:3,minZoom:2,maxZoom:null},t=[[{lat:1.38,lng:103.8},{lat:1.38,lng:103.81},{lat:1.39,lng:103.81},{lat:1.39,lng:103.8}],[{lat:1.382,lng:103.802},{lat:1.382,lng:103.808},{lat:1.388,lng:103.808},{lat:1.388,lng:103.802}]];return(i,o)=>{const a=P("BCardTitle"),n=P("BCardBody"),c=P("BCard"),h=P("BCol"),f=P("BRow");return H(),ne(le,null,{default:p(()=>[u(se,{title:"Google Maps",pageTitle:"Maps"}),u(f,null,{default:p(()=>[u(h,{lg:"6"},{default:p(()=>[u(c,{"no-body":""},{default:p(()=>[u(n,null,{default:p(()=>[u(a,null,{default:p(()=>o[0]||(o[0]=[L("Basic")])),_:1}),o[1]||(o[1]=x("p",{class:"card-title-dsec"},"Example of google maps.",-1)),u(O(B),{class:"google-map",ref:"mapRef","api-key":e.key,center:e.center1,zoom:e.zoom1,"min-zoom":e.minZoom,"max-zoom":e.maxZoom,"street-view-control":!1},null,8,["api-key","center","zoom","min-zoom","max-zoom"])]),_:1})]),_:1})]),_:1}),u(h,{lg:"6"},{default:p(()=>[u(c,{"no-body":""},{default:p(()=>[u(n,null,{default:p(()=>[u(a,null,{default:p(()=>o[2]||(o[2]=[L("Markers")])),_:1}),o[3]||(o[3]=x("p",{class:"card-title-dsec"},"Example of google maps.",-1)),u(O(B),{class:"google-map",ref:"mapRef2","api-key":e.key,center:e.center2,zoom:e.zoom2,"min-zoom":e.minZoom,"max-zoom":e.maxZoom,"street-view-control":!1},{default:p(()=>[u(O(Ee),{options:i.markerOptions},null,8,["options"])]),_:1},8,["api-key","center","zoom","min-zoom","max-zoom"])]),_:1})]),_:1})]),_:1})]),_:1}),u(f,null,{default:p(()=>[u(h,{lg:"6"},{default:p(()=>[u(c,{"no-body":""},{default:p(()=>[u(n,null,{default:p(()=>[u(a,null,{default:p(()=>o[4]||(o[4]=[L("Polygon Editing")])),_:1}),o[5]||(o[5]=x("p",{class:"card-title-dsec"},"Example of google maps.",-1)),u(O(B),{class:"google-map",ref:"mapRef3","api-key":e.key,center:e.center3,zoom:e.zoom3,"min-zoom":e.minZoom,"max-zoom":e.maxZoom,"street-view-control":!1},{default:p(()=>[u(O(Pe),{paths:t,editable:!0})]),_:1},8,["api-key","center","zoom","min-zoom","max-zoom"])]),_:1})]),_:1})]),_:1}),u(h,{lg:"6"},{default:p(()=>[u(c,{"no-body":""},{default:p(()=>[u(n,null,{default:p(()=>[u(a,null,{default:p(()=>o[6]||(o[6]=[L("Map type")])),_:1}),o[7]||(o[7]=x("p",{class:"card-title-dsec"},"Example of google maps.",-1)),u(O(B),{class:"google-map",ref:"mapRef4","api-key":e.key,"map-type-id":"terrain",center:e.center4,zoom:e.zoom4,"min-zoom":e.minZoom,"max-zoom":e.maxZoom,"street-view-control":!1},null,8,["api-key","center","zoom","min-zoom","max-zoom"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{Re as default};