/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-applicationcache-canvas-canvastext-geolocation-history-input-inputtypes-localstorage-placeholder-video-webworkers-setclasses !*/
 !function(e,t,n){function a(e,t){return typeof e===t}function o(){var e,t,n,o,i,s,c;for(var d in r)if(r.hasOwnProperty(d)){if(e=[],t=r[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=a(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],c=s.split("."),1===c.length?Modernizr[c[0]]=o:(!Modernizr[c[0]]||Modernizr[c[0]]instanceof Boolean||(Modernizr[c[0]]=new Boolean(Modernizr[c[0]])),Modernizr[c[0]][c[1]]=o),l.push((o?"":"no-")+c.join("-"))}}function i(e){var t=d.className,n=Modernizr._config.classPrefix||"";if(p&&(t=t.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(a,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),p?d.className.baseVal=t:d.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):p?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}var l=[],r=[],c={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){r.push({name:e,fn:t,options:n})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=c,Modernizr=new Modernizr,Modernizr.addTest("applicationcache","applicationCache"in e),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")||"file:"===location.protocol?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("webworkers","Worker"in e);var d=t.documentElement,p="svg"===d.nodeName.toLowerCase();Modernizr.addTest("canvas",function(){var e=s("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof s("canvas").getContext("2d").fillText}),Modernizr.addTest("video",function(){var e=s("video"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("placeholder","placeholder"in s("input")&&"placeholder"in s("textarea"));var u=s("input"),f="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),m={};Modernizr.input=function(t){for(var n=0,a=t.length;a>n;n++)m[t[n]]=!!(t[n]in u);return m.list&&(m.list=!(!s("datalist")||!e.HTMLDataListElement)),m}(f);var v="search tel url email datetime date month week time datetime-local number range color".split(" "),h={};Modernizr.inputtypes=function(e){for(var a,o,i,s=e.length,l="1)",r=0;s>r;r++)u.setAttribute("type",a=e[r]),i="text"!==u.type&&"style"in u,i&&(u.value=l,u.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(a)&&u.style.WebkitAppearance!==n?(d.appendChild(u),o=t.defaultView,i=o.getComputedStyle&&"textfield"!==o.getComputedStyle(u,null).WebkitAppearance&&0!==u.offsetHeight,d.removeChild(u)):/^(search|tel)$/.test(a)||(i=/^(url|email)$/.test(a)?u.checkValidity&&u.checkValidity()===!1:u.value!=l)),h[e[r]]=!!i;return h}(v),o(),i(l),delete c.addTest,delete c.addAsyncTest;for(var g=0;g<Modernizr._q.length;g++)Modernizr._q[g]();e.Modernizr=Modernizr}(window,document);