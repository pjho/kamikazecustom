/* jquery.dropotron.js v1.4.3 | (c) n33 | n33.co | MIT licensed */
(function(e){var t="openerActiveClass",n="click touchend",r="left",i="doCollapseAll",s="position",o="trigger",u="disableSelection_dropotron",a="addClass",f="doCollapse",l=!1,c="outerWidth",h="removeClass",p="preventDefault",d="length",v="dropotron",m="clearTimeout",g="right",y="parent",b=!0,w="speed",E="none",S="stopPropagation",x="doExpand",T=":visible",N="absolute",C="css",k="center",L="toggle",A="baseZIndex",O="offsetX",M="alignment",_="submenuClassPrefix",D="children",P="hover",H="relative",B="doToggle",j="ul",F="z-index",I="opacity",q="find",R="opener",U="px",z=null,W="hide",X="offset",V="detach",$="fast";e.fn[u]=function(){return e(this)[C]("user-select",E)[C]("-khtml-user-select",E)[C]("-moz-user-select",E)[C]("-o-user-select",E)[C]("-webkit-user-select",E)},e.fn[v]=function(t){var n;if(this[d]==0)return e(this);if(this[d]>1)for(n=0;n<this[d];n++)e(this[n])[v](t);return e[v](e.extend({selectorParent:e(this)},t))},e[v]=function(E){var et=e.extend({selectorParent:z,baseZIndex:1e3,menuClass:v,expandMode:P,hoverDelay:150,hideDelay:250,openerClass:R,openerActiveClass:"active",submenuClassPrefix:"level-",mode:"fade",speed:$,easing:"swing",alignment:r,offsetX:0,offsetY:0,globalOffsetY:0,IEOffsetX:0,IEOffsetY:0,noOpenerFade:b,detach:b,cloneOnDetach:b},E),tt=et.selectorParent,nt=tt[q](j),rt=e("body"),it=e("body,html"),st=e(window),ot=l,ut=z,at=z;tt.on(i,function(){nt[o](f)}),nt.each(function(){var i=e(this),d=i[y]();et.hideDelay>0&&i.add(d).on("mouseleave",function(){window[m](at),at=window.setTimeout(function(){i[o](f)},et.hideDelay)}),i[u]()[W]()[a](et.menuClass)[C](s,N).on("mouseenter",function(){window[m](at)}).on(x,function(){var n,u,p,v,E,S,x,_,D,P,B;if(i.is(T))return l;window[m](at),nt.each(function(){var t=e(this);e.contains(t.get(0),d.get(0))||t[o](f)}),n=d[X](),u=d[s](),p=d[y]()[s](),v=d[c](),E=i[c](),S=i[C](F)==et[A];if(S){et[V]?x=n:x=u,P=x.top+d.outerHeight()+et.globalOffsetY,_=et[M],i[h](r)[h](g)[h](k);switch(et[M]){case g:D=x[r]-E+v,D<0&&(D=x[r],_=r);break;case k:D=x[r]-Math.floor((E-v)/2),D<0?(D=x[r],_=r):D+E>st.width()&&(D=x[r]-E+v,_=g);break;case r:default:D=x[r],D+E>st.width()&&(D=x[r]-E+v,_=g)}i[a](_)}else{d[C](s)==H||d[C](s)==N?(P=et.offsetY,D=-1*u[r]):(P=u.top+et.offsetY,D=0);switch(et[M]){case g:D+=-1*d[y]()[c]()+et[O];break;case k:case r:default:D+=d[y]()[c]()+et[O]}}navigator.userAgent.match(/MSIE ([0-9]+)\./)&&RegExp.$1<8&&(D+=et.IEOffsetX,P+=et.IEOffsetY),i[C](r,D+U)[C]("top",P+U)[C](I,"0.01").show(),B=l,d[C](s)==H||d[C](s)==N?D=-1*u[r]:D=0,i[X]()[r]<0?(D+=d[y]()[c]()-et[O],B=b):i[X]()[r]+E>st.width()&&(D+=-1*d[y]()[c]()-et[O],B=b),B&&i[C](r,D+U),i[W]()[C](I,"1");switch(et.mode){case"zoom":ot=b,d[a](et[t]),i.animate({width:L,height:L},et[w],et.easing,function(){ot=l});break;case"slide":ot=b,d[a](et[t]),i.animate({height:L},et[w],et.easing,function(){ot=l});break;case"fade":ot=b,S&&!et.noOpenerFade?(et[w]=="slow"?B=80:et[w]==$?B=40:B=Math.floor(et[w]/2),d.fadeTo(B,.01,function(){d[a](et[t]),d.fadeTo(et[w],1),i.fadeIn(et[w],function(){ot=l})})):(d[a](et[t]),d.fadeTo(et[w],1),i.fadeIn(et[w],function(){ot=l}));break;case"instant":default:d[a](et[t]),i.show()}return l}).on(f,function(){return i.is(T)?(i[W](),d[h](et[t]),i[q]("."+et[t])[h](et[t]),i[q](j)[W](),l):l}).on(B,function(){return i.is(T)?i[o](f):i[o](x),l}),d[u]()[a](R)[C]("cursor","pointer").on(n,function(e){if(ot)return;e[p](),e[S](),i[o](B)}),et.expandMode==P&&d[P](function(){if(ot)return;ut=window.setTimeout(function(){i[o](x)},et.hoverDelay)},function(){window[m](ut)})}),nt[q]("a")[C]("display","block").on(n,function(t){if(ot)return;e(this).attr("href")[d]<1&&t[p]()}),tt[q]("li")[C]("white-space","nowrap").each(function(){var t=e(this),r=t[D]("a"),s=t[D](j),u=r.attr("href");r.on(n,function(e){u[d]==0||u=="#"?e[p]():e[S]()}),r[d]>0&&s[d]==0&&t.on(n,function(e){if(ot)return;tt[o](i),e[S]()})}),tt[D]("li").each(function(){var t,n,r,i,s=e(this),o=s[D](j);if(o[d]>0){et[V]&&(et.cloneOnDetach&&(t=o.clone(),t.attr("class","")[W]().appendTo(o[y]())),o[V]().appendTo(rt));for(n=et[A],r=1,i=o;i[d]>0;r++)i[C](F,n++),et[_]&&i[a](et[_]+(n-1-et[A])),i=i[q]("> li > ul")}}),st.on("scroll",function(){tt[o](i)}).on("keypress",function(e){!ot&&e.keyCode==27&&(e[p](),tt[o](i))}),it.on(n,function(){ot||tt[o](i)})}})(jQuery);

