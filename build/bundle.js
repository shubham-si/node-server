!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=new(function(){function e(){console.log("logmanager")}return e.prototype.log=function(t,n){n==e.LEVEL_1||n==e.LEVEL_2&&this.logging(t)},e.prototype.logging=function(e){new r.Ajax("http://localhost:8080/logging",e,"POST").callService().then((function(e){console.log("res")}),(function(e){console.log("logging error")}))},e.LEVEL_1=1,e.LEVEL_2=2,e.LEVEL_INFO=0,e}());t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t,n){this.method=n,this.url=e,this.data=t,this.objHttpReq=new XMLHttpRequest}return e.prototype.callService=function(){var e=this,t=new o;return this.objHttpReq.open(this.method,this.url),this.objHttpReq.onreadystatechange=function(){return e.OnReadyStateChange(t)},this.objHttpReq.ontimeout=function(){return e.OnRequestTimeout(t)},this.objHttpReq.setRequestHeader("X-Requested-With","XMLHttpRequest"),this.objHttpReq.setRequestHeader("Content-Type","application/json"),this.objHttpReq.timeout=2e3,null==this.data?this.objHttpReq.send():this.objHttpReq.send(JSON.stringify(this.data)),t.promise},e.prototype.OnRequestTimeout=function(e){e.resolve({timeout:this.data.providerID})},e.prototype.OnReadyStateChange=function(e){4==this.objHttpReq.readyState&&200==this.objHttpReq.status&&(this.responseText=this.objHttpReq.responseText,0==this.responseText.length||null==this.responseText?e.resolve("undefined"):e.resolve(JSON.parse(this.responseText)))},e}();t.Ajax=r;var o=function(){function e(){var e=this;this._promise=new Promise((function(t,n){e._reject=n,e._resolve=t}))}return Object.defineProperty(e.prototype,"promise",{get:function(){return this._promise},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"resolve",{get:function(){return this._resolve},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"reject",{get:function(){return this._reject},enumerable:!0,configurable:!0}),e}();t.Deferred=o},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(3)),i=r(n(0));(new(r(n(4)).default)).makeRequestToProviders().then((function(e){var t=(new o.default).conductAuction(e);i.default.log(t,2),function(e){Object.keys(e).forEach((function(t,n){Object.keys(e[t]).forEach((function(r,o){if(e[t][r].length>0){var i=document.getElementById("iframe_"+(n+1)).contentWindow.document;i.open(),i.write(e[t][r][0].adcode),console.log(e[t][r][0].adcode),i.close()}}))}))}(t)}),(function(e){e.send("OK error")}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.prototype.conductAuction=function(e){var t={};return e.map((function(e){Object.keys(e).forEach((function(n,r){var o=t[n]||{};e[n].forEach((function(e,t){Object.keys(e).forEach((function(t){o[t]=o[t]||[],o[t].push(e[t])}))})),t[n]=o}))})),Object.keys(t).forEach((function(e){Object.keys(t[e]).forEach((function(n){var r=t[e][n];r.sort((function(e,t){return-1*(e.bidprice-t.bidprice)})),t[e][n]=r}))})),t},e}();t.default=r},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,c)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=i(n(5)),c=i(n(0)),s=n(1),a=[];console.log(a.length);var f=function(){function e(){}return e.prototype.makeRequestToProviders=function(){return r(this,void 0,void 0,(function(){var e;return o(this,(function(t){return a=[],u.default.each(l),e=new s.Deferred,Promise.all(a.map((function(e,t){return new Promise((function(t,n){try{new s.Ajax(e.url,e.data,e.method).callService().then((function(e){t(e)}))}catch(e){n(e)}}))}))).then((function(t){e.resolve(t)})),[2,e.promise]}))}))},e}();t.default=f;var l=function(e,t){e.providers.each((function(t,n){!function(e,t){var n="http://localhost:3000/provider/";t.id.startsWith("AMZP")?n+="amazon":t.id.startsWith("APPNXP")?n+="appnexus":t.id.startsWith("OPNXP")&&(n+="openx");var r=function(e,t,n,r){return{url:n,data:{bidFloorPrice:t.bidprice,providerID:t.id,adPlacementID:e.id,epc:t.epc,ecc:t.ecc,sizes:e.size},method:r}}(e,t,n,"POST");c.default.log(r.data,1),a.push(r)}(e,t)}))}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(6)),i=n(7),u=n(8);t.adSlotConfig=o.default.adslots,t.providersConfig=o.default.providers,t.providersMap=o.default.providersmap;var c=new u.PlacementRepo;Object.keys(t.adSlotConfig).forEach((function(e){var n=t.providersMap[e],r=new u.PlacementProviderConfigRepo;Object.keys(n).forEach((function(e){r.add(n[e])}));var o=t.adSlotConfig[e];o.providers=r,c.add(new i.Placement(o))})),t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={adslots:{123:{id:123,size:"300,200",adslotname:"top",providersid:"AMZP002,APPNXP003"},124:{id:124,size:"300,200",adslotname:"rec",providersid:"OPNXP004"}},providers:{AMZP002:{id:"AMZP002",providername:"Amazon"},APPNXP003:{id:"APPNXP003",providername:"Appnexus"},OPNXP004:{id:"OPNXP004",providername:"Openx"}},providersmap:{123:{AMZP002:{id:"AMZP002",revshare:4,epc:321,bidprice:3,ecc:"AMZ_FRB002"},APPNXP003:{id:"APPNXP003",revshare:5,epc:321,bidprice:3,ecc:"APNX_FRB003"}},124:{OPNXP004:{id:"OPNXP004",revshare:4,epc:421,bidprice:3,ecc:"OPNX_FRB002"}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){this.properties=e}return Object.defineProperty(e.prototype,"id",{get:function(){return this.properties.id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this.properties.size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"adslotname",{get:function(){return this.properties.adslotname},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"providers",{get:function(){return this.properties.providers},enumerable:!0,configurable:!0}),e}();t.Placement=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.placementList=new Array}return e.prototype.add=function(e){return this.placementList.push(e),this},e.prototype.remove=function(e){return this.placementList.remove(e),this},e.prototype.find=function(e){var t;if("number"==typeof e)t=this.placementList.filter((function(e){e.id}));else{if("string"!=typeof e)return null;t=this.placementList.filter((function(e){e.id}))}return 0==t.length?null:t},e.prototype.each=function(e){this.placementList.forEach(e)},e}();t.PlacementProviderConfigRepo=r;var o=function(){function e(){this.placementList=new Array}return e.prototype.add=function(e){return this.placementList.push(e),this},e.prototype.remove=function(e){return this.placementList.remove(e),this},e.prototype.find=function(e){var t;if("number"==typeof e)t=this.placementList.filter((function(e){e.properties.id}));else{if("string"!=typeof e)return null;t=this.placementList.filter((function(e){e.properties.id}))}return 0==t.length?null:t},e.prototype.each=function(e){this.placementList.forEach(e)},e}();t.PlacementRepo=o}]);