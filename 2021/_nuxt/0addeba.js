(window.webpackJsonp=window.webpackJsonp||[]).push([[18,3,4,10],{377:function(t,e,n){var content=n(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("2bb14ec5",content,!0,{sourceMap:!1})},378:function(t,e,n){var content=n(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("092d23a0",content,!0,{sourceMap:!1})},380:function(t,e,n){var content=n(391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("4dde9e5d",content,!0,{sourceMap:!1})},381:function(t,e,n){"use strict";n(377)},382:function(t,e,n){var o=n(53)((function(i){return i[1]}));o.push([t.i,'.js-accordion--trigger[data-v-76dda438]{\n  position:relative;\n  width:100%;\n  transition:all .2s ease-in;\n  display:block;\n  font-weight:700;\n  text-align:left;\n  outline:none;\n  border:none;\n  cursor:pointer\n}\n.js-accordion--trigger[data-v-76dda438]:after{\n  display:inline-block;\n  width:0;\n  height:0;\n  border:solid transparent;\n  content:"";\n  position:absolute;\n  top:50%;\n  right:1em;\n  margin-top:-5px;\n  transition:all .2s ease-in\n}\n.js-accordion--trigger._state-open[data-v-76dda438]{\n  text-decoration:none\n}\n.js-accordion--trigger._state-open[data-v-76dda438]:after{\n  transform:rotateX(180deg);\n  margin-top:-10px\n}\n.js-accordion--trigger[data-v-76dda438]:hover{\n  text-decoration:none\n}\n.js-accordion--target[data-v-76dda438]{\n  overflow:hidden;\n  transition:.4s ease-in-out\n}\n.js-accordion--body[data-v-76dda438]{\n  padding:30px\n}\n.js-accordion-enter-active[data-v-76dda438]{\n  -webkit-animation-duration:1s;\n          animation-duration:1s;\n  -webkit-animation-fill-mode:both;\n          animation-fill-mode:both;\n  -webkit-animation-name:js-accordion--anime__opend-data-v-76dda438;\n          animation-name:js-accordion--anime__opend-data-v-76dda438\n}\n.js-accordion-leave-active[data-v-76dda438]{\n  -webkit-animation-duration:1s;\n          animation-duration:1s;\n  -webkit-animation-fill-mode:both;\n          animation-fill-mode:both;\n  -webkit-animation-name:js-accordion--anime__closed-data-v-76dda438;\n          animation-name:js-accordion--anime__closed-data-v-76dda438\n}\n@-webkit-keyframes js-accordion--anime__opend-data-v-76dda438{\n0%{\n    opacity:0\n}\nto{\n    opacity:1\n}\n}\n@keyframes js-accordion--anime__opend-data-v-76dda438{\n0%{\n    opacity:0\n}\nto{\n    opacity:1\n}\n}\n@-webkit-keyframes js-accordion--anime__closed-data-v-76dda438{\n0%{\n    opacity:1\n}\nto{\n    opacity:0\n}\n}\n@keyframes js-accordion--anime__closed-data-v-76dda438{\n0%{\n    opacity:1\n}\nto{\n    opacity:0\n}\n}\n.disable-message[data-v-76dda438]{\n  color:#cecece\n}',""]),o.locals={},t.exports=o},383:function(t,e,n){"use strict";n.r(e);var o={props:{disable:{type:Boolean,default:!1},menuName:{type:String,default:null},opened:{type:String,default:null},toggleMenu:{type:Function,default:function(){}}},methods:{beforeEnter:function(t){t.style.height="0"},enter:function(t){t.style.height=t.scrollHeight+"px"},beforeLeave:function(t){t.style.height=t.scrollHeight+"px"},leave:function(t){t.style.height="0"}}},r=(n(381),n(39)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"js-accordion"},[n("button",{staticClass:"mb-2 js-accordion--trigger",class:{"_state-open":t.menuName===t.opened,"disable-message":t.disable,"pointer-events-none":t.disable},attrs:{type:"button"},on:{click:function(e){return t.toggleMenu(t.menuName)}}},[t._t("title")],2),t._v(" "),n("transition",{attrs:{name:"js-accordion"},on:{"before-enter":t.beforeEnter,enter:t.enter,"before-leave":t.beforeLeave,leave:t.leave}},[t.menuName===t.opened?n("div",{staticClass:"pl-8 js-accordion--target",class:{"_state-open":t.menuName===t.opened}},[t._t("body")],2):t._e()])],1)}),[],!1,null,"76dda438",null);e.default=component.exports},384:function(t,e,n){"use strict";n(378)},385:function(t,e,n){var o=n(53)((function(i){return i[1]}));o.push([t.i,'.header-border[data-v-5bb8dcb2]{\n  width:100%;\n  height:0;\n  left:77px;\n  top:661px;\n  border:1px solid #1097aa\n}\n.dli-close[data-v-5bb8dcb2]{\n  display:inline-block;\n  vertical-align:middle;\n  color:#333;\n  line-height:1;\n  width:2em;\n  height:.1em;\n  background:currentColor;\n  border-radius:.1em;\n  position:relative;\n  transform:rotate(45deg)\n}\n.dli-close[data-v-5bb8dcb2]:before{\n  content:"";\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  background:inherit;\n  border-radius:inherit;\n  transform:rotate(90deg)\n}\n.headear-options[data-v-5bb8dcb2]:after{\n  border-color:#000 transparent transparent\n}\n.headear-options-disable[data-v-5bb8dcb2]:after,.headear-options[data-v-5bb8dcb2]:after{\n  content:"";\n  width:0;\n  height:0;\n  position:absolute;\n  top:12px;\n  right:-14px;\n  border-style:solid;\n  border-width:6px 5px 0\n}\n.headear-options-disable[data-v-5bb8dcb2]:after{\n  border-color:#cecece transparent transparent\n}\n.language-switch[data-v-5bb8dcb2]{\n  padding:.2rem 1.5rem;\n  margin-top:1rem;\n  color:#fff;\n  background:#1097aa;\n  border-radius:100px\n}\n.disable-message[data-v-5bb8dcb2]{\n  color:#cecece\n}',""]),o.locals={},t.exports=o},387:function(t,e,n){t.exports=n.p+"img/7b7ee40.svg"},389:function(t,e,n){"use strict";n.r(e);var o=n(383),r={components:{OuterLink:n(106).default,Accordion:o.default},data:function(){return{opened:null}},methods:{toggleMenu:function(t){this.opened!==t?this.opened=t:this.opened=null}}},l=(n(384),n(39)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center w-full"},[n("div",{staticClass:"relative flex flex-col items-start w-2/3 font-bold font-noto"},[n("div",{staticClass:"absolute w-8 h-8 -right-4 top-8",on:{click:function(e){return t.$emit("close")}}},[n("span",{staticClass:"dli-close"})]),t._v(" "),n("div",{staticClass:"w-full mb-4 mt-28"},[n("Accordion",{attrs:{"menu-name":"about","toggle-menu":t.toggleMenu,opened:t.opened}},[n("div",{attrs:{slot:"title"},slot:"title"},[n("p",{staticClass:"relative inline headear-options"},[t._v("\n            "+t._s(t.$t("common.about"))+"\n          ")])]),t._v(" "),n("div",{staticClass:"js-accordion--body",attrs:{slot:"body"},slot:"body"},[n("nuxt-link",{staticClass:"block hover:text-blue-green focus:text-blue-green",attrs:{to:t.localePath("/code-of-conduct")}},[t._v(t._s(t.$t("common.codeOfConduct")))]),t._v(" "),n("outer-link",{staticClass:"block mt-2 hover:text-blue-green focus:text-blue-green",attrs:{to:"https://drive.google.com/file/d/1abgh7glVaUsYnlRf_v2RLYw2V3ZAGnjt/view?usp=sharing",label:t.$t("common.infectionControlGuidelines")}}),t._v(" "),n("outer-link",{staticClass:"block mt-2 hover:text-blue-green focus:text-blue-green",attrs:{to:"https://drive.google.com/file/d/1tCo8JM9F_qVO8Pbol6_AmQusv6pogiz9/view?usp=sharing",label:t.$t("common.InfectionControlChecklist")}})],1)])],1),t._v(" "),n("div",{staticClass:"w-full mb-4"},[n("Accordion",{attrs:{"menu-name":"events","toggle-menu":t.toggleMenu,opened:t.opened}},[n("div",{attrs:{slot:"title"},slot:"title"},[n("p",{staticClass:"relative inline headear-options"},[t._v("\n            "+t._s(t.$t("common.events"))+"\n          ")])]),t._v(" "),n("div",{staticClass:"js-accordion--body",attrs:{slot:"body"},slot:"body"},[n("nuxt-link",{staticClass:"hover:text-blue-green focus:text-blue-green",attrs:{to:t.localePath("/time-table")}},[t._v(t._s(t.$t("common.timeTable")))])],1)])],1),t._v(" "),n("div",{staticClass:"mb-4"},[n("outer-link",{staticClass:"hover:text-blue-green focus:text-blue-green",attrs:{label:"news",to:"https://pyconjp.blogspot.com/2021/"}})],1),t._v(" "),n("div",{staticClass:"w-full mb-4"},[n("Accordion",{attrs:{"menu-name":"sponsors","toggle-menu":t.toggleMenu,opened:t.opened}},[n("div",{staticClass:"relative inline headear-options",attrs:{slot:"title"},slot:"title"},[t._v("\n          "+t._s(t.$t("common.sponsors"))+"\n        ")]),t._v(" "),n("div",{staticClass:"js-accordion--body",attrs:{slot:"body"},slot:"body"},[n("nuxt-link",{staticClass:"block hover:text-blue-green focus:text-blue-green",attrs:{to:t.localePath("/sponsors")}},[t._v("\n            "+t._s(t.$t("common.sponsorList")))]),t._v(" "),n("outer-link",{staticClass:"block mt-2 line-through text-custom-gray hover:opacity-70",attrs:{label:t.$t("common.prospectus"),to:"https://pyconjp.blogspot.com/2021/09/closed-sponsor-application.html"}}),t._v(" "),n("outer-link",{staticClass:"block mt-2 line-through text-custom-gray hover:opacity-70",attrs:{label:t.$t("common.applicationForm"),to:"https://pyconjp.blogspot.com/2021/09/closed-sponsor-application.html"}})],1)])],1),t._v(" "),n("div",{staticClass:"mb-4"},[n("nuxt-link",{staticClass:"hover:text-blue-green focus:text-blue-green",attrs:{to:t.localePath("/staff")}},[t._v(t._s(t.$t("common.staff")))])],1),t._v(" "),n("div",{staticClass:"mt-16 header-border"}),t._v(" "),n("div",{staticClass:"flex flex-col items-center justify-center w-full mt-6"},[n("p",{staticClass:"inline"},[t._v("Language")]),t._v(" "),"en"===t.$i18n.locale?n("nuxt-link",{staticClass:"language-switch hover:opacity-70",attrs:{to:t.switchLocalePath("ja")}},[t._v("JA")]):t._e(),t._v(" "),"ja"===t.$i18n.locale?n("nuxt-link",{staticClass:"language-switch hover:opacity-70",attrs:{to:t.switchLocalePath("en")}},[t._v("EN")]):t._e()],1)])])}),[],!1,null,"5bb8dcb2",null);e.default=component.exports;installComponents(component,{OuterLink:n(106).default})},390:function(t,e,n){"use strict";n(380)},391:function(t,e,n){var o=n(53)((function(i){return i[1]}));o.push([t.i,'.navbar{\n  height:72px;\n  border-radius:8px;\n  background:#fff\n}\n.list-menu,.navbar{\n  box-shadow:0 2px 12px rgba(0,0,0,.1),0 2px 24px rgba(0,0,0,.08)\n}\n.list-menu{\n  position:absolute;\n  top:2rem;\n  width:14rem;\n  padding:.8rem 1rem;\n  background-color:#fff\n}\n.language-switch{\n  padding:.2rem 1.5rem;\n  color:#fff;\n  background:#1097aa;\n  border-radius:100px\n}\n.headear-options:after{\n  border-color:#000 transparent transparent\n}\n.headear-options-disable:after,.headear-options:after{\n  content:"";\n  width:0;\n  height:0;\n  position:absolute;\n  top:12px;\n  right:-14px;\n  border-style:solid;\n  border-width:6px 5px 0\n}\n.headear-options-disable:after{\n  border-color:#cecece transparent transparent\n}\n.disable-message{\n  color:#cecece\n}\n.openbtn{\n  position:relative;\n  background:#fff;\n  cursor:pointer;\n  width:50px;\n  height:50px;\n  border-radius:5px\n}\n.openbtn span{\n  display:inline-block;\n  transition:all .4s;\n  position:absolute;\n  height:3px;\n  border-radius:2px;\n  background:#000\n}\n.openbtn span:first-of-type{\n  position:absolute;\n  top:15px;\n  right:14px;\n  width:20%\n}\n.openbtn span:nth-of-type(2){\n  top:23px;\n  left:14px;\n  width:45%\n}\n.openbtn span:nth-of-type(3){\n  top:31px;\n  left:14px;\n  width:45%\n}\n.mobile-menu{\n  width:100vw;\n  height:100vh;\n  position:fixed;\n  top:0;\n  left:0;\n  background-color:#fff;\n  z-index:10\n}\n.mobile-menu-content{\n  margin:22% auto\n}\n.v-enter-active,.v-leave-active{\n  transition:opacity .4s\n}\n.v-enter,.v-leave-to{\n  opacity:0\n}',""]),o.locals={},t.exports=o},392:function(t,e,n){"use strict";n.r(e);var o=n(389),r={components:{OuterLink:n(106).default,SPHeader:o.default},data:function(){return{showMenuBackground:!1,showAbstractMenu:!1,showEventListMenu:!1,showSponsorMenu:!1,isMobile:!1,showMobileMenu:!1}},mounted:function(){window.matchMedia("(max-width: 1023px)").matches&&(this.isMobile=!0)},beforeDestroy:function(){this.closeMobileMenu()},methods:{selectMenu:function(t){0===t?(this.showMenuBackground=!1,this.showEventListMenu=!1,this.showSponsorMenu=!1,this.showAbstractMenu=!this.showAbstractMenu,this.showMenuBackground=!this.showMenuBackground):1===t?(this.showMenuBackground=!1,this.showAbstractMenu=!1,this.showSponsorMenu=!1,this.showEventListMenu=!this.showEventListMenu,this.showMenuBackground=!this.showMenuBackground):2===t?(this.showMenuBackground=!1,this.showAbstractMenu=!1,this.showEventListMenu=!1,this.showSponsorMenu=!this.showSponsorMenu,this.showMenuBackground=!this.showMenuBackground):99===t&&(this.showMenuBackground=!1,this.showAbstractMenu=!1,this.showEventListMenu=!1,this.showSponsorMenu=!1)},switchLanguage:function(){this.$i18n.locale="en"},preventDefault:function(t){t.preventDefault()},openMobileMenu:function(){this.showMobileMenu=!0,document.addEventListener("touchmove",this.preventDefault,{passive:!1}),document.addEventListener("mousewheel",this.preventDefault,{passive:!1})},closeMobileMenu:function(){this.showMobileMenu=!1,document.removeEventListener("touchmove",this.preventDefault,{passive:!1}),document.removeEventListener("mousewheel",this.preventDefault,{passive:!1})}}},l=(n(390),n(39)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"relative"},[o("nav",{staticClass:"relative z-40 flex items-center justify-between pl-4 pr-4  lg:pl-0 lg:justify-center navbar"},[o("div",{staticClass:"flex items-center justify-center w-1/2 lg:w-1/4"},[o("nuxt-link",{staticClass:"hover:opacity-50",attrs:{to:t.localePath("/")}},[o("img",{attrs:{src:n(387),alt:""}})])],1),t._v(" "),o("transition",[t.showMobileMenu?o("SPHeader",{staticClass:"mobile-menu",on:{close:t.closeMobileMenu}}):t._e()],1),t._v(" "),t.isMobile?o("div",{staticClass:"openbtn",class:[{active:t.showMobileMenu}],on:{click:t.openMobileMenu}},[o("span"),o("span"),o("span")]):t._e(),t._v(" "),t.isMobile?t._e():o("div",{staticClass:"w-3/4 font-bold font-noto"},[o("ul",{staticClass:"flex items-center justify-around"},[o("li",{staticClass:"relative"},[o("p",{staticClass:"relative cursor-pointer headear-options",on:{click:function(e){return t.selectMenu(0)}}},[t._v("\n            "+t._s(t.$t("common.about"))+"\n          ")]),t._v(" "),t.showAbstractMenu?o("div",{staticClass:"list-menu"},[o("nuxt-link",{staticClass:"block hover:text-blue-green focus:text-blue-green",attrs:{to:t.localePath("/code-of-conduct")}},[t._v(t._s(t.$t("common.codeOfConduct")))]),t._v(" "),o("outer-link",{staticClass:"block mt-2 hover:text-blue-green focus:text-blue-green",attrs:{to:"https://drive.google.com/file/d/1abgh7glVaUsYnlRf_v2RLYw2V3ZAGnjt/view?usp=sharing",label:t.$t("common.infectionControlGuidelines")}}),t._v(" "),o("outer-link",{staticClass:"block mt-2 hover:text-blue-green focus:text-blue-green",attrs:{to:"https://drive.google.com/file/d/1tCo8JM9F_qVO8Pbol6_AmQusv6pogiz9/view?usp=sharing",label:t.$t("common.InfectionControlChecklist")}})],1):t._e()]),t._v(" "),o("li",{staticClass:"relative"},[o("p",{staticClass:"relative cursor-pointer headear-options",on:{click:function(e){return t.selectMenu(1)}}},[t._v("\n            "+t._s(t.$t("common.events"))+"\n          ")]),t._v(" "),t.showEventListMenu?o("div",{staticClass:"list-menu"},[o("nuxt-link",{staticClass:"hover:text-blue-green focus:text-blue-green",attrs:{to:t.localePath("/time-table")}},[t._v(t._s(t.$t("common.timeTable")))])],1):t._e()]),t._v(" "),o("li",{},[o("outer-link",{staticClass:"hover:text-blue-green focus:text-blue-green",attrs:{label:"news",to:"https://pyconjp.blogspot.com/search/label/pyconjp2021"}})],1),t._v(" "),o("li",{staticClass:"relative"},[o("p",{staticClass:"relative cursor-pointer headear-options",on:{click:function(e){return t.selectMenu(2)}}},[t._v("\n            "+t._s(t.$t("common.sponsors"))+"\n          ")]),t._v(" "),t.showSponsorMenu?o("div",{staticClass:"list-menu"},[o("nuxt-link",{staticClass:"block hover:text-blue-green focus:text-blue-green",attrs:{to:t.localePath("/sponsors")}},[t._v("\n              "+t._s(t.$t("common.sponsorList")))]),t._v(" "),o("outer-link",{staticClass:"block mt-2 line-through  text-custom-gray hover:opacity-70",attrs:{label:t.$t("common.prospectus"),to:"https://pyconjp.blogspot.com/2021/09/closed-sponsor-application.html"}}),t._v(" "),o("outer-link",{staticClass:"block mt-2 line-through  text-custom-gray hover:opacity-70",attrs:{label:t.$t("common.applicationForm"),to:"https://pyconjp.blogspot.com/2021/09/closed-sponsor-application.html"}})],1):t._e()]),t._v(" "),o("li",{},[o("nuxt-link",{staticClass:"hover:text-blue-green focus:text-blue-green",attrs:{to:t.localePath("/staff")}},[t._v(t._s(t.$t("common.staff")))])],1),t._v(" "),o("li",{},["en"===t.$i18n.locale?o("nuxt-link",{staticClass:"language-switch hover:opacity-70",attrs:{to:t.switchLocalePath("ja")}},[t._v("JA")]):t._e(),t._v(" "),"ja"===t.$i18n.locale?o("nuxt-link",{staticClass:"language-switch hover:opacity-70",attrs:{to:t.switchLocalePath("en")}},[t._v("EN")]):t._e()],1)])])],1),t._v(" "),t.showMenuBackground?o("div",{staticClass:"fixed top-0 left-0 z-30 w-screen h-screen",on:{click:function(e){return t.selectMenu(99)}}}):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OuterLink:n(106).default})},425:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTY3LjY1NyAxNjcuNjU3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNjcuNjU3IDE2Ny42NTc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNODMuODI5LDAuMzQ5QzM3LjUzMiwwLjM0OSwwLDM3Ljg4MSwwLDg0LjE3OGMwLDQxLjUyMywzMC4yMjIsNzUuOTExLDY5Ljg0OCw4Mi41N3YtNjUuMDgxSDQ5LjYyNg0KCQl2LTIzLjQyaDIwLjIyMlY2MC45NzhjMC0yMC4wMzcsMTIuMjM4LTMwLjk1NiwzMC4xMTUtMzAuOTU2YzguNTYyLDAsMTUuOTIsMC42MzgsMTguMDU2LDAuOTE5djIwLjk0NGwtMTIuMzk5LDAuMDA2DQoJCWMtOS43MiwwLTExLjU5NCw0LjYxOC0xMS41OTQsMTEuMzk3djE0Ljk0N2gyMy4xOTNsLTMuMDI1LDIzLjQySDk0LjAyNnY2NS42NTNjNDEuNDc2LTUuMDQ4LDczLjYzMS00MC4zMTIsNzMuNjMxLTgzLjE1NA0KCQlDMTY3LjY1NywzNy44ODEsMTMwLjEyNSwwLjM0OSw4My44MjksMC4zNDl6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="},426:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iQm9sZCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTEyIC41Yy02LjYzIDAtMTIgNS4yOC0xMiAxMS43OTIgMCA1LjIxMSAzLjQzOCA5LjYzIDguMjA1IDExLjE4OC42LjExMS44Mi0uMjU0LjgyLS41NjcgMC0uMjgtLjAxLTEuMDIyLS4wMTUtMi4wMDUtMy4zMzguNzExLTQuMDQyLTEuNTgyLTQuMDQyLTEuNTgyLS41NDYtMS4zNjEtMS4zMzUtMS43MjUtMS4zMzUtMS43MjUtMS4wODctLjczMS4wODQtLjcxNi4wODQtLjcxNiAxLjIwNS4wODIgMS44MzggMS4yMTUgMS44MzggMS4yMTUgMS4wNyAxLjgwMyAyLjgwOSAxLjI4MiAzLjQ5NS45ODEuMTA4LS43NjMuNDE3LTEuMjgyLjc2LTEuNTc3LTIuNjY1LS4yOTUtNS40NjYtMS4zMDktNS40NjYtNS44MjcgMC0xLjI4Ny40NjUtMi4zMzkgMS4yMzUtMy4xNjQtLjEzNS0uMjk4LS41NC0xLjQ5Ny4xMDUtMy4xMjEgMCAwIDEuMDA1LS4zMTYgMy4zIDEuMjA5Ljk2LS4yNjIgMS45OC0uMzkyIDMtLjM5OCAxLjAyLjAwNiAyLjA0LjEzNiAzIC4zOTggMi4yOC0xLjUyNSAzLjI4NS0xLjIwOSAzLjI4NS0xLjIwOS42NDUgMS42MjQuMjQgMi44MjMuMTIgMy4xMjEuNzY1LjgyNSAxLjIzIDEuODc3IDEuMjMgMy4xNjQgMCA0LjUzLTIuODA1IDUuNTI3LTUuNDc1IDUuODE3LjQyLjM1NC44MSAxLjA3Ny44MSAyLjE4MiAwIDEuNTc4LS4wMTUgMi44NDYtLjAxNSAzLjIyOSAwIC4zMDkuMjEuNjc4LjgyNS41NiA0LjgwMS0xLjU0OCA4LjIzNi01Ljk3IDguMjM2LTExLjE3MyAwLTYuNTEyLTUuMzczLTExLjc5Mi0xMi0xMS43OTJ6Ii8+PC9zdmc+"},427:function(t,e,n){t.exports=n.p+"img/55b971d.svg"},428:function(t,e,n){t.exports=n.p+"img/c3f44b7.svg"},429:function(t,e,n){t.exports=n.p+"img/9509a8c.jpg"},430:function(t,e,n){t.exports=n.p+"img/f973d01.jpg"},431:function(t,e,n){t.exports=n.p+"img/cb6642f.jpg"},432:function(t,e,n){t.exports=n.p+"img/a14a860.jpg"},433:function(t,e,n){t.exports=n.p+"img/cb75600.png"},434:function(t,e,n){t.exports=n.p+"img/f2e6f5b.jpg"},435:function(t,e,n){t.exports=n.p+"img/11fe746.jpg"},436:function(t,e,n){t.exports=n.p+"img/44b7cad.jpg"},437:function(t,e,n){t.exports=n.p+"img/10039c0.jpg"},438:function(t,e,n){t.exports=n.p+"img/7bd94a8.jpg"},439:function(t,e,n){t.exports=n.p+"img/edcb570.jpg"},440:function(t,e,n){t.exports=n.p+"img/1c5b680.jpg"},441:function(t,e,n){t.exports=n.p+"img/d1f08d4.jpg"},442:function(t,e,n){t.exports=n.p+"img/781049e.png"},443:function(t,e,n){t.exports=n.p+"img/fa55171.jpg"},444:function(t,e,n){t.exports=n.p+"img/b62746f.jpg"},445:function(t,e,n){t.exports=n.p+"img/539ca23.jpg"},446:function(t,e,n){t.exports=n.p+"img/24159d8.jpg"},447:function(t,e,n){t.exports=n.p+"img/97cb344.jpg"},448:function(t,e,n){t.exports=n.p+"img/08b12e6.jpg"},449:function(t,e,n){t.exports=n.p+"img/af8cbe7.jpg"},450:function(t,e,n){t.exports=n.p+"img/5fff298.jpg"},451:function(t,e,n){t.exports=n.p+"img/3d1500e.jpg"},452:function(t,e,n){t.exports=n.p+"img/da9a9aa.jpg"},453:function(t,e,n){t.exports=n.p+"img/28352c7.jpg"},454:function(t,e,n){t.exports=n.p+"img/e3c25bf.jpg"},455:function(t,e,n){t.exports=n.p+"img/b540703.jpg"},456:function(t,e,n){t.exports=n.p+"img/3d66e53.jpg"},457:function(t,e,n){t.exports=n.p+"img/05e37c1.jpg"},458:function(t,e,n){t.exports=n.p+"img/27b7cfc.jpg"},542:function(t,e,n){var content=n(589);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("1ef72964",content,!0,{sourceMap:!1})},587:function(t,e,n){var map={"./AkiraInamori.jpg":429,"./Asuka.jpg":430,"./EbiharaYuuki.jpg":431,"./HanaiHiroyuki.jpg":432,"./HiroyaAkita.png":433,"./IosifTakakura.jpg":434,"./KadowakiYuuki.jpg":435,"./KazumiKanda.jpg":436,"./Kima.jpg":437,"./KoyaNakamura.jpg":438,"./MatsuuraManami.jpg":439,"./NaokoKataoka.jpg":440,"./NaritaTakashi.jpg":441,"./OJI.png":442,"./Peacock.jpg":443,"./RyoMurakami.jpg":444,"./SasakiKosuke.jpg":445,"./SatoshiItatani.jpg":446,"./ShuichiMomose.jpg":447,"./ShunsukeYoshida.jpg":448,"./TakumiKuramoto.jpg":449,"./WATANABETakeo.jpg":450,"./Yoshiken.jpg":451,"./ikuru.jpg":452,"./itataniaiko.jpg":453,"./masamori.jpg":454,"./natsu.jpg":455,"./nikkie.jpg":456,"./nishi.jpg":457,"./panakuma.jpg":458};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=587},588:function(t,e,n){"use strict";n(542)},589:function(t,e,n){var o=n(53)((function(i){return i[1]}));o.push([t.i,".sticky-header[data-v-f55d2eb6]{\n  position:sticky;\n  top:0\n}\n.filter-gray[data-v-f55d2eb6]{\n  filter:brightness(0) saturate(100%) invert(100%) sepia(0) saturate(95%) hue-rotate(141deg) brightness(88%) contrast(81%)\n}\n.filter-facebook-blue[data-v-f55d2eb6]{\n  filter:invert(30%) sepia(74%) saturate(2937%) hue-rotate(206deg) brightness(99%) contrast(90%)\n}",""]),o.locals={},t.exports=o},610:function(t,e,n){"use strict";n.r(e);var o={components:{CustomHeader:n(392).default},data:function(){return{staffs:[{nameJp:"にっきー",nameEn:"nikkie",titleJp:"座長",titleEn:"Chair",imgURL:"nikkie.jpg",facebook:"",twitter:"ftnext",github:"ftnext",id:"UDVN3MVL5"},{nameJp:"佐々木 康祐",nameEn:"Sasaki Kosuke",titleJp:"NOC",titleEn:"NOC",imgURL:"SasakiKosuke.jpg",facebook:"profile.php?id=100018498365616",twitter:"NSR1336",github:"",id:"U027MPFJCAG"},{nameJp:"松浦 麻奈未",nameEn:"Matsuura Manami",titleJp:"",titleEn:"",imgURL:"MatsuuraManami.jpg",facebook:"manami.matsuura.227",twitter:"mtmn07384",github:"matsumana07384",id:"U9J3ZUKN2"},{nameJp:"中村 航也",nameEn:"Koya Nakamura",titleJp:"",titleEn:"",imgURL:"KoyaNakamura.jpg",facebook:"",twitter:"",github:"k-nakamura",id:"U01V39Z5X5L"},{nameJp:"高倉 佑輔（ヨーシャ）",nameEn:"Iosif Takakura",titleJp:"",titleEn:"",imgURL:"IosifTakakura.jpg",facebook:"iosif.takakura.yusuke",twitter:"huideyeren",github:"huideyeren",id:"U50LN00RK"},{nameJp:"Peacock",nameEn:"Peacock",titleJp:"",titleEn:"",imgURL:"Peacock.jpg",facebook:"peacock0803sz",twitter:"peacock0803sz",github:"peacock0803sz",id:"UNU5JMELS"},{nameJp:"宮脇 一晃",nameEn:"miyawaki kazuaki",titleJp:"",titleEn:"",imgURL:"",facebook:"",twitter:"",github:"",id:"UHEMDNMU5"},{nameJp:"OJI",nameEn:"OJI",titleJp:"Discord 担当",titleEn:"Cheif Discord Staff",imgURL:"OJI.png",facebook:"",twitter:"OldBigBuddha",github:"OldBigBuddha",id:"U01M9DLQ1EW"},{nameJp:"板谷 郷司",nameEn:"Satoshi Itatani",titleJp:"オンサイト会場担当",titleEn:"On-site Venue Staff",imgURL:"SatoshiItatani.jpg",facebook:"hiyou.shinonome",twitter:"H_Shinonome",github:"shinonome",id:"UBF56JMNY"},{nameJp:"宮下 亮太",nameEn:"ミヤシタ　リョウタ",titleJp:"",titleEn:"",imgURL:"",facebook:"",twitter:"",github:"",id:"U018KRQRB7X"},{nameJp:"村上 涼",nameEn:"Ryo Murakami",titleJp:"",titleEn:"",imgURL:"RyoMurakami.jpg",facebook:"",twitter:"",github:"kyomukyomupurin",id:"U02AQP58K7E"},{nameJp:"倉本 拓実",nameEn:"Takumi Kuramoto",titleJp:"",titleEn:"",imgURL:"TakumiKuramoto.jpg",facebook:"",twitter:"katura46",github:"",id:"UMX263U6L"},{nameJp:"パナくま",nameEn:"panakuma",titleJp:"",titleEn:"",imgURL:"panakuma.jpg",facebook:"panakuma8787/",twitter:"pana_pana_kuma",github:"panakuma",id:"U5YQGB4TT"},{nameJp:"Kima",nameEn:"Kima",titleJp:"",titleEn:"",imgURL:"Kima.jpg",facebook:"",twitter:"kingkoma_",github:"kingkoma",id:"U027RQJM534"},{nameJp:"nishi",nameEn:"nishi",titleJp:"",titleEn:"",imgURL:"nishi.jpg",facebook:"yoshiro.nishimura.9/",twitter:"",github:"",id:"U4K623R2S"},{nameJp:"門脇 優貴",nameEn:"Kadowaki Yuuki",titleJp:"",titleEn:"",imgURL:"KadowakiYuuki.jpg",facebook:"",twitter:"",github:"",id:"U01SMHWSUP8"},{nameJp:"まさもり",nameEn:"masamori",titleJp:"トーク担当",titleEn:"vice-chair-of-talk",imgURL:"masamori.jpg",facebook:"",twitter:"masamori0083",github:"",id:"U013ZBXU3CL"},{nameJp:"秋田 浩也(あっきー)",nameEn:"Hiroya Akita",titleJp:"ウェブサイト、スポンサー担当",titleEn:"charge of website, sponsor",imgURL:"HiroyaAkita.png",facebook:"",twitter:"papi_tokei",github:"papi-tokei",id:"UN47GEU3F"},{nameJp:"神田 佳積",nameEn:"Kazumi Kanda",titleJp:"グッズ担当",titleEn:"",imgURL:"KazumiKanda.jpg",facebook:"kazforest/",twitter:"kazumiks",github:"kazkanda",id:"U01V585G6KS"},{nameJp:"渡部 岳郎",nameEn:"WATANABE Takeo",titleJp:"NOC",titleEn:"NOC",imgURL:"WATANABETakeo.jpg",facebook:"",twitter:"",github:"",id:"U027CH92FM3"},{nameJp:"吉田 俊輔",nameEn:"Shunsuke Yoshida",titleJp:"",titleEn:"会計、一社理事",imgURL:"ShunsukeYoshida.jpg",facebook:"koedoyoshida",twitter:"koedoyoshida",github:"koedoyoshida",id:"U024HRNSD"},{nameJp:"Asuka",nameEn:"Asuka",titleJp:"デザイン担当",titleEn:"Design",imgURL:"Asuka.jpg",facebook:"",twitter:"",github:"noraneko5628",id:"U01NZP7JK60"},{nameJp:"板谷 藍子",nameEn:"itatani aiko",titleJp:"",titleEn:"",imgURL:"itataniaiko.jpg",facebook:"aiko.miyairi",twitter:"mary_tuba",github:"",id:"UBFDUFA2E"},{nameJp:"片岡 直子",nameEn:"Naoko Kataoka",titleJp:"キーノート&英語担当",titleEn:"Keynote and English assistant",imgURL:"NaokoKataoka.jpg",facebook:"",twitter:"",github:"",id:"U02243KE360"},{nameJp:"よしけん",nameEn:"Yoshiken",titleJp:"",titleEn:"",imgURL:"Yoshiken.jpg",facebook:"",twitter:"yoshiken_tut",github:"yoshiken",id:"UL6D8L3PW"},{nameJp:"成田 孝",nameEn:"Narita Takashi",titleJp:"スポンサー担当",titleEn:"",imgURL:"NaritaTakashi.jpg",facebook:"narinarita1980/",twitter:"narinarita1980",github:"narita1980",id:"U026XSKDSMN"},{nameJp:"花井 宏行",nameEn:"Hanai Hiroyuki",titleJp:"",titleEn:"",imgURL:"HanaiHiroyuki.jpg",facebook:"",twitter:"hanahiro_aze",github:"",id:"UB5JURRV4"},{nameJp:"稲森 景",nameEn:"Akira Inamori",titleJp:"ネットワーク担当",titleEn:"Network Engineer",imgURL:"AkiraInamori.jpg",facebook:"ainamori01",twitter:"ainamori",github:"ainamori",id:"UL9HPA2PM"},{nameJp:"natsu",nameEn:"natsu",titleJp:"",titleEn:"",imgURL:"natsu.jpg",facebook:"",twitter:"natsu_bm",github:"",id:"U024GT9JB"},{nameJp:"百瀬 秀一",nameEn:"Shuichi Momose",titleJp:"NOC 担当",titleEn:"NOC",imgURL:"ShuichiMomose.jpg",facebook:"",twitter:"",github:"",id:"U0284EJFD1P"},{nameJp:"ikuru",nameEn:"ikuru",titleJp:"",titleEn:"",imgURL:"ikuru.jpg",facebook:"",twitter:"",github:"",id:"U02G4N03GJD"},{nameJp:"エビハラ ユウキ",nameEn:"Ebihara Yuuki",titleJp:"",titleEn:"",imgURL:"EbiharaYuuki.jpg",facebook:"",twitter:"",github:"",id:"U13M0PE9Y"},{nameJp:"橋本 拓弥 / hassaku",nameEn:"Takuya Hashimoto / hassaku",titleJp:"",titleEn:"",imgURL:"",facebook:"",twitter:"hassaku_63",github:"hassaku63",id:"U0293LY8E0G"},{nameJp:"ひとかむ",nameEn:"hitokamu",titleJp:"",titleEn:"",imgURL:"",facebook:"",twitter:"",github:"",id:"U02GD6U9ZDH"},{nameJp:"Psyduck",nameEn:"Psyduck",titleJp:"",titleEn:"",imgURL:"",facebook:"",twitter:"",github:"",id:""},{nameJp:"ウツノミヤ",nameEn:"ウツノミヤ",titleJp:"",titleEn:"",imgURL:"",facebook:"",twitter:"",github:"",id:""},{nameJp:"よしたく",nameEn:"よしたく",titleJp:"",titleEn:"",imgURL:"",facebook:"",twitter:"",github:"",id:""},{nameJp:"ペペ",nameEn:"pepe",titleJp:"",titleEn:"",imgURL:"",facebook:"",twitter:"",github:"",id:""},{nameJp:"エヌ猫",nameEn:"ncat",titleJp:"",titleEn:"",imgURL:"",facebook:"",twitter:"",github:"",id:""}]}}},r=(n(588),n(39)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col items-center"},[o("div",{staticClass:"z-20 flex items-center justify-center w-full mt-6 sticky-header"},[o("CustomHeader",{staticClass:"w-11/12 lg:w-5/6"})],1),t._v(" "),o("div",{staticClass:"w-11/12 mb-40 text-black"},[t._m(0),t._v(" "),o("div",{staticClass:"grid grid-cols-2 mt-4 text-center  lg:grid-cols-4 place-items-center"},t._l(t.staffs,(function(e){return o("div",{key:e.id,staticClass:"flex flex-col items-center object-center my-8"},[o("img",{staticClass:"block object-cover object-center w-20 h-20 m-auto rounded-full  lg:w-40 lg:h-40",attrs:{src:e.imgURL?n(587)("./"+e.imgURL):n(428),alt:"staff"}}),t._v(" "),o("p",{staticClass:"h-6 mx-2 mt-4 text-xs lg:text-base font-noto"},[t._v("\n          "+t._s("ja"===t.$i18n.locale?e.titleJp:e.titleEn)+"\n        ")]),t._v(" "),o("p",{staticClass:"h-8 m-2 text-base lg:text-2xl font-moto"},[t._v("\n          "+t._s("ja"===t.$i18n.locale?e.nameJp:e.nameEn)+"\n        ")]),t._v(" "),o("div",{staticClass:"flex justify-around gap-3 mt-2 mb-4  w-28 lg:w-56 lg:gap-6 lg:place-content-center"},[o("a",{staticClass:"flex hover:opacity-70",class:{"pointer-events-none":""===e.twitter},attrs:{href:"https://twitter.com/"+e.twitter,target:"_blank",rel:"noopener noreferrer"}},[o("img",{staticClass:"w-6 h-6",class:{"filter-gray":""===e.twitter},attrs:{src:n(427),alt:"twitter-icon"}})]),t._v(" "),o("a",{staticClass:"flex hover:opacity-70",class:{"pointer-events-none":""===e.facebook},attrs:{href:"https://facebook.com/"+e.facebook,target:"_blank",rel:"noopener noreferrer"}},[o("img",{staticClass:"w-6 h-6",class:{"filter-gray":""===e.facebook,"filter-facebook-blue":""!==e.facebook},attrs:{src:n(425),alt:"facebook-icon"}})]),t._v(" "),o("a",{staticClass:"flex hover:opacity-70",class:{"pointer-events-none":""===e.github},attrs:{href:"https://github.com/"+e.github,target:"_blank",rel:"noopener noreferrer"}},[o("img",{staticClass:"w-6 h-6",class:{"filter-gray":""===e.github},attrs:{src:n(426),alt:"github-icon"}})])])])})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-4 my-14 lg:m-20"},[n("p",{staticClass:"-mb-8 font-bold  font-mont text-shadow text-7xl lg:text-9xl lg:-mb-14"},[t._v("\n        Staff\n      ")]),t._v(" "),n("p",{staticClass:"text-4xl font-bold font-mont lg:text-6xl text-blue-green"},[t._v("\n        Staff\n      ")])])}],!1,null,"f55d2eb6",null);e.default=component.exports}}]);