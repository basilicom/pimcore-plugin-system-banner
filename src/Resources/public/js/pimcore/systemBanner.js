!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s="L95Q")}({"42w4":function(e,n,t){"use strict";var r,i;Object.defineProperty(n,"__esModule",{value:!0}),n.SystemBanner=void 0,function(e){e.DEV="dev",e.TEST="test",e.STAGE="stage",e.PROD="prod"}(i||(i={}));var o=((r={})[i.DEV]=["dev","development"],r[i.TEST]=["qa","qs","test","testing"],r[i.STAGE]=["stage","staging"],r[i.PROD]=["live","prod","production"],r),s=function(){function e(){}return e.show=function(e){var n=this;void 0===e&&(e=""),e.length>0?fetch("/pimcore-system-banner/environment").then((function(e){return e.json()})).then((function(e){n.addCss(),n.addBanner(e.environment)})):(this.addCss(),this.addBanner(e))},e.getSystemType=function(e){var n=i.PROD;return Object.keys(o).forEach((function(t){o[t].includes(e)&&(n=t)})),n},e.addBanner=function(e){var n=document.createElement("div");n.classList.add("system-banner__banner"),n.innerText=e;var t=document.createElement("div");t.classList.add("system-banner","system-banner--"+this.getSystemType(e)),t.append(n),document.body.append(t)},e.addCss=function(){var e="system-banner-css";if(!document.getElementById(e)){var n=document.getElementsByTagName("head")[0],t=document.createElement("link");t.id=e,t.rel="stylesheet",t.type="text/css",t.href="/bundles/pimcorepluginsystembanner/css/pimcore/systemBanner.css",t.media="all",n.appendChild(t)}},e}();n.SystemBanner=s},L95Q:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("42w4");pimcore.registerNS("pimcore.plugin.SystemBannerBundle"),pimcore.plugin.SystemBannerBundle=Class.create(pimcore.plugin.admin,{getClassName:function(){return"pimcore.plugin.SystemBannerBundle"},pimcoreReady:function(){r.SystemBanner.show(pimcore.settings.environment)},initialize:function(){pimcore.plugin.broker.registerPlugin(this)}});new pimcore.plugin.SystemBannerBundle}});