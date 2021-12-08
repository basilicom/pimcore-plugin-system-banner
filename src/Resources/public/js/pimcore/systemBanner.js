!function(){"use strict";var e={208:function(e,n){var t,r;Object.defineProperty(n,"__esModule",{value:!0}),n.SystemBanner=void 0,function(e){e.DEV="dev",e.TEST="test",e.STAGE="stage",e.PROD="prod"}(r||(r={}));var s=((t={})[r.DEV]=["dev","development"],t[r.TEST]=["qa","qs","test","testing"],t[r.STAGE]=["stage","staging"],t[r.PROD]=["live","prod","production"],t),i=function(){function e(){}return e.show=function(e){var n=this;void 0===e&&(e=""),""===e.trim()?fetch("/pimcore-system-banner/environment").then((function(e){if(200!==e.status)throw new Error("Not 200 response");return e.json()})).then((function(e){n.addCss(),n.addBanner(e.environment)})).catch((function(){})):(this.addCss(),this.addBanner(e))},e.addBanner=function(e){var n=document.createElement("div");n.classList.add("system-banner__banner"),n.innerText=e;var t=document.createElement("div");t.classList.add("system-banner","system-banner--"+this.getSystemType(e)),t.append(n),document.body.append(t)},e.getSystemType=function(e){var n=r.PROD;return Object.keys(s).forEach((function(t){s[t].includes(e)&&(n=t)})),n},e.addCss=function(){var e="system-banner-css";if(!document.getElementById(e)){var n=document.getElementsByTagName("head")[0],t=document.createElement("link");t.id=e,t.rel="stylesheet",t.type="text/css",t.href="/bundles/pimcorepluginsystembanner/css/pimcore/systemBanner.css",t.media="all",n.appendChild(t)}},e}();n.SystemBanner=i}},n={};function t(r){var s=n[r];if(void 0!==s)return s.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,t),i.exports}!function(){var e=t(208);pimcore.registerNS("pimcore.plugin.SystemBannerBundle"),pimcore.plugin.SystemBannerBundle=Class.create(pimcore.plugin.admin,{getClassName:function(){return"pimcore.plugin.SystemBannerBundle"},pimcoreReady:function(){e.SystemBanner.show(pimcore.settings.environment)},initialize:function(){pimcore.plugin.broker.registerPlugin(this)}});new pimcore.plugin.SystemBannerBundle}()}();