import{c as o,T as t}from"./mobile.6e1c71e3.js";import{r as s,o as i,e as a,j as n,g as e}from"./vendor.ab88405c.js";import"./index.8be0a7bb.js";const{createDemo:l}=o("toast"),r=l({setup:()=>({textToast:o=>{t.text(o)},successToast:o=>{t.success(o)},errorToast:o=>{t.fail(o)},warningToast:o=>{t.warn(o)},loadingToast:o=>{t.loading(o)},NoToast:o=>{t.text(o,{duration:0})},NoLoading:o=>{t.loading(o,{cover:!0})}})}),c={class:"demo"},T=e("h2",null,"基本用法",-1),d=e("h2",null,"Toast不消失",-1),k=e("h2",null,"Loading带透明遮罩",-1);r.render=function(o,t,e,l,r,u){const g=s("nut-cell");return i(),a("div",c,[T,n(g,{title:"Text 文字提示","is-link":"",onClick:t[0]||(t[0]=t=>o.textToast("网络失败，请稍后再试~"))}),n(g,{title:"Success 成功提示","is-link":"",onClick:t[1]||(t[1]=t=>o.successToast("成功提示"))}),n(g,{title:"Error 失败提示","is-link":"",onClick:t[2]||(t[2]=t=>o.errorToast("失败提示"))}),n(g,{title:"Warning 警告提示","is-link":"",onClick:t[3]||(t[3]=t=>o.warningToast("警告提示"))}),n(g,{title:"Loading 加载提示","is-link":"",onClick:t[4]||(t[4]=t=>o.loadingToast("加载中"))}),d,n(g,{title:"Toast 文字提示不消失","is-link":"",onClick:t[5]||(t[5]=t=>o.NoToast("Toast不消失~"))}),k,n(g,{title:"带文案+带透明遮罩+自动消失","is-link":"",onClick:t[6]||(t[6]=t=>o.NoLoading("加载中~"))})])};export{r as default};