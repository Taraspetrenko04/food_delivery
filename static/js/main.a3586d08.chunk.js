(this.webpackJsonpfood_delivery=this.webpackJsonpfood_delivery||[]).push([[0],{32:function(e,t,a){},36:function(e,t,a){e.exports=a(67)},45:function(e,t,a){},46:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"sidebarMobileOpen",(function(){return G})),a.d(n,"sidebarMobileClose",(function(){return z})),a.d(n,"setName",(function(){return B})),a.d(n,"setEmail",(function(){return x})),a.d(n,"setPassword",(function(){return W})),a.d(n,"setUsersList",(function(){return H})),a.d(n,"isNameValidTrue",(function(){return $})),a.d(n,"isNameValidFalse",(function(){return Z})),a.d(n,"isEmailValidTrue",(function(){return q})),a.d(n,"isEmailValidFalse",(function(){return Y})),a.d(n,"isPasswordValidTrue",(function(){return J})),a.d(n,"isPasswordValidFalse",(function(){return K})),a.d(n,"loggedIn",(function(){return Q})),a.d(n,"loggedOut",(function(){return X})),a.d(n,"isLoadingTrue",(function(){return ee})),a.d(n,"isLoadingFalse",(function(){return te})),a.d(n,"setMessage",(function(){return ae}));var r={};a.r(r),a.d(r,"isLoaded",(function(){return se})),a.d(r,"isLoadedFalse",(function(){return ce})),a.d(r,"setByCategory",(function(){return ue})),a.d(r,"showAllCategories",(function(){return de})),a.d(r,"onAddedToCard",(function(){return pe})),a.d(r,"onDecreasItem",(function(){return me})),a.d(r,"onDeleteItem",(function(){return ge}));var i={};a.r(i),a.d(i,"modalOpen",(function(){return Ne})),a.d(i,"modalClose",(function(){return Le})),a.d(i,"logIn",(function(){return je})),a.d(i,"logOut",(function(){return Te}));var o=a(0),l=a.n(o),s=a(23),c=a.n(s),u=(a(32),a(4)),d=a(14),p=a(2),m=a(18);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E={isOpen:!1,isLogged:!1,user:""},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MODAL_OPEN":return f({},e,{isOpen:!0});case"MODAL_CLOSE":return f({},e,{isOpen:!1});case"LOG_IN":return f({},e,{isLogged:!0,user:t.payload});case"LOG_OUT":return f({},e,{isLogged:!1,user:""});default:return e}};function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y={isMobileOpen:!1,email:"",password:"",userName:"",isValidName:!0,isValidEmail:!0,isValidPassword:!0,isLogged:!1,users:[],loading:!1,message:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIDEBAR_OPEN":return O({},e,{isMobileOpen:!0});case"SIDEBAR_CLOSE":return O({},e,{isMobileOpen:!1});case"SET_NAME":return O({},e,{userName:t.payload});case"SET_EMAIL":return O({},e,{email:t.payload});case"SET_PASSWORD":return O({},e,{password:t.payload});case"SET_USERS_LIST":return O({},e,{users:t.payload});case"IS_NAME_VALID_TRUE":return O({},e,{isValidName:!0});case"IS_NAME_VALID_FALSE":return O({},e,{isValidName:!1});case"IS_EMAIL_VALID_TRUE":return O({},e,{isValidEmail:!0});case"IS_EMAIL_VALID_FALSE":return O({},e,{isValidEmail:!1});case"IS_PASSWORD_VALID_TRUE":return O({},e,{isValidPassword:!0});case"IS_PASSWORD_VALID_FALSE":return O({},e,{isValidPassword:!1});case"LOGED-IN":return O({},e,{isLogged:!0});case"LOGED-OUT":return O({},e,{isLogged:!1});case"IS_LOADING_TRUE":return O({},e,{loading:!0});case"IS_LOADING_FALSE":return O({},e,{loading:!1});case"SET_MESSAGE":return O({},e,{message:t.payload});default:return e}},v=a(20);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(Object(a),!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j={food:[{id:1,title:"Pepsi",category:"drink",picture:"images/pepsi.png",price:5},{id:2,title:"Toscana",category:"pizza",picture:"images/toskana.jpg",price:15},{id:3,title:"Big Burger",category:"burger",picture:"images/bigMac.png",price:10},{id:4,title:"Chicken salad",category:"salad",picture:"images/chicken.png",price:12},{id:5,title:"Stella Artois",category:"drink",picture:"images/stellaartois.jpg",price:6},{id:6,title:"Gavai pizza",category:"pizza",picture:"images/gavai.jpg",price:15},{id:7,title:"Tasty Burger",category:"burger",picture:"images/bigTasty.png",price:8},{id:8,title:"Vegato salad",category:"salad",picture:"images/vegetable.png",price:9}],loading:!1,shoppingCard:[],orderTotal:0,locationHref:"NO LOCATION"};j.locationHref=window.location.href;var T=function(e,t,a){var n=e.food,r=e.shoppingCard,i=(e.orderTotal,t),o=n.find((function(e){return e.id===+i})),l=r.findIndex((function(e){return e.id===o.id})),s=r[l],c=function(e,t,a){return 0===t.count?[].concat(Object(v.a)(e.slice(0,a)),Object(v.a)(e.slice(a+1))):-1===a?[].concat(Object(v.a)(e),[t]):[].concat(Object(v.a)(e.slice(0,a)),[t],Object(v.a)(e.slice(a+1)))}(r,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,n=t.id,r=void 0===n?e.id:n,i=t.count,o=void 0===i?0:i,l=t.title,s=void 0===l?e.title:l,c=t.total,u=void 0===c?0:c;return{id:r,title:s,count:o+a,total:u+e.price*a}}(o,s,a),l);return L({},e,{shoppingCard:c,orderTotal:function(e){return e.reduce((function(e,t){return e+t.total}),0)}(c)})},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WINDOW_LOCATION":return console.log(t.payload),L({},e,{locationHref:t.payload});case"IS_LOADED_FALSE":return L({},e,{loading:!1});case"IS_LOADED":return L({},e,{loading:!0});case"SET_BY_CATEGORY":var a=t.payload,n=j.food.filter((function(e){return e.category===a}));return L({},e,{food:n});case"SHOW_ALL_CATEGORIES":if(e.food.length!==j.food.length)return L({},e,{food:j.food});case"ON_ADDED_TO_CARD":if(t.payload)return T(e,t.payload,1);case"ON_DECREASE_ITEM":if(t.payload)return T(e,t.payload,-1);case"ON_DELETE_ITEM":if(t.payload){var r=e.shoppingCard.find((function(e){return e.id===t.payload}));return T(e,t.payload,-r.count)}default:return e}};function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(Object(a),!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var C={order:[{id:1,title:"Pepsi",category:"drink",picture:"/images/pepsi.png",price:5},{id:2,title:"Toscana",category:"pizza",picture:"/images/toskana.jpg",price:15},{id:3,title:"Big Burger",category:"burger",picture:"/images/bigMac.png",price:10}],quantity:0,visible:!1,totalPrice:30},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_SHOPPING_CARD_OPEN":return S({},e,{visible:!0});default:return e}},P=Object(p.b)({modal:_,login:h,items:A,shoppingCard:I}),D=Object(p.c)(P),V=a(6),M=a(7),k=a(9),F=a(8),R=a(10),U=a(19),G=(a(45),a(46),function(){return{type:"SIDEBAR_OPEN"}}),z=function(){return{type:"SIDEBAR_CLOSE"}},B=function(e){return{type:"SET_NAME",payload:e}},x=function(e){return{type:"SET_EMAIL",payload:e}},W=function(e){return{type:"SET_PASSWORD",payload:e}},H=function(e){return{type:"SET_USERS_LIST",payload:e}},$=function(){return{type:"IS_NAME_VALID_TRUE"}},Z=function(){return{type:"IS_NAME_VALID_FALSE"}},q=function(){return{type:"IS_EMAIL_VALID_TRUE"}},Y=function(){return{type:"IS_EMAIL_VALID_FALSE"}},J=function(){return{type:"IS_PASSWORD_VALID_TRUE"}},K=function(){return{type:"IS_PASSWORD_VALID_FALSE"}},Q=function(){return{type:"LOGED-IN"}},X=function(){return{type:"LOGED-OUT"}},ee=function(){return{type:"IS_LOADING_TRUE"}},te=function(){return{type:"IS_LOADING_FALSE"}},ae=function(e){return{type:"SET_MESSAGE",payload:e}},ne=a(12),re=a(5),ie=Object(u.b)((function(e){return{isMobileOpen:e.login.isMobileOpen}}),(function(e){return{sidebarMobileOpen:Object(p.a)(n,e).sidebarMobileOpen}}))((function(e){return l.a.createElement("div",{className:"menu-button",onClick:e.sidebarMobileOpen},l.a.createElement(ne.a,{icon:re.a}))})),oe=(a(50),function(){return l.a.createElement("div",{className:"logo__wraper"},l.a.createElement("p",{alt:"food-delivery"},l.a.createElement(d.b,{to:"/",className:"logo__text"},"food delivery")))}),le=(a(52),function(e){return l.a.createElement("div",{className:"user__logged"},"Hello ",e.name)}),se=function(){return{type:"IS_LOADED"}},ce=function(){return{type:"IS_LOADED_FALSE"}},ue=function(e){return{type:"SET_BY_CATEGORY",payload:e}},de=function(){return{type:"SHOW_ALL_CATEGORIES"}},pe=function(e){return{type:"ON_ADDED_TO_CARD",payload:e}},me=function(e){return{type:"ON_DECREASE_ITEM",payload:e}},ge=function(e){return{type:"ON_DELETE_ITEM",payload:e}},fe=function(e){function t(){return Object(V.a)(this,t),Object(k.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.history,n=t.orderTotal,r=this.props,i=r.isLogged,o=r.userName,s=r.showAllCategories;return i&&(e=l.a.createElement(le,{name:o})),l.a.createElement("div",{className:"header__wrapper",onClick:function(){return s()}},l.a.createElement(ie,null),l.a.createElement(oe,null),e,l.a.createElement("div",{className:"header__card",onClick:function(){return a.push("/shopping-card")}},l.a.createElement(ne.a,{icon:re.g,className:"header__card-text"}),l.a.createElement("p",{className:"header__card-text"},"$",n)))}}]),t}(o.Component),Ee=Object(U.f)(Object(u.b)((function(e){return{userName:e.login.userName,isLogged:e.login.isLogged,orderTotal:e.items.orderTotal}}),(function(e){return{showAllCategories:Object(p.a)(r,e).showAllCategories}}))(fe)),_e=(a(53),Object(u.b)((function(e){return{isMobileOpen:e.login.isMobileOpen,isLogged:e.login.isLogged}}),(function(e){var t=Object(p.a)(n,e);return{sidebarMobileClose:t.sidebarMobileClose,loggedOut:t.loggedOut}}))((function(e){var t="side-bar__wrapper";e.isMobileOpen&&(t="side-bar__wrapper open");var a=null;return e.isLogged||(a=l.a.createElement("li",{onClick:e.sidebarMobileClose},l.a.createElement(d.b,{to:"/login"},"login"))),l.a.createElement("div",{className:t},l.a.createElement("ul",{className:"side-bar__list"},a,l.a.createElement("li",{onClick:function(){e.sidebarMobileClose(),e.loggedOut()}},"logout")))}))),be=(a(54),Object(u.b)((function(e){return{isMobileOpen:e.login.isMobileOpen}}),(function(e){return{sidebarMobileClose:Object(p.a)(n,e).sidebarMobileClose}}))((function(e){var t="back-drop__wrapper";return e.isMobileOpen&&(t="back-drop__wrapper open"),l.a.createElement("div",{className:t,onClick:e.sidebarMobileClose})}))),Oe=(a(55),a(56),function(e){function t(){return Object(V.a)(this,t),Object(k.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.props.setByCategory,t=function(t){var a=t.currentTarget.className;return e(a)};return l.a.createElement("div",{className:"filter__wrapper"},l.a.createElement("ul",null,l.a.createElement("li",{onClick:t,className:"drink",alt:"drink",name:"drink"},l.a.createElement(ne.a,{icon:re.i})),l.a.createElement("li",{onClick:t,className:"pizza"},l.a.createElement(ne.a,{icon:re.e})),l.a.createElement("li",{onClick:t,className:"burger"},l.a.createElement(ne.a,{icon:re.b})),l.a.createElement("li",{onClick:t,className:"salad"},l.a.createElement(ne.a,{icon:re.c}))))}}]),t}(o.Component)),ye=Object(u.b)((function(e){return{}}),(function(e){return{setByCategory:Object(p.a)(r,e).setByCategory}}))(Oe),he=(a(57),a(58),a(59),Object(u.b)((function(e){return{}}),(function(e){return{onAddedToCard:Object(p.a)(r,e).onAddedToCard}}))((function(e){var t=e.id,a=e.onAddedToCard;return l.a.createElement("button",{key:t,"data-key":t,className:"product-item__button",type:"button",onClick:function(e){a(e.currentTarget.getAttribute("data-key"))}},"Add to card")}))),ve=Object(U.f)((function(e){var t=e.item,a=t.id,n=t.title,r=t.category,i=t.picture,o=t.price;return l.a.createElement("div",{className:"product-item",onClick:function(t){"product-item__button"!==t.target.className&&e.history.push("/products/".concat(a))}},l.a.createElement("h2",{className:"product-item__title"},n),l.a.createElement("img",{alt:r,src:window.location.href+i,className:"product-item__picture"}),l.a.createElement("div",{className:"product-item__wrapper"},l.a.createElement(he,{id:a}),l.a.createElement("p",{className:"product-item__price"},"$ ",o)))})),Ne=function(){return{type:"MODAL_OPEN"}},Le=function(){return{type:"MODAL_CLOSE"}},je=function(e){return console.log("action: logIn"),{type:"LOG_IN",payload:e}},Te=function(){return{type:"LOG_OUT"}},Ae=Object(u.b)((function(e){return{loading:e.items.loading,food:e.items.food}}),(function(e){var t=Object(p.a)(i,e);return{isLoaded:t.isLoaded,isCardLoaded:t.isCardLoaded}}))((function(e){var t=e.food;return l.a.createElement("div",{className:"product-store"},l.a.createElement("ul",{className:"product-store__list"},t.map((function(e){return l.a.createElement("li",{style:{border:"none"},key:e.id},l.a.createElement(ve,{item:e}))}))))})),we=function(){return l.a.createElement("div",{className:"layout"},l.a.createElement(ye,null),l.a.createElement(Ae,null))},Se=(a(60),a(61),function(){return l.a.createElement("div",{className:"loadingio-spinner-spinner-y5wwe8fmwbh"},l.a.createElement("div",{className:"ldio-lorol8zh2ij"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)))}),Ce=function(e){function t(){var e,a;Object(V.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(k.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(r)))).timer=null,a}return Object(R.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.isLoaded;this.timer=setTimeout((function(){e()}),1300)}},{key:"componentWillUnmount",value:function(){var e=this.props.isLoadedFalse;clearTimeout(this.timer),e()}},{key:"render",value:function(){var e=this.props,t=e.productId,a=e.food,n=e.history,r=e.loading,i=e.locationHref,o=a.find((function(e){return e.id===+t})),s=o.title,c=o.price,u=o.picture,d=o.id,p=r?null:l.a.createElement(Se,null),m=r?l.a.createElement("img",{className:"product__card-img",alt:s,src:i+u}):null;return l.a.createElement("div",{className:"product__card"},l.a.createElement("div",{className:"product__card-box"},l.a.createElement("h1",{className:"product__card-title"},s),l.a.createElement("div",null,p,m),l.a.createElement("p",{className:"product__card-price"}," $ ",c),l.a.createElement("div",{className:"product__card-btn-wrapper"},l.a.createElement(he,{id:d}),l.a.createElement("button",{className:"product__card-btn",type:"button",onClick:function(){return n.push("/")}},"back"))))}}]),t}(o.Component),Ie=Object(U.f)(Object(u.b)((function(e){return{food:e.items.food,loading:e.items.loading,locationHref:e.items.locationHref}}),(function(e){var t=Object(p.a)(r,e);return{isLoaded:t.isLoaded,isLoadedFalse:t.isLoadedFalse}}))(Ce)),Pe=(a(62),function(e){function t(){var e,a;Object(V.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(k.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(r)))).timer=null,a}return Object(R.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setUsersList,a=e.isEmailValidTrue,n=e.isPasswordValidTrue,r=e.setEmail,i=e.setPassword,o=e.setMessage;a(),n(),o(""),r(""),i("");var l=JSON.parse(localStorage.getItem("users"));l&&t(l)}},{key:"componentWillUnmount",value:function(){var e=this.props;e.isLoadingTrue;(0,e.isLoadingFalse)(),clearTimeout(this.timer)}},{key:"render",value:function(){var e,t,a=this,n=this.props,r=n.email,i=n.password,o=n.users,s=n.setName,c=n.setEmail,u=n.setPassword,d=n.loading,p=n.history,m=n.isValidEmail,g=n.isValidPassword,f=n.isEmailValidTrue,E=n.isEmailValidFalse,_=n.isPasswordValidTrue,b=n.isPasswordValidFalse,O=n.isLoadingTrue,y=n.loggedIn,h=n.setMessage,v=n.message,N=function(){O(),a.timer=setTimeout((function(){return p.push("/")}),1300)},L=function(){O(),a.timer=setTimeout((function(){return p.push("/registration")}),1300)},j=function(){var e,t=o.filter((function(e){return e.email===r}));return t[0].password===i&&(e=t[0].name,s(e),!0)},T="",A="";return m||(T=l.a.createElement("p",{className:"login__page-invalid"},"Email is not valid")),g||(A=l.a.createElement("p",{className:"login__page-invalid"},"Password is not valid")),e=d?l.a.createElement(Se,null):null,t=d?"login__page-form hide":"login__page-form",l.a.createElement("div",{className:"login__page"},l.a.createElement("div",{className:"login__page-modal"},l.a.createElement("p",{className:"login__page-title message"},v),e,l.a.createElement("form",{className:t},l.a.createElement("p",{className:"login__page-title"},"LOGIN PAGE"),l.a.createElement("input",{className:"login__page-input",name:"email",type:"email",required:!0,minLength:"6",maxLength:"25",placeholder:"E-Mail",onChange:function(e){c(e.target.value)}}),T,l.a.createElement("input",{className:"login__page-input",name:"password",type:"text",required:!0,minLength:"6",maxLength:"20",placeholder:"Password",onChange:function(e){u(e.target.value)}}),A,l.a.createElement("button",{className:"login__page-input",type:"button",onClick:function(){if(function(){var e,t;if(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/i.test(r)?(f(),e=!0):E(),/^[\u0430-\u044f\u0456\u0406\u0457\u0407\u0454\u0404\u0410-\u042f\u0451\u0401a-zA-Z0-9]+$/.test(i)?(_(),t=!0):b(),!0===e&&!0===t)return!0}())if(o.filter((function(e){return e.email===r})).length>0){if(j())return y(),h("Access allowed :)"),void N();b()}else h("You are not registrated yet, SingUp please"),L()}},"LOGIN"),l.a.createElement("button",{className:"login__page-input",type:"button",onClick:N},"CANCEL"),l.a.createElement("div",{className:"login__page-input"},"Not registrated yet?"),l.a.createElement("div",{className:"login__page-input underline",onClick:L},"Click to Registeration"))))}}]),t}(o.Component)),De=Object(u.b)((function(e){return{isMobileOpen:e.login.isMobileOpen,userName:e.login.userName,email:e.login.email,password:e.login.password,users:e.login.users,isValidName:e.login.isValidName,isValidEmail:e.login.isValidEmail,isValidPassword:e.login.isValidPassword,isLogged:e.login.isLogged,loading:e.login.loading,message:e.login.message}}),(function(e){var t=Object(p.a)(n,e);return{sidebarMobileClose:t.sidebarMobileClose,setName:t.setName,setEmail:t.setEmail,setPassword:t.setPassword,setUsersList:t.setUsersList,isNameValidTrue:t.isNameValidTrue,isNameValidFalse:t.isNameValidFalse,isEmailValidTrue:t.isEmailValidTrue,isEmailValidFalse:t.isEmailValidFalse,isPasswordValidTrue:t.isPasswordValidTrue,isPasswordValidFalse:t.isPasswordValidFalse,loggedIn:t.loggedIn,isLoadingTrue:t.isLoadingTrue,isLoadingFalse:t.isLoadingFalse,setMessage:t.setMessage}}))(Pe),Ve=a(35),Me=(a(63),function(e){function t(){var e,a;Object(V.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(k.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(r)))).timer=null,a}return Object(R.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setUsersList,a=e.setEmail,n=e.setPassword,r=e.isNameValidTrue,i=e.isEmailValidTrue,o=e.isPasswordValidTrue,l=e.setMessage;r(),i(),o(),l(""),a(""),n("");var s=JSON.parse(localStorage.getItem("users"));s&&t(s)}},{key:"componentWillUnmount",value:function(){var e=this.props;e.isLoadingTrue;(0,e.isLoadingFalse)(),clearTimeout(this.timer)}},{key:"render",value:function(){var e,t,a=this,n=this.props,r=n.userName,i=n.email,o=n.password,s=n.users,c=n.setName,u=n.setEmail,d=n.setPassword,p=n.setUsersList,m=n.history,g=n.isValidName,f=n.isValidEmail,E=n.isValidPassword,_=n.isNameValidTrue,b=n.isNameValidFalse,O=n.isEmailValidTrue,y=n.isEmailValidFalse,h=n.isPasswordValidTrue,N=n.isPasswordValidFalse,L=n.loggedIn,j=n.loading,T=n.isLoadingTrue,A=(n.isLoadingFalse,n.setMessage),w=n.message,S=function(){var e={name:r,email:i,password:o},t=Object(Ve.a)(s).slice(0),a=[].concat(Object(v.a)(t),[e]);return function(e){localStorage.setItem("users",JSON.stringify(e))}(a),p(a)},C=function(){T(),a.timer=setTimeout((function(){return m.push("/")}),1300)},I=function(){T(),a.timer=setTimeout((function(){return m.push("/login")}),1300)},P="",D="",V="";return g||(P=l.a.createElement("p",{className:"login__page-invalid"},"Name is not valid")),f||(D=l.a.createElement("p",{className:"login__page-invalid"},"Email is not valid")),E||(V=l.a.createElement("p",{className:"login__page-invalid"},"Password is not valid")),e=j?l.a.createElement(Se,null):null,t=j?"login__page-form hide":"login__page-form",l.a.createElement("div",{className:"login__page"},l.a.createElement("div",{className:"login__page-modal"},l.a.createElement("p",{className:"login__page-title message"},w),e,l.a.createElement("form",{className:t},l.a.createElement("p",{className:"login__page-title"},"Registration PAGE"),l.a.createElement("input",{className:"login__page-input",name:"name",type:"text",required:!0,minLength:"3",maxLength:"25",placeholder:"Name",onChange:function(e){c(e.target.value)}}),P,l.a.createElement("input",{className:"login__page-input",name:"email",type:"email",required:!0,minLength:"6",maxLength:"25",placeholder:"E-Mail",onChange:function(e){u(e.target.value)}}),D,l.a.createElement("input",{className:"login__page-input",name:"password",type:"text",required:!0,minLength:"6",maxLength:"20",placeholder:"Password",onChange:function(e){d(e.target.value)}}),V,l.a.createElement("button",{className:"login__page-input",type:"button",onClick:function(){(function(){var e,t,a;if(/^[\u0430-\u044f\u0456\u0406\u0457\u0407\u0454\u0404\u0410-\u042f\u0451\u0401a-zA-Z0-9]+$/.test(r)?(_(),e=!0):b(),/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/i.test(i)?(O(),t=!0):y(),/^[\u0430-\u044f\u0456\u0406\u0457\u0407\u0454\u0404\u0410-\u042f\u0451\u0401a-zA-Z0-9]+$/.test(o)?(h(),a=!0):N(),!0===e&&!0===t&&!0===a)return!0})()&&(s.filter((function(e){return e.email===i})).length>0?(A("This E-mail already exist, just log-in plese"),I()):(S(),L(),A("You have succesfully registrated"),C()))}},"Registration"),l.a.createElement("button",{className:"login__page-input",type:"button",onClick:C},"CANCEL"),l.a.createElement("div",{className:"login__page-input"},"Already registrated?"),l.a.createElement("div",{className:"login__page-input underline",onClick:I},"Click to Login"))))}}]),t}(o.Component)),ke=Object(u.b)((function(e){return{userName:e.login.userName,email:e.login.email,password:e.login.password,users:e.login.users,isValidName:e.login.isValidName,isValidEmail:e.login.isValidEmail,isValidPassword:e.login.isValidPassword,isLogged:e.login.isLogged,loading:e.login.loading,message:e.login.message}}),(function(e){var t=Object(p.a)(n,e);return{setName:t.setName,setEmail:t.setEmail,setPassword:t.setPassword,setUsersList:t.setUsersList,isNameValidTrue:t.isNameValidTrue,isNameValidFalse:t.isNameValidFalse,isEmailValidTrue:t.isEmailValidTrue,isEmailValidFalse:t.isEmailValidFalse,isPasswordValidTrue:t.isPasswordValidTrue,isPasswordValidFalse:t.isPasswordValidFalse,loggedIn:t.loggedIn,setMessage:t.setMessage,isLoadingTrue:t.isLoadingTrue,isLoadingFalse:t.isLoadingFalse}}))(Me),Fe=(a(64),function(){return l.a.createElement("div",{className:"footer"},"Footer")}),Re=(a(65),function(e){function t(){return Object(V.a)(this,t),Object(k.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onAddedToCard,a=e.onDecreasItem,n=e.onDeleteItem,r=e.shoppingCard,i=e.history,o=e.orderTotal;return l.a.createElement("div",{className:"shopping__card"},l.a.createElement("div",{className:"shopping__card-store"},l.a.createElement("h2",{className:"shopping__card-title"},"shopping card"),l.a.createElement("table",{className:"shopping__card-table"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"shopping__card-table-row"},l.a.createElement("th",{className:"shopping__card-table-cell"},"\u2116"),l.a.createElement("th",{className:"shopping__card-table-cell"},"Item"),l.a.createElement("th",{className:"shopping__card-table-cell"},"Count"),l.a.createElement("th",{className:"shopping__card-table-cell"},"Total"),l.a.createElement("th",{className:"shopping__card-table-cell"},"Actions"))),l.a.createElement("tbody",null,r.map((function(e,r){var i=e.id,o=e.title,s=e.count,c=e.total;return l.a.createElement("tr",{key:i},l.a.createElement("th",{className:"shopping__card-table-cell"},r+1),l.a.createElement("th",{className:"shopping__card-table-cell"},"  ",o),l.a.createElement("th",{className:"shopping__card-table-cell"},s),l.a.createElement("th",{className:"shopping__card-table-cell"},"$ ",c),l.a.createElement("th",{className:"shopping__card-table-cell"},l.a.createElement(ne.a,{className:"shopping__card-table-action plus",onClick:function(){return t(i)},icon:re.f}),l.a.createElement(ne.a,{className:"shopping__card-table-action minus",onClick:function(){return a(i)},icon:re.d}),l.a.createElement(ne.a,{className:"shopping__card-table-action delete",onClick:function(){return n(i)},icon:re.h})))})))),l.a.createElement("div",{className:"total"},"Order Total: $ ",o),l.a.createElement("button",{type:"button"},"GET ORDER"),l.a.createElement("button",{type:"button",onClick:function(){return i.push("/")}},"BACK")))}}]),t}(o.Component)),Ue=Object(u.b)((function(e){return{shoppingCard:e.items.shoppingCard,food:e.items.food,orderTotal:e.items.orderTotal}}),(function(e){var t=Object(p.a)(r,e);return{onAddedToCard:t.onAddedToCard,onDecreasItem:t.onDecreasItem,onDeleteItem:t.onDeleteItem}}))(Re),Ge=(a(66),function(e){function t(){return Object(V.a)(this,t),Object(k.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(be,null),l.a.createElement(_e,null),l.a.createElement(Ee,null),l.a.createElement(U.c,null,l.a.createElement(U.a,{exact:!0,path:"/",component:we}),l.a.createElement(U.a,{path:"/login",component:De}),l.a.createElement(U.a,{path:"/registration",component:ke}),l.a.createElement(U.a,{path:"/shopping-card",component:Ue}),l.a.createElement(U.a,{path:"/products/:id",render:function(e){var t=e.match,a=(e.history,t.params.id);return l.a.createElement(Ie,{productId:a})}})),l.a.createElement(Fe,null))}}]),t}(o.Component)),ze=Object(u.b)((function(e){return{state:e}}))(Ge);c.a.render(l.a.createElement(u.a,{store:D},l.a.createElement(d.a,{basename:"/food_delivery/"},l.a.createElement("div",{className:"container"},l.a.createElement(ze,null)))),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.a3586d08.chunk.js.map