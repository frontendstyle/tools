import{d as _,n as c,c as i,w as p,v as f,o as m,i as n,h as t,x as d,f as v,y as x}from"./index-d4d1dfb2.js";import{f as g}from"./convert-ae87c221.js";import{_ as h}from"./Statistic-9be13641.js";function b(o){return new TextEncoder().encode(o).buffer.byteLength}const B={"mt-5":"",flex:""},z=_({__name:"text-statistics",setup(o){const e=c("");return(y,a)=>{const s=x,l=h,u=f;return m(),i(u,null,{default:p(()=>[n(s,{value:t(e),"onUpdate:value":a[0]||(a[0]=r=>d(e)?e.value=r:null),multiline:"",placeholder:"Your text...",rows:"5"},null,8,["value"]),v("div",B,[n(l,{label:"Character count",value:t(e).length,"flex-1":""},null,8,["value"]),n(l,{label:"Word count",value:t(e)===""?0:t(e).split(/\s+/).length,"flex-1":""},null,8,["value"]),n(l,{label:"Line count",value:t(e)===""?0:t(e).split(/\r\n|\r|\n/).length,"flex-1":""},null,8,["value"]),n(l,{label:"Byte size",value:t(g)(t(b)(t(e))),"flex-1":""},null,8,["value"])])]),_:1})}}});export{z as default};