import{_ as Y,a as J,s as j,o as x,c as A,b as h,w as L,v as V,d as p,i as De,u as _,Q as Re,A as Me,e as X,F as qe,k as Fe,f as Ue,g as je}from"./index-Bw482TU5.js";import{Q as Le}from"./QuestionControlComponent-CBAt2VSj.js";/*!
 * Compressor.js v1.2.1
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-02-28T14:09:41.732Z
 */function be(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable})),t.push.apply(t,n)}return t}function F(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?be(Object(t),!0).forEach(function(n){$e(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):be(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function Pe(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ge(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,Ee(n.key),n)}}function Se(r,e,t){return e&&ge(r.prototype,e),t&&ge(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function $e(r,e,t){return e=Ee(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function P(){return P=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},P.apply(this,arguments)}function We(r,e){if(typeof r!="object"||r===null)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function Ee(r){var e=We(r,"string");return typeof e=="symbol"?e:String(e)}var ke={exports:{}};(function(r){typeof window>"u"||function(e){var t=e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype,n=e.Blob&&function(){try{return!!new Blob}catch{return!1}}(),a=n&&e.Uint8Array&&function(){try{return new Blob([new Uint8Array(100)]).size===100}catch{return!1}}(),i=e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||e.MSBlobBuilder,m=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,c=(n||i)&&e.atob&&e.ArrayBuffer&&e.Uint8Array&&function(d){var l,o,v,f,s,u,y,b,U;if(l=d.match(m),!l)throw new Error("invalid data URI");for(o=l[2]?l[1]:"text/plain"+(l[3]||";charset=US-ASCII"),v=!!l[4],f=d.slice(l[0].length),v?s=atob(f):s=decodeURIComponent(f),u=new ArrayBuffer(s.length),y=new Uint8Array(u),b=0;b<s.length;b+=1)y[b]=s.charCodeAt(b);return n?new Blob([a?y:u],{type:o}):(U=new i,U.append(u),U.getBlob(o))};e.HTMLCanvasElement&&!t.toBlob&&(t.mozGetAsFile?t.toBlob=function(d,l,o){var v=this;setTimeout(function(){o&&t.toDataURL&&c?d(c(v.toDataURL(l,o))):d(v.mozGetAsFile("blob",l))})}:t.toDataURL&&c&&(t.msToBlob?t.toBlob=function(d,l,o){var v=this;setTimeout(function(){(l&&l!=="image/png"||o)&&t.toDataURL&&c?d(c(v.toDataURL(l,o))):d(v.msToBlob(l))})}:t.toBlob=function(d,l,o){var v=this;setTimeout(function(){d(c(v.toDataURL(l,o)))})})),r.exports?r.exports=c:e.dataURLtoBlob=c}(window)})(ke);var we=ke.exports,He=function(e){return typeof Blob>"u"?!1:e instanceof Blob||Object.prototype.toString.call(e)==="[object Blob]"},ye={strict:!0,checkOrientation:!0,retainExif:!1,maxWidth:1/0,maxHeight:1/0,minWidth:0,minHeight:0,width:void 0,height:void 0,resize:"none",quality:.8,mimeType:"auto",convertTypes:["image/png"],convertSize:5e6,beforeDraw:null,drew:null,success:null,error:null},Ne=typeof window<"u"&&typeof window.document<"u",B=Ne?window:{},S=function(e){return e>0&&e<1/0},ze=Array.prototype.slice;function K(r){return Array.from?Array.from(r):ze.call(r)}var Qe=/^image\/.+$/;function G(r){return Qe.test(r)}function Ve(r){var e=G(r)?r.substr(6):"";return e==="jpeg"&&(e="jpg"),".".concat(e)}var Ae=String.fromCharCode;function _e(r,e,t){var n="",a;for(t+=e,a=e;a<t;a+=1)n+=Ae(r.getUint8(a));return n}var Xe=B.btoa;function xe(r,e){for(var t=[],n=8192,a=new Uint8Array(r);a.length>0;)t.push(Ae.apply(null,K(a.subarray(0,n)))),a=a.subarray(n);return"data:".concat(e,";base64,").concat(Xe(t.join("")))}function Ge(r){var e=new DataView(r),t;try{var n,a,i;if(e.getUint8(0)===255&&e.getUint8(1)===216)for(var m=e.byteLength,c=2;c+1<m;){if(e.getUint8(c)===255&&e.getUint8(c+1)===225){a=c;break}c+=1}if(a){var d=a+4,l=a+10;if(_e(e,d,4)==="Exif"){var o=e.getUint16(l);if(n=o===18761,(n||o===19789)&&e.getUint16(l+2,n)===42){var v=e.getUint32(l+4,n);v>=8&&(i=l+v)}}}if(i){var f=e.getUint16(i,n),s,u;for(u=0;u<f;u+=1)if(s=i+u*12+2,e.getUint16(s,n)===274){s+=8,t=e.getUint16(s,n),e.setUint16(s,1,n);break}}}catch{t=1}return t}function Ye(r){var e=0,t=1,n=1;switch(r){case 2:t=-1;break;case 3:e=-180;break;case 4:n=-1;break;case 5:e=90,n=-1;break;case 6:e=90;break;case 7:e=90,t=-1;break;case 8:e=-90;break}return{rotate:e,scaleX:t,scaleY:n}}var Je=/\.\d*(?:0|9){12}\d*$/;function Be(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return Je.test(r)?Math.round(r*e)/e:r}function q(r){var e=r.aspectRatio,t=r.height,n=r.width,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"none",i=S(n),m=S(t);if(i&&m){var c=t*e;(a==="contain"||a==="none")&&c>n||a==="cover"&&c<n?t=n/e:n=t*e}else i?t=n/e:m&&(n=t*e);return{width:n,height:t}}function Ke(r){for(var e=K(new Uint8Array(r)),t=e.length,n=[],a=0;a+3<t;){var i=e[a],m=e[a+1];if(i===255&&m===218)break;if(i===255&&m===216)a+=2;else{var c=e[a+2]*256+e[a+3],d=a+c+2,l=e.slice(a,d);n.push(l),a=d}}return n.reduce(function(o,v){return v[0]===255&&v[1]===225?o.concat(v):o},[])}function Ze(r,e){var t=K(new Uint8Array(r));if(t[2]!==255||t[3]!==224)return r;var n=t[4]*256+t[5],a=[255,216].concat(e,t.slice(4+n));return new Uint8Array(a)}var et=B.ArrayBuffer,Q=B.FileReader,R=B.URL||B.webkitURL,tt=/\.\w+$/,nt=B.Compressor,rt=function(){function r(e,t){Pe(this,r),this.file=e,this.exif=[],this.image=new Image,this.options=F(F({},ye),t),this.aborted=!1,this.result=null,this.init()}return Se(r,[{key:"init",value:function(){var t=this,n=this.file,a=this.options;if(!He(n)){this.fail(new Error("The first argument must be a File or Blob object."));return}var i=n.type;if(!G(i)){this.fail(new Error("The first argument must be an image File or Blob object."));return}if(!R||!Q){this.fail(new Error("The current browser does not support image compression."));return}et||(a.checkOrientation=!1,a.retainExif=!1);var m=i==="image/jpeg",c=m&&a.checkOrientation,d=m&&a.retainExif;if(R&&!c&&!d)this.load({url:R.createObjectURL(n)});else{var l=new Q;this.reader=l,l.onload=function(o){var v=o.target,f=v.result,s={},u=1;c&&(u=Ge(f),u>1&&P(s,Ye(u))),d&&(t.exif=Ke(f)),c||d?!R||u>1?s.url=xe(f,i):s.url=R.createObjectURL(n):s.url=f,t.load(s)},l.onabort=function(){t.fail(new Error("Aborted to read the image with FileReader."))},l.onerror=function(){t.fail(new Error("Failed to read the image with FileReader."))},l.onloadend=function(){t.reader=null},c||d?l.readAsArrayBuffer(n):l.readAsDataURL(n)}}},{key:"load",value:function(t){var n=this,a=this.file,i=this.image;i.onload=function(){n.draw(F(F({},t),{},{naturalWidth:i.naturalWidth,naturalHeight:i.naturalHeight}))},i.onabort=function(){n.fail(new Error("Aborted to load the image."))},i.onerror=function(){n.fail(new Error("Failed to load the image."))},B.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(B.navigator.userAgent)&&(i.crossOrigin="anonymous"),i.alt=a.name,i.src=t.url}},{key:"draw",value:function(t){var n=this,a=t.naturalWidth,i=t.naturalHeight,m=t.rotate,c=m===void 0?0:m,d=t.scaleX,l=d===void 0?1:d,o=t.scaleY,v=o===void 0?1:o,f=this.file,s=this.image,u=this.options,y=document.createElement("canvas"),b=y.getContext("2d"),U=Math.abs(c)%180===90,$=(u.resize==="contain"||u.resize==="cover")&&S(u.width)&&S(u.height),C=Math.max(u.maxWidth,0)||1/0,O=Math.max(u.maxHeight,0)||1/0,I=Math.max(u.minWidth,0)||0,T=Math.max(u.minHeight,0)||0,E=a/i,g=u.width,w=u.height;if(U){var Z=[O,C];C=Z[0],O=Z[1];var ee=[T,I];I=ee[0],T=ee[1];var te=[w,g];g=te[0],w=te[1]}$&&(E=g/w);var ne=q({aspectRatio:E,width:C,height:O},"contain");C=ne.width,O=ne.height;var re=q({aspectRatio:E,width:I,height:T},"cover");if(I=re.width,T=re.height,$){var ie=q({aspectRatio:E,width:g,height:w},u.resize);g=ie.width,w=ie.height}else{var ae=q({aspectRatio:E,width:g,height:w}),oe=ae.width;g=oe===void 0?a:oe;var se=ae.height;w=se===void 0?i:se}g=Math.floor(Be(Math.min(Math.max(g,I),C))),w=Math.floor(Be(Math.min(Math.max(w,T),O)));var Ce=-g/2,Oe=-w/2,Ie=g,Te=w,W=[];if($){var le=0,ue=0,H=a,N=i,de=q({aspectRatio:E,width:a,height:i},{contain:"cover",cover:"contain"}[u.resize]);H=de.width,N=de.height,le=(a-H)/2,ue=(i-N)/2,W.push(le,ue,H,N)}if(W.push(Ce,Oe,Ie,Te),U){var fe=[w,g];g=fe[0],w=fe[1]}y.width=g,y.height=w,G(u.mimeType)||(u.mimeType=f.type);var ce="transparent";f.size>u.convertSize&&u.convertTypes.indexOf(u.mimeType)>=0&&(u.mimeType="image/jpeg");var me=u.mimeType==="image/jpeg";if(me&&(ce="#fff"),b.fillStyle=ce,b.fillRect(0,0,g,w),u.beforeDraw&&u.beforeDraw.call(this,b,y),!this.aborted&&(b.save(),b.translate(g/2,w/2),b.rotate(c*Math.PI/180),b.scale(l,v),b.drawImage.apply(b,[s].concat(W)),b.restore(),u.drew&&u.drew.call(this,b,y),!this.aborted)){var ve=function(D){if(!n.aborted){var he=function(M){return n.done({naturalWidth:a,naturalHeight:i,result:M})};if(D&&me&&u.retainExif&&n.exif&&n.exif.length>0){var pe=function(M){return he(we(xe(Ze(M,n.exif),u.mimeType)))};if(D.arrayBuffer)D.arrayBuffer().then(pe).catch(function(){n.fail(new Error("Failed to read the compressed image with Blob.arrayBuffer()."))});else{var k=new Q;n.reader=k,k.onload=function(z){var M=z.target;pe(M.result)},k.onabort=function(){n.fail(new Error("Aborted to read the compressed image with FileReader."))},k.onerror=function(){n.fail(new Error("Failed to read the compressed image with FileReader."))},k.onloadend=function(){n.reader=null},k.readAsArrayBuffer(D)}}else he(D)}};y.toBlob?y.toBlob(ve,u.mimeType,u.quality):ve(we(y.toDataURL(u.mimeType,u.quality)))}}},{key:"done",value:function(t){var n=t.naturalWidth,a=t.naturalHeight,i=t.result,m=this.file,c=this.image,d=this.options;if(R&&c.src.indexOf("blob:")===0&&R.revokeObjectURL(c.src),i)if(d.strict&&!d.retainExif&&i.size>m.size&&d.mimeType===m.type&&!(d.width>n||d.height>a||d.minWidth>n||d.minHeight>a||d.maxWidth<n||d.maxHeight<a))i=m;else{var l=new Date;i.lastModified=l.getTime(),i.lastModifiedDate=l,i.name=m.name,i.name&&i.type!==m.type&&(i.name=i.name.replace(tt,Ve(i.type)))}else i=m;this.result=i,d.success&&d.success.call(this,i)}},{key:"fail",value:function(t){var n=this.options;if(n.error)n.error.call(this,t);else throw t}},{key:"abort",value:function(){this.aborted||(this.aborted=!0,this.reader?this.reader.abort():this.image.complete?this.fail(new Error("The compression process has been aborted.")):(this.image.onload=null,this.image.onabort()))}}],[{key:"noConflict",value:function(){return window.Compressor=nt,r}},{key:"setDefaults",value:function(t){P(ye,t)}}]),r}();const it={class:"answer-editor"},at={class:"delete-answer"},ot={class:"correct-selection"},st={__name:"ModifyAnswerComponent",props:["answerId"],setup(r){const e=r,t=J(),{editQuestion:n}=j(t);function a(){const i=n.value.answers.findIndex(m=>m.id===e.answerId);n.value.answers.splice(i,1)}return(i,m)=>(x(),A("div",it,[h("div",at,[h("button",{class:"button red",onClick:m[0]||(m[0]=c=>a())},m[3]||(m[3]=[h("span",{class:"but-text"},"X",-1)]))]),L(h("input",{type:"textbox",name:"title","onUpdate:modelValue":m[1]||(m[1]=c=>p(n).answers.find(d=>d.id===e.answerId).text=c),placeholder:"Answer text"},null,512),[[V,p(n).answers.find(c=>c.id===e.answerId).text]]),h("div",ot,[m[4]||(m[4]=h("span",null,"Correct",-1)),L(h("input",{type:"checkbox","onUpdate:modelValue":m[2]||(m[2]=c=>p(n).answers.find(d=>d.id===e.answerId).correct=c)},null,512),[[De,p(n).answers.find(c=>c.id===e.answerId).correct]])])]))}},lt=Y(st,[["__scopeId","data-v-410ee6a6"]]),ut={class:"question"},dt={class:"question-data"},ft={class:"question-title"},ct={class:"question-image"},mt={key:0,class:"image"},vt=["src"],ht={class:"answers"},pt={class:"buttons"},bt={__name:"ModifyQuestionComponent",props:["questionId"],setup(r){const e=_(Re),t=_(Me),n=r,a=J();a.editQuestion=a.questions[a.index];const{editQuestion:i}=j(a);function m(){document.getElementById("fileUpload").click()}function c(){let v=-1;e.find(i.value.id)==null?v=Math.max(...e.all().map(s=>s.number))+1:v=e.find(i.value.id).number;const f=e.where("number",Number(i.value.number)).first();i.value.number<1?e.where("number",1).first()===null&&(i.value.number=1):f!==null&&(i.value.number=v)}function d(){i.value.answers=i.value.answers.concat(t.make({questionId:n.questionId}))}function l(){c(),t.where("questionId",n.questionId).delete(),e.save(i.value)}function o(v){if(v.target.files[0]!==void 0){const f=v.target.files[0];new rt(f,{maxWidth:600,convertSize:1e5,convertTypes:["image/png","image/webp"],success(s){var u=new FileReader;u.readAsDataURL(s),u.onloadend=function(){var y=u.result;i.value.image=y}},error(s){console.log(s.message)}})}}return(v,f)=>(x(),A("div",ut,[h("div",dt,[h("div",ft,[L(h("input",{type:"number",name:"number","onUpdate:modelValue":f[0]||(f[0]=s=>p(i).number=s)},null,512),[[V,p(i).number]]),L(h("input",{type:"text",name:"title","onUpdate:modelValue":f[1]||(f[1]=s=>p(i).question=s),placeholder:"Question title"},null,512),[[V,p(i).question]])]),h("div",ct,[h("input",{id:"fileUpload",type:"file",accept:"image/*",onChange:f[2]||(f[2]=s=>o(s)),hidden:""},null,32),h("button",{class:"image-upload button",onClick:f[3]||(f[3]=s=>m())},f[7]||(f[7]=[h("span",{class:"but-text"},"Upload image",-1)])),p(i).image!==""?(x(),A("button",{key:0,class:"image-upload button red",onClick:f[4]||(f[4]=s=>p(i).image="")},f[8]||(f[8]=[h("span",{class:"but-text"},"Delete image",-1)]))):X("",!0)])]),p(i).image!==""?(x(),A("div",mt,[h("img",{src:p(i).image},null,8,vt)])):X("",!0),h("div",ht,[(x(!0),A(qe,null,Fe(p(i).answers,s=>(x(),Ue(lt,{answerId:s.id,key:s.id},null,8,["answerId"]))),128))]),h("div",pt,[h("button",{class:"button",onClick:f[5]||(f[5]=s=>l())},f[9]||(f[9]=[h("span",{class:"but-text"},"Save question",-1)])),h("button",{class:"button green",onClick:f[6]||(f[6]=s=>d())},f[10]||(f[10]=[h("span",{class:"but-text"},"Add answer",-1)]))])]))}},gt=Y(bt,[["__scopeId","data-v-9c2607d0"]]),wt={class:"edit"},yt={class:"edit-container"},xt={class:"edit-controls"},Bt={class:"question-buttons"},Rt={__name:"EditView",setup(r){const e=_(Re),t=J();e.where("showResults",!1).update({showResults:!1}),t.index=0,t.showMobileMenu=!1,t.viewMode=!1,t.editMode=!0,t.questions=e.with("answers").get(),e.all().length===0&&(t.questions=[e.make()]);const{index:n}=j(t),{questions:a}=j(t);function i(){const l=Math.max(...a.value.map(o=>o.number))+1;a.value.push(e.make({number:l}))}function m(){e.destroy(a.value[n.value].id),a.value.splice(n.value,1),t.previous(),e.all().length===0&&(t.questions=[e.make()])}function c(){let l=JSON.parse(JSON.stringify(e.with("answers").get()));l.forEach(function(o,v){o.answers.forEach(function(f,s){o.answers[s]={text:f.text,correct:f.correct}}),l[v]={number:o.number,question:o.question,image:o.image,answers:o.answers}}),l=l.sort((o,v)=>o.number-v.number),d(JSON.stringify(l,null,2),"text/json","questions.json")}function d(l,o,v){var f=new Blob([l],{type:o}),s=document.createElement("a");s.download=v,s.href=URL.createObjectURL(f),s.dataset.downloadurl=[o,s.download,s.href].join(":"),s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s),setTimeout(function(){URL.revokeObjectURL(s.href)},1500)}return(l,o)=>(x(),A("div",wt,[o[6]||(o[6]=h("h1",null,"Edit question sets",-1)),o[7]||(o[7]=h("p",{class:"note"}," NOTE: Remember to save each question you modify or your changes will be lost. ",-1)),h("div",yt,[p(t).questions.length>=1?(x(),Ue(gt,{questionId:p(a)[p(n)].id,key:p(a)[p(n)].id},null,8,["questionId"])):X("",!0),h("div",xt,[h("div",Bt,[h("button",{class:"button red",onClick:o[0]||(o[0]=v=>m())},o[3]||(o[3]=[h("span",{class:"but-text"},"Delete question",-1)])),h("button",{class:"button",onClick:o[1]||(o[1]=v=>c())},o[4]||(o[4]=[h("span",{class:"but-text"},"Download questions",-1)])),h("button",{class:"button green",onClick:o[2]||(o[2]=v=>i())},o[5]||(o[5]=[h("span",{class:"but-text"},"Add question",-1)]))]),je(Le)])])]))}},At=Y(Rt,[["__scopeId","data-v-31db9fea"]]);export{At as default};