/* skel.js v3.0.0 | (c) n33 | skel.io | MIT licensed */
var skel=function(){"use strict";var t={breakpointIds:null,events:{},isInit:!1,obj:{attachments:{},breakpoints:{},head:null,states:{}},sd:"/",state:null,stateHandlers:{},stateId:"",vars:{},DOMReady:null,indexOf:null,isArray:null,iterate:null,matchesMedia:null,extend:function(e,n){t.iterate(n,function(i){t.isArray(n[i])?(t.isArray(e[i])||(e[i]=[]),t.extend(e[i],n[i])):"object"==typeof n[i]?("object"!=typeof e[i]&&(e[i]={}),t.extend(e[i],n[i])):e[i]=n[i]})},newStyle:function(t){var e=document.createElement("style");return e.type="text/css",e.innerHTML=t,e},_canUse:null,canUse:function(e){t._canUse||(t._canUse=document.createElement("div"));var n=t._canUse.style,i=e.charAt(0).toUpperCase()+e.slice(1);return e in n||"Moz"+i in n||"Webkit"+i in n||"O"+i in n||"ms"+i in n},on:function(e,n){var i=e.split(/[\s]+/);return t.iterate(i,function(e){var a=i[e];if(t.isInit){if("init"==a)return void n();if("change"==a)n();else{var r=a.charAt(0);if("+"==r||"!"==r){var o=a.substring(1);if(o in t.obj.breakpoints)if("+"==r&&t.obj.breakpoints[o].active)n();else if("!"==r&&!t.obj.breakpoints[o].active)return void n()}}}t.events[a]||(t.events[a]=[]),t.events[a].push(n)}),t},trigger:function(e){return t.events[e]&&0!=t.events[e].length?(t.iterate(t.events[e],function(n){t.events[e][n]()}),t):void 0},breakpoint:function(e){return t.obj.breakpoints[e]},breakpoints:function(e){function n(t,e){this.name=this.id=t,this.media=e,this.active=!1,this.wasActive=!1}return n.prototype.matches=function(){return t.matchesMedia(this.media)},n.prototype.sync=function(){this.wasActive=this.active,this.active=this.matches()},t.iterate(e,function(i){t.obj.breakpoints[i]=new n(i,e[i])}),window.setTimeout(function(){t.poll()},0),t},addStateHandler:function(e,n){t.stateHandlers[e]=n},callStateHandler:function(e){var n=t.stateHandlers[e]();t.iterate(n,function(e){t.state.attachments.push(n[e])})},changeState:function(e){t.iterate(t.obj.breakpoints,function(e){t.obj.breakpoints[e].sync()}),t.vars.lastStateId=t.stateId,t.stateId=e,t.breakpointIds=t.stateId===t.sd?[]:t.stateId.substring(1).split(t.sd),t.obj.states[t.stateId]?t.state=t.obj.states[t.stateId]:(t.obj.states[t.stateId]={attachments:[]},t.state=t.obj.states[t.stateId],t.iterate(t.stateHandlers,t.callStateHandler)),t.detachAll(t.state.attachments),t.attachAll(t.state.attachments),t.vars.stateId=t.stateId,t.vars.state=t.state,t.trigger("change"),t.iterate(t.obj.breakpoints,function(e){t.obj.breakpoints[e].active?t.obj.breakpoints[e].wasActive||t.trigger("+"+e):t.obj.breakpoints[e].wasActive&&t.trigger("-"+e)})},generateStateConfig:function(e,n){var i={};return t.extend(i,e),t.iterate(t.breakpointIds,function(e){t.extend(i,n[t.breakpointIds[e]])}),i},getStateId:function(){var e="";return t.iterate(t.obj.breakpoints,function(n){var i=t.obj.breakpoints[n];i.matches()&&(e+=t.sd+i.id)}),e},poll:function(){var e="";e=t.getStateId(),""===e&&(e=t.sd),e!==t.stateId&&t.changeState(e)},_attach:null,attach:function(e){var n=t.obj.head,i=e.element;return i.parentNode&&i.parentNode.tagName?!1:(t._attach||(t._attach=n.firstChild),n.insertBefore(i,t._attach.nextSibling),e.permanent&&(t._attach=i),!0)},attachAll:function(e){var n=[];t.iterate(e,function(t){n[e[t].priority]||(n[e[t].priority]=[]),n[e[t].priority].push(e[t])}),n.reverse(),t.iterate(n,function(e){t.iterate(n[e],function(i){t.attach(n[e][i])})})},detach:function(t){var e=t.element;return t.permanent||!e.parentNode||e.parentNode&&!e.parentNode.tagName?!1:(e.parentNode.removeChild(e),!0)},detachAll:function(e){var n={};t.iterate(e,function(t){n[e[t].id]=!0}),t.iterate(t.obj.attachments,function(e){e in n||t.detach(t.obj.attachments[e])})},attachment:function(e){return e in t.obj.attachments?t.obj.attachments[e]:null},newAttachment:function(e,n,i,a){return t.obj.attachments[e]={id:e,element:n,priority:i,permanent:a}},init:function(){t.initMethods(),t.initVars(),t.initEvents(),t.obj.head=document.getElementsByTagName("head")[0],t.isInit=!0,t.trigger("init")},initEvents:function(){t.on("resize",function(){t.poll()}),t.on("orientationChange",function(){t.poll()}),t.DOMReady(function(){t.trigger("ready")}),window.onload&&t.on("load",window.onload),window.onload=function(){t.trigger("load")},window.onresize&&t.on("resize",window.onresize),window.onresize=function(){t.trigger("resize")},window.onorientationchange&&t.on("orientationChange",window.onorientationchange),window.onorientationchange=function(){t.trigger("orientationChange")}},initMethods:function(){document.addEventListener?!function(e,n){t.DOMReady=n()}("domready",function(){function t(t){for(r=1;t=n.shift();)t()}var e,n=[],i=document,a="DOMContentLoaded",r=/^loaded|^c/.test(i.readyState);return i.addEventListener(a,e=function(){i.removeEventListener(a,e),t()}),function(t){r?t():n.push(t)}}):!function(e,n){t.DOMReady=n()}("domready",function(t){function e(t){for(h=1;t=i.shift();)t()}var n,i=[],a=!1,r=document,o=r.documentElement,s=o.doScroll,c="DOMContentLoaded",d="addEventListener",u="onreadystatechange",l="readyState",f=s?/^loaded|^c/:/^loaded|c/,h=f.test(r[l]);return r[d]&&r[d](c,n=function(){r.removeEventListener(c,n,a),e()},a),s&&r.attachEvent(u,n=function(){/^c/.test(r[l])&&(r.detachEvent(u,n),e())}),t=s?function(e){self!=top?h?e():i.push(e):function(){try{o.doScroll("left")}catch(n){return setTimeout(function(){t(e)},50)}e()}()}:function(t){h?t():i.push(t)}}),Array.prototype.indexOf?t.indexOf=function(t,e){return t.indexOf(e)}:t.indexOf=function(t,e){if("string"==typeof t)return t.indexOf(e);var n,i,a=e?e:0;if(!this)throw new TypeError;if(i=this.length,0===i||a>=i)return-1;for(0>a&&(a=i-Math.abs(a)),n=a;i>n;n++)if(this[n]===t)return n;return-1},Array.isArray?t.isArray=function(t){return Array.isArray(t)}:t.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)},Object.keys?t.iterate=function(t,e){if(!t)return[];var n,i=Object.keys(t);for(n=0;i[n]&&e(i[n],t[i[n]])!==!1;n++);}:t.iterate=function(t,e){if(!t)return[];var n;for(n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])===!1)break},window.matchMedia?t.matchesMedia=function(t){return""==t?!0:window.matchMedia(t).matches}:window.styleMedia||window.media?t.matchesMedia=function(t){if(""==t)return!0;var e=window.styleMedia||window.media;return e.matchMedium(t||"all")}:window.getComputedStyle?t.matchesMedia=function(t){if(""==t)return!0;var e=document.createElement("style"),n=document.getElementsByTagName("script")[0],i=null;e.type="text/css",e.id="matchmediajs-test",n.parentNode.insertBefore(e,n),i="getComputedStyle"in window&&window.getComputedStyle(e,null)||e.currentStyle;var a="@media "+t+"{ #matchmediajs-test { width: 1px; } }";return e.styleSheet?e.styleSheet.cssText=a:e.textContent=a,"1px"===i.width}:t.matchesMedia=function(t){if(""==t)return!0;var e,n,i,a,r={"min-width":null,"max-width":null},o=!1;for(i=t.split(/\s+and\s+/),e=0;e<i.length;e++)n=i[e],"("==n.charAt(0)&&(n=n.substring(1,n.length-1),a=n.split(/:\s+/),2==a.length&&(r[a[0].replace(/^\s+|\s+$/g,"")]=parseInt(a[1]),o=!0));if(!o)return!1;var s=document.documentElement.clientWidth,c=document.documentElement.clientHeight;return null!==r["min-width"]&&s<r["min-width"]||null!==r["max-width"]&&s>r["max-width"]||null!==r["min-height"]&&c<r["min-height"]||null!==r["max-height"]&&c>r["max-height"]?!1:!0},navigator.userAgent.match(/MSIE ([0-9]+)/)&&RegExp.$1<9&&(t.newStyle=function(t){var e=document.createElement("span");return e.innerHTML='&nbsp;<style type="text/css">'+t+"</style>",e})},initVars:function(){var e,n,i,a=navigator.userAgent;e="other",n=0,i=[["firefox",/Firefox\/([0-9\.]+)/],["bb",/BlackBerry.+Version\/([0-9\.]+)/],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/],["opera",/OPR\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)/],["edge",/Edge\/([0-9\.]+)/],["safari",/Version\/([0-9\.]+).+Safari/],["chrome",/Chrome\/([0-9\.]+)/],["ie",/MSIE ([0-9]+)/],["ie",/Trident\/.+rv:([0-9]+)/]],t.iterate(i,function(t,i){return a.match(i[1])?(e=i[0],n=parseFloat(RegExp.$1),!1):void 0}),t.vars.browser=e,t.vars.browserVersion=n,e="other",n=0,i=[["ios",/([0-9_]+) like Mac OS X/,function(t){return t.replace("_",".").replace("_","")}],["ios",/CPU like Mac OS X/,function(t){return 0}],["android",/Android ([0-9\.]+)/,null],["mac",/Macintosh.+Mac OS X ([0-9_]+)/,function(t){return t.replace("_",".").replace("_","")}],["wp",/Windows Phone ([0-9\.]+)/,null],["windows",/Windows NT ([0-9\.]+)/,null],["bb",/BlackBerry.+Version\/([0-9\.]+)/,null],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/,null]],t.iterate(i,function(t,i){return a.match(i[1])?(e=i[0],n=parseFloat(i[2]?i[2](RegExp.$1):RegExp.$1),!1):void 0}),t.vars.os=e,t.vars.osVersion=n,t.vars.IEVersion="ie"==t.vars.browser?t.vars.browserVersion:99,t.vars.touch="wp"==t.vars.os?navigator.msMaxTouchPoints>0:!!("ontouchstart"in window),t.vars.mobile="wp"==t.vars.os||"android"==t.vars.os||"ios"==t.vars.os||"bb"==t.vars.os}};return t.init(),t}();!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():t.skel=e()}(this,function(){return skel});

