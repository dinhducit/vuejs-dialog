!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=Vue},function(e,t,n){n(2),e.exports=n(16)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n.n(o),r=n(3),a=n.n(r),s=n(4),c=n.n(s),l=n(5),u=n.n(l);i.a.use(a.a),i.a.use(c.a,{message:"Please confirm action"});var f=i.a.extend(u.a);window.vm=new f,window.vm.$mount("#app")},function(e,t,n){!function(t,o){e.exports=o(n(0))}(0,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=8)}([function(e,t){e.exports=function(e,t,n,o){var i,r=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,r=e.default);var s="function"==typeof r?r.options:r;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),o){var c=Object.create(s.computed||null);Object.keys(o).forEach(function(e){var t=o[e];c[e]=function(){return t}}),s.computed=c}return{esModule:i,exports:r,options:s}}},function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n(2),i=n.n(o),r=new i.a},function(t,n){t.exports=e},function(e,t,n){n(18);var o=n(0)(n(5),n(16),null,null);e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"CssGroup",props:["name"]}},function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),r=(n.n(i),n(1)),a=n(10),s=n(7),c=n(14),l=n.n(c),u=n(13),f=n.n(u),d=n(9),p={IDLE:0,DESTROYED:2},m={velocity:null},h={name:"Notifications",components:{VelocityGroup:l.a,CssGroup:f.a},props:{group:{type:String},width:{type:[Number,String],default:300},reverse:{type:Boolean,default:!1},position:{type:[String,Array],default:function(){return s.a.position}},classes:{type:String,default:"vue-notification"},animationType:{type:String,default:"css",validator:function(e){return"css"===e||"velocity"===e}},animation:{type:Object,default:function(){return s.a.velocityAnimation}},animationName:{type:String,default:s.a.cssAnimation},speed:{type:Number,default:300},cooldown:{type:Number,default:0},duration:{type:Number,default:3e3},delay:{type:Number,default:0},max:{type:Number,default:1/0}},data:function(){return{list:[],velocity:m.velocity}},created:function(){r.a.$on("add",this.addItem)},computed:{actualWidth:function(){return n.i(d.a)(this.width)},isVA:function(){return"velocity"===this.animationType},componentName:function(){return this.isVA?"VelocityGroup":"CssGroup"},styles:function(){var e=n.i(a.a)(this.position),t=e.x,i=e.y,r=this.actualWidth.value,s=this.actualWidth.type,c=o({width:""+r+s},i,"0px");return"center"===t?c.left="calc(50% - "+r/2+s+")":c[t]="0px",c},active:function(){return this.list.filter(function(e){return e.state!==p.DESTROYED})},botToTop:function(){return this.styles.hasOwnProperty("bottom")}},methods:{addItem:function(e){var t=this;if(!this.group||this.group==e.group){if(e.clean||e.clear)return void this.destroyAll();var o="number"==typeof e.duration?e.duration:this.duration,i="number"==typeof e.speed?e.speed:this.speed,r=e.title,s=e.text,c=e.type,l={id:n.i(a.b)(),title:r,text:s,type:c,state:p.IDLE,speed:i,length:o+2*i};o>=0&&(l.timer=setTimeout(function(){t.destroy(l)},l.length));var u=this.reverse?!this.botToTop:this.botToTop,f=-1;u?(this.list.push(l),this.active.length>this.max&&(f=-1)):(this.list.unshift(l),this.active.length>this.max&&(f=this.active.length-1)),-1!==f&&this.destroy(this.active[f])}},"nСlass":function(e){return["notification",this.classes,e.type]},nwStyle:function(e){return this.isVA?null:{transition:"all "+e.speed+"ms"}},destroy:function(e){clearTimeout(e.timer),e.state=p.DESTROYED,this.isVA||this.clean()},destroyAll:function(){this.active.forEach(this.destroy)},getAnimation:function(e,t){var n=this.animation[e];return"function"==typeof n?n.call(this,t):n},enter:function(e){var t=e.el,n=e.complete,o=this.getAnimation("enter",t);this.velocity(t,o,{duration:this.speed,complete:n})},leave:function(e){var t=e.el,n=e.complete,o=this.getAnimation("leave",t);this.velocity(t,o,{duration:this.speed,complete:n})},clean:function(){this.list=this.list.filter(function(e){return e.state!==p.DESTROYED})}}};h.configure=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};void 0!==e.velocity&&(m.velocity=e.velocity)},t.default=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"VelocityGroup",methods:{enter:function(e,t){this.$emit("enter",{el:e,complete:t})},leave:function(e,t){this.$emit("leave",{el:e,complete:t})},afterLeave:function(){this.$emit("afterLeave")}}}},function(e,t,n){"use strict";t.a={position:["top","right"],cssAnimation:"vn-fade",velocityAnimation:{enter:function(e){return{height:[e.clientHeight,0],opacity:[1,0]}},leave:{height:0,opacity:[0,1]}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),i=n.n(o),r=n(1),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.installed){this.installed=!0,this.params=t;var n=t.velocity;n&&i.a.configure({velocity:n}),e.component("notifications",i.a),e.prototype.$notify=function(e){"string"==typeof e&&(e={title:"",text:e}),"object"===(void 0===e?"undefined":a(e))&&r.a.$emit("add",e)}}}};t.default=s},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=[{name:"px",regexp:new RegExp("^[-+]?[0-9]*.?[0-9]+px$")},{name:"%",regexp:new RegExp("^[-+]?[0-9]*.?[0-9]+%$")},{name:"px",regexp:new RegExp("^[-+]?[0-9]*.?[0-9]+$")}],r=function(e){if("auto"===e)return{type:e,value:0};for(var t=0;t<i.length;t++){var n=i[t];if(n.regexp.test(e))return{type:n.name,value:parseFloat(e)}}return{type:"",value:e}},a=function(e){switch(void 0===e?"undefined":o(e)){case"number":return{type:"px",value:e};case"string":return r(e);default:return{type:"",value:e}}};t.a=a},function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return a});var o={x:["left","center","right"],y:["top","bottom"]},i=function(e){return function(){return e++}}(0),r=function(e){return"string"!=typeof e?[]:e.split(/\s+/gi).filter(function(e){return e})},a=function(e){"string"==typeof e&&(e=r(e));var t=null,n=null;return e.forEach(function(e){-1!==o.y.indexOf(e)&&(n=e),-1!==o.x.indexOf(e)&&(t=e)}),{x:t,y:n}}},function(e,t,n){t=e.exports=n(12)(),t.push([e.i,".notifications{display:block;position:fixed;z-index:5000}.notification-wrapper{display:block;overflow:hidden;width:100%;margin:0;padding:0}.notification{display:block;box-sizing:border-box;background:#fff;text-align:left}.notification-title{font-weight:600}.vue-notification{font-size:12px;padding:10px;margin:0 5px 5px;color:#fff;background:#44a4fc;border-left:5px solid #187fe7}.vue-notification.warn{background:#ffb648;border-left-color:#f48a06}.vue-notification.error{background:#e54d42;border-left-color:#b82e24}.vue-notification.success{background:#68cd86;border-left-color:#42a85f}.vn-fade-enter-active,.vn-fade-leave-active,.vn-fade-move{transition:all .5s}.vn-fade-enter,.vn-fade-leave-to{opacity:0}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){var o=n(0)(n(4),n(17),null,null);e.exports=o.exports},function(e,t,n){var o=n(0)(n(6),n(15),null,null);e.exports=o.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition-group",{attrs:{css:!1},on:{enter:e.enter,leave:e.leave,"after-leave":e.afterLeave}},[e._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"notifications",style:e.styles},[n(e.componentName,{tag:"component",attrs:{name:e.animationName},on:{enter:e.enter,leave:e.leave,"after-leave":e.clean}},e._l(e.list,function(t){return 2!=t.state?n("div",{key:t.id,staticClass:"notification-wrapper",style:e.nwStyle(t),attrs:{"data-id":t.id}},[e._t("body",[n("div",{class:e.nСlass(t),on:{click:function(n){e.destroy(t)}}},[t.title?n("div",{staticClass:"notification-title",domProps:{innerHTML:e._s(t.title)}}):e._e(),e._v(" "),n("div",{staticClass:"notification-content",domProps:{innerHTML:e._s(t.text)}})])],{item:t,close:function(){return e.destroy(t)}})],2):e._e()}))],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition-group",{attrs:{name:e.name}},[e._t("default")],2)},staticRenderFns:[]}},function(e,t,n){var o=n(11);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(19)("2901aeae",o,!0)},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=u[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(r(n.parts[i]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(r(n.parts[i]));u[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function r(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(m)return h;o.parentNode.removeChild(o)}if(v){var r=p++;o=d||(d=i()),t=a.bind(null,o,r,!1),n=a.bind(null,o,r,!0)}else o=i(),t=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function a(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function s(e,t){var n=t.css,o=t.media,i=t.sourceMap;if(o&&e.setAttribute("media",o),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(20),u={},f=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,m=!1,h=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){m=n;var i=l(e,t);return o(i),function(t){for(var n=[],r=0;r<i.length;r++){var a=i[r],s=u[a.id];s.refs--,n.push(s)}t?(i=l(e,t),o(i)):i=[];for(var r=0;r<n.length;r++){var s=n[r];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete u[s.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],o={},i=0;i<t.length;i++){var r=t[i],a=r[0],s=r[1],c=r[2],l=r[3],u={id:e+":"+i,css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}}])})},function(e,t){e.exports=VuejsDialog},function(e,t,n){n(6);var o=n(11)(n(12),n(15),null,null);e.exports=o.exports},function(e,t,n){var o=n(7);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(9)("50d6d991",o,!0)},function(e,t,n){t=e.exports=n(8)(),t.push([e.i,'/* reset */\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nbody {\n  margin: 0;\n  padding: 0;\n}\n/* header */\n.page-title {\n  border-bottom: 2px solid #0096D9;\n}\n.vue-notification {\n  padding: 10px;\n  margin: 15px;\n  font-size: 18px;\n  font-family: "Noto Sans", sans-serif;\n  color: #ffffff;\n  background: #44A4FC;\n  border-left: 5px solid #187FE7;\n}\n',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=u[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(r(n.parts[i]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(r(n.parts[i]));u[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function r(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(m)return h;o.parentNode.removeChild(o)}if(v){var r=p++;o=d||(d=i()),t=a.bind(null,o,r,!1),n=a.bind(null,o,r,!0)}else o=i(),t=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function a(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function s(e,t){var n=t.css,o=t.media,i=t.sourceMap;if(o&&e.setAttribute("media",o),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(10),u={},f=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,m=!1,h=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){m=n;var i=l(e,t);return o(i),function(t){for(var n=[],r=0;r<i.length;r++){var a=i[r],s=u[a.id];s.refs--,n.push(s)}t?(i=l(e,t),o(i)):i=[];for(var r=0;r<n.length;r++){var s=n[r];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete u[s.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],o={},i=0;i<t.length;i++){var r=t[i],a=r[0],s=r[1],c=r[2],l=r[3],u={id:e+":"+i,css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}},function(e,t){e.exports=function(e,t,n,o){var i,r=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,r=e.default);var s="function"==typeof r?r.options:r;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),o){var c=s.computed||(s.computed={});Object.keys(o).forEach(function(e){var t=o[e];c[e]=function(){return t}})}return{esModule:i,exports:r,options:s}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(13);t.default={data:function(){return{exitMessage:'\n<p style="text-align: center; margin: 0;">\n    <span style="font-weight: bold; font-size: large; color: lime">Thank You!</span>\n     <br/>\n     I hope you find it useful\n</p>',forms:{demo1:{name:null}}}},mounted:function(){console.log("mounted app")},methods:{submitDemo1Form:function(){var e="Form Submited. Your Name: ";e+=this.forms.demo1.name||"The name field is empty",this.$notify(e)},showAlertDialog:function(){this.$dialog.alert(Object(o.a)("messages.alert"))},showBasicDialog:function(){var e=this;this.$dialog.confirm(Object(o.a)("messages.basic")).then(function(){e.$notify({type:"success",text:Object(o.a)("messages.click_continue")})}).catch(function(){e.$notify({type:"success",text:Object(o.a)("messages.click_cancel")})})},showSoftConfirmDialog:function(){var e=this;this.$dialog.confirm(Object(o.a)("messages.soft"),{type:"soft"}).then(function(){e.$notify({type:"success",text:Object(o.a)("messages.click_continue")})}).catch(function(){e.$notify({type:"success",text:Object(o.a)("messages.click_cancel")})})},showHtmlDialog:function(){this.$dialog.alert(Object(o.a)("messages.html"),{html:!0,okText:"Dismiss"})},showAnimationBounceDialog:function(){this.$dialog.alert(Object(o.a)("messages.html"),{html:!0,animation:"bounce"})},showAnimationFadeDialog:function(){this.$dialog.alert(Object(o.a)("messages.html"),{html:!0,animation:"fade"})},showLoadingDialog:function(){var e=this;arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$dialog.confirm(Object(o.a)("messages.loading"),{html:!0,okText:"Proceed",loader:!0}).then(function(t){setTimeout(function(){e.$notify({type:"success",text:Object(o.a)("messages.loading_completed")}),t.close()},2500)}).catch(function(){e.$notify({text:Object(o.a)("messages.loading_canceled")})})},showReversedDialog:function(){var e=this;this.$dialog.confirm(Object(o.a)("messages.reverse"),{html:!0,okText:"Proceed",loader:!0,reverse:!0}).then(function(t){setTimeout(function(){e.$notify({type:"success",text:Object(o.a)("messages.loading_completed")}),t.close()},2500)}).catch(function(){e.$notify({text:Object(o.a)("messages.loading_canceled")})})},clickOkHandler:function(){this.$notify({type:"success",text:Object(o.a)("messages.click_continue")})},clickCancelHandler:function(){this.$notify({type:"error",text:Object(o.a)("messages.click_cancel")})}}}},function(e,t,n){"use strict";var o=n(14),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".",n=window.navigator.language||window.navigator.userLanguage;this.lang=void 0!==e[n]?n:"en",this.separator=t,this.translations=e};i.prototype.get=function(e){for(var t=e.split(this.separator),n=this.translations[this.lang],o=0;o<t.length;o++)if(void 0===(n=n[t[o]])){n="No Translation";break}return n};var r=new i({en:o.a});t.a=function(e){return r.get(e)}},function(e,t,n){"use strict";t.a={messages:{alert:"This is an alert dialog. Click the button below to close.",html:'This dialog has <b style="color: darkorange; border-bottom: 1px solid #2ba5ff">HTML</b> enabled. Click the button below to close.',basic:"This is a basic confirmation dialog. Clicking on either button dismisses the dialog instantly",soft:"This is a soft confirmation dialog. Multiple clicks required to proceed.",loading:"This is a loading dialog. The loader will start once you Click on Proceed button",reverse:"Left button is the Proceed button in this dialog. Click to have a feel of the reverse buttons",click_continue:"You clicked continue",click_cancel:"Closed because cancel was clicked",loading_completed:"If you see me, then the loader has completed",loading_canceled:"You clicked cancel, so there was no loading"}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"max-width":"350px",margin:"auto","font-family":"'Noto Sans', sans-serif","text-align":"center"}},[n("h1",{staticClass:"page-title"},[e._v("Vuejs-Dialog Plugin Examples")]),e._v(" "),n("section",[n("h2",[e._v("Usage as a method")]),e._v(" "),n("hr"),e._v(" "),n("h4",[n("button",{on:{click:function(t){e.showAlertDialog()}}},[e._v("Alert Dialog - one button")])]),e._v(" "),n("h4",[n("button",{on:{click:function(t){e.showHtmlDialog()}}},[e._v("Html Dialog - style/format content")])]),e._v(" "),n("h4",[n("button",{on:{click:function(t){e.showBasicDialog()}}},[e._v("Basic confirm - close instantly")])]),e._v(" "),n("h4",[n("button",{on:{click:function(t){e.showLoadingDialog()}}},[e._v("Loading Dialog - Useful with ajax")])]),e._v(" "),n("h4",[n("button",{on:{click:function(t){e.showReversedDialog()}}},[e._v("Reversed Dialog - switch buttons")])]),e._v(" "),n("h4",[n("button",{on:{click:function(t){e.showAnimationFadeDialog()}}},[e._v("Fade Dialog - Animation")])]),e._v(" "),n("h4",[n("button",{on:{click:function(t){e.showAnimationBounceDialog()}}},[e._v("Bounce Dialog - Animation")])])]),e._v(" "),n("section",[n("h2",[e._v("Usage as a directive")]),e._v(" "),n("hr"),e._v(" "),n("h4",[n("a",{directives:[{name:"confirm",rawName:"v-confirm",value:"This will take you to http://example.com. Proceed with caution",expression:"'This will take you to http://example.com. Proceed with caution'"}],attrs:{href:"http://example.com"}},[e._v("Go to example.com")])]),e._v(" "),n("h4",[n("button",{directives:[{name:"confirm",rawName:"v-confirm",value:"This is a message",expression:"`This is a message`"}]},[e._v('\n                Give it a string v-confirm="This is a message"\n            ')])]),e._v(" "),n("h4",[n("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{message:"This dialog was also triggered using a v-confirm directive. It has both OK and CANCEL callback",ok:e.clickOkHandler,cancel:e.clickCancelHandler},expression:"{\n            message: 'This dialog was also triggered using a v-confirm directive. It has both OK and CANCEL callback',\n             ok: clickOkHandler,\n             cancel: clickCancelHandler}"}]},[e._v('\n                Give it an object v-confirm="messageAndCallback"\n            ')])]),e._v(" "),n("h4",[n("form",{on:{submit:function(t){t.preventDefault(),e.submitDemo1Form()}}},[n("fieldset",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.forms.demo1.name,expression:"forms.demo1.name"}],attrs:{type:"text",name:"name",placeholder:"Your name"},domProps:{value:e.forms.demo1.name},on:{input:function(t){t.target.composing||(e.forms.demo1.name=t.target.value)}}}),e._v(" "),n("button",{directives:[{name:"confirm",rawName:"v-confirm",value:"Changes would be discarded. Reset this form?",expression:"'Changes would be discarded. Reset this form?'"}],attrs:{type:"reset"}},[e._v("Reset")]),e._v(" "),n("button",{directives:[{name:"confirm",rawName:"v-confirm",value:"Submit this form?",expression:"'Submit this form?'"}],attrs:{type:"submit"}},[e._v("submit")])])])])]),e._v(" "),n("section",[n("h2",[e._v("Confirmation types")]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("All dialogs used above are BASIC confirmation dialogs. There are more strict dialogs available.")]),e._v(" "),n("p",[e._v(" SOFT and HARD confirmation dialogs. Examples below:")]),e._v(" "),n("h4",[n("button",{on:{click:function(t){e.showSoftConfirmDialog()}}},[e._v("Soft confirm - multiple clicks required")])])]),e._v(" "),n("notifications",{attrs:{position:"bottom left"}}),e._v(" "),n("a",{directives:[{name:"confirm",rawName:"v-confirm:soft",value:{html:!0,message:e.exitMessage,cancelText:"Stay on Page",okText:"Source Code"},expression:"{html: true, message: exitMessage, cancelText: `Stay on Page`, okText: `Source Code`}",arg:"soft"}],attrs:{href:"https://github.com/godofbrowser/vuejs-dialog"}},[n("img",{staticStyle:{position:"absolute",top:"0",right:"0",border:"0"},attrs:{src:"https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67",alt:"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"}})])],1)},staticRenderFns:[]}},function(e,t){}]);