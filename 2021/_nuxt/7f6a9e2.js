(window.webpackJsonp=window.webpackJsonp||[]).push([[17,4,10],{377:function(t,e,n){var content=n(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("2bb14ec5",content,!0,{sourceMap:!1})},378:function(t,e,n){var content=n(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("092d23a0",content,!0,{sourceMap:!1})},380:function(t,e,n){var content=n(391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("4dde9e5d",content,!0,{sourceMap:!1})},381:function(t,e,n){"use strict";n(377)},382:function(t,e,n){var o=n(53)((function(i){return i[1]}));o.push([t.i,'.js-accordion--trigger[data-v-76dda438]{\n  position:relative;\n  width:100%;\n  transition:all .2s ease-in;\n  display:block;\n  font-weight:700;\n  text-align:left;\n  outline:none;\n  border:none;\n  cursor:pointer\n}\n.js-accordion--trigger[data-v-76dda438]:after{\n  display:inline-block;\n  width:0;\n  height:0;\n  border:solid transparent;\n  content:"";\n  position:absolute;\n  top:50%;\n  right:1em;\n  margin-top:-5px;\n  transition:all .2s ease-in\n}\n.js-accordion--trigger._state-open[data-v-76dda438]{\n  text-decoration:none\n}\n.js-accordion--trigger._state-open[data-v-76dda438]:after{\n  transform:rotateX(180deg);\n  margin-top:-10px\n}\n.js-accordion--trigger[data-v-76dda438]:hover{\n  text-decoration:none\n}\n.js-accordion--target[data-v-76dda438]{\n  overflow:hidden;\n  transition:.4s ease-in-out\n}\n.js-accordion--body[data-v-76dda438]{\n  padding:30px\n}\n.js-accordion-enter-active[data-v-76dda438]{\n  -webkit-animation-duration:1s;\n          animation-duration:1s;\n  -webkit-animation-fill-mode:both;\n          animation-fill-mode:both;\n  -webkit-animation-name:js-accordion--anime__opend-data-v-76dda438;\n          animation-name:js-accordion--anime__opend-data-v-76dda438\n}\n.js-accordion-leave-active[data-v-76dda438]{\n  -webkit-animation-duration:1s;\n          animation-duration:1s;\n  -webkit-animation-fill-mode:both;\n          animation-fill-mode:both;\n  -webkit-animation-name:js-accordion--anime__closed-data-v-76dda438;\n          animation-name:js-accordion--anime__closed-data-v-76dda438\n}\n@-webkit-keyframes js-accordion--anime__opend-data-v-76dda438{\n0%{\n    opacity:0\n}\nto{\n    opacity:1\n}\n}\n@keyframes js-accordion--anime__opend-data-v-76dda438{\n0%{\n    opacity:0\n}\nto{\n    opacity:1\n}\n}\n@-webkit-keyframes js-accordion--anime__closed-data-v-76dda438{\n0%{\n    opacity:1\n}\nto{\n    opacity:0\n}\n}\n@keyframes js-accordion--anime__closed-data-v-76dda438{\n0%{\n    opacity:1\n}\nto{\n    opacity:0\n}\n}\n.disable-message[data-v-76dda438]{\n  color:#cecece\n}',""]),o.locals={},t.exports=o},383:function(t,e,n){"use strict";n.r(e);var o={props:{disable:{type:Boolean,default:!1},menuName:{type:String,default:null},opened:{type:String,default:null},toggleMenu:{type:Function,default:function(){}}},methods:{beforeEnter:function(t){t.style.height="0"},enter:function(t){t.style.height=t.scrollHeight+"px"},beforeLeave:function(t){t.style.height=t.scrollHeight+"px"},leave:function(t){t.style.height="0"}}},r=(n(381),n(39)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"js-accordion"},[n("button",{staticClass:"mb-2 js-accordion--trigger",class:{"_state-open":t.menuName===t.opened,"disable-message":t.disable,"pointer-events-none":t.disable},attrs:{type:"button"},on:{click:function(e){return t.toggleMenu(t.menuName)}}},[t._t("title")],2),t._v(" "),n("transition",{attrs:{name:"js-accordion"},on:{"before-enter":t.beforeEnter,enter:t.enter,"before-leave":t.beforeLeave,leave:t.leave}},[t.menuName===t.opened?n("div",{staticClass:"pl-8 js-accordion--target",class:{"_state-open":t.menuName===t.opened}},[t._t("body")],2):t._e()])],1)}),[],!1,null,"76dda438",null);e.default=component.exports},384:function(t,e,n){"use strict";n(378)},385:function(t,e,n){var o=n(53)((function(i){return i[1]}));o.push([t.i,'.header-border[data-v-5bb8dcb2]{\n  width:100%;\n  height:0;\n  left:77px;\n  top:661px;\n  border:1px solid #1097aa\n}\n.dli-close[data-v-5bb8dcb2]{\n  display:inline-block;\n  vertical-align:middle;\n  color:#333;\n  line-height:1;\n  width:2em;\n  height:.1em;\n  background:currentColor;\n  border-radius:.1em;\n  position:relative;\n  transform:rotate(45deg)\n}\n.dli-close[data-v-5bb8dcb2]:before{\n  content:"";\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  background:inherit;\n  border-radius:inherit;\n  transform:rotate(90deg)\n}\n.headear-options[data-v-5bb8dcb2]:after{\n  border-color:#000 transparent transparent\n}\n.headear-options-disable[data-v-5bb8dcb2]:after,.headear-options[data-v-5bb8dcb2]:after{\n  content:"";\n  width:0;\n  height:0;\n  position:absolute;\n  top:12px;\n  right:-14px;\n  border-style:solid;\n  border-width:6px 5px 0\n}\n.headear-options-disable[data-v-5bb8dcb2]:after{\n  border-color:#cecece transparent transparent\n}\n.language-switch[data-v-5bb8dcb2]{\n  padding:.2rem 1.5rem;\n  margin-top:1rem;\n  color:#fff;\n  background:#1097aa;\n  border-radius:100px\n}\n.disable-message[data-v-5bb8dcb2]{\n  color:#cecece\n}',""]),o.locals={},t.exports=o},389:function(t,e,n){"use strict";n.r(e);var o=n(383),r={components:{OuterLink:n(106).default,Accordion:o.default},data:function(){return{opened:null}},methods:{toggleMenu:function(t){this.opened!==t?this.opened=t:this.opened=null}}},l=(n(384),n(39)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center w-full"},[n("div",{staticClass:"relative flex flex-col items-start w-2/3 font-bold font-noto"},[n("div",{staticClass:"absolute w-8 h-8 -right-4 top-8",on:{click:function(e){return t.$emit("close")}}},[n("span",{staticClass:"dli-close"})]),t._v(" "),n("div",{staticClass:"w-full mb-4 mt-28"},[n("Accordion",{attrs:{"menu-name":"about","toggle-menu":t.toggleMenu,opened:t.opened}},[n("div",{attrs:{slot:"title"},slot:"title"},[n("p",{staticClass:"relative inline headear-options"},[t._v("\n            "+t._s(t.$t("common.about"))+"\n          ")])]),t._v(" "),n("div",{staticClass:"js-accordion--body",attrs:{slot:"body"},slot:"body"},[n("nuxt-link",{staticClass:"block hover:text-blue-green focus:text-blue-green",attrs:{to:t.localePath("/code-of-conduct")}},[t._v(t._s(t.$t("common.codeOfConduct")))]),t._v(" "),n("outer-link",{staticClass:"block mt-2 hover:text-blue-green focus:text-blue-green",attrs:{to:"https://drive.google.com/file/d/1abgh7glVaUsYnlRf_v2RLYw2V3ZAGnjt/view?usp=sharing",label:t.$t("common.infectionControlGuidelines")}}),t._v(" "),n("outer-link",{staticClass:"block mt-2 hover:text-blue-green focus:text-blue-green",attrs:{to:"https://drive.google.com/file/d/1tCo8JM9F_qVO8Pbol6_AmQusv6pogiz9/view?usp=sharing",label:t.$t("common.InfectionControlChecklist")}})],1)])],1),t._v(" "),n("div",{staticClass:"w-full mb-4"},[n("Accordion",{attrs:{"menu-name":"events","toggle-menu":t.toggleMenu,opened:t.opened}},[n("div",{attrs:{slot:"title"},slot:"title"},[n("p",{staticClass:"relative inline headear-options"},[t._v("\n            "+t._s(t.$t("common.events"))+"\n          ")])]),t._v(" "),n("div",{staticClass:"js-accordion--body",attrs:{slot:"body"},slot:"body"},[n("nuxt-link",{staticClass:"hover:text-blue-green focus:text-blue-green",attrs:{to:t.localePath("/time-table")}},[t._v(t._s(t.$t("common.timeTable")))])],1)])],1),t._v(" "),n("div",{staticClass:"mb-4"},[n("outer-link",{staticClass:"hover:text-blue-green focus:text-blue-green",attrs:{label:"news",to:"https://pyconjp.blogspot.com/2021/"}})],1),t._v(" "),n("div",{staticClass:"w-full mb-4"},[n("Accordion",{attrs:{"menu-name":"sponsors","toggle-menu":t.toggleMenu,opened:t.opened}},[n("div",{staticClass:"relative inline headear-options",attrs:{slot:"title"},slot:"title"},[t._v("\n          "+t._s(t.$t("common.sponsors"))+"\n        ")]),t._v(" "),n("div",{staticClass:"js-accordion--body",attrs:{slot:"body"},slot:"body"},[n("nuxt-link",{staticClass:"block hover:text-blue-green focus:text-blue-green",attrs:{to:t.localePath("/sponsors")}},[t._v("\n            "+t._s(t.$t("common.sponsorList")))]),t._v(" "),n("outer-link",{staticClass:"block mt-2 line-through text-custom-gray hover:opacity-70",attrs:{label:t.$t("common.prospectus"),to:"https://pyconjp.blogspot.com/2021/09/closed-sponsor-application.html"}}),t._v(" "),n("outer-link",{staticClass:"block mt-2 line-through text-custom-gray hover:opacity-70",attrs:{label:t.$t("common.applicationForm"),to:"https://pyconjp.blogspot.com/2021/09/closed-sponsor-application.html"}})],1)])],1),t._v(" "),n("div",{staticClass:"mb-4"},[n("nuxt-link",{staticClass:"hover:text-blue-green focus:text-blue-green",attrs:{to:t.localePath("/staff")}},[t._v(t._s(t.$t("common.staff")))])],1),t._v(" "),n("div",{staticClass:"mt-16 header-border"}),t._v(" "),n("div",{staticClass:"flex flex-col items-center justify-center w-full mt-6"},[n("p",{staticClass:"inline"},[t._v("Language")]),t._v(" "),"en"===t.$i18n.locale?n("nuxt-link",{staticClass:"language-switch hover:opacity-70",attrs:{to:t.switchLocalePath("ja")}},[t._v("JA")]):t._e(),t._v(" "),"ja"===t.$i18n.locale?n("nuxt-link",{staticClass:"language-switch hover:opacity-70",attrs:{to:t.switchLocalePath("en")}},[t._v("EN")]):t._e()],1)])])}),[],!1,null,"5bb8dcb2",null);e.default=component.exports;installComponents(component,{OuterLink:n(106).default})},390:function(t,e,n){"use strict";n(380)},391:function(t,e,n){var o=n(53)((function(i){return i[1]}));o.push([t.i,'.navbar{\n  height:72px;\n  border-radius:8px;\n  background:#fff\n}\n.list-menu,.navbar{\n  box-shadow:0 2px 12px rgba(0,0,0,.1),0 2px 24px rgba(0,0,0,.08)\n}\n.list-menu{\n  position:absolute;\n  top:2rem;\n  width:14rem;\n  padding:.8rem 1rem;\n  background-color:#fff\n}\n.language-switch{\n  padding:.2rem 1.5rem;\n  color:#fff;\n  background:#1097aa;\n  border-radius:100px\n}\n.headear-options:after{\n  border-color:#000 transparent transparent\n}\n.headear-options-disable:after,.headear-options:after{\n  content:"";\n  width:0;\n  height:0;\n  position:absolute;\n  top:12px;\n  right:-14px;\n  border-style:solid;\n  border-width:6px 5px 0\n}\n.headear-options-disable:after{\n  border-color:#cecece transparent transparent\n}\n.disable-message{\n  color:#cecece\n}\n.openbtn{\n  position:relative;\n  background:#fff;\n  cursor:pointer;\n  width:50px;\n  height:50px;\n  border-radius:5px\n}\n.openbtn span{\n  display:inline-block;\n  transition:all .4s;\n  position:absolute;\n  height:3px;\n  border-radius:2px;\n  background:#000\n}\n.openbtn span:first-of-type{\n  position:absolute;\n  top:15px;\n  right:14px;\n  width:20%\n}\n.openbtn span:nth-of-type(2){\n  top:23px;\n  left:14px;\n  width:45%\n}\n.openbtn span:nth-of-type(3){\n  top:31px;\n  left:14px;\n  width:45%\n}\n.mobile-menu{\n  width:100vw;\n  height:100vh;\n  position:fixed;\n  top:0;\n  left:0;\n  background-color:#fff;\n  z-index:10\n}\n.mobile-menu-content{\n  margin:22% auto\n}\n.v-enter-active,.v-leave-active{\n  transition:opacity .4s\n}\n.v-enter,.v-leave-to{\n  opacity:0\n}',""]),o.locals={},t.exports=o},392:function(t,e,n){"use strict";n.r(e);var o=n(389),r={components:{OuterLink:n(106).default,SPHeader:o.default},data:function(){return{showMenuBackground:!1,showAbstractMenu:!1,showEventListMenu:!1,showSponsorMenu:!1,isMobile:!1,showMobileMenu:!1}},mounted:function(){window.matchMedia("(max-width: 1023px)").matches&&(this.isMobile=!0)},beforeDestroy:function(){this.closeMobileMenu()},methods:{selectMenu:function(t){0===t?(this.showMenuBackground=!1,this.showEventListMenu=!1,this.showSponsorMenu=!1,this.showAbstractMenu=!this.showAbstractMenu,this.showMenuBackground=!this.showMenuBackground):1===t?(this.showMenuBackground=!1,this.showAbstractMenu=!1,this.showSponsorMenu=!1,this.showEventListMenu=!this.showEventListMenu,this.showMenuBackground=!this.showMenuBackground):2===t?(this.showMenuBackground=!1,this.showAbstractMenu=!1,this.showEventListMenu=!1,this.showSponsorMenu=!this.showSponsorMenu,this.showMenuBackground=!this.showMenuBackground):99===t&&(this.showMenuBackground=!1,this.showAbstractMenu=!1,this.showEventListMenu=!1,this.showSponsorMenu=!1)},switchLanguage:function(){this.$i18n.locale="en"},preventDefault:function(t){t.preventDefault()},openMobileMenu:function(){this.showMobileMenu=!0,document.addEventListener("touchmove",this.preventDefault,{passive:!1}),document.addEventListener("mousewheel",this.preventDefault,{passive:!1})},closeMobileMenu:function(){this.showMobileMenu=!1,document.removeEventListener("touchmove",this.preventDefault,{passive:!1}),document.removeEventListener("mousewheel",this.preventDefault,{passive:!1})}}},l=(n(390),n(39)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"relative"},[o("nav",{staticClass:"relative z-40 flex items-center justify-between pl-4 pr-4  lg:pl-0 lg:justify-center navbar"},[o("div",{staticClass:"flex items-center justify-center w-1/2 lg:w-1/4"},[o("nuxt-link",{staticClass:"hover:opacity-50",attrs:{to:t.localePath("/")}},[o("img",{attrs:{src:n(387),alt:""}})])],1),t._v(" "),o("transition",[t.showMobileMenu?o("SPHeader",{staticClass:"mobile-menu",on:{close:t.closeMobileMenu}}):t._e()],1),t._v(" "),t.isMobile?o("div",{staticClass:"openbtn",class:[{active:t.showMobileMenu}],on:{click:t.openMobileMenu}},[o("span"),o("span"),o("span")]):t._e(),t._v(" "),t.isMobile?t._e():o("div",{staticClass:"w-3/4 font-bold font-noto"},[o("ul",{staticClass:"flex items-center justify-around"},[o("li",{staticClass:"relative"},[o("p",{staticClass:"relative cursor-pointer headear-options",on:{click:function(e){return t.selectMenu(0)}}},[t._v("\n            "+t._s(t.$t("common.about"))+"\n          ")]),t._v(" "),t.showAbstractMenu?o("div",{staticClass:"list-menu"},[o("nuxt-link",{staticClass:"block hover:text-blue-green focus:text-blue-green",attrs:{to:t.localePath("/code-of-conduct")}},[t._v(t._s(t.$t("common.codeOfConduct")))]),t._v(" "),o("outer-link",{staticClass:"block mt-2 hover:text-blue-green focus:text-blue-green",attrs:{to:"https://drive.google.com/file/d/1abgh7glVaUsYnlRf_v2RLYw2V3ZAGnjt/view?usp=sharing",label:t.$t("common.infectionControlGuidelines")}}),t._v(" "),o("outer-link",{staticClass:"block mt-2 hover:text-blue-green focus:text-blue-green",attrs:{to:"https://drive.google.com/file/d/1tCo8JM9F_qVO8Pbol6_AmQusv6pogiz9/view?usp=sharing",label:t.$t("common.InfectionControlChecklist")}})],1):t._e()]),t._v(" "),o("li",{staticClass:"relative"},[o("p",{staticClass:"relative cursor-pointer headear-options",on:{click:function(e){return t.selectMenu(1)}}},[t._v("\n            "+t._s(t.$t("common.events"))+"\n          ")]),t._v(" "),t.showEventListMenu?o("div",{staticClass:"list-menu"},[o("nuxt-link",{staticClass:"hover:text-blue-green focus:text-blue-green",attrs:{to:t.localePath("/time-table")}},[t._v(t._s(t.$t("common.timeTable")))])],1):t._e()]),t._v(" "),o("li",{},[o("outer-link",{staticClass:"hover:text-blue-green focus:text-blue-green",attrs:{label:"news",to:"https://pyconjp.blogspot.com/search/label/pyconjp2021"}})],1),t._v(" "),o("li",{staticClass:"relative"},[o("p",{staticClass:"relative cursor-pointer headear-options",on:{click:function(e){return t.selectMenu(2)}}},[t._v("\n            "+t._s(t.$t("common.sponsors"))+"\n          ")]),t._v(" "),t.showSponsorMenu?o("div",{staticClass:"list-menu"},[o("nuxt-link",{staticClass:"block hover:text-blue-green focus:text-blue-green",attrs:{to:t.localePath("/sponsors")}},[t._v("\n              "+t._s(t.$t("common.sponsorList")))]),t._v(" "),o("outer-link",{staticClass:"block mt-2 line-through  text-custom-gray hover:opacity-70",attrs:{label:t.$t("common.prospectus"),to:"https://pyconjp.blogspot.com/2021/09/closed-sponsor-application.html"}}),t._v(" "),o("outer-link",{staticClass:"block mt-2 line-through  text-custom-gray hover:opacity-70",attrs:{label:t.$t("common.applicationForm"),to:"https://pyconjp.blogspot.com/2021/09/closed-sponsor-application.html"}})],1):t._e()]),t._v(" "),o("li",{},[o("nuxt-link",{staticClass:"hover:text-blue-green focus:text-blue-green",attrs:{to:t.localePath("/staff")}},[t._v(t._s(t.$t("common.staff")))])],1),t._v(" "),o("li",{},["en"===t.$i18n.locale?o("nuxt-link",{staticClass:"language-switch hover:opacity-70",attrs:{to:t.switchLocalePath("ja")}},[t._v("JA")]):t._e(),t._v(" "),"ja"===t.$i18n.locale?o("nuxt-link",{staticClass:"language-switch hover:opacity-70",attrs:{to:t.switchLocalePath("en")}},[t._v("EN")]):t._e()],1)])])],1),t._v(" "),t.showMenuBackground?o("div",{staticClass:"fixed top-0 left-0 z-30 w-screen h-screen",on:{click:function(e){return t.selectMenu(99)}}}):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OuterLink:n(106).default})},459:function(t,e,n){var map={"./EisukeIto.jpg":413,"./abenben.jpg":414,"./haru860.jpg":415,"./nobnov.jpg":416,"./okusama27.jpg":417,"./rokujyouhitoma.jpeg":418,"./ryu22e.jpg":419,"./shimizukawa.png":420,"./shinyorke.jpg":421,"./tell-k.png":422};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=459},541:function(t,e,n){var content=n(586);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("26070a6a",content,!0,{sourceMap:!1})},585:function(t,e,n){"use strict";n(541)},586:function(t,e,n){var o=n(53)((function(i){return i[1]}));o.push([t.i,'.sticky-header[data-v-48c822f5]{\n  position:sticky;\n  top:0\n}\n.img-items-list[data-v-48c822f5]{\n  margin-bottom:0.75rem;\n  display:flex;\n  flex-wrap:wrap;\n  align-items:center;\n  justify-content:center;\n  padding-left:2.25rem;\n  padding-right:2.25rem;\n  padding-top:0.75rem;\n  padding-bottom:0.75rem\n}\n.text-items-list[data-v-48c822f5]{\n  display:grid;\n  grid-template-columns:repeat(1, minmax(0, 1fr));\n  place-items:center;\n  gap:1rem;\n  padding-left:1.25rem;\n  padding-right:1.25rem;\n  text-align:center\n}\n@media (min-width: 1024px){\n.text-items-list[data-v-48c822f5]{\n    grid-template-columns:repeat(3, minmax(0, 1fr));\n    padding-left:2.25rem;\n    padding-right:2.25rem\n}\n}\n.patron-items-list[data-v-48c822f5]{\n  display:grid;\n  grid-template-columns:repeat(2, minmax(0, 1fr));\n  place-items:start;\n  align-items:center;\n  gap:1rem;\n  padding-left:1.25rem;\n  padding-right:1.25rem;\n  text-align:center\n}\n@media (min-width: 1024px){\n.patron-items-list[data-v-48c822f5]{\n    grid-template-columns:repeat(5, minmax(0, 1fr));\n    padding-left:2.25rem;\n    padding-right:2.25rem\n}\n}\n.v-sheet[data-v-48c822f5]{\n  display:block;\n  border-radius:2px;\n  position:relative;\n  transition:.3s cubic-bezier(.25,.8,.5,1)\n}\n.v-responsive[data-v-48c822f5]{\n  position:relative;\n  overflow:hidden;\n  flex:1 0 auto;\n  display:flex\n}\n.v-image-image[data-v-48c822f5]{\n  z-index:-1;\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  background-repeat:no-repeat\n}\n.v-card[data-v-48c822f5]{\n  box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)\n}\n.theme-light.v-sheet[data-v-48c822f5]{\n  background-color:#fff;\n  border-color:#fff;\n  color:rgba(0,0,0,.87)\n}\n.heading[data-v-48c822f5]{\n  text-align:center;\n  font-family:Montserrat;\n  font-weight:700\n}\n.sp-name[data-v-48c822f5]{\n  margin-top:0.5rem;\n  width:100%;\n  font-size:1.25rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(16, 151, 170, var(--tw-text-opacity))\n}\n@media (min-width: 1024px){\n.sp-name[data-v-48c822f5]{\n    font-size:1.5rem;\n    line-height:2rem\n}\n}\n.sp-intro[data-v-48c822f5]{\n  width:100%;\n  white-space:pre-line;\n  padding-left:0.25rem;\n  padding-right:0.25rem;\n  font-family:\'Noto Sans JP\', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1rem;\n  line-height:1.5rem;\n  line-height:1.75rem;\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity))\n}\n@media screen and (min-width:1024px){\n.fixed-height[data-v-48c822f5]{\n    height:33rem\n}\n}\n.touch-action-none[data-v-48c822f5]{\n  pointer-events:none;\n  touch-action:none\n}',""]),o.locals={},t.exports=o},609:function(t,e,n){"use strict";n.r(e);n(29),n(20),n(32),n(47),n(28),n(48);var o=n(13),r=n(392),l=n(471);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={components:{CustomHeader:r.default},data:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.a)())}},m=(n(585),n(39)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"relative"},[t._m(0),t._v(" "),o("div",{staticClass:"z-20 flex items-center justify-center w-full mt-6 sticky-header"},[o("CustomHeader",{staticClass:"w-11/12"})],1),t._v(" "),o("div",{staticClass:"text-black"},[t._m(1),t._v(" "),o("div",{staticClass:"flex flex-col items-center justify-center pb-20 text-2xl"},[o("div",{staticClass:"container lg:pt-14"},[o("p",{staticClass:"heading"},[t._v("Platinum")]),t._v(" "),o("div",{staticClass:"img-items-list"},t._l(t.platinumSponsorsList,(function(e){return o("div",{key:e.nameJp,staticClass:"w-full p-2 my-1 lg:w-1/2",class:{"touch-action-none":"#"===e.link}},[o("a",{staticClass:"hover:opacity-70",class:{"pointer-events-none":"#"===e.link},attrs:{href:e.link,target:"_blank",rel:"noopener noreferrer"}},[""===e.imgURL?o("p",{staticClass:"m-2 text-xl text-center break-all lg:text-2xl"},[t._v("\n                "+t._s(e.nameJp)+"\n              ")]):o("div",{staticClass:"p-3 lg:p-6 v-card v-sheet theme-light"},[o("div",{staticClass:"z-0 v-responsive"},[o("div",{staticStyle:{"padding-bottom":"66.6667%"}}),t._v(" "),o("div",{staticClass:"bg-contain v-image-image",style:{backgroundImage:"url("+n(386)("./"+e.imgURL)+")",backgroundPosition:"center center"}})])])]),t._v(" "),o("div",{staticClass:"py-4 lg:h-96"},[o("a",{staticClass:"w-full text-center hover:opacity-70",class:{"pointer-events-none":"#"===e.link},attrs:{href:e.link,target:"_blank",rel:"noopener noreferrer"}},[o("div",{staticClass:"sp-name"},[t._v("\n                  "+t._s("ja"===t.$i18n.locale?e.nameJp:e.nameEn)+"\n                ")])]),t._v(" "),o("p",{staticClass:"sp-intro"},[t._v("\n                "+t._s("ja"===t.$i18n.locale?e.introJP:e.introEn)+"\n              ")])])])})),0)]),t._v(" "),o("div",{staticClass:"container"},[o("p",{staticClass:"mt-10 heading"},[t._v("Gold")]),t._v(" "),o("div",{staticClass:"img-items-list"},t._l(t.goldSponsorsList,(function(e){return o("div",{key:e.nameEn,staticClass:"w-full p-2 my-1 lg:w-1/3",class:{"touch-action-none":"#"===e.link}},[o("a",{staticClass:"hover:opacity-70",class:{"pointer-events-none":"#"===e.link},attrs:{href:e.link,target:"_blank",rel:"noopener noreferrer"}},[o("div",{staticClass:"p-3 lg:p-6 v-card v-sheet theme-light"},[o("div",{staticClass:"z-0 v-responsive"},[o("div",{staticStyle:{"padding-bottom":"66.6667%"}}),t._v(" "),o("div",{staticClass:"bg-contain v-image-image",style:{backgroundImage:"url("+n(386)("./"+e.imgURL)+")",backgroundPosition:"center center"}})])])]),t._v(" "),o("div",{staticClass:"py-4 fixed-height"},[o("a",{staticClass:"w-full text-center hover:opacity-70",class:{"pointer-events-none":"#"===e.link},attrs:{href:e.link,target:"_blank",rel:"noopener noreferrer"}},[o("div",{staticClass:"sp-name"},[t._v("\n                  "+t._s("ja"===t.$i18n.locale?e.nameJp:e.nameEn)+"\n                ")])]),t._v(" "),o("p",{staticClass:"sp-intro"},["ja"===t.$i18n.locale?o("span",{domProps:{innerHTML:t._s(e.introJP)}}):o("span",{domProps:{innerHTML:t._s(e.introEn)}})])])])})),0)]),t._v(" "),o("div",[o("p",{staticClass:"my-10 heading"},[t._v("Silver")]),t._v(" "),o("div",{staticClass:"font-medium text-items-list text-blue-green"},t._l(t.silverSponsorsList,(function(e){return o("a",{key:e.nameJp,staticClass:"hover:opacity-70",class:{"pointer-events-none":"#"===e.link},attrs:{href:e.link,target:"_blank",rel:"noopener noreferrer"}},[o("p",{staticClass:"m-2 text-xl break-all lg:text-2xl font-noto"},[t._v("\n              "+t._s("ja"===t.$i18n.locale?e.nameJp:e.nameEn)+"\n            ")])])})),0)]),t._v(" "),o("div",{staticClass:"container mb-8"},[o("p",{staticClass:"mt-10 heading"},[t._v("Special")]),t._v(" "),o("div",{staticClass:"img-items-list"},t._l(t.specialSponsorsList,(function(e){return o("div",{key:e.nameEn,staticClass:"w-full p-2 my-1 lg:w-1/3",class:{"touch-action-none":"#"===e.link}},[o("a",{staticClass:"hover:opacity-70",class:{"pointer-events-none":"#"===e.link},attrs:{href:e.link,target:"_blank",rel:"noopener noreferrer"}},[o("div",{staticClass:"p-3 lg:p-6 v-card v-sheet theme-light"},[o("div",{staticClass:"z-0 v-responsive"},[o("div",{staticStyle:{"padding-bottom":"66.6667%"}}),t._v(" "),o("div",{staticClass:"bg-contain v-image-image",style:{backgroundImage:"url("+n(386)("./"+e.imgURL)+")",backgroundPosition:"center center"}})])])])])})),0)]),t._v(" "),o("div",[o("p",{staticClass:"my-10 heading"},[t._v("Patron")]),t._v(" "),o("div",{staticClass:"font-medium text-black patron-items-list"},t._l(t.patronList,(function(e){return o("a",{key:e.name,staticClass:"flex items-center justify-center hover:opacity-70",attrs:{href:e.pageLink,target:"_blank",rel:"noopener noreferrer"}},[o("img",{staticClass:"w-8 h-8 rounded-full lg:w-10 lg:h-10",attrs:{src:n(459)("./"+e.imegeName),alt:"patron image"}}),t._v(" "),o("p",{staticClass:"m-2 text-sm break-all lg:text-base font-noto"},[t._v("\n              "+t._s(e.name)+"\n            ")])])})),0)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"absolute w-full h-screen overflow-hidden"},[e("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-4 my-14 lg:m-20"},[n("p",{staticClass:"-mb-8 font-bold  font-mont text-shadow text-7xl lg:text-9xl lg:-mb-14"},[t._v("\n        Sponsors\n      ")]),t._v(" "),n("p",{staticClass:"text-4xl font-bold font-mont lg:text-6xl text-blue-green"},[t._v("\n        Sponsors\n      ")])])}],!1,null,"48c822f5",null);e.default=component.exports}}]);