/* skel-viewport.js v3.0.0 | (c) n33 | skel.io | MIT licensed */
!function(e){"use strict";var t={config:{width:"device-width",height:"",scalable:!0,breakpoints:{}},init:function(i){return e.extend(t.config,i),e.addStateHandler("viewport",t.stateHandler),e.attach(e.newAttachment("mv",t.newViewportMeta("initial-scale=1"),1,!0)),"ie"==e.vars.browser&&e.vars.IEVersion>=10&&(e.attach(e.newAttachment("mVie",e.newStyle("@-ms-viewport{width:device-width}"),1,!0)),window.setTimeout(function(){var e=document.getElementsByTagName("body")[0],t=e.style.height;e.style.height="10000px",window.setTimeout(function(){e.style.height=t},250)},250)),e},newViewportMeta:function(e){var t=document.createElement("meta");return t.name="viewport",t.content=e,t},stateHandler:function(){var i,n,a;return n=e.generateStateConfig({width:t.config.width,height:t.config.height,scalable:t.config.scalable},t.config.breakpoints),a=[],a.push("user-scalable="+(n.scalable?"yes":"no")),n.width&&a.push("width="+n.width),n.height&&a.push("height="+n.height),"device-width"==n.width&&a.push("initial-scale=1"),i=e.newAttachment("mv-"+e.stateId,t.newViewportMeta(a.join(",")),1),[i]}};e.viewport=t.init}(skel);





