import{d as y,n as i,b as x,e as N,f as a,i as l,w,v as U,o as R,h as n,x as u}from"./index-d4d1dfb2.js";import{_ as X}from"./InputCopyable.vue_vue_type_script_setup_true_lang-adafc567.js";import{_ as Y}from"./InputNumber-0805157e.js";import"./use-locale-bb735d99.js";import"./use-form-item-d41cebbd.js";import"./Button-510b489f.js";import"./Remove-e53214a0.js";const F={style:{flex:"0 0 100%"}},k={style:{margin:"0 auto","max-width":"600px"}},B=a("div",{"mb-3":"","sm:hidden":""}," What is ",-1),S={flex:"","gap-2":""},T=a("div",{hidden:"","pt-1":"","sm:block":"",style:{"min-width":"48px"}}," What is ",-1),W=a("div",{"min-w-fit":"","pt-1":""}," % of ",-1),C=a("div",{"mb-3":"","sm:hidden":""}," X is what percent of Y ",-1),D={flex:"","gap-2":""},I=a("div",{hidden:"","min-w-fit":"","pt-1":"","sm:block":""}," is what percent of ",-1),V=a("div",{"mb-3":""}," What is the percentage increase/decrease ",-1),E={flex:"","gap-2":""},K=y({__name:"percentage-calculator",setup($){const r=i(),v=i(),_=x(()=>r.value===void 0||v.value===void 0?"":(r.value/100*v.value).toString()),p=i(),m=i(),f=x(()=>{if(p.value===void 0||m.value===void 0)return"";const o=100*p.value/m.value;return!Number.isFinite(o)||Number.isNaN(o)?"":o.toString()}),s=i(),c=i(),b=x(()=>{if(s.value===void 0||c.value===void 0)return"";const o=(c.value-s.value)/s.value*100;return!Number.isFinite(o)||Number.isNaN(o)?"":o.toString()});return(o,e)=>{const d=Y,h=X,g=U;return R(),N("div",F,[a("div",k,[l(g,{"mb-3":""},{default:w(()=>[B,a("div",S,[T,l(d,{value:n(r),"onUpdate:value":e[0]||(e[0]=t=>u(r)?r.value=t:null),"data-test-id":"percentageX",placeholder:"X"},null,8,["value"]),W,l(d,{value:n(v),"onUpdate:value":e[1]||(e[1]=t=>u(v)?v.value=t:null),"data-test-id":"percentageY",placeholder:"Y"},null,8,["value"]),l(h,{value:n(_),"onUpdate:value":e[2]||(e[2]=t=>u(_)?_.value=t:null),"data-test-id":"percentageResult",readonly:"",placeholder:"Result",style:{"max-width":"150px"}},null,8,["value"])])]),_:1}),l(g,{"mb-3":""},{default:w(()=>[C,a("div",D,[l(d,{value:n(p),"onUpdate:value":e[3]||(e[3]=t=>u(p)?p.value=t:null),"data-test-id":"numberX",placeholder:"X"},null,8,["value"]),I,l(d,{value:n(m),"onUpdate:value":e[4]||(e[4]=t=>u(m)?m.value=t:null),"data-test-id":"numberY",placeholder:"Y"},null,8,["value"]),l(h,{value:n(f),"onUpdate:value":e[5]||(e[5]=t=>u(f)?f.value=t:null),"data-test-id":"numberResult",readonly:"",placeholder:"Result",style:{"max-width":"150px"}},null,8,["value"])])]),_:1}),l(g,{"mb-3":""},{default:w(()=>[V,a("div",E,[l(d,{value:n(s),"onUpdate:value":e[6]||(e[6]=t=>u(s)?s.value=t:null),"data-test-id":"numberFrom",placeholder:"From"},null,8,["value"]),l(d,{value:n(c),"onUpdate:value":e[7]||(e[7]=t=>u(c)?c.value=t:null),"data-test-id":"numberTo",placeholder:"To"},null,8,["value"]),l(h,{value:n(b),"onUpdate:value":e[8]||(e[8]=t=>u(b)?b.value=t:null),"data-test-id":"percentageIncreaseDecrease",readonly:"",placeholder:"Result",style:{"max-width":"150px"}},null,8,["value"])])]),_:1})])])}}});export{K as default};