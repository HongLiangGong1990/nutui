import{c as _}from"./mobile.js";import{_ as i}from"./index.js";import{r as d,e as c,j as t,k as e,C as l,D as m,g as n,o as f,l as a}from"./vendor.js";const{createDemo:h}=_("drag"),y=h({setup(){function o(){return document.documentElement.clientWidth-300-9}function p(){return document.documentElement.clientHeight-559}return{right:o,bottom:p}}}),r=o=>(l("data-v-725c58ea"),o=o(),m(),o),x={class:"demo full"},D=r(()=>n("h2",null,"\u57FA\u7840\u7528\u6CD5",-1)),v=a("\u89E6\u6478\u79FB\u52A8"),F=r(()=>n("h2",{style:{top:"30px",position:"relative"}},"\u9650\u5236\u62D6\u62FD\u65B9\u5411",-1)),g=a("\u53EA\u80FDX\u8F74\u62D6\u62FD"),b=a("\u53EA\u80FDY\u8F74\u62D6\u62FD"),A=r(()=>n("h2",{style:{top:"60px",position:"relative"}},"\u81EA\u52A8\u5438\u8FB9",-1)),B=a("\u62D6\u52A8\u6211"),C=r(()=>n("h2",{style:{top:"90px",position:"relative"}},"\u9650\u5236\u62D6\u52A8\u8FB9\u754C",-1)),E=r(()=>n("div",{class:"drag-boundary"},null,-1)),j=a("\u9650\u5236\u62D6\u62FD\u8FB9\u754C");function I(o,p,$,k,N,S){const u=d("nut-button"),s=d("nut-drag");return f(),c("div",x,[D,t(s,{style:{top:"120px",left:"8px"}},{default:e(()=>[t(u,{type:"primary"},{default:e(()=>[v]),_:1})]),_:1}),F,t(s,{direction:"x",style:{top:"200px",left:"8px"}},{default:e(()=>[t(u,{type:"primary"},{default:e(()=>[g]),_:1})]),_:1}),t(s,{direction:"y",style:{top:"200px",right:"50px"}},{default:e(()=>[t(u,{type:"primary"},{default:e(()=>[b]),_:1})]),_:1}),A,t(s,{direction:"x",attract:!0,style:{top:"275px",left:"8px"}},{default:e(()=>[t(u,{type:"primary"},{default:e(()=>[B]),_:1})]),_:1}),C,E,t(s,{boundary:{top:361,left:9,bottom:o.bottom(),right:o.right()},style:{top:"400px",left:"50px"}},{default:e(()=>[t(u,{type:"primary"},{default:e(()=>[j]),_:1})]),_:1},8,["boundary"])])}var T=i(y,[["render",I],["__scopeId","data-v-725c58ea"]]);export{T as default};