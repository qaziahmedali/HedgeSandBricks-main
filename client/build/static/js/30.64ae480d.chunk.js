(this.webpackJsonphedgesandbricks=this.webpackJsonphedgesandbricks||[]).push([[30],{120:function(e,t,a){},121:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){var t=e.headertitle,a=e.headerimg;e.subheader&&e.subheader;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"breadcrumb-area bg-overlay-2",style:{backgroundImage:'url("/'+a+'")'}},l.a.createElement("div",{className:"container "},l.a.createElement("div",{className:"breadcrumb-inner "},l.a.createElement("div",{className:"section-title text-center"})))))}},130:function(e,t,a){"use strict";var n=a(78),l=a(0),c=a.n(l),r=a(7),o=a(23),i=a(6),s=a(24),m=(a(120),a(241)),u=a(1),d=a.n(u),p=a(4),v=a(29),E=a(208),f=(a(209),function(e){var t=e.setDeleteModal,a=e.reloadData,r=e.id,o=Object(l.useState)(!1),s=Object(n.a)(o,2),m=s[0],u=s[1];Object(l.useEffect)((function(){Object(E.confirmAlert)({title:"Confirm to Delete",message:"Are you sure to delete this permanently?.",buttons:[{label:"Yes",onClick:function(){return f(r)}},{label:"No",onClick:function(){return""}}]})}),[]);var f=function(){var e=Object(p.a)(d.a.mark((function e(n){var l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),l=localStorage.getItem("token"),e.next=4,fetch("".concat(i.a,"/removeSaleProperty/").concat(n),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:l}}).then((function(e){return e.json()})).then((function(e){t(!1),a(),u(!1)})).catch((function(e){u(!1),console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return m?c.a.createElement(v.a,null):c.a.createElement("p",null)});t.a=function(e){var t,a,u=e.property,d=e.reloadData,p=Object(r.h)().listingType,v=Object(r.g)(),E=Object(s.c)((function(e){return e.user})).user,b=Object(l.useState)(!1),h=Object(n.a)(b,2),g=h[0],y=h[1],N=Object(l.useState)(!1),_=Object(n.a)(N,2),w=_[0],O=_[1],j=Object(l.useState)(""),x=Object(n.a)(j,2),S=x[0],k=x[1],C=v.pathname.includes("my/properties"),T=new Intl.NumberFormat;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-lg-4 col-md-6 "},c.a.createElement("div",{className:"single-product-wrap style-bottom"},c.a.createElement(o.b,{to:"/property-details/".concat(null===u||void 0===u?void 0:u._id)},c.a.createElement("div",{className:""},c.a.createElement("img",{className:"product__img",src:"".concat(i.a,"/").concat(null===u||void 0===u||null===(t=u.images)||void 0===t||null===(a=t[0])||void 0===a?void 0:a.path),alt:"img",height:300,width:570}),c.a.createElement("div",{className:"status__main"},c.a.createElement("div",{className:"badge__status"},c.a.createElement("span",{className:"Sale"===(null===u||void 0===u?void 0:u.buildingType)?"listing__type__sale":"listing__type__rent"},"For ",null===u||void 0===u?void 0:u.buildingType))," ",c.a.createElement("div",{className:"badge__status_update"},null==(null===u||void 0===u?void 0:u.soldStatus)?"":c.a.createElement("span",{className:"Sale"===(null===u||void 0===u?void 0:u.buildingType)?"listing__type__sale":"listing__type__rent"},null===u||void 0===u?void 0:u.soldStatus))))),c.a.createElement("div",{className:"product-details-inner"},c.a.createElement("div",{className:"property__details"},C&&(null===E||void 0===E?void 0:E._id)===(null===u||void 0===u?void 0:u.propertyBy)&&c.a.createElement("div",{className:"badge__status"},c.a.createElement("span",{className:"paid"===(null===u||void 0===u?void 0:u.paymentVerified)?"teal":"unpaid"===(null===u||void 0===u?void 0:u.paymentVerified)?"red":null},null===u||void 0===u?void 0:u.paymentVerified),c.a.createElement("span",{className:"pending"===(null===u||void 0===u?void 0:u.propertyStatus)?"purple":"disapproved"===(null===u||void 0===u?void 0:u.propertyStatus)?"red":"teal",style:{marginLeft:"4px"}},null===u||void 0===u?void 0:u.propertyStatus)))," ",c.a.createElement("h5",{className:"property__tilte"},c.a.createElement("i",{class:"fas fa-map-marker-alt"}),"\xa0\xa0",null===u||void 0===u?void 0:u.location),c.a.createElement("h5",{style:{color:"#2871DF",fontWeight:"bold"}},"$",T.format(u.priceOfProperty),c.a.createElement("span",{style:{color:"grey"}}," CND")),c.a.createElement("h5",{className:"property__tilte"},""==(null===u||void 0===u?void 0:u.houseType)?"":c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{class:"fas fa-home"}),"\xa0",null===u||void 0===u?void 0:u.houseType)),c.a.createElement("div",{className:C?"details__bed__bath":"details__bed__bath m-0"},c.a.createElement("i",{class:"fas fa-bed",style:{color:"#2871DF"}}),"\xa0",null===u||void 0===u?void 0:u.bedrooms," beds \u2022"," ",c.a.createElement("i",{class:"fas fa-toilet",style:{color:"#2871DF"}}),"\xa0",null===u||void 0===u?void 0:u.bathrooms," baths",c.a.createElement("div",{className:" float-right ",style:{width:"70px",borderRadius:"5px",color:"#2871DF",flexDirection:"row"}},c.a.createElement("div",{className:"property__viewed"},c.a.createElement("span",{className:"viewed",style:{color:"#718096"}},null===u||void 0===u?void 0:u.propertyViewed),c.a.createElement("span",{className:"ml-2 mb-1"},c.a.createElement(m.c,null))))),C&&c.a.createElement("div",{className:"property__card__bottom"},c.a.createElement("div",{className:"property__icons"},c.a.createElement(o.b,{to:"/add-property/".concat(p,"/Edit/").concat(null===u||void 0===u?void 0:u._id)},c.a.createElement("div",{className:"icons__box"},c.a.createElement("span",{className:"icon"},c.a.createElement(m.b,{onClick:function(){return null===u||void 0===u||u._id,void O(!0)},update:w})))),c.a.createElement("div",{className:"icons__box"},c.a.createElement("span",{className:"icon"},c.a.createElement(m.a,{onClick:function(){return e=null===u||void 0===u?void 0:u._id,y(!0),void k(e);var e}}))),c.a.createElement(o.b,{to:"/property-details/".concat(null===u||void 0===u?void 0:u._id)},c.a.createElement("div",{className:"icons__box"},c.a.createElement("span",{className:"icon"},c.a.createElement(m.c,null)))))))),g&&c.a.createElement(f,{setDeleteModal:y,reloadData:d,id:S})))}},392:function(e,t,a){"use strict";var n=a(1),l=a.n(n),c=a(4),r=a(78),o=a(0),i=a.n(o),s=a(7),m=a(24),u=a(130),d=a(27);t.a=function(){var e=Object(m.b)(),t=Object(o.useState)([]),a=Object(r.a)(t,2),n=a[0],p=a[1],v=Object(m.c)((function(e){return e.property})),E=v.loading,f=v.RentProperty,b=v.SaleProperty,h=Object(s.h)().listingType;Object(s.f)();Object(o.useEffect)((function(){"rent"==h?g():y()}),[h]);var g=function(){var t=Object(c.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(Object(d.f)());case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(c.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(Object(d.h)());case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(o.useEffect)((function(){"rent"==h?N():_()}),[h,f,b]);var N=function(){var e=Object(c.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(f);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(c.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(b);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.a.createElement("div",{className:"blog-page-area pd-top-120 "},i.a.createElement("div",{className:"container-sm"},i.a.createElement("div",{className:"row"},E?i.a.createElement("div",{className:"col-md-12 col-12 text-center  pd-top-120  pd-bottom-150 "},i.a.createElement("span",{className:"text-center"}," ",i.a.createElement("i",{className:"fa fa-spinner fa-spin",style:{fontSize:"15px",marginRight:"5px",color:"black"}}))):(null===n||void 0===n?void 0:n.length)>0?null===n||void 0===n?void 0:n.map((function(e,t){return i.a.createElement(u.a,{property:e,key:t})})):i.a.createElement("div",{className:"col-md-12 col-12 text-center pd-top-120 pd-bottom-120"},"No property found!"))," "))}},83:function(e,t,a){"use strict";var n=a(76),l=a(77),c=a(80),r=a(81),o=a(0),i=a.n(o);a(45),t.a=function(e){return function(t){Object(c.a)(o,t);var a=Object(r.a)(o);function o(){var e;Object(n.a)(this,o);for(var t=arguments.length,l=new Array(t),c=0;c<t;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={isDisconnected:!1},e.handleConnectionChange=function(){if("online"!==(navigator.onLine?"online":"offline"))return e.setState({isDisconnected:!0});var t=setInterval((function(){fetch("//google.com",{mode:"no-cors"}).then((function(){e.setState({isDisconnected:!1},(function(){return clearInterval(t)}))})).catch((function(){return e.setState({isDisconnected:!0})}))}),2e3)},e}return Object(l.a)(o,[{key:"componentDidMount",value:function(){this.handleConnectionChange(),window.addEventListener("online",this.handleConnectionChange),window.addEventListener("offline",this.handleConnectionChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("online",this.handleConnectionChange),window.removeEventListener("offline",this.handleConnectionChange)}},{key:"render",value:function(){var t=this.state.isDisconnected;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,t&&i.a.createElement("div",{className:"navbar-top"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12 text-center"},"Please check your internet connection...",i.a.createElement("div",{className:"msin"},i.a.createElement("div",{className:"cont_principal"},i.a.createElement("div",{className:"cont_error"},i.a.createElement("h1",null,"Oops"),i.a.createElement("p",null,"Network connection is lost")),i.a.createElement("div",{className:"cont_aura_1"}),i.a.createElement("div",{className:"cont_aura_2"}))))))),i.a.createElement(e,this.props)))}}]),o}(o.Component)}},84:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(1),l=a.n(n),c=a(4),r=a(6),o=function(){var e=Object(c.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(r.a,"/api/user/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},85:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(83);t.a=Object(c.a)((function(){return l.a.createElement("div",null)}))},86:function(e,t,a){"use strict";var n=a(1),l=a.n(n),c=a(4),r=a(78),o=a(0),i=a.n(o),s=a(7),m=a(23),u=a(84),d=a(24),p=a(25),v=a(26),E=a(85);a(87);t.a=function(){var e=Object(s.g)(),t=Object(d.c)((function(e){return e.user})),a=t.user,n=(t.isAuth,Object(s.f)()),f=Object(o.useState)(!1),b=Object(r.a)(f,2),h=(b[0],b[1]),g=Object(o.useState)(!1),y=Object(r.a)(g,2),N=y[0],_=y[1],w=Object(o.useState)(""),O=Object(r.a)(w,2),j=O[0],x=O[1],S=Object(d.b)();Object(o.useEffect)((function(){_(localStorage.getItem("token")),k()}),[N]);var k=function(){h(!0);try{Object(u.a)().then((function(e){e?(console.log("asdfasdfasdf",e),S(Object(p.c)({data:e})),h(!1)):h(!1)}))}catch(e){console.log(e)}},C=function(){var e=Object(c.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""==j?n.push("/"):(t.preventDefault(),a={address:j},console.log("search formdata",a),S(Object(v.b)(a)),n.push("/search/filter"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement("div",{className:"navbar-area navbar-area-3 "},i.a.createElement(E.a,null),i.a.createElement("nav",{className:"navbar navbar-expand-lg"},i.a.createElement("div",{className:"container nav-container"},i.a.createElement("div",{className:"responsive-mobile-menu"},i.a.createElement("button",{className:"menu toggle-btn d-block d-lg-none","data-target":"#dkt_main_menu","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"icon-left"}),i.a.createElement("span",{className:"icon-right"}))),i.a.createElement("div",{className:"logo"},i.a.createElement(m.b,{to:"/"},i.a.createElement("img",{src:"/assets/img/mainImg.png",alt:" image ",width:200}))),i.a.createElement("div",{className:"collapse navbar-collapse",id:"dkt_main_menu"},i.a.createElement("ul",{className:"navbar-nav menu-open text-center"},i.a.createElement("li",null,i.a.createElement(m.b,{className:"".concat("/house-timing"==e.pathname?"active":""),to:"/house-timing",style:{fontSize:"13px"}},"OPEN HOUSE")),i.a.createElement("li",null,i.a.createElement(m.b,{className:"".concat("/about"==e.pathname?"active":""),to:"/about",style:{fontSize:"13px"}},"ABOUT US")),i.a.createElement("li",null,i.a.createElement(m.b,{className:"".concat("/services"==e.pathname?"active":""),to:"/services",style:{fontSize:"13px"}},"SERVICES")),null!==N?i.a.createElement("li",null,i.a.createElement(m.b,{className:"".concat("/chat"==e.pathname?"active":""),to:"/chat",style:{fontSize:"13px"}},"INBOX")):null,i.a.createElement("li",null,i.a.createElement(m.b,{className:"".concat("/faq"==e.pathname?"active":""),to:"/faq",style:{fontSize:"13px"}},"FAQ")),i.a.createElement("li",null,i.a.createElement(m.b,{className:"".concat("/blog"==e.pathname?"active":""),to:"/blog",style:{fontSize:"13px"}},"BLOG")),i.a.createElement("li",null,i.a.createElement(m.b,{className:"".concat("/contact"==e.pathname?"active":""),to:"/contact",style:{fontSize:"13px"}},"CONTACT US")),N?null:i.a.createElement(i.a.Fragment,null,i.a.createElement("li",null,i.a.createElement(m.b,{className:"".concat("/sign-in"==e.pathname?"active":""),to:"/sign-in",style:{fontSize:"13px"}},"SIGNIN")),i.a.createElement("li",null,i.a.createElement(m.b,{className:"".concat("/sign-up"==e.pathname?"active":""),to:"/sign-up",style:{fontSize:"13px"}},"SIGNUP"))),N&&i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{className:"menu-item-has-children current-menu-item "},i.a.createElement(m.b,{to:"#"},i.a.createElement("img",{htmlFor:"imageUpload",width:"45px",src:"https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",style:{height:"45px",objectFit:"cover",borderRadius:"50px"}})),i.a.createElement("ul",{className:"sub-menu"},i.a.createElement("li",null,i.a.createElement(m.b,{to:"#",style:{fontSize:"13px",textTransform:"uppercase"}},null==a.fname?null:i.a.createElement("b",null," Hi. ",null===a||void 0===a?void 0:a.fname))),i.a.createElement("li",{className:"".concat("/profile"==e.pathname?"active":"")},i.a.createElement(m.b,{to:"/profile",style:{fontSize:"13px",textTransform:"uppercase"}},"my Profile")),i.a.createElement("li",{className:"".concat("/my/properties/sale"==e.pathname?"active":"")},i.a.createElement(m.b,{to:"/my/properties/sale",style:{fontSize:"13px"}},"SALE LIST")),i.a.createElement("li",{className:"".concat("/my/properties/rent"==e.pathname?"active":"")},i.a.createElement(m.b,{to:"/my/properties/rent",style:{fontSize:"13px"}},"RENT LIST"))," ",i.a.createElement("li",null,i.a.createElement(m.b,{to:"#",style:{fontSize:"13px"},onClick:function(){S(Object(p.g)()),window.location.reload(!1),n.push("/")}},"LOGOUT"))))),i.a.createElement("li",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12 col-lg-12 col-sm-12 col-12 ",style:{borderBottomLeftRadius:"5px",borderTopLeftRadius:"5px",textAlign:"center",display:"flex"}},i.a.createElement("div",{className:"single-input-inner-home "},i.a.createElement("input",{type:"text",placeholder:"Search by Address",value:j,onChange:function(e){x(e.target.value)}})),i.a.createElement("button",{type:"submit",onClick:C,style:{border:"none",background:"#FFFFFF",borderBottomRightRadius:"10px",borderTopRightRadius:"10px"}},i.a.createElement("i",{className:"fa fa-search mr-1"}))))))))))}},87:function(e,t,a){},89:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(23);t.a=function(){return Object(n.useEffect)((function(){var e=document.createElement("script");e.async=!0,e.src="/assets/js/main.js",document.body.appendChild(e)}),[]),l.a.createElement("footer",{className:"footer-area style-two "},l.a.createElement("div",{className:"blog-page-area p-4"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4 col-md-6 col-12"},l.a.createElement("div",{className:"widget widget_about "},l.a.createElement("div",{className:"mb-4"},l.a.createElement("img",{src:"/assets/img/mainImg.png",alt:" image ",height:80})),l.a.createElement("div",{className:"details"},l.a.createElement("div",{className:"top-margin _20-pixels"},l.a.createElement("p",{className:"small-white"},"Hedgesandbricks is Real estate property consisting of land and the buildings on it, easy to customize and easy to create your property listings.")),l.a.createElement("div",{className:"top-margin _15-pixels mt-4",style:{display:"flex",flexDirection:"row",listStyle:"none",justifyContent:"space-between"}},l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/solverwp/"},l.a.createElement("i",{className:"fab fa-facebook-f","aria-hidden":"true"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.twitter.com/solverwp/"},l.a.createElement("i",{className:"fab fa-twitter","aria-hidden":"true"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.instagram.com/solverwp/"},l.a.createElement("i",{className:"fab fa-instagram","aria-hidden":"true"}))))))),l.a.createElement("div",{className:"col-lg-6 col-md-6 col-6"},l.a.createElement("div",{className:"widget widget_nav_menu"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.b,{to:"/about"},l.a.createElement("b",null,"MENU"))),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/about"},"About Us")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/services"},"Services")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/faq"},"Faq")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/blog"},"Blog")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/contact"},"Contact Us")))))))))}},961:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(86),r=(a(121),a(392)),o=a(89),i=a(7);t.default=function(){Object(i.h)().listingType;return l.a.createElement("div",null,l.a.createElement(c.a,null),l.a.createElement(r.a,null),l.a.createElement(o.a,null))}}}]);
//# sourceMappingURL=30.64ae480d.chunk.js.map