/*
Util.js
 */

(function($) {

  /**
   * Generate an indented list of links from a nav. Meant for use with panel().
   * @return {jQuery} jQuery object.
   */
  $.fn.navList = function() {

    var $this = $(this);
      $a = $this.find('a'),
      b = [];

    $a.each(function() {

      var $this = $(this),
        indent = Math.max(0, $this.parents('li').length - 1),
        href = $this.attr('href'),
        target = $this.attr('target');

      b.push(
        '<a ' +
          'class="link depth-' + indent + '"' +
          ( (typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +
          ( (typeof href !== 'undefined' && href != '') ? ' href="' + href + '"' : '') +
        '>' +
          '<span class="indent-' + indent + '"></span>' +
          $this.text() +
        '</a>'
      );

    });

    return b.join('');

  };

  /**
   * Panel-ify an element.
   * @param {object} userConfig User config.
   * @return {jQuery} jQuery object.
   */
  $.fn.panel = function(userConfig) {

    // No elements?
      if (this.length == 0)
        return $this;

    // Multiple elements?
      if (this.length > 1) {

        for (var i=0; i < this.length; i++)
          $(this[i]).panel(userConfig);

        return $this;

      }

    // Vars.
      var $this = $(this),
        $body = $('body'),
        $window = $(window),
        id = $this.attr('id'),
        config;

    // Config.
      config = $.extend({

        // Delay.
          delay: 0,

        // Hide panel on link click.
          hideOnClick: false,

        // Hide panel on escape keypress.
          hideOnEscape: false,

        // Hide panel on swipe.
          hideOnSwipe: false,

        // Reset scroll position on hide.
          resetScroll: false,

        // Reset forms on hide.
          resetForms: false,

        // Side of viewport the panel will appear.
          side: null,

        // Target element for "class".
          target: $this,

        // Class to toggle.
          visibleClass: 'visible'

      }, userConfig);

      // Expand "target" if it's not a jQuery object already.
        if (typeof config.target != 'jQuery')
          config.target = $(config.target);

    // Panel.

      // Methods.
        $this._hide = function(event) {

          // Already hidden? Bail.
            if (!config.target.hasClass(config.visibleClass))
              return;

          // If an event was provided, cancel it.
            if (event) {

              event.preventDefault();
              event.stopPropagation();

            }

          // Hide.
            config.target.removeClass(config.visibleClass);

          // Post-hide stuff.
            window.setTimeout(function() {

              // Reset scroll position.
                if (config.resetScroll)
                  $this.scrollTop(0);

              // Reset forms.
                if (config.resetForms)
                  $this.find('form').each(function() {
                    this.reset();
                  });

            }, config.delay);

        };

      // Vendor fixes.
        $this
          .css('-ms-overflow-style', '-ms-autohiding-scrollbar')
          .css('-webkit-overflow-scrolling', 'touch');

      // Hide on click.
        if (config.hideOnClick) {

          $this.find('a')
            .css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');

          $this
            .on('click', 'a', function(event) {

              var $a = $(this),
                href = $a.attr('href'),
                target = $a.attr('target');

              if (!href || href == '#' || href == '' || href == '#' + id)
                return;

              // Cancel original event.
                event.preventDefault();
                event.stopPropagation();

              // Hide panel.
                $this._hide();

              // Redirect to href.
                window.setTimeout(function() {
                  if (target === undefined) {

                    $('html, body').animate({
                        scrollTop: $(href).offset().top
                    }, 700);

                    window.location.href = href;

                  } else if (target == '_blank') {

                    window.open(href);

                  } else{

                    window.location.href = href;

                  }

                },  10);

            });

        }

      // Event: Touch stuff.
        $this.on('touchstart', function(event) {

          $this.touchPosX = event.originalEvent.touches[0].pageX;
          $this.touchPosY = event.originalEvent.touches[0].pageY;

        })

        $this.on('touchmove', function(event) {

          if ($this.touchPosX === null
          ||  $this.touchPosY === null)
            return;

          var diffX = $this.touchPosX - event.originalEvent.touches[0].pageX,
            diffY = $this.touchPosY - event.originalEvent.touches[0].pageY,
            th = $this.outerHeight(),
            ts = ($this.get(0).scrollHeight - $this.scrollTop());

          // Hide on swipe?
            if (config.hideOnSwipe) {

              var result = false,
                boundary = 20,
                delta = 50;

              switch (config.side) {

                case 'left':
                  result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX > delta);
                  break;

                case 'right':
                  result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX < (-1 * delta));
                  break;

                case 'top':
                  result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY > delta);
                  break;

                case 'bottom':
                  result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY < (-1 * delta));
                  break;

                default:
                  break;

              }

              if (result) {

                $this.touchPosX = null;
                $this.touchPosY = null;
                $this._hide();

                return false;

              }

            }

          // Prevent vertical scrolling past the top or bottom.
            if (($this.scrollTop() < 0 && diffY < 0)
            || (ts > (th - 2) && ts < (th + 2) && diffY > 0)) {

              event.preventDefault();
              event.stopPropagation();

            }

        });

      // Event: Prevent certain events inside the panel from bubbling.
        $this.on('click touchend touchstart touchmove', function(event) {
          event.stopPropagation();
        });

      // Event: Hide panel if a child anchor tag pointing to its ID is clicked.
        $this.on('click', 'a[href="#' + id + '"]', function(event) {

          event.preventDefault();
          event.stopPropagation();

          config.target.removeClass(config.visibleClass);

        });

    // Body.

      // Event: Hide panel on body click/tap.
        $body.on('click touchend', function(event) {
          $this._hide(event);
        });

      // Event: Toggle.
        $body.on('click', 'a[href="#' + id + '"]', function(event) {

          event.preventDefault();
          event.stopPropagation();

          config.target.toggleClass(config.visibleClass);

        });

    // Window.

      // Event: Hide on ESC.
        if (config.hideOnEscape)
          $window.on('keydown', function(event) {

            if (event.keyCode == 27)
              $this._hide(event);

          });

    return $this;

  };

  /**
   * Apply "placeholder" attribute polyfill to one or more forms.
   * @return {jQuery} jQuery object.
   */
  $.fn.placeholder = function() {

    // Browser natively supports placeholders? Bail.
      if (typeof (document.createElement('input')).placeholder != 'undefined')
        return $(this);

    // No elements?
      if (this.length == 0)
        return $this;

    // Multiple elements?
      if (this.length > 1) {

        for (var i=0; i < this.length; i++)
          $(this[i]).placeholder();

        return $this;

      }

    // Vars.
      var $this = $(this);

    // Text, TextArea.
      $this.find('input[type=text],textarea')
        .each(function() {

          var i = $(this);

          if (i.val() == ''
          ||  i.val() == i.attr('placeholder'))
            i
              .addClass('polyfill-placeholder')
              .val(i.attr('placeholder'));

        })
        .on('blur', function() {

          var i = $(this);

          if (i.attr('name').match(/-polyfill-field$/))
            return;

          if (i.val() == '')
            i
              .addClass('polyfill-placeholder')
              .val(i.attr('placeholder'));

        })
        .on('focus', function() {

          var i = $(this);

          if (i.attr('name').match(/-polyfill-field$/))
            return;

          if (i.val() == i.attr('placeholder'))
            i
              .removeClass('polyfill-placeholder')
              .val('');

        });

    // Password.
      $this.find('input[type=password]')
        .each(function() {

          var i = $(this);
          var x = $(
                $('<div>')
                  .append(i.clone())
                  .remove()
                  .html()
                  .replace(/type="password"/i, 'type="text"')
                  .replace(/type=password/i, 'type=text')
          );

          if (i.attr('id') != '')
            x.attr('id', i.attr('id') + '-polyfill-field');

          if (i.attr('name') != '')
            x.attr('name', i.attr('name') + '-polyfill-field');

          x.addClass('polyfill-placeholder')
            .val(x.attr('placeholder')).insertAfter(i);

          if (i.val() == '')
            i.hide();
          else
            x.hide();

          i
            .on('blur', function(event) {

              event.preventDefault();

              var x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

              if (i.val() == '') {

                i.hide();
                x.show();

              }

            });

          x
            .on('focus', function(event) {

              event.preventDefault();

              var i = x.parent().find('input[name=' + x.attr('name').replace('-polyfill-field', '') + ']');

              x.hide();

              i
                .show()
                .focus();

            })
            .on('keypress', function(event) {

              event.preventDefault();
              x.val('');

            });

        });

    // Events.
      $this
        .on('submit', function() {

          $this.find('input[type=text],input[type=password],textarea')
            .each(function(event) {

              var i = $(this);

              if (i.attr('name').match(/-polyfill-field$/))
                i.attr('name', '');

              if (i.val() == i.attr('placeholder')) {

                i.removeClass('polyfill-placeholder');
                i.val('');

              }

            });

        })
        .on('reset', function(event) {

          event.preventDefault();

          $this.find('select')
            .val($('option:first').val());

          $this.find('input,textarea')
            .each(function() {

              var i = $(this),
                x;

              i.removeClass('polyfill-placeholder');

              switch (this.type) {

                case 'submit':
                case 'reset':
                  break;

                case 'password':
                  i.val(i.attr('defaultValue'));

                  x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

                  if (i.val() == '') {
                    i.hide();
                    x.show();
                  }
                  else {
                    i.show();
                    x.hide();
                  }

                  break;

                case 'checkbox':
                case 'radio':
                  i.attr('checked', i.attr('defaultValue'));
                  break;

                case 'text':
                case 'textarea':
                  i.val(i.attr('defaultValue'));

                  if (i.val() == '') {
                    i.addClass('polyfill-placeholder');
                    i.val(i.attr('placeholder'));
                  }

                  break;

                default:
                  i.val(i.attr('defaultValue'));
                  break;

              }
            });

        });

    return $this;

  };

  /**
   * Moves elements to/from the first positions of their respective parents.
   * @param {jQuery} $elements Elements (or selector) to move.
   * @param {bool} condition If true, moves elements to the top. Otherwise, moves elements back to their original locations.
   */
  $.prioritize = function($elements, condition) {

    var key = '__prioritize';

    // Expand $elements if it's not already a jQuery object.
      if (typeof $elements != 'jQuery')
        $elements = $($elements);

    // Step through elements.
      $elements.each(function() {

        var $e = $(this), $p,
          $parent = $e.parent();

        // No parent? Bail.
          if ($parent.length == 0)
            return;

        // Not moved? Move it.
          if (!$e.data(key)) {

            // Condition is false? Bail.
              if (!condition)
                return;

            // Get placeholder (which will serve as our point of reference for when this element needs to move back).
              $p = $e.prev();

              // Couldn't find anything? Means this element's already at the top, so bail.
                if ($p.length == 0)
                  return;

            // Move element to top of parent.
              $e.prependTo($parent);

            // Mark element as moved.
              $e.data(key, $p);

          }

        // Moved already?
          else {

            // Condition is true? Bail.
              if (condition)
                return;

            $p = $e.data(key);

            // Move element back to its original location (using our placeholder).
              $e.insertAfter($p);

            // Unmark element as moved.
              $e.removeData(key);

          }

      });

  };

})(jQuery);







/*
	Strongly Typed by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Dropdowns.
			$('#nav > ul').dropotron({
				mode: 'fade',
				noOpenerFade: true,
				hoverDelay: 150,
				hideDelay: 350
			});

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');


        $('#gmap-holder').on('click', function(e) {
            $(this).find('iframe').css('pointer-events', 'all');
        }).mouseleave(function(e) {
            $(this).find('iframe').css('pointer-events', 'none');
        });






	});

})(jQuery);
