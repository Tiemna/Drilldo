import{_ as V,a as X,s as E,o as _,c as C,b as v,w as q,v as H,d as p,m as ke,p as G,h as Y,u as Q,Q as be,A as Ie,e as z,F as Ae,k as Oe,f as ge,g as Te}from"./index-46f567c8.js";import{Q as Me}from"./QuestionControlComponent-82f08922.js";/*!
 * Compressor.js v1.1.1
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-10-05T02:32:40.212Z
 */function he(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),t.push.apply(t,n)}return t}function $(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?he(Object(t),!0).forEach(function(n){qe(a,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):he(Object(t)).forEach(function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(t,n))})}return a}function $e(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function fe(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function Ee(a,e,t){return e&&fe(a.prototype,e),t&&fe(a,t),a}function qe(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function D(){return D=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a},D.apply(this,arguments)}var we={exports:{}};(function(a){typeof window>"u"||function(e){var t=e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype,n=e.Blob&&function(){try{return Boolean(new Blob)}catch{return!1}}(),o=n&&e.Uint8Array&&function(){try{return new Blob([new Uint8Array(100)]).size===100}catch{return!1}}(),i=e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||e.MSBlobBuilder,f=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,c=(n||i)&&e.atob&&e.ArrayBuffer&&e.Uint8Array&&function(d){var l,s,h,m,r,u,y,b,R;if(l=d.match(f),!l)throw new Error("invalid data URI");for(s=l[2]?l[1]:"text/plain"+(l[3]||";charset=US-ASCII"),h=!!l[4],m=d.slice(l[0].length),h?r=atob(m):r=decodeURIComponent(m),u=new ArrayBuffer(r.length),y=new Uint8Array(u),b=0;b<r.length;b+=1)y[b]=r.charCodeAt(b);return n?new Blob([o?y:u],{type:s}):(R=new i,R.append(u),R.getBlob(s))};e.HTMLCanvasElement&&!t.toBlob&&(t.mozGetAsFile?t.toBlob=function(d,l,s){var h=this;setTimeout(function(){s&&t.toDataURL&&c?d(c(h.toDataURL(l,s))):d(h.mozGetAsFile("blob",l))})}:t.toDataURL&&c&&(t.msToBlob?t.toBlob=function(d,l,s){var h=this;setTimeout(function(){(l&&l!=="image/png"||s)&&t.toDataURL&&c?d(c(h.toDataURL(l,s))):d(h.msToBlob(l))})}:t.toBlob=function(d,l,s){var h=this;setTimeout(function(){d(c(h.toDataURL(l,s)))})})),a.exports?a.exports=c:e.dataURLtoBlob=c}(window)})(we);var De=we.exports,Le=function(e){return typeof Blob>"u"?!1:e instanceof Blob||Object.prototype.toString.call(e)==="[object Blob]"},me={strict:!0,checkOrientation:!0,maxWidth:1/0,maxHeight:1/0,minWidth:0,minHeight:0,width:void 0,height:void 0,resize:"none",quality:.8,mimeType:"auto",convertTypes:["image/png"],convertSize:5e6,beforeDraw:null,drew:null,success:null,error:null},je=typeof window<"u"&&typeof window.document<"u",x=je?window:{},L=function(e){return e>0&&e<1/0},Se=Array.prototype.slice;function Pe(a){return Array.from?Array.from(a):Se.call(a)}var We=/^image\/.+$/;function N(a){return We.test(a)}function Fe(a){var e=N(a)?a.substr(6):"";return e==="jpeg"&&(e="jpg"),".".concat(e)}var ye=String.fromCharCode;function He(a,e,t){var n="",o;for(t+=e,o=e;o<t;o+=1)n+=ye(a.getUint8(o));return n}var Qe=x.btoa;function ze(a,e){for(var t=[],n=8192,o=new Uint8Array(a);o.length>0;)t.push(ye.apply(null,Pe(o.subarray(0,n)))),o=o.subarray(n);return"data:".concat(e,";base64,").concat(Qe(t.join("")))}function Ne(a){var e=new DataView(a),t;try{var n,o,i;if(e.getUint8(0)===255&&e.getUint8(1)===216)for(var f=e.byteLength,c=2;c+1<f;){if(e.getUint8(c)===255&&e.getUint8(c+1)===225){o=c;break}c+=1}if(o){var d=o+4,l=o+10;if(He(e,d,4)==="Exif"){var s=e.getUint16(l);if(n=s===18761,(n||s===19789)&&e.getUint16(l+2,n)===42){var h=e.getUint32(l+4,n);h>=8&&(i=l+h)}}}if(i){var m=e.getUint16(i,n),r,u;for(u=0;u<m;u+=1)if(r=i+u*12+2,e.getUint16(r,n)===274){r+=8,t=e.getUint16(r,n),e.setUint16(r,1,n);break}}}catch{t=1}return t}function Ve(a){var e=0,t=1,n=1;switch(a){case 2:t=-1;break;case 3:e=-180;break;case 4:n=-1;break;case 5:e=90,n=-1;break;case 6:e=90;break;case 7:e=90,t=-1;break;case 8:e=-90;break}return{rotate:e,scaleX:t,scaleY:n}}var Xe=/\.\d*(?:0|9){12}\d*$/;function ve(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return Xe.test(a)?Math.round(a*e)/e:a}function T(a){var e=a.aspectRatio,t=a.height,n=a.width,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"none",i=L(n),f=L(t);if(i&&f){var c=t*e;(o==="contain"||o==="none")&&c>n||o==="cover"&&c<n?t=n/e:n=t*e}else i?t=n/e:f&&(n=t*e);return{width:n,height:t}}var Ge=x.ArrayBuffer,pe=x.FileReader,B=x.URL||x.webkitURL,Ye=/\.\w+$/,Je=x.Compressor,Ke=function(){function a(e,t){$e(this,a),this.file=e,this.image=new Image,this.options=$($({},me),t),this.aborted=!1,this.result=null,this.init()}return Ee(a,[{key:"init",value:function(){var t=this,n=this.file,o=this.options;if(!Le(n)){this.fail(new Error("The first argument must be a File or Blob object."));return}var i=n.type;if(!N(i)){this.fail(new Error("The first argument must be an image File or Blob object."));return}if(!B||!pe){this.fail(new Error("The current browser does not support image compression."));return}if(Ge||(o.checkOrientation=!1),B&&!o.checkOrientation)this.load({url:B.createObjectURL(n)});else{var f=new pe,c=o.checkOrientation&&i==="image/jpeg";this.reader=f,f.onload=function(d){var l=d.target,s=l.result,h={};if(c){var m=Ne(s);m>1||!B?(h.url=ze(s,i),m>1&&D(h,Ve(m))):h.url=B.createObjectURL(n)}else h.url=s;t.load(h)},f.onabort=function(){t.fail(new Error("Aborted to read the image with FileReader."))},f.onerror=function(){t.fail(new Error("Failed to read the image with FileReader."))},f.onloadend=function(){t.reader=null},c?f.readAsArrayBuffer(n):f.readAsDataURL(n)}}},{key:"load",value:function(t){var n=this,o=this.file,i=this.image;i.onload=function(){n.draw($($({},t),{},{naturalWidth:i.naturalWidth,naturalHeight:i.naturalHeight}))},i.onabort=function(){n.fail(new Error("Aborted to load the image."))},i.onerror=function(){n.fail(new Error("Failed to load the image."))},x.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(x.navigator.userAgent)&&(i.crossOrigin="anonymous"),i.alt=o.name,i.src=t.url}},{key:"draw",value:function(t){var n=this,o=t.naturalWidth,i=t.naturalHeight,f=t.rotate,c=f===void 0?0:f,d=t.scaleX,l=d===void 0?1:d,s=t.scaleY,h=s===void 0?1:s,m=this.file,r=this.image,u=this.options,y=document.createElement("canvas"),b=y.getContext("2d"),R=Math.abs(c)%180===90,S=(u.resize==="contain"||u.resize==="cover")&&L(u.width)&&L(u.height),k=Math.max(u.maxWidth,0)||1/0,I=Math.max(u.maxHeight,0)||1/0,A=Math.max(u.minWidth,0)||0,O=Math.max(u.minHeight,0)||0,U=o/i,g=u.width,w=u.height;if(R){var J=[I,k];k=J[0],I=J[1];var K=[O,A];A=K[0],O=K[1];var Z=[w,g];g=Z[0],w=Z[1]}S&&(U=g/w);var ee=T({aspectRatio:U,width:k,height:I},"contain");k=ee.width,I=ee.height;var te=T({aspectRatio:U,width:A,height:O},"cover");if(A=te.width,O=te.height,S){var ne=T({aspectRatio:U,width:g,height:w},u.resize);g=ne.width,w=ne.height}else{var ae=T({aspectRatio:U,width:g,height:w}),ie=ae.width;g=ie===void 0?o:ie;var oe=ae.height;w=oe===void 0?i:oe}g=Math.floor(ve(Math.min(Math.max(g,A),k))),w=Math.floor(ve(Math.min(Math.max(w,O),I)));var xe=-g/2,Be=-w/2,Re=g,Ue=w,P=[];if(S){var re=0,se=0,W=o,F=i,le=T({aspectRatio:U,width:o,height:i},{contain:"cover",cover:"contain"}[u.resize]);W=le.width,F=le.height,re=(o-W)/2,se=(i-F)/2,P.push(re,se,W,F)}if(P.push(xe,Be,Re,Ue),R){var ue=[w,g];g=ue[0],w=ue[1]}y.width=g,y.height=w,N(u.mimeType)||(u.mimeType=m.type);var de="transparent";if(m.size>u.convertSize&&u.convertTypes.indexOf(u.mimeType)>=0&&(u.mimeType="image/jpeg"),u.mimeType==="image/jpeg"&&(de="#fff"),b.fillStyle=de,b.fillRect(0,0,g,w),u.beforeDraw&&u.beforeDraw.call(this,b,y),!this.aborted&&(b.save(),b.translate(g/2,w/2),b.rotate(c*Math.PI/180),b.scale(l,h),b.drawImage.apply(b,[r].concat(P)),b.restore(),u.drew&&u.drew.call(this,b,y),!this.aborted)){var ce=function(Ce){n.aborted||n.done({naturalWidth:o,naturalHeight:i,result:Ce})};y.toBlob?y.toBlob(ce,u.mimeType,u.quality):ce(De(y.toDataURL(u.mimeType,u.quality)))}}},{key:"done",value:function(t){var n=t.naturalWidth,o=t.naturalHeight,i=t.result,f=this.file,c=this.image,d=this.options;if(B&&!d.checkOrientation&&B.revokeObjectURL(c.src),i)if(d.strict&&i.size>f.size&&d.mimeType===f.type&&!(d.width>n||d.height>o||d.minWidth>n||d.minHeight>o||d.maxWidth<n||d.maxHeight<o))i=f;else{var l=new Date;i.lastModified=l.getTime(),i.lastModifiedDate=l,i.name=f.name,i.name&&i.type!==f.type&&(i.name=i.name.replace(Ye,Fe(i.type)))}else i=f;this.result=i,d.success&&d.success.call(this,i)}},{key:"fail",value:function(t){var n=this.options;if(n.error)n.error.call(this,t);else throw t}},{key:"abort",value:function(){this.aborted||(this.aborted=!0,this.reader?this.reader.abort():this.image.complete?this.fail(new Error("The compression process has been aborted.")):(this.image.onload=null,this.image.onabort()))}}],[{key:"noConflict",value:function(){return window.Compressor=Je,a}},{key:"setDefaults",value:function(t){D(me,t)}}]),a}();const _e=a=>(G("data-v-410ee6a6"),a=a(),Y(),a),Ze={class:"answer-editor"},et={class:"delete-answer"},tt=_e(()=>v("span",{class:"but-text"},"X",-1)),nt=[tt],at={class:"correct-selection"},it=_e(()=>v("span",null,"Correct",-1)),ot={__name:"ModifyAnswerComponent",props:["answerId"],setup(a){const e=a,t=X(),{editQuestion:n}=E(t);function o(){const i=n.value.answers.findIndex(f=>f.id===e.answerId);n.value.answers.splice(i,1)}return(i,f)=>(_(),C("div",Ze,[v("div",et,[v("button",{class:"button red",onClick:f[0]||(f[0]=c=>o())},nt)]),q(v("input",{type:"textbox",name:"title","onUpdate:modelValue":f[1]||(f[1]=c=>p(n).answers.find(d=>d.id===e.answerId).text=c),placeholder:"Answer text"},null,512),[[H,p(n).answers.find(c=>c.id===e.answerId).text]]),v("div",at,[it,q(v("input",{type:"checkbox","onUpdate:modelValue":f[2]||(f[2]=c=>p(n).answers.find(d=>d.id===e.answerId).correct=c)},null,512),[[ke,p(n).answers.find(c=>c.id===e.answerId).correct]])])]))}},rt=V(ot,[["__scopeId","data-v-410ee6a6"]]);const j=a=>(G("data-v-9c2607d0"),a=a(),Y(),a),st={class:"question"},lt={class:"question-data"},ut={class:"question-title"},dt={class:"question-image"},ct=j(()=>v("span",{class:"but-text"},"Upload image",-1)),ht=[ct],ft=j(()=>v("span",{class:"but-text"},"Delete image",-1)),mt=[ft],vt={key:0,class:"image"},pt=["src"],bt={class:"answers"},gt={class:"buttons"},wt=j(()=>v("span",{class:"but-text"},"Save question",-1)),yt=[wt],_t=j(()=>v("span",{class:"but-text"},"Add answer",-1)),xt=[_t],Bt={__name:"ModifyQuestionComponent",props:["questionId"],setup(a){const e=a,t=Q(be),n=Q(Ie),o=X();o.editQuestion=o.questions[o.index];const{editQuestion:i}=E(o);function f(){document.getElementById("fileUpload").click()}function c(){let h=-1;t.find(i.value.id)==null?h=Math.max(...t.all().map(r=>r.number))+1:h=t.find(i.value.id).number;const m=t.where("number",Number(i.value.number)).first();i.value.number<1?t.where("number",1).first()===null&&(i.value.number=1):m!==null&&(i.value.number=h)}function d(){i.value.answers=i.value.answers.concat(n.make({questionId:e.questionId}))}function l(){c(),n.where("questionId",e.questionId).delete(),t.save(i.value)}function s(h){if(h.target.files[0]!==void 0){const m=h.target.files[0];new Ke(m,{maxWidth:600,convertSize:1e5,convertTypes:["image/png","image/webp"],success(r){var u=new FileReader;u.readAsDataURL(r),u.onloadend=function(){var y=u.result;i.value.image=y}},error(r){console.log(r.message)}})}}return(h,m)=>(_(),C("div",st,[v("div",lt,[v("div",ut,[q(v("input",{type:"number",name:"number","onUpdate:modelValue":m[0]||(m[0]=r=>p(i).number=r)},null,512),[[H,p(i).number]]),q(v("input",{type:"text",name:"title","onUpdate:modelValue":m[1]||(m[1]=r=>p(i).question=r),placeholder:"Question title"},null,512),[[H,p(i).question]])]),v("div",dt,[v("input",{id:"fileUpload",type:"file",accept:"image/*",onChange:m[2]||(m[2]=r=>s(r)),hidden:""},null,32),v("button",{class:"image-upload button",onClick:m[3]||(m[3]=r=>f())},ht),p(i).image!==""?(_(),C("button",{key:0,class:"image-upload button red",onClick:m[4]||(m[4]=r=>p(i).image="")},mt)):z("",!0)])]),p(i).image!==""?(_(),C("div",vt,[v("img",{src:p(i).image},null,8,pt)])):z("",!0),v("div",bt,[(_(!0),C(Ae,null,Oe(p(i).answers,r=>(_(),ge(rt,{answerId:r.id,key:r.id},null,8,["answerId"]))),128))]),v("div",gt,[v("button",{class:"button",onClick:m[5]||(m[5]=r=>l())},yt),v("button",{class:"button green",onClick:m[6]||(m[6]=r=>d())},xt)])]))}},Rt=V(Bt,[["__scopeId","data-v-9c2607d0"]]);const M=a=>(G("data-v-31db9fea"),a=a(),Y(),a),Ut={class:"edit"},Ct=M(()=>v("h1",null,"Edit question sets",-1)),kt=M(()=>v("p",{class:"note"}," NOTE: Remember to save each question you modify or your changes will be lost. ",-1)),It={class:"edit-container"},At={class:"edit-controls"},Ot={class:"question-buttons"},Tt=M(()=>v("span",{class:"but-text"},"Delete question",-1)),Mt=[Tt],$t=M(()=>v("span",{class:"but-text"},"Download questions",-1)),Et=[$t],qt=M(()=>v("span",{class:"but-text"},"Add question",-1)),Dt=[qt],Lt={__name:"EditView",setup(a){const e=Q(be),t=X();e.where("showResults",!1).update({showResults:!1}),t.index=0,t.showMobileMenu=!1,t.viewMode=!1,t.editMode=!0,t.questions=e.with("answers").get(),e.all().length===0&&(t.questions=[e.make()]);const{index:n}=E(t),{questions:o}=E(t);function i(){const l=Math.max(...o.value.map(s=>s.number))+1;o.value.push(e.make({number:l}))}function f(){e.destroy(o.value[n.value].id),o.value.splice(n.value,1),t.previous(),e.all().length===0&&(t.questions=[e.make()])}function c(){let l=JSON.parse(JSON.stringify(e.with("answers").get()));l.forEach(function(s,h){s.answers.forEach(function(m,r){s.answers[r]={text:m.text,correct:m.correct}}),l[h]={number:s.number,question:s.question,image:s.image,answers:s.answers}}),l=l.sort((s,h)=>s.number-h.number),d(JSON.stringify(l,null,2),"text/json","questions.json")}function d(l,s,h){var m=new Blob([l],{type:s}),r=document.createElement("a");r.download=h,r.href=URL.createObjectURL(m),r.dataset.downloadurl=[s,r.download,r.href].join(":"),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(function(){URL.revokeObjectURL(r.href)},1500)}return(l,s)=>(_(),C("div",Ut,[Ct,kt,v("div",It,[p(t).questions.length>=1?(_(),ge(Rt,{questionId:p(o)[p(n)].id,key:p(o)[p(n)].id},null,8,["questionId"])):z("",!0),v("div",At,[v("div",Ot,[v("button",{class:"button red",onClick:s[0]||(s[0]=h=>f())},Mt),v("button",{class:"button",onClick:s[1]||(s[1]=h=>c())},Et),v("button",{class:"button green",onClick:s[2]||(s[2]=h=>i())},Dt)]),Te(Me)])])]))}},Wt=V(Lt,[["__scopeId","data-v-31db9fea"]]);export{Wt as default};