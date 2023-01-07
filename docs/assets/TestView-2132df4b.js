import{_ as y,u as M,a as S,s as C,i as m,r as V,o as d,c as f,b as o,w as h,v as I,k as q,d as l,f as N,e as Q,g as R,Q as T,p as B,h as E}from"./index-ff5dabe8.js";import{Q as U}from"./QuestionComponent-f3485aa0.js";import{Q as $}from"./QuestionControlComponent-409f169a.js";const i=c=>(B("data-v-386b48bb"),c=c(),E(),c),A={class:"view-container"},D={key:0,class:"test-selector"},j=i(()=>o("h1",null,"Create your own test:",-1)),z={class:"form"},F=i(()=>o("span",null,"Select number of questions to test:",-1)),G={class:"form"},H=i(()=>o("span",null," Select maximum number of answers to be shown per question (0 to show all) ",-1)),J={class:"form"},K=i(()=>o("span",null," Do you want to use statistics to prefer questions where you make mistakes more often? ",-1)),L=i(()=>o("span",{class:"but-text"},"Start",-1)),O=[L],P={key:1,class:"test-container"},W={__name:"TestView",setup(c){const r=M(T),u=S();r.where("showResults",!0).update({showResults:!1}),u.index=0,u.showMobileMenu=!1,u.viewMode=!1,u.editMode=!1;const{index:w}=C(u),{questions:p}=C(u),s=m(r.all().length),a=m(4),v=m(!0),_=m(!1);r.all().length===0&&V.push("/");function x(){const n=r.with("answers").get();v.value?n.sort((e,t)=>e.numIncorrect+e.numCorrect===0&&t.numIncorrect+t.numCorrect!==0||e.numIncorrect+e.numCorrect!==0&&t.numIncorrect+t.numCorrect===0?e.numIncorrect+e.numCorrect<t.numIncorrect+t.numCorrect?-1:1:e.numIncorrect!==t.numIncorrect?e.numIncorrect>t.numIncorrect?-1:1:e.numCorrect!==t.numCorrect?e.numCorrect<t.numCorrect?-1:1:Math.random()>.5?1:-1):n.sort((e,t)=>Math.random()>.5?1:-1),s.value>=0&&(n.length=s.value,n.sort((e,t)=>Math.random()>.5?1:-1)),n.forEach(function(e){let t=0;n.sort((b,X)=>Math.random()>.5?1:-1),a.value>0&&a.value<=e.answers.length&&(e.answers.length=a.value),e.answers.forEach(function(b){b.correct&&t++}),r.save({id:e.id,maxScore:t})}),u.questions=n,_.value=!_.value}function g(){s.value>r.all().length?s.value=r.all().length:s.value<0&&(s.value=1)}function k(){s.value<0&&(s.value=0)}return(n,e)=>(d(),f("div",A,[_.value?(d(),f("div",P,[l(p).length>=1?(d(),N(U,{question:l(p)[l(w)],key:l(p)[l(w)].id},null,8,["question"])):Q("",!0),R($)])):(d(),f("div",D,[j,o("div",z,[F,h(o("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=t=>s.value=t),onInput:e[1]||(e[1]=t=>g())},null,544),[[I,s.value]])]),o("div",G,[H,h(o("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=t=>a.value=t),onInput:e[3]||(e[3]=t=>k())},null,544),[[I,a.value]])]),o("div",J,[K,h(o("input",{type:"checkbox","onUpdate:modelValue":e[4]||(e[4]=t=>v.value=t)},null,512),[[q,v.value]])]),o("button",{class:"button",onClick:e[5]||(e[5]=t=>x())},O)]))]))}},te=y(W,[["__scopeId","data-v-386b48bb"]]);export{te as default};