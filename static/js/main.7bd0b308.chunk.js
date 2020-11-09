(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a(1),n=a.n(s),c=a(4),i=a.n(c),o=(a(12),a(2)),l=a.p+"static/media/usa-logo-white.8f76e1a6.svg";var p=function(){return Object(r.jsx)("header",{className:"header",children:Object(r.jsx)("img",{className:"logo",src:l,alt:"Around the US logo"})})},u=a(5),d=a(6),j=new(function(){function e(t){var a=t.baseUrl,r=t.headers;Object(u.a)(this,e),this._baseUrl=a,this._headers=r}return Object(d.a)(e,[{key:"getAppInfo",value:function(){return Promise.all([this.getUserInfo(),this.getCardList()])}},{key:"getCardList",value:function(){return fetch(this._baseUrl+"/cards",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error! "+e.statusText)})).catch((function(e){return console.log(e)}))}},{key:"getUserInfo",value:function(){return fetch(this._baseUrl+"/users/me",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error! "+e.statusText)})).catch((function(e){return console.log(e)}))}},{key:"addCard",value:function(e){var t=e.title,a=e.url;return fetch(this._baseUrl+"/cards",{headers:this._headers,method:"POST",body:JSON.stringify({name:t,link:a})}).then((function(e){return e.ok?e.json():Promise.reject("Error! "+e.statusText)}))}},{key:"removeCard",value:function(e){return fetch(this._baseUrl+"/cards/"+e,{headers:this._headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject("Error! "+e.statusText)}))}},{key:"cardLikeAdd",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{headers:this._headers,method:"PUT"}).then((function(e){return e.ok?e.json():Promise.reject("Error! "+e.statusText)}))}},{key:"cardLikeRemove",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{headers:this._headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject("Error! "+e.statusText)}))}},{key:"setUserInfo",value:function(e){var t=e.name,a=e.title;return fetch(this._baseUrl+"/users/me",{headers:this._headers,method:"PATCH",body:JSON.stringify({name:t,about:a})}).then((function(e){return e.ok?e.json():Promise.reject("Error! "+e.statusText)}))}},{key:"setUserAvatar",value:function(e){return fetch(this._baseUrl+"/users/me/avatar",{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Error! "+e.statusText)}))}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-5",headers:{authorization:"095d2fb7-24e6-4afa-94ea-68b60bd7e290","Content-Type":"application/json"}});var h=function(e){return Object(r.jsxs)("li",{className:"photo-grid__item",onClick:function(){e.onCardClick(e.card)},children:[Object(r.jsx)("div",{className:"photo-grid__image",style:{backgroundImage:"url(".concat(e.link,")")}}),Object(r.jsx)("button",{className:"photo-grid__remove"}),Object(r.jsxs)("div",{className:"photo-grid__title-container",children:[Object(r.jsx)("h2",{className:"photo-grid__title",children:e.name}),Object(r.jsxs)("div",{className:"photo-grid__like-wrapper",children:[Object(r.jsx)("button",{className:"photo-grid__like"}),Object(r.jsx)("p",{className:"photo-grid__like-count",children:e.likes.length})]})]})]})};var _=function(e){var t=e.handleEditAvatarClick,a=e.handleEditProfileClick,s=e.handleAddPlaceClick,c=e.handleCardClick,i=n.a.useState(),l=Object(o.a)(i,2),p=l[0],u=l[1],d=n.a.useState(),_=Object(o.a)(d,2),m=_[0],b=_[1],f=n.a.useState(),O=Object(o.a)(f,2),x=O[0],g=O[1],v=n.a.useState([]),N=Object(o.a)(v,2),k=N[0],C=N[1];return n.a.useEffect((function(){j.getUserInfo().then((function(e){u(e.name),g(e.avatar),b(e.title)})).catch((function(e){return console.log(e)}))}),[]),n.a.useEffect((function(){j.getCardList().then((function(e){C(e.map((function(e){return{link:e.link,name:e.name,likes:e.likes,_id:e._id}})))})).catch((function(e){return console.log(e)}))}),[]),Object(r.jsxs)("main",{children:[Object(r.jsxs)("section",{className:"profile",children:[Object(r.jsxs)("div",{className:"profile__user-container",children:[Object(r.jsxs)("div",{className:"profile__avatar-container",children:[Object(r.jsx)("img",{className:"profile__user-avatar",style:{backgroundImage:"url(".concat(x,")")},alt:p}),Object(r.jsx)("button",{className:"profile__user-avatar_overlay",onClick:t})]}),Object(r.jsxs)("div",{className:"profile__user-info",children:[Object(r.jsx)("h1",{className:"profile__user-name",children:p}),Object(r.jsx)("p",{className:"profile__user-about",children:m}),Object(r.jsx)("button",{className:"profile__edit-button",onClick:a})]})]}),Object(r.jsx)("button",{className:"profile__add-button",onClick:s})]}),Object(r.jsx)("section",{children:Object(r.jsx)("ul",{className:"photo-grid",children:k.map((function(e,t){return Object(r.jsx)(h,{card:e,name:e.name,link:e.link,likes:e.likes,_id:e._id,owner:e.owner,onCardClick:function(){return c(e.link,e.name)}},t)}))})})]})};var m=function(){return Object(r.jsx)("footer",{className:"footer",children:Object(r.jsx)("p",{className:"footer__text",children:"\xa9 2020 Around The U.S."})})};var b=function(e){return Object(r.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(r.jsxs)("div",{className:"popup__container popup__profile-wrapper",children:[Object(r.jsx)("button",{className:"popup__close-button",onClick:e.onClose}),Object(r.jsxs)("form",{action:"#",className:"popup__form",children:[Object(r.jsx)("h3",{className:"popup__heading",children:e.title}),e.children,Object(r.jsx)("input",{type:"submit",className:"popup__button",value:"Save",disabled:!0})]})]})})};var f=function(e){var t=e.isOpen,a=e.onClose,s=e.link,n=e.name;return Object(r.jsx)("div",{className:"popup popup_type_display-image ".concat(t?"popup_opened":""),children:Object(r.jsxs)("div",{className:"popup__image-wrapper",children:[Object(r.jsxs)("figure",{className:"popup__figure",children:[Object(r.jsx)("img",{className:"popup__image",src:s,alt:n}),Object(r.jsx)("figcaption",{className:"popup__image-caption",children:n})]}),Object(r.jsx)("button",{className:"popup__close-button",onClick:a})]})})};var O=function(e){var t=n.a.useState(!1),a=Object(o.a)(t,2),s=a[0],c=a[1],i=n.a.useState(!1),l=Object(o.a)(i,2),u=l[0],d=l[1],j=n.a.useState(!1),h=Object(o.a)(j,2),O=h[0],x=h[1],g=n.a.useState(!1),v=Object(o.a)(g,2),N=v[0],k=v[1],C=n.a.useState(""),y=Object(o.a)(C,2),E=y[0],P=y[1],U=n.a.useState(""),S=Object(o.a)(U,2),T=S[0],L=S[1],A=function(){x(!1),c(!1),d(!1),k(!1)};return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsxs)("div",{className:"page__container",children:[Object(r.jsx)(p,{}),Object(r.jsx)(_,{handleEditAvatarClick:function(){x(!0)},handleEditProfileClick:function(){c(!0)},handleAddPlaceClick:function(){d(!0)},handleCardClick:function(e,t){k(!0),P(e),L(t)}}),Object(r.jsx)(m,{})]}),Object(r.jsx)(b,{name:"edit-profile",title:"Edit Profile",isOpen:s,onClose:A,children:Object(r.jsxs)("fieldset",{className:"popup__info",children:[Object(r.jsxs)("div",{className:"popup__label",children:[Object(r.jsx)("input",{id:"profile-name",type:"text",name:"name",className:"popup__field popup__field_type_name",placeholder:"Name",required:!0,minLength:"2",maxLength:"40"}),Object(r.jsx)("span",{id:"profile-name-error",className:"popup__error"})]}),Object(r.jsxs)("div",{className:"popup__label",children:[Object(r.jsx)("input",{id:"profile-title",type:"text",name:"title",className:"popup__field popup__field_type_title",placeholder:"About me",required:!0,minLength:"2",maxLength:"200"}),Object(r.jsx)("span",{id:"profile-title-error",className:"popup__error"})]})]})}),Object(r.jsx)(b,{name:"edit-avatar",title:"Change profile picture",isOpen:O,onClose:A,children:Object(r.jsx)("fieldset",{className:"popup__info",children:Object(r.jsxs)("div",{className:"popup__label",children:[Object(r.jsx)("input",{id:"profile-avatar",type:"url",name:"avatar",className:"popup__field popup__field_type_url",placeholder:"Profile picture URL",required:!0}),Object(r.jsx)("span",{id:"profile-avatar-error",className:"popup__error"})]})})}),Object(r.jsx)(b,{name:"delete-card",title:"Are your sure?",children:Object(r.jsx)("h3",{className:"popup__heading popup__heading_type_no-inputs",children:"Are you sure?"})}),Object(r.jsx)(b,{name:"add-card",title:"New Place",isOpen:u,onClose:A,children:Object(r.jsxs)("fieldset",{className:"popup__info",children:[Object(r.jsxs)("div",{className:"popup__label",children:[Object(r.jsx)("input",{id:"card-title",type:"text",name:"title",className:"popup__field popup__field_type_card-title",placeholder:"Title",required:!0,minLength:"1",maxLength:"30"}),Object(r.jsx)("span",{id:"card-title-error",className:"popup__error"})]}),Object(r.jsxs)("div",{className:"popup__label",children:[Object(r.jsx)("input",{id:"card-url",type:"url",name:"url",className:"popup__field popup__field_type_url",placeholder:"Image link",required:!0}),Object(r.jsx)("span",{id:"card-url-error",className:"popup__error"})]})]})}),Object(r.jsx)(f,{onClose:A,isOpen:N,link:E,name:T})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),r(e),s(e),n(e),c(e)}))};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),x()}},[[13,1,2]]]);
//# sourceMappingURL=main.7bd0b308.chunk.js.map