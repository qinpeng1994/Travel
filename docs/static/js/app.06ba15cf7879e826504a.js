webpackJsonp([1],{"0tjA":function(t,e){},"8UI6":function(t,e){},"9Ed2":function(t,e){},"9gxr":function(t,e){},"9n10":function(t,e){},BOu8:function(t,e){},LJXy:function(t,e){},Lnfu:function(t,e){},M6Sr:function(t,e){},MzTE:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},N597:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("9gxr")},null,null).exports,r=i("/ocq"),o=i("Dd8w"),c=i.n(o),l=i("NYxO"),d={name:"HomeHeader",computed:c()({},Object(l.b)(["city"]))},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("router-link",{attrs:{to:"/city"}},[i("div",{staticClass:"header-right"},[t._v("\n        "+t._s(t.city)+"\n            "),i("span",{staticClass:"iconfont arrow-icon"},[t._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n    输入城市/景点/游玩主题\n    ")])}]};var h=i("VU/8")(d,u,!1,function(t){i("VEFM")},"data-v-3117e50d",null).exports,p={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},computed:{show:function(){return this.list.length}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.show?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var f=i("VU/8")(p,v,!1,function(t){i("bnnC")},"data-v-076d7030",null).exports,m={name:"HomeIcons",props:{list:Array},data:function(){return{swiperOption:{autoplay:!1}}},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}),0)}),1)],1)},staticRenderFns:[]};var y=i("VU/8")(m,_,!1,function(t){i("hzPz")},"data-v-2e8644d6",null).exports,C={name:"HomeRecommend",props:{list:Array},data:function(){return{}}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"content border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("div",{staticClass:"content-img"},[i("img",{staticClass:"img",attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"content-desc"},[i("p",{staticClass:"desc-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"desc-intro"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"btn"},[t._v("查看详情")])])])}),1)])},staticRenderFns:[]};var g=i("VU/8")(C,w,!1,function(t){i("0tjA")},"data-v-50c7c22d",null).exports,b={name:"HomeWeekend",props:{list:Array},data:function(){return{}}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"content border-bottom"},[i("div",{staticClass:"content-img"},[i("img",{staticClass:"img",attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"content-desc"},[i("p",{staticClass:"desc-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"desc-intro"},[t._v(t._s(e.desc))])])])}),0)])},staticRenderFns:[]};var x=i("VU/8")(b,k,!1,function(t){i("MzTE")},"data-v-573b409d",null).exports,$=i("mtWM"),E=i.n($),L={name:"Home",components:{HomeHeader:h,HomeSwiper:f,HomeIcons:y,HomeRecommend:g,HomeWeekend:x},data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},computed:c()({},Object(l.b)(["city"])),mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())},methods:{getHomeInfo:function(){var t=this;E.a.get("/api/index.json?city="+this.city).then(function(e){var i=e.data;if(i.ret&&i.data){var s=i.data;t.swiperList=s.swiperList,t.iconList=s.iconList,t.recommendList=s.recommendList,t.weekendList=s.weekendList}})}}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{list:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var F=i("VU/8")(L,S,!1,function(t){i("Q2FS")},null,null).exports,T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"header"},[this._v("\n        城市选择\n        "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-icon"},[this._v("")])])],1)])},staticRenderFns:[]};var U=i("VU/8")({name:"CityHeader"},T,!1,function(t){i("R2X2")},"data-v-2068d963",null).exports,R=i("GQaK"),H={name:"CitySearch",props:{city:Object},data:function(){return{keyword:"",list:[],timer:null}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.city)t.city[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},mounted:function(){this.scroll=new R.a(this.$refs.search)},computed:{hasData:function(){return!this.list.length}},methods:{handleCity:function(t){this.$store.dispatch("changeCity",t),this.$router.push("/")}}},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e,s){return i("li",{key:s,staticClass:"search-item border-bottom",on:{click:function(i){return t.handleCity(e.name)}}},[t._v(t._s(e.name))])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasData,expression:"hasData"}]},[t._v("没有找到匹配数据")])],2)])])},staticRenderFns:[]};var N=i("VU/8")(H,I,!1,function(t){i("9Ed2")},"data-v-a4c616a2",null).exports,A={name:"CityList",props:{hotCity:Array,city:Object,letter:String},computed:c()({},Object(l.b)({currentCity:"city"})),mounted:function(){this.scroll=new R.a(this.$refs.wrapper)},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}},methods:{handleCity:function(t){this.$store.dispatch("changeCity",t),this.$router.push("/")}}},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-bottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.currentCity))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-bottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hotCity,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){return t.handleCity(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}),0)]),t._v(" "),t._l(t.city,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),t._l(e,function(e){return i("div",{key:e.id,staticClass:"item-list",on:{click:function(i){return t.handleCity(e.name)}}},[i("div",{staticClass:"item border-bottom"},[t._v(t._s(e.name))])])})],2)})],2)])},staticRenderFns:[]};var V=i("VU/8")(A,O,!1,function(t){i("Lnfu")},"data-v-04d73cd2",null).exports,j={name:"City-Alphabet",props:{city:Object},data:function(){return{touchStatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},computed:{letters:function(){var t=[];for(var e in this.city)t.push(e);return t}},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-79,s=Math.floor((i-e.startY)/20);s>=0&&s<e.letters.length&&e.$emit("change",e.letters[s])},16))},handleTouchEnd:function(){this.touchStatus=!1}}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.handleLetterClick,touchstart:t.handleTouchStart,touchmove:t.handleTouchMove,touchend:t.handleTouchEnd}},[t._v(t._s(e))])}),0)])},staticRenderFns:[]};var z={name:"City",data:function(){return{hotCities:[],cities:{},letter:""}},components:{CityHeader:U,CitySearch:N,CityList:V,CityAlphabet:i("VU/8")(j,D,!1,function(t){i("lggW")},"data-v-7380dd69",null).exports},methods:{getCityInfo:function(){var t=this;E()("/api/city.json").then(function(e){var i=e.data;if(i.ret&&i.data){var s=i.data;t.hotCities=s.hotCities,t.cities=s.cities}})},handleLetter:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{city:t.cities}}),t._v(" "),i("city-list",{attrs:{hotCity:t.hotCities,city:t.cities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{city:t.cities},on:{change:t.handleLetter}})],1)},staticRenderFns:[]};var B=i("VU/8")(z,M,!1,function(t){i("8UI6")},"data-v-e4d104d4",null).exports,G={name:"CommonGallery",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observer:!0,observeParents:!0}}},methods:{handleBannerShow:function(){this.$emit("close")}}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleBannerShow}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallery-img",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("transition",[this._t("default")],2)],1)},staticRenderFns:[]};var Y={name:"DetailBanner",props:["sightName","bannerImg"],data:function(){return{imgs:["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg","http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"],showGallery:!1}},components:{CommonGallery:i("VU/8")(G,P,!1,function(t){i("N597")},"data-v-e9989584",null).exports,Fade:i("VU/8")({name:"Fade"},W,!1,function(t){i("jvf7")},"data-v-2e955d6f",null).exports},methods:{handleBannerClick:function(){this.showGallery=!0},handleGalleryClose:function(){this.showGallery=!1}}},X={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[i("img",{staticClass:"banner-img",attrs:{src:this.bannerImg}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v(t._s(this.sightName))]),t._v(" "),i("div",{staticClass:"banner-number"},[i("span",{staticClass:"iconfont banner-icon"},[t._v("")]),t._v(t._s(this.bannerImg.length))])])]),t._v(" "),i("fade",[i("common-gallery",{directives:[{name:"show",rawName:"v-show",value:t.showGallery,expression:"showGallery"}],attrs:{imgs:t.imgs},on:{close:t.handleGalleryClose}})],1)],1)},staticRenderFns:[]};var q=i("VU/8")(Y,X,!1,function(t){i("i52b")},"data-v-02de5b34",null).exports,J={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showAbs=!1}else this.showAbs=!0}}},Q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs",style:this.opacityStyle,attrs:{tag:"div",to:"/"}},[e("div",{staticClass:"iconfont header-abs-back"},[this._v("")])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed"},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-fixed-back"},[this._v("")])]),this._v("\n         城市选择\n    ")],1)],1)},staticRenderFns:[]};var K=i("VU/8")(J,Q,!1,function(t){i("LJXy")},"data-v-6775cf04",null).exports,Z={name:"DetailList",props:{list:Array}},tt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v("\n           "+t._s(e.title)+"\n       ")]),t._v(" "),e.children?i("div",{staticClass:"item-children"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}),0)},staticRenderFns:[]};var et={name:"Detail",components:{DetailBanner:q,DetailHeader:K,DetailList:i("VU/8")(Z,tt,!1,function(t){i("rTh4")},"data-v-035a299c",null).exports},data:function(){return{sightName:"",bannerImg:"",galleryList:[],list:[]}},methods:{getDetailInfo:function(){var t=this;E.a.get("/api/detail.json?id="+this.$route.params.id).then(function(e){var i=e.data;if(i.ret||i.data){var s=i.data;t.sightName=s.sightName,t.bannerImg=s.bannerImg,t.galleryList=s.gallaryImgs,t.list=s.categoryList}})}},mounted:function(){this.getDetailInfo()}},it={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,galleryList:this.galleryList}}),this._v(" "),e("detail-header"),this._v(" "),e("div",{staticClass:"content"},[e("detail-list",{attrs:{list:this.list}})],1)],1)},staticRenderFns:[]};var st=i("VU/8")(et,it,!1,function(t){i("BOu8")},"data-v-675798ed",null).exports;s.a.use(r.a);var nt=new r.a({routes:[{path:"/",name:"Home",component:F},{path:"/city",name:"City",component:B},{path:"/detail/:id",name:"Detail",component:st}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),at="北京";try{localStorage.city&&(at=localStorage.city)}catch(t){}var rt={city:at},ot={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(l.a);var ct=new l.a.Store({state:rt,mutations:ot,actions:{changeCity:function(t,e){t.commit("changeCity",e)}}}),lt=(i("9n10"),i("M6Sr"),i("TzC8"),i("v5o6")),dt=i.n(lt),ut=i("F3EI"),ht=i.n(ut);i("v2ns");s.a.config.productionTip=!1,dt.a.attach(document.body),s.a.use(ht.a),new s.a({el:"#app",router:nt,store:ct,components:{App:a},template:"<App/>"})},Q2FS:function(t,e){},R2X2:function(t,e){},TzC8:function(t,e){},VEFM:function(t,e){},bnnC:function(t,e){},hzPz:function(t,e){},i52b:function(t,e){},jvf7:function(t,e){},lggW:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},rTh4:function(t,e){},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.06ba15cf7879e826504a.js.map