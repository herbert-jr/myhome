(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3638:function(e,t,r){Promise.resolve().then(r.bind(r,5757)),Promise.resolve().then(r.t.bind(r,9715,23)),Promise.resolve().then(r.t.bind(r,4869,23)),Promise.resolve().then(r.t.bind(r,5343,23)),Promise.resolve().then(r.t.bind(r,1584,23)),Promise.resolve().then(r.t.bind(r,1453,23)),Promise.resolve().then(r.t.bind(r,6113,23)),Promise.resolve().then(r.t.bind(r,4788,23)),Promise.resolve().then(r.t.bind(r,4248,23)),Promise.resolve().then(r.t.bind(r,2439,23)),Promise.resolve().then(r.t.bind(r,2351,23)),Promise.resolve().then(r.t.bind(r,9899,23)),Promise.resolve().then(r.t.bind(r,6964,23)),Promise.resolve().then(r.t.bind(r,4724,23))},5757:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return formulario}});var n=r(7437),s=r(1396),o=r.n(s),i=r(9821),a=r.n(i),_=r(2265);let m={_origin:"https://api.emailjs.com"},validateParams=(e,t,r)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};let EmailJSResponseStatus=class EmailJSResponseStatus{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}};let sendPost=(e,t,r={})=>new Promise((n,s)=>{let o=new XMLHttpRequest;o.addEventListener("load",({target:e})=>{let t=new EmailJSResponseStatus(e);200===t.status||"OK"===t.text?n(t):s(t)}),o.addEventListener("error",({target:e})=>{s(new EmailJSResponseStatus(e))}),o.open("POST",m._origin+e,!0),Object.keys(r).forEach(e=>{o.setRequestHeader(e,r[e])}),o.send(t)}),findHTMLForm=e=>{let t;if(!(t="string"==typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t};var l={init:(e,t="https://api.emailjs.com")=>{m._userID=e,m._origin=t},send:(e,t,r,n)=>{let s=n||m._userID;return validateParams(s,e,t),sendPost("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:s,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"})},sendForm:(e,t,r,n)=>{let s=n||m._userID,o=findHTMLForm(r);validateParams(s,e,t);let i=new FormData(o);return i.append("lib_version","3.11.0"),i.append("service_id",e),i.append("template_id",t),i.append("user_id",s),sendPost("/api/v1.0/email/send-form",i)}},formulario=function(){let[e,t]=_.useState({name:"",email:"",message:""}),handleChange=r=>{t({...e,[r.target.name]:r.target.value})};return(0,n.jsx)("article",{className:a().container,children:(0,n.jsxs)("form",{action:"submit",className:a().form,onSubmit:r=>{if(r.preventDefault(),""===e.name||""===e.email||""===e.message){alert("Preencha todos os campos");return}let n={from_name:e.name,email:e.email,message:e.message};l.send("service_b61szqe","template_jyz3v6u",n,"3b70WthKfYyr75Bs9").then(e=>{alert("Mensagem enviada com sucesso!"),t({name:"",email:"",message:""})}).catch(e=>{alert("Ocorreu um erro ao enviar a mensagem")})},children:[(0,n.jsxs)("div",{className:a().form__group,children:[(0,n.jsx)("label",{htmlFor:"name",children:"Nome"}),(0,n.jsx)("input",{type:"text",name:"name",id:"name",onChange:handleChange,value:e.name})]}),(0,n.jsxs)("div",{className:a().form__group,children:[(0,n.jsx)("label",{htmlFor:"email",children:"Email"}),(0,n.jsx)("input",{type:"email",name:"email",id:"email",onChange:handleChange,value:e.email})]}),(0,n.jsxs)("div",{className:a().form__group,children:[(0,n.jsx)("label",{htmlFor:"message",children:"Mensagem"}),(0,n.jsx)("textarea",{name:"message",id:"message",onChange:handleChange,value:e.message})]}),(0,n.jsxs)("div",{className:a().form__group__social,children:[(0,n.jsx)("button",{children:"Enviar"}),(0,n.jsx)(o(),{href:"https://www.linkedin.com/in/herbert-marques-963136106/",target:"_blank",children:"LinkedIn"}),(0,n.jsx)(o(),{href:"https://github.com/herbert-jr",target:"_blank",children:"GitHub"})]})]})})}},6113:function(e){e.exports={container:"btn_container__tE1bS"}},4248:function(e){e.exports={card:"card_card__BNss6",card__content:"card_card__content__h4rPC",card__content__links:"card_card__content__links__iYW2B"}},5343:function(e){e.exports={contacts:"contacts_contacts__oNnfV"}},9821:function(e){e.exports={container:"form_container__QkABu",form:"form_form__I2HEr",form__group:"form_form__group__ynvuc",form__group__social:"form_form__group__social__aQGm_"}},1584:function(e){e.exports={hero:"hero_hero__r_kH8",hero__icons:"hero_hero__icons__kooig",arrow:"hero_arrow__x7Vqp"}},4788:function(e){e.exports={projects:"projects_projects__hpSgn",projects__content:"projects_projects__content__m5T30"}},1453:function(e){e.exports={resume:"resume_resume__Mfdkj",resume__content:"resume_resume__content__KwbDc"}},9899:function(e){e.exports={item:"si_item__TSJxd"}},2439:function(e){e.exports={skills:"skills_skills__xZbzo",skills__content:"skills_skills__content__kmSzV"}},2351:function(e){e.exports={container:"sb_container__8M7kp",container__list:"sb_container__list__CtwKH"}},4869:function(e){e.exports={container:"title_container__v7DcT"}},9715:function(e){e.exports={main:"page_main__ux7yf"}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),s=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,r){var n,_={},m=null,l=null;for(n in void 0!==r&&(m=""+r),void 0!==t.key&&(m=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,n)&&!a.hasOwnProperty(n)&&(_[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===_[n]&&(_[n]=t[n]);return{$$typeof:s,type:e,key:m,ref:l,props:_,_owner:i.current}}t.jsx=q,t.jsxs=q},7437:function(e,t,r){"use strict";e.exports=r(622)},1396:function(e,t,r){e.exports=r(4724)}},function(e){e.O(0,[929,971,864,744],function(){return e(e.s=3638)}),_N_E=e.O()}]);