import{_ as i,u,Q as l}from"./UploadJsonComponent-f26af479.js";import{u as c,s as r,o as a,c as p,b as o,S as _,e as d,d as m}from"./viewer-56c5588e.js";import{Q as f}from"./QuestionComponent-765faf6a.js";import{Q as w}from"./QuestionControlComponent-13d36796.js";import{r as h}from"./index-a5b840ce.js";const x={class:"explore-container"},b={__name:"ExploreView",setup(Q){const s=u(l),e=c();s.where("showResults",!1).update({showResults:!0}),e.index=0,e.showMobileMenu=!1,e.viewMode=!0,e.editMode=!1,e.questions=s.with("answers").get();const{index:n}=r(e),{questions:t}=r(e);return s.all().length===0&&h.push("/"),(V,q)=>(a(),p("div",x,[o(t).length>=1?(a(),_(f,{question:o(t)[o(n)],key:o(t)[o(n)].id},null,8,["question"])):d("",!0),m(w)]))}},C=i(b,[["__scopeId","data-v-2a7b0bd7"]]);export{C as default};
