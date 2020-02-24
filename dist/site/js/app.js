"use strict";function normalize(t,i,e,n,a){var s=(t-i)/(e-i)*(a-n)+n;return s>a?a:s<n?n:s}function getWindowWidth(){return window.innerWidth}function triggerBody(){$(window).scroll(),$(window).resize()}function formatNumberWithSpaces(t){return t.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}function hasCrossedBreakpoint(t,i,e){return i>=e&&t<=e||i<=e&&t>=e}function Plurize(t,i,e,n){var a=Math.abs(t);return(a%=100)>=5&&a<=20?n:1==(a%=10)?i:a>=2&&a<=4?e:n}function rgba(t,i){var e=parseInt(t.slice(1,3),16),n=parseInt(t.slice(3,5),16),a=parseInt(t.slice(5,7),16);return i?"rgba("+e+", "+n+", "+a+", "+i+")":"rgb("+e+", "+n+", "+a+")"}function mediaCondition(t){var i,e=t.substring(1),n=t.substring(0,1);return"<"===n?i=getWindowWidth()<e:">"===n&&(i=getWindowWidth()>e),i}function onYouTubeIframeAPIReady(){console.log("youtube api ready"),APP.Components.Video.data.youtubeApiReady=!0}!function(t){var i=t(window);t.fn.stick_in_parent=function(e){var n,a,s,o,r,l,c,d,u,h,p,f;for(null==e&&(e={}),f=e.sticky_class,l=e.inner_scrolling,p=e.recalc_every,h=e.parent,u=e.offset_top,d=e.spacer,s=e.bottoming,null==u&&(u=0),null==h&&(h=void 0),null==l&&(l=!0),null==f&&(f="is_stuck"),n=t(document),null==s&&(s=!0),o=function(e,a,o,r,c,g,v,m){var w,b,P,y,C,k,S,j,_,A,x,T;if(!e.data("sticky_kit")){if(e.data("sticky_kit",!0),C=n.height(),S=e.parent(),null!=h&&(S=S.closest(h)),!S.length)throw"failed to find stick parent";if(P=!1,w=!1,(x=null!=d?d&&e.closest(d):t("<div />"))&&x.css("position",e.css("position")),(j=function(){var t,i,s;if(!m)return C=n.height(),t=parseInt(S.css("border-top-width"),10),i=parseInt(S.css("padding-top"),10),a=parseInt(S.css("padding-bottom"),10),o=S.offset().top+t+i,r=S.height(),P&&(P=!1,w=!1,null==d&&(e.insertAfter(x),x.detach()),e.css({position:"",top:"",width:"",bottom:""}).removeClass(f),s=!0),c=e.offset().top-(parseInt(e.css("margin-top"),10)||0)-u,g=e.outerHeight(!0),v=e.css("float"),x&&x.css({width:e.outerWidth(!0),height:g,display:e.css("display"),"vertical-align":e.css("vertical-align"),float:v}),s?T():void 0})(),g!==r)return y=void 0,k=u,A=p,T=function(){var t,h,b,_,T,B;if(!m)return b=!1,null!=A&&(A-=1)<=0&&(A=p,j(),b=!0),b||n.height()===C||(j(),b=!0),_=i.scrollTop(),null!=y&&(h=_-y),y=_,P?(s&&(T=_+g+k>r+o,w&&!T&&(w=!1,e.css({position:"fixed",bottom:"",top:k}).trigger("sticky_kit:unbottom"))),_<c&&(P=!1,k=u,null==d&&("left"!==v&&"right"!==v||e.insertAfter(x),x.detach()),t={position:"",width:"",top:""},e.css(t).removeClass(f).trigger("sticky_kit:unstick")),l&&(B=i.height(),g+u>B&&(w||(k-=h,k=Math.max(B-g,k),k=Math.min(u,k),P&&e.css({top:k+"px"}))))):_>c&&(P=!0,(t={position:"fixed",top:k}).width="border-box"===e.css("box-sizing")?e.outerWidth()+"px":e.width()+"px",e.css(t).addClass(f),null==d&&(e.after(x),"left"!==v&&"right"!==v||x.append(e)),e.trigger("sticky_kit:stick")),P&&s&&(null==T&&(T=_+g+k>r+o),!w&&T)?(w=!0,"static"===S.css("position")&&S.css({position:"relative"}),e.css({position:"absolute",bottom:a,top:"auto"}).trigger("sticky_kit:bottom")):void 0},_=function(){return j(),T()},b=function(){if(m=!0,i.off("touchmove",T),i.off("scroll",T),i.off("resize",_),t(document.body).off("sticky_kit:recalc",_),e.off("sticky_kit:detach",b),e.removeData("sticky_kit"),e.css({position:"",bottom:"",top:"",width:""}),S.position("position",""),P)return null==d&&("left"!==v&&"right"!==v||e.insertAfter(x),x.remove()),e.removeClass(f)},i.on("touchmove",T),i.on("scroll",T),i.on("resize",_),t(document.body).on("sticky_kit:recalc",_),e.on("sticky_kit:detach",b),setTimeout(T,0)}},r=0,c=this.length;r<c;r++)a=this[r],o(t(a));return this}}(jQuery);var APP=window.APP||{};APP.Dev=APP.Dev||{},APP.Browser=APP.Browser||{},APP.Plugins=APP.Plugins||{},APP.Components=APP.Components||{},window.onbeforeunload=function(){window.scrollTo(0,0)};var _window=$(window),_document=$(document),easingSwing=[.02,.01,.47,1];!function(t,i){i.Initilizer=function(){var t={};return t.init=function(){t.initGlobalPlugins(),t.initPlugins(),t.initComponents()},t.onLoadTrigger=function(){i.Plugins.LazyLoadImages.init()},t.refresh=function(){i.Components.Header.closeMobileMenu(!0),i.Plugins.Sharer.refresh(),t.initPlugins(!0),t.initComponents(!0)},t.destroy=function(){},t.newPageReady=function(){t.refresh()},t.transitionCompleted=function(){i.Plugins.AOS.refresh(),t.onLoadTrigger()},t.initGlobalPlugins=function(){i.Dev.Credentials.logCredentials(),i.Dev.Breakpoint.listenResize(),i.Browser().methods.setBodyTags(),i.Plugins.LegacySupport.init(),i.Plugins.ScrollBlock.listenScroll(),i.Plugins.Clicks.init(),i.Plugins.AOS.init(),i.Plugins.Barba.init()},t.initPlugins=function(t){i.Plugins.Teleport.init(),i.Plugins.Sliders.init(t),i.Plugins.Selectric.init(),i.Plugins.DatePicker.init(),i.Plugins.Validations.init(),i.Plugins.LAYOUT.init(t),i.Plugins.Gmaps.init(),i.Plugins.ScalerMobile.init(t),i.Plugins.CustomParallax.init(t),i.Plugins.Sticky.init()},t.initComponents=function(t){i.Components.Header.init(t),i.Components.Footer.init(t),i.Components.Events.init(t),i.Components.Content.init(t),i.Components.Video.init(t)},t},t(function(){i.Initilizer().init()}),t(window).on("load",function(){t.ready.then(function(){i.Initilizer().onLoadTrigger()})})}(jQuery,window.APP),function(t,i){window.APP.Dev.Breakpoint={setBreakpoint:function(){var i=window.location.host.toLowerCase();if(i.indexOf("localhost")>=0||i.indexOf("surge")>=0){var e="<div class='dev-bp-debug'>"+window.innerWidth+" x "+_window.height()+"</div>";t(".page").append(e),setTimeout(function(){t(".dev-bp-debug").fadeOut()},1e3),setTimeout(function(){t(".dev-bp-debug").remove()},1500)}},listenResize:function(){t(window).on("resize",debounce(this.setBreakpoint,200))}}}(jQuery),jQuery,window.APP.Dev.Credentials={logCredentials:function(){console.log("👨‍💻 MADE WITH LOVE BY <> KHMELEVSKOY & ASSOCIATES </> https://khmelevskoy.co")}},jQuery,window.APP.Plugins.AOS={init:function(){AOS.init({offset:120,delay:0,duration:400,easing:"ease-in",once:!0,mirror:!1,anchorPlacement:"top-bottom"})},refresh:function(){AOS.refreshHard()}},function(t,i){i.Plugins.LazyLoadImages={init:function(){var t=this,e=_document.find("[js-lazy]");if(0===e.length)return i.Plugins.LegacySupport.fixImages(),void AOS.refresh();e.Lazy({threshold:300,enableThrottle:!0,throttle:100,scrollDirection:"vertical",onError:function(t){console.log("error loading "+t.data("src"));try{t.attr("src",t.data("src"))}catch(t){console.log("eroor appending src",t)}},beforeLoad:function(t){},afterLoad:function(i){t.animateLazy(i)},onFinishedAll:function(){i.Plugins.LegacySupport.fixImages(),i.Plugins.LAYOUT.applyLayout(),setTimeout(function(){i.Plugins.LAYOUT.applyLayout()},100),AOS.refresh()}})},animateLazy:function(i){var e=i.closest(".scaler");e.addClass("is-loaded"),0===e.length&&t(i).addClass("is-loaded"),e.is(".no-bg-onload")&&setTimeout(function(){e.addClass("is-bg-hidden")},250)}}}(jQuery,window.APP),function(t,i){window.APP.Plugins.Modals={init:function(){var i=0;t("[js-popup]").magnificPopup({type:"inline",fixedContentPos:!0,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,mainClass:"popup-buble",callbacks:{beforeOpen:function(){i=_window.scrollTop()},close:function(){_window.scrollTop(i)}}}),t("[js-popup-gallery]").magnificPopup({delegate:"a",type:"image",tLoading:"Загрузка #%curr%...",mainClass:"popup-buble",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}})},destroy:function(){}}}(jQuery),function(t,i){i.Plugins.Sliders={data:{swipers:[],responsiveSwipers:{featuredProducts:{instance:void 0,disableOn:1201}}},init:function(t){this.initSwipers(),this.initResponsiveSwipers(),t||this.listenResize()},listenResize:function(){_window.on("resize",debounce(this.initResponsiveSwipers.bind(this),200))},initSwipers:function(){new Swiper(".js-swiper-events",{loop:!0,watchOverflow:!0,setWrapperSize:!1,spaceBetween:0,slidesPerView:"auto",normalizeSlideIndex:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-next",prevEl:".swiper-prev"},on:{init:function(){i.Plugins.LegacySupport.fixImages()}}}),new Swiper(".js-swiper-add-visit",{loop:!0,watchOverflow:!0,setWrapperSize:!1,spaceBetween:0,slidesPerView:"auto",normalizeSlideIndex:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-next",prevEl:".swiper-prev"},on:{init:function(){i.Plugins.LegacySupport.fixImages()}}}),new Swiper(".js-swiper-article",{loop:!0,watchOverflow:!0,setWrapperSize:!1,spaceBetween:0,slidesPerView:1,normalizeSlideIndex:!0,pagination:{el:".swiper-pagination",clickable:!0},on:{init:function(){i.Plugins.LegacySupport.fixImages()}}});new Swiper(".js-swiper-news",{wrapperClass:"swiper-wrapper",loop:!0,watchOverflow:!0,setWrapperSize:!1,spaceBetween:15,slidesPerView:"1",pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{576:{slidesPerView:2,spaceBetween:15},1100:{spaceBetween:30,slidesPerView:"3"}},navigation:{nextEl:".swiper-next",prevEl:".swiper-prev"},on:{init:function(){i.Plugins.LegacySupport.fixImages()}}})},initResponsiveSwipers:function(){t("[js-featured-products-swiper]").length>0&&this.initFeaturedProductsSwiper("[js-featured-products-swiper]")},initFeaturedProductsSwiper:function(i){var e=this.data.responsiveSwipers.featuredProducts;t(i).length>0&&(window.innerWidth>=e.disableOn?void 0!==e.instance&&(e.instance.destroy(!0,!0),e.instance=void 0):void 0===e.instance&&(e.instance=new Swiper(i,{slidesPerView:"auto",breakpoints:{992:{spaceBetween:0}}})))},destroy:function(){}}}(jQuery,window.APP),function(t,i){i.Plugins.Sticky={init:function(){this.initStickyKit(),this.initCustomSticky()},initStickyKit:function(){var i=t(".page").last().find(".js-sticky");0!==i.length&&i.each(function(i,e){var n=t(e),a=n.data("offset-top")?parseInt(n.data("offset-top"),10):90;n.stick_in_parent({offset_top:a})})},initCustomSticky:function(){var e=t(".page").last().find(".js-sticky-nav");0!==e.length&&_window.on("scroll",throttle(function(){var t=i.Plugins.ScrollBlock.getData(),n=e.offset().top;t.y>n?e.addClass("is-sticky"):e.removeClass("is-sticky")},50))}}}(jQuery,window.APP),function(t,i){window.APP.Plugins.Validations={init:function(){this.validateFormsConstructor(),this.validateFormsCustom()},data:{validateErrorPlacement:function(t,i){t.addClass("ui-input__validation"),i.is("select")?t.appendTo(i.closest(".selectric-wrapper")):i.is('input[type="radio"]')||i.is('input[type="checkbox"]')?t.appendTo(i.closest(".ui-group")):t.appendTo(i.parent("div"))},validateHighlight:function(i){var e=t(i);e.is("select")?e.closest(".selectric-wrapper").addClass("has-error"):t(i).addClass("has-error")},validateUnhighlight:function(i){var e=t(i);e.is("select")?e.closest(".selectric-wrapper").removeClass("has-error"):t(i).removeClass("has-error")},validateSubmitHandler:function(i){t(i).addClass("loading"),t.ajax({type:"POST",url:t(i).attr("action"),data:t(i).serialize(),success:function(e){t(i).removeClass("loading");var n=t.parseJSON(e);"success"===n.status||t(i).find("[data-error]").html(n.message).show()}})}},validateFormsConstructor:function(){var i=this,e=t("[js-validate-form]:not(.is-validation-attached)");0!==e.length&&e.each(function(e,n){var a=t(n),s={errorPlacement:i.data.validateErrorPlacement,highlight:i.data.validateHighlight,unhighlight:i.data.validateUnhighlight,submitHandler:i.data.validateSubmitHandler,rules:{email:{required:!0,email:!0}},messages:{email:{required:"This field is required",email:"E-mail is not valid"}}};a.validate(s),a.addClass("is-validation-attached")})},validateFormsCustom:function(){var i=this,e={errorPlacement:i.data.validateErrorPlacement,highlight:i.data.validateHighlight,unhighlight:i.data.validateUnhighlight,submitHandler:i.data.validateSubmitHandler};t("[js-validate-request]").validate(e)}}}(jQuery),function(t,i){window.APP.Plugins.DatePicker={init:function(){var i=t(".page").last().find("[js-datepicker]");0!==i.length&&i.datepicker({language:"en",minDate:new Date,autoClose:!0})}}}(jQuery),function(t,i){window.APP.Plugins.Masks={init:function(){t("[js-dateMask]").mask("99.99.99",{placeholder:"ДД.ММ.ГГ"}),t("input[type='tel']").mask("+7 (000) 000-0000",{placeholder:"+7 (___) ___-____"})}}}(jQuery),function(t,i){window.APP.Plugins.Selectric={init:function(){var i=t("[js-select]");0!==i.length&&i.selectric({maxHeight:250,disableOnMobile:!1,nativeOnMobile:!0,arrowButtonMarkup:'<div class="button"><svg class="ico ico-mono-caret"><use xlink:href="img/sprite-mono.svg#ico-mono-caret"></use></svg></div>',onInit:function(i,e){var n=t(i);n.closest("."+e.classes.wrapper).find(".label").html(n.attr("placeholder"))},onBeforeOpen:function(i,e){var n=t(i),a=n.closest("."+e.classes.wrapper);a.find(".label").data("value",a.find(".label").html()).html(n.attr("placeholder"))},onBeforeClose:function(i,e){var n=t(i).closest("."+e.classes.wrapper);n.find(".label").html(n.find(".label").data("value"))}})}}}(jQuery),jQuery,window.APP.Plugins.TextareaAutoExpand={init:function(){_document.one("focus.autoExpand",".ui-group textarea",function(){var t=this.value;this.value="",this.baseScrollHeight=this.scrollHeight,this.value=t}).on("input.autoExpand",".ui-group textarea",function(){var t,i=0|this.getAttribute("data-min-rows");this.rows=i,t=Math.ceil((this.scrollHeight-this.baseScrollHeight)/17),this.rows=i+t})}},function(t,i){window.APP.Browser=function(){var i={};return i.isRetinaDisplay=function(){if(window.matchMedia){var t=window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");return t&&t.matches||window.devicePixelRatio>1}},i.isMobile=function(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},i.msieversion=function(){return!!(window.navigator.userAgent.indexOf("MSIE ")>0||navigator.userAgent.match(/Trident.*rv:11\./))},i.setBodyTags=function(){i.msieversion()&&t("body").addClass("is-ie"),i.isMobile()&&t("body").addClass("is-mobile")},{data:{isIe:i.msieversion(),isMobile:i.isMobile(),isRetinaDisplay:i.isRetinaDisplay()},methods:i}}}(jQuery),function(t,i){window.APP.Plugins.Clicks={init:function(){t(document).on("click",'[href="#"]',function(t){t.preventDefault()}).on("click","[js-link]",function(i){var e=t(this).data("href");e&&"#"!==e&&(i.preventDefault(),i.stopPropagation(),Barba.Pjax.goTo(e))}).on("click","a, [js-link]",function(i){var e=t(this).data("href")||t(this).attr("href"),n=window.location.pathname;e===n.slice(1,n.length)&&(i.preventDefault(),i.stopPropagation())}).on("click",'a[href^="#section"]',function(){var i=t(this).attr("href"),e=t(i).offset().top;return t("body, html").animate({scrollTop:e},1e3),!1}).on("click","[js-show-grid]",function(){t(this).toggleClass("is-active"),t(".demo-grid").fadeToggle()}).on("click","[js-pagination]",function(){var i=parseInt(t(".cdp").attr("actpage"),10),e=t(this).attr("href").replace("#!","");"+1"===e?i++:"-1"===e?i--:i=parseInt(e,10),t(".cdp").attr("actpage",i)})},destroy:function(){}}}(jQuery),function(t,i){window.APP.Plugins.Gmaps={data:{scriptsCreated:!1,gmapsLoaded:!1},init:function(){t(".js-gmap").length>0&&(this.data.gmapsLoaded?this.initMaps():this.tryLoadScripts())},createScripts:function(){var i=document.createElement("script");i.type="text/javascript",i.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAfuintIeTkWllbOnvyju_B6nbYLDcUoMk",t("head").append(i),this.data.scriptsCreated=!0},tryLoadScripts:function(){var t=this;t.data.scriptsCreated||t.createScripts();var i=setInterval(function(){if(!t.data.gmapsLoaded)try{google&&(t.data.gmapsLoaded=!0,t.init(),clearInterval(i))}catch(t){}},250)},initMaps:function(){var i=this;t(".js-gmap").each(function(t,e){i.drawMap(e)})},drawMap:function(i){var e=this,n=t(i);if(0!==n.length){console.log("drawing");var a={center:e.geoStringToArr(n.data("center")),zoom:n.data("zoom")||10};new google.maps.Map(n.get(0),{zoom:a.zoom,center:a.center})}},geoStringToArr:function(t){var i=t.split(",");return 2===i.length&&{lat:parseFloat(i[0]),lng:parseFloat(i[1])}}}}(jQuery),Number.prototype.pad=function(t){for(var i=String(this);i.length<(t||2);)i="0"+i;return i},function(t,i){window.APP.Plugins.LAYOUT={data:{stickToWindow:void 0},init:function(t){this.getData(),this.applyLayout(),t||this.listenResize()},getData:function(){this.data.stickToWindow=t(".page").last().find(".js-stick-to-window"),this.data.centrifyVertical=t(".page").last().find(".js-centrify-vertical")},listenResize:function(){_window.on("resize",debounce(this.applyLayout.bind(this),100))},applyLayout:function(){if(this.data.stickToWindow.length>0&&this.data.stickToWindow.each(function(i,e){var n=t(e),a=n.data("position"),s=n.data("stop")?mediaCondition(n.data("stop")):null,o=0;if(null!==s&&s)n.attr("style","");else{n.css({margin:0});var r=n[0].getBoundingClientRect().left,l=n.data("keep-container");"left"===a?(o=-1*r,n.css({"margin-left":o}),l&&n.css({"padding-left":-1*o})):"right"===a&&(o=-1*(window.innerWidth-r-(n.innerWidth()-Math.abs(parseInt(n.css("margin-right"))))),n.css({"margin-right":o}),l&&n.css({"padding-right":-1*o}));var c=n.data("fit-y-element");if(c){var d=n.closest(c);if(0===d.length)return;var u=d[0].getBoundingClientRect(),h=n[0].getBoundingClientRect(),p=d.outerHeight();n.css({"margin-top":u.top-h.top,height:p})}}}),this.data.centrifyVertical.length>0){var i=0;this.data.centrifyVertical.each(function(e,n){var a=t(n),s=a.height(),o=a.data("stop")?mediaCondition(a.data("stop")):null;null!==o&&o?a.attr("style",""):(a.css({"padding-top":0}),i=s>i?s:i)}),this.data.centrifyVertical.each(function(e,n){var a=t(n),s=a.height(),o=i-s;a.css({"padding-top":o})})}}}}(jQuery),function(t,i){i.Plugins.LegacySupport={init:function(){svg4everybody(),i.Browser().data.isIe||window.viewportUnitsBuggyfill.init({force:!1,refreshDebounceWait:150,appendToBody:!0})},fixImages:function(){i.Browser().data.isIe&&(picturefill(),objectFitImages())}}}(jQuery,window.APP),function(t,i){i.Plugins.CustomParallax={data:{pBgElements:[]},init:function(t){i.Browser().data.isIe||(this.getData(),t||(this.listenResize(),this.listenScroll()))},getData:function(){var i=this,e=t(".page").last().find("[js-parallax-scale-background]");i.data.pBgElements=[],0!==e.length&&e.each(function(e,n){var a=t(n);i.data.pBgElements.push({$element:a,$image:a.find("img, picture"),offsetTop:a.offset().top,height:a.outerHeight(),scalePower:a.data("scale-power")})})},listenResize:function(){_window.on("scroll",debounce(this.getData.bind(this),100))},listenScroll:function(){_window.on("scroll",throttle(this.parallaxBackground.bind(this),100))},parallaxBackground:function(){if(this.data.pBgElements.length>0){var e=i.Plugins.ScrollBlock.getData(),n=window.innerHeight;if(e.blocked)return;t.each(this.data.pBgElements,function(t,i){var a=e.y+n,s=i.offsetTop+i.height+n;if(a>i.offsetTop&&a<s){var o=1+Math.floor(normalize(e.y,i.offsetTop,s,0,100))/100/i.scalePower;i.$image.css({transition:"transform .1s linear",transform:"scale("+o+")"})}else a>s?i.$image.css({transition:"transform .1s linear",transform:"scale(1.1)"}):i.$image.attr("style","")})}}}}(jQuery,window.APP),function(t,i){i.Plugins.Barba={getData:function(){return this.data},init:function(){Barba.Pjax.Dom.containerClass="page",this.data=this.data||{},this.data.transitionInitElement="",this.getTransition(),Barba.Prefetch.init(),Barba.Pjax.start(),this.listenEvents()},getTransition:function(){var t=this;Barba.Pjax.getTransition=function(){return t.transitions.FadeTransition}},transitions:{HideShowTransition:Barba.BaseTransition.extend({start:function(){this.newContainerLoading.then(this.finish.bind(this))},finish:function(){document.body.scrollTop=0,this.done()}}),FadeTransition:Barba.BaseTransition.extend({start:function(){Promise.all([this.newContainerLoading,this.fadeOut()]).then(this.fadeIn.bind(this))},fadeOut:function(){var i=t(this.oldContainer),e=(t(this.newContainer),Barba.Utils.deferred());return i.animate({opacity:0},500,function(){e.resolve()}),e.promise},fadeIn:function(){var i=this,e=(t(this.oldContainer),t(this.newContainer));t(this.oldContainer).hide(),e.css({visibility:"visible",opacity:0}),t("body, html").animate({scrollTop:0},150),e.animate({opacity:1},500,function(){i.done()})}})},listenEvents:function(){var e=this;Barba.Dispatcher.on("linkClicked",function(i){e.data.transitionInitElement=i instanceof jQuery?i:t(i)}),Barba.Dispatcher.on("newPageReady",function(t,e,n,a){i.Initilizer().newPageReady()}),Barba.Dispatcher.on("transitionCompleted",function(t,e){i.Initilizer().transitionCompleted()})}}}(jQuery,window.APP),function(t,i){window.APP.Plugins.Preloader={loaded:function(){t("#barba-wrapper").addClass("is-preloaded")}}}(jQuery),function(t,i){i.Plugins.ScalerMobile={init:function(t){this.getScaler(),this.setScaler(),t||this.listenResize()},getScaler:function(){var i=t(".page").last().find("[js-scaler-mobile]");i.length>0&&i.each(function(i,e){var n=t(e),a=n.css("padding-bottom"),s=n.width(),o=a.slice(0,-2)/s*100+"%";n.attr("data-ar-desktop",o)})},listenResize:function(){_window.on("resize",debounce(this.setScaler.bind(this),100))},setScaler:function(){var e=t(".page").last().find("[js-scaler-mobile]");if(e.length>0){var n=window.innerWidth;e.each(function(e,a){var s=t(a),o=s.data("ar-576"),r=s.data("ar-768"),l=s.data("ar-desktop");o&&(n<576?s.css({"padding-bottom":i.Plugins.ScalerMobile.setAr(o)}):s.css({"padding-bottom":i.Plugins.ScalerMobile.setAr(l)})),r&&(n<768?s.css({"padding-bottom":i.Plugins.ScalerMobile.setAr(r)}):s.css({"padding-bottom":i.Plugins.ScalerMobile.setAr(l)}))})}},setAr:function(t){if("1:1"===t)return"100%";if("16:9"===t)return"56.25%";if("4:3"===t)return"75%";if("21:9"===t)return"42.85%";var i=t.split("/");return 2===i.length?parseInt(i[0])/parseInt(i[1])*100+"%":t}}}(jQuery,window.APP),function(t,i){window.APP.Plugins.ScrollReveal={init:function(i){if(0!==t("[js-reveal]").length){t("[js-reveal]").each(function(e,n){var a=t(n).data("type")||"enterViewport";if("onload"!==a)if("halflyEnterViewport"!==a)scrollMonitor.create(t(n)).enterViewport(throttle(function(){t(n).addClass("is-animated")},100,{leading:!0}));else{var s=throttle(function(){_window.scrollTop()+_window.height()>t(n).offset().top+t(n).height()/2&&(t(n).addClass("is-animated"),window.removeEventListener("scroll",s,!1))},100);window.addEventListener("scroll",s,!1)}else var o=setInterval(function(){i?setTimeout(function(){t(n).addClass("is-animated"),clearInterval(o)},500):(t(n).addClass("is-animated"),clearInterval(o))},100)})}}}}(jQuery),function(t,i){window.APP.Plugins.ScrollBlock={data:{y:_window.scrollTop(),blocked:!1,direction:void 0,lastForScrollDir:0,lastForBodyLock:0},getData:function(){return this.data},disableScroll:function(){this.data.lastForBodyLock=_window.scrollTop(),this.data.blocked=!0,t(".page__content").css({"margin-top":"-"+this.data.lastForBodyLock+"px"}),t("body").addClass("body-lock")},enableScroll:function(i){this.data.blocked=!1,this.data.direction="up",t(".page__content").css({"margin-top":"-0px"}),t("body").removeClass("body-lock"),i||(_window.scrollTop(this.data.lastForBodyLock),this.data.lastForBodyLock=0)},blockScroll:function(i){i?this.enableScroll(i):t("[js-hamburger]").is(".is-active")?this.disableScroll():this.enableScroll()},getWindowScroll:function(){if(!this.data.blocked){var t=_window.scrollTop();this.data.y=t,this.data.direction=t>this.data.lastForScrollDir?"down":"up",this.data.lastForScrollDir=t<=0?0:t}},listenScroll:function(){_window.on("scroll",this.getWindowScroll.bind(this))}}}(jQuery),jQuery,window.APP.Plugins.Sharer={refresh:function(){window.Sharer.init()}},function(t,i){window.APP.Plugins.Teleport={data:{teleports:[]},init:function(){this.getElements(),this.teleport(),this.listenResize()},getElements:function(){var i=this,e=t(".page").last().find("[js-teleport]");i.data.teleports=[],0!==e.length&&e.each(function(e,n){var a=t(n),s=t("[data-teleport-target="+a.data("teleport-to")+"]"),o=a.data("teleport-condition").substring(1),r=a.data("teleport-condition").substring(0,1);i.data.teleports.push({el:a,html:a.html(),target:s,conditionMedia:o,conditionPosition:r})})},listenResize:function(){_window.on("resize",debounce(this.teleport.bind(this),100))},teleport:function(){0!==this.data.teleports.length&&t.each(this.data.teleports,function(t,i){if(i.target&&i.html&&i.conditionPosition){var e;"<"===i.conditionPosition?e=window.innerWidth<i.conditionMedia:">"===i.conditionPosition&&(e=window.innerWidth>i.conditionMedia),e?(i.target.html(i.html),i.el.html("")):(i.el.html(i.html),i.target.html(""))}})}}}(jQuery),function(t,i){i.Components.Content={data:{nav:{navSections:[],navTops:[],anchors:[]}},getNavListHeight:function(){var t=window.innerWidth;return t>1199?64:t>991?61:57},init:function(t){this.getSections(),this.positionArticleHeader(),this.populateContent(),t||(this.clickListeners(),this.listenResize(),this.listenScroll())},getSections:function(){this.data.nav.navSections=[],this.data.nav.navTops=[],this.data.nav.anchors=[];var i=t(".page").last(),e=i.find(".js-content-navsection"),n=i.find(".js-content-navigation a");if(0!==e.length&&0!==n.length){var a=[];e.each(function(i,e){var n=t(e),s=n.offset().top-parseInt(n.css("marginTop"),10);a.push(s)}),this.data.nav.navSections=e,this.data.nav.navTops=a,this.data.nav.anchors=n,this.setScrollingJustifyContentFix()}},listenResize:function(){_window.on("resize",debounce(this.getSections.bind(this),100)),_window.on("resize",debounce(this.positionArticleHeader.bind(this),200))},listenScroll:function(){_window.on("scroll",throttle(this.scrollSections.bind(this),25)),_window.on("scroll",throttle(this.positionArticleHeader.bind(this),50))},clickListeners:function(){var e=this;_document.on("click",".js-content-navigation a",function(n){n.preventDefault(),n.stopPropagation();var a=t(this),s=a.data("to-section"),o=t('[data-nav-section="'+s+'"]');if(0!==o.length){var r="next"===(a.parent().nextAll().filter(".is-current").length>0?"prev":"next")?e.getNavListHeight():e.getNavListHeight()+i.Components.Header.data.header.bottomPoint,l=o.offset().top-r;t("body, html").animate({scrollTop:l},1e3)}}),_document.on("click",".js-content-accardeon .accardeon__toggler",function(i){var e=t(this).parent(),n=e.find(".accardeon__content"),a=e.siblings();a.length>0&&a.each(function(i,e){var n=t(e),a=n.find(".accardeon__content");n.is(".is-active")&&(n.removeClass("is-active"),a.slideUp())}),e.is(".is-active")?(e.removeClass("is-active"),n.slideUp()):(e.addClass("is-active"),n.slideDown())}),_document.on("click",".js-content-tabs a",function(i){var e=t(this),n=e.parent(),a=e.closest(".content-tabs"),s=e.data("target-tab"),o=a.find('.content-tabs__tab[data-tab="'+s+'"]');if(0!==o.length){var r=o.siblings(),l=n.siblings();n.addClass("is-active"),l.removeClass("is-active"),r.hide(),o.fadeIn(250)}})},scrollSections:function(){var e=this;if(0!==this.data.nav.navSections.length){var n=i.Plugins.ScrollBlock.getData(),a=this.data.nav.navSections.map(function(t,a){var s=e.data.nav.navTops[t],o=i.Components.Header.data.isFixedVisible?e.getNavListHeight()+1:e.getNavListHeight()+i.Components.Header.data.header.bottomPoint+1;if(s<=n.y+o)return this}),s=(a=t(a[a.length-1]))&&a.length?a.data("nav-section"):"";this.data.nav.anchors.each(function(i,e){var n=t(e),a=n.parent();n.is("[data-to-section='"+s+"']")?a.addClass("is-current"):a.removeClass("is-current")})}},setScrollingJustifyContentFix:function(){var i=t(".page").last().find(".content-navigation__list");0!==i.length&&i.each(function(i,e){var n=t(e),a=n.parent();n.get(0).scrollWidth>a.outerWidth()?n.css({"justify-content":"flex-start"}):n.css({"justify-content":"center"})})},positionArticleHeader:function(){var e=t(".js-article-fixed-header");e&&(_window.scrollTop()>=i.Components.Header.data.header.container.height()?e.addClass("is-visible"):e.removeClass("is-visible"))},populateContent:function(){t("[js-populate-content]").length>0&&t("[js-populate-content]").each(function(i,e){var n=t(e),a=t(n.data("target"));n.html(a.text())})}}}(jQuery,window.APP),function(t,i){window.APP.Components.Events={init:function(t){t||this.clickListeners()},clickListeners:function(){_document.on("click",".js-events-filter a",function(i){var e=t(this);e.siblings().removeClass("is-active"),e.addClass("is-active")})}}}(jQuery),function(t,i){window.APP.Components.Footer={init:function(t){t||this.clickListeners()},clickListeners:function(){_document.on("click",".footer__menu-title",function(i){if(window.innerWidth<576){var e=t(this),n=t(".footer__menu-title").filter(function(i,n){return t(n)[0]!==e[0]});if(0===n.length)return;n.each(function(i,e){var n=t(e);n.removeClass("is-active"),n.parent().find("ul").slideUp()}),e.toggleClass("is-active"),e.parent().find("ul").slideToggle()}})}}}(jQuery),function(t,i){i.Components.Header={data:{classes:{fixedClass:"is-fixed",visibleClass:"is-fixed-visible",bodyFixedVisible:"is-header-fixed-visible"},header:{container:void 0,bottomPoint:void 0,isFixedVisible:!1}},init:function(t){t||(this.getHeaderParams(),this.clickListeners(),this.listenScroll(),this.listenResize()),this.setMenuClass(),this.controlHeaderClass()},getHeaderParams:function(){var i=t(".header"),e=i.outerHeight()+0;this.data.header={container:i,bottomPoint:e,isFixedVisible:!1}},closeMobileMenu:function(e){t("[js-hamburger]").removeClass("is-active"),t("body").removeClass("is-mnav-active"),i.Plugins.ScrollBlock.blockScroll(e)},clickListeners:function(){_document.on("click","[js-hamburger]",function(){t(this).toggleClass("is-active"),t("body").toggleClass("is-mnav-active"),i.Plugins.ScrollBlock.blockScroll()}),_document.on("click",".js-header-search-opener",function(i){t(this);var e=t(".js-header-search");window.innerWidth<992?e.is(".is-active")?e.submit():(e.addClass("is-active"),e.find("input").focus()):e.is(".is-active")?e.removeClass("is-active"):(e.addClass("is-active"),e.find("input").focus())}).on("click",function(i){0===t(i.target).closest(".js-header-search").length&&t(".js-header-search").removeClass("is-active")}).on("click",".js-mnav-menu li.has-ul a",function(i){var e=t(this).parent();i.preventDefault(),i.stopPropagation(),e.siblings().removeClass("is-submenu-active"),e.addClass("is-submenu-active"),t(".js-mnav-submenu-bg").addClass("is-visible")}).on("click",function(i){0===t(i.target).closest(".mnav__menu").length&&(t(".js-mnav-menu li.has-ul").removeClass("is-submenu-active"),t(".js-mnav-submenu-bg").removeClass("is-visible"))})},listenScroll:function(){_window.on("scroll",this.scrollHeader.bind(this)),_window.on("scroll",debounce(this.scrollHeaderDebouce.bind(this),2e3,{trailing:!0}))},listenResize:function(){_window.on("resize",debounce(this.getHeaderParams.bind(this),100))},makeHeaderVisible:function(){this.data.header.container.addClass(this.data.classes.visibleClass),t("body").addClass(this.data.classes.bodyFixedVisible),this.data.header.isFixedVisible=!0},makeHeaderHidden:function(){this.data.header.container.removeClass(this.data.classes.visibleClass),t("body").removeClass(this.data.classes.bodyFixedVisible),this.data.header.isFixedVisible=!1},scrollHeaderDebouce:function(){void 0!==this.data.header.container&&this.makeHeaderVisible()},scrollHeader:function(){if(void 0!==this.data.header.container){var t=i.Plugins.ScrollBlock.getData();if(t.blocked)return;if(t.y>this.data.header.bottomPoint)this.data.header.container.addClass(this.data.classes.fixedClass),t.y>2*this.data.header.bottomPoint&&"up"===t.direction?this.makeHeaderVisible():this.makeHeaderHidden();else{var e=-1*(100-Math.floor(normalize(t.y,this.data.header.bottomPoint,0,0,100)));e*=1.2,this.data.header.container.css({transform:"translate3d(0,"+e+"%,0)"}),this.data.header.container.removeClass(this.data.classes.fixedClass)}}},setMenuClass:function(){var i=t(".header__menu li");0!==i.length&&i.each(function(i,e){t(e).find("a").attr("href")===window.location.pathname.split("/").pop()?t(e).addClass("is-active"):t(e).removeClass("is-active")})},controlHeaderClass:function(){this.data.header.container.attr("data-modifier",!1);var i=t(".page").last().find(".js-header-class");i.length>0&&this.data.header.container.attr("data-modifier",i.data("class"))}}}(jQuery,window.APP),function(t,i){window.APP.Components.Video={data:{hasYoutubeScript:!1,youtubeApiReady:!1,YTPlayer:void 0},init:function(t){this.loadYoutubeScripts(),t||this.clickListeners()},clickListeners:function(){var i=this;_document.on("click",".js-video .video__play",function(e){var n=t(this).closest(".js-video"),a=n.data("type"),s=n.is(".is-playing");if(s?n.removeClass("is-playing"):n.addClass("is-playing"),"html"===a){var o=n.find("video").get(0);s?o.pause():o.play()}else if("iframe"===a){var r=n.find("iframe");i.data.youtubeApiReady&&(s?i.data.YTPlayer.stopVideo():i.data.YTPlayer?i.data.YTPlayer.playVideo():i.data.YTPlayer=new YT.Player(r.get(0),{events:{onReady:function(t){t.target.playVideo()}}}))}})},loadYoutubeScripts:function(){if(!this.data.hasYoutubeScript){if(0===t(".page").last().find('.js-video[data-type="iframe"]').length)return;var i=document.createElement("script");i.src="https://www.youtube.com/iframe_api";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(i,e),this.data.hasYoutubeScript=!0}}}}(jQuery);