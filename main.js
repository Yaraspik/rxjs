(()=>{"use strict";var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)};function t(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}var r=function(){return r=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};function n(e,t,r,n){return new(r||(r=Promise))((function(o,i){function u(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,s)}c((n=n.apply(e,t||[])).next())}))}function o(e,t){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(u=0)),u;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return u.label++,{value:s[1],done:!1};case 5:u.label++,n=s[1],s=[0];continue;case 7:s=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){u=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){u.label=s[1];break}if(6===s[0]&&u.label<o[1]){u.label=o[1],o=s;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(s);break}o[2]&&u.ops.pop(),u.trys.pop();continue}s=t.call(e,u)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}Object.create;function i(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u}function s(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function c(e){return this instanceof c?(this.v=e,this):new c(e)}function a(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},u("next"),u("throw"),u("return"),n[Symbol.asyncIterator]=function(){return this},n;function u(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||s(e,t)}))})}function s(e,t){try{(r=o[e](t)).value instanceof c?Promise.resolve(r.value.v).then(a,l):f(i[0][2],r)}catch(e){f(i[0][3],e)}var r}function a(e){s("next",e)}function l(e){s("throw",e)}function f(e,t){e(t),i.shift(),i.length&&s(i[0][0],i[0][1])}}function l(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=i(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}Object.create;"function"==typeof SuppressedError&&SuppressedError;var f=function(e){return e&&"number"==typeof e.length&&"function"!=typeof e};function d(e){return"function"==typeof e}function h(e){return d(null==e?void 0:e.then)}function p(e){var t=e((function(e){Error.call(e),e.stack=(new Error).stack}));return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var v=p((function(e){return function(t){e(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(e,t){return t+1+") "+e.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t}}));function y(e,t){if(e){var r=e.indexOf(t);0<=r&&e.splice(r,1)}}var b=function(){function e(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}var t;return e.prototype.unsubscribe=function(){var e,t,r,n,o;if(!this.closed){this.closed=!0;var c=this._parentage;if(c)if(this._parentage=null,Array.isArray(c))try{for(var a=i(c),l=a.next();!l.done;l=a.next()){l.value.remove(this)}}catch(t){e={error:t}}finally{try{l&&!l.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}else c.remove(this);var f=this.initialTeardown;if(d(f))try{f()}catch(e){o=e instanceof v?e.errors:[e]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var p=i(h),y=p.next();!y.done;y=p.next()){var b=y.value;try{w(b)}catch(e){o=null!=o?o:[],e instanceof v?o=s(s([],u(o)),u(e.errors)):o.push(e)}}}catch(e){r={error:e}}finally{try{y&&!y.done&&(n=p.return)&&n.call(p)}finally{if(r)throw r.error}}}if(o)throw new v(o)}},e.prototype.add=function(t){var r;if(t&&t!==this)if(this.closed)w(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(r=this._finalizers)&&void 0!==r?r:[]).push(t)}},e.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},e.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},e.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&y(t,e)},e.prototype.remove=function(t){var r=this._finalizers;r&&y(r,t),t instanceof e&&t._removeParent(this)},e.EMPTY=((t=new e).closed=!0,t),e}();b.EMPTY;function m(e){return e instanceof b||e&&"closed"in e&&d(e.remove)&&d(e.add)&&d(e.unsubscribe)}function w(e){d(e)?e():e.unsubscribe()}var g={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},x={setTimeout:function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var o=x.delegate;return(null==o?void 0:o.setTimeout)?o.setTimeout.apply(o,s([e,t],u(r))):setTimeout.apply(void 0,s([e,t],u(r)))},clearTimeout:function(e){var t=x.delegate;return((null==t?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function S(e){x.setTimeout((function(){var t=g.onUnhandledError;if(!t)throw e;t(e)}))}function E(){}var _=T("C",void 0,void 0);function T(e,t,r){return{kind:e,value:t,error:r}}var P=null;var I=function(e){function r(t){var r=e.call(this)||this;return r.isStopped=!1,t?(r.destination=t,m(t)&&t.add(r)):r.destination=q,r}return t(r,e),r.create=function(e,t,r){return new j(e,t,r)},r.prototype.next=function(e){this.isStopped?k(function(e){return T("N",e,void 0)}(e),this):this._next(e)},r.prototype.error=function(e){this.isStopped?k(T("E",void 0,e),this):(this.isStopped=!0,this._error(e))},r.prototype.complete=function(){this.isStopped?k(_,this):(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},r.prototype._next=function(e){this.destination.next(e)},r.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},r.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},r}(b),O=Function.prototype.bind;function A(e,t){return O.call(e,t)}var L=function(){function e(e){this.partialObserver=e}return e.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(e){R(e)}},e.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(e){R(e)}else R(e)},e.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(e){R(e)}},e}(),j=function(e){function r(t,r,n){var o,i,u=e.call(this)||this;d(t)||!t?o={next:null!=t?t:void 0,error:null!=r?r:void 0,complete:null!=n?n:void 0}:u&&g.useDeprecatedNextContext?((i=Object.create(t)).unsubscribe=function(){return u.unsubscribe()},o={next:t.next&&A(t.next,i),error:t.error&&A(t.error,i),complete:t.complete&&A(t.complete,i)}):o=t;return u.destination=new L(o),u}return t(r,e),r}(I);function R(e){var t;g.useDeprecatedSynchronousErrorHandling?(t=e,g.useDeprecatedSynchronousErrorHandling&&P&&(P.errorThrown=!0,P.error=t)):S(e)}function k(e,t){var r=g.onStoppedNotification;r&&x.setTimeout((function(){return r(e,t)}))}var q={closed:!0,next:E,error:function(e){throw e},complete:E},D="function"==typeof Symbol&&Symbol.observable||"@@observable";function C(e){return e}function U(e){return 0===e.length?C:1===e.length?e[0]:function(t){return e.reduce((function(e,t){return t(e)}),t)}}var H=function(){function e(e){e&&(this._subscribe=e)}return e.prototype.lift=function(t){var r=new e;return r.source=this,r.operator=t,r},e.prototype.subscribe=function(e,t,r){var n,o=this,i=(n=e)&&n instanceof I||function(e){return e&&d(e.next)&&d(e.error)&&d(e.complete)}(n)&&m(n)?e:new j(e,t,r);return function(e){if(g.useDeprecatedSynchronousErrorHandling){var t=!P;if(t&&(P={errorThrown:!1,error:null}),e(),t){var r=P,n=r.errorThrown,o=r.error;if(P=null,n)throw o}}else e()}((function(){var e=o,t=e.operator,r=e.source;i.add(t?t.call(i,r):r?o._subscribe(i):o._trySubscribe(i))})),i},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},e.prototype.forEach=function(e,t){var r=this;return new(t=N(t))((function(t,n){var o=new j({next:function(t){try{e(t)}catch(e){n(e),o.unsubscribe()}},error:n,complete:t});r.subscribe(o)}))},e.prototype._subscribe=function(e){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(e)},e.prototype[D]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return U(e)(this)},e.prototype.toPromise=function(e){var t=this;return new(e=N(e))((function(e,r){var n;t.subscribe((function(e){return n=e}),(function(e){return r(e)}),(function(){return e(n)}))}))},e.create=function(t){return new e(t)},e}();function N(e){var t;return null!==(t=null!=e?e:g.Promise)&&void 0!==t?t:Promise}function M(e){return d(e[D])}function $(e){return Symbol.asyncIterator&&d(null==e?void 0:e[Symbol.asyncIterator])}function z(e){return new TypeError("You provided "+(null!==e&&"object"==typeof e?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}var F="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function B(e){return d(null==e?void 0:e[F])}function J(e){return a(this,arguments,(function(){var t,r,n;return o(this,(function(o){switch(o.label){case 0:t=e.getReader(),o.label=1;case 1:o.trys.push([1,,9,10]),o.label=2;case 2:return[4,c(t.read())];case 3:return r=o.sent(),n=r.value,r.done?[4,c(void 0)]:[3,5];case 4:return[2,o.sent()];case 5:return[4,c(n)];case 6:return[4,o.sent()];case 7:return o.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}}))}))}function X(e){return d(null==e?void 0:e.getReader)}function Y(e){if(e instanceof H)return e;if(null!=e){if(M(e))return o=e,new H((function(e){var t=o[D]();if(d(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(f(e))return n=e,new H((function(e){for(var t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()}));if(h(e))return r=e,new H((function(e){r.then((function(t){e.closed||(e.next(t),e.complete())}),(function(t){return e.error(t)})).then(null,S)}));if($(e))return G(e);if(B(e))return t=e,new H((function(e){var r,n;try{for(var o=i(t),u=o.next();!u.done;u=o.next()){var s=u.value;if(e.next(s),e.closed)return}}catch(e){r={error:e}}finally{try{u&&!u.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}e.complete()}));if(X(e))return G(J(e))}var t,r,n,o;throw z(e)}function G(e){return new H((function(t){(function(e,t){var r,i,u,s;return n(this,void 0,void 0,(function(){var n,c;return o(this,(function(o){switch(o.label){case 0:o.trys.push([0,5,6,11]),r=l(e),o.label=1;case 1:return[4,r.next()];case 2:if((i=o.sent()).done)return[3,4];if(n=i.value,t.next(n),t.closed)return[2];o.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return c=o.sent(),u={error:c},[3,11];case 6:return o.trys.push([6,,9,10]),i&&!i.done&&(s=r.return)?[4,s.call(r)]:[3,8];case 7:o.sent(),o.label=8;case 8:return[3,10];case 9:if(u)throw u.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}}))}))})(e,t).catch((function(e){return t.error(e)}))}))}function V(e){return function(t){if(function(e){return d(null==e?void 0:e.lift)}(t))return t.lift((function(t){try{return e(t,this)}catch(e){this.error(e)}}));throw new TypeError("Unable to lift unknown Observable type")}}function K(e,t,r,n,o){return new Q(e,t,r,n,o)}var Q=function(e){function r(t,r,n,o,i,u){var s=e.call(this,t)||this;return s.onFinalize=i,s.shouldUnsubscribe=u,s._next=r?function(e){try{r(e)}catch(e){t.error(e)}}:e.prototype._next,s._error=o?function(e){try{o(e)}catch(e){t.error(e)}finally{this.unsubscribe()}}:e.prototype._error,s._complete=n?function(){try{n()}catch(e){t.error(e)}finally{this.unsubscribe()}}:e.prototype._complete,s}return t(r,e),r.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;e.prototype.unsubscribe.call(this),!r&&(null===(t=this.onFinalize)||void 0===t||t.call(this))}},r}(I);function W(e,t){return V((function(r,n){var o=0;r.subscribe(K(n,(function(r){n.next(e.call(t,r,o++))})))}))}function Z(e,t,r,n,o){void 0===n&&(n=0),void 0===o&&(o=!1);var i=t.schedule((function(){r(),o?e.add(this.schedule(null,n)):this.unsubscribe()}),n);if(e.add(i),!o)return i}function ee(e,t,r){return void 0===r&&(r=1/0),d(t)?ee((function(r,n){return W((function(e,o){return t(r,e,n,o)}))(Y(e(r,n)))}),r):("number"==typeof t&&(r=t),V((function(t,n){return function(e,t,r,n,o,i,u,s){var c=[],a=0,l=0,f=!1,d=function(){!f||c.length||a||t.complete()},h=function(e){return a<n?p(e):c.push(e)},p=function(e){i&&t.next(e),a++;var s=!1;Y(r(e,l++)).subscribe(K(t,(function(e){null==o||o(e),i?h(e):t.next(e)}),(function(){s=!0}),void 0,(function(){if(s)try{a--;for(var e=function(){var e=c.shift();u?Z(t,u,(function(){return p(e)})):p(e)};c.length&&a<n;)e();d()}catch(e){t.error(e)}})))};return e.subscribe(K(t,h,(function(){f=!0,d()}))),function(){null==s||s()}}(t,n,e,r)})))}var te=Array.isArray;function re(e){return W((function(t){return function(e,t){return te(t)?e.apply(void 0,s([],u(t))):e(t)}(e,t)}))}var ne=["addListener","removeListener"],oe=["addEventListener","removeEventListener"],ie=["on","off"];function ue(e,t,r,n){if(d(r)&&(n=r,r=void 0),n)return ue(e,t,r).pipe(re(n));var o=u(function(e){return d(e.addEventListener)&&d(e.removeEventListener)}(e)?oe.map((function(n){return function(o){return e[n](t,o,r)}})):function(e){return d(e.addListener)&&d(e.removeListener)}(e)?ne.map(se(e,t)):function(e){return d(e.on)&&d(e.off)}(e)?ie.map(se(e,t)):[],2),i=o[0],s=o[1];if(!i&&f(e))return ee((function(e){return ue(e,t,r)}))(Y(e));if(!i)throw new TypeError("Invalid event target");return new H((function(e){var t=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.next(1<t.length?t:t[0])};return i(t),function(){return s(t)}}))}function se(e,t){return function(r){return function(n){return e[r](t,n)}}}function ce(e,t){return V((function(r,n){var o=null,i=0,u=!1,s=function(){return u&&!o&&n.complete()};r.subscribe(K(n,(function(r){null==o||o.unsubscribe();var u=0,c=i++;Y(e(r,c)).subscribe(o=K(n,(function(e){return n.next(t?t(r,e,c,u++):e)}),(function(){o=null,s()})))}),(function(){u=!0,s()})))}))}function ae(e){return V((function(t,r){var n,o=null,i=!1;o=t.subscribe(K(r,void 0,void 0,(function(u){n=Y(e(u,ae(e)(t))),o?(o.unsubscribe(),o=null,n.subscribe(r)):i=!0}))),i&&(o.unsubscribe(),o=null,n.subscribe(r))}))}function le(e){return e&&d(e.schedule)}function fe(e){return e[e.length-1]}function de(e,t){return void 0===t&&(t=0),V((function(r,n){r.subscribe(K(n,(function(r){return Z(n,e,(function(){return n.next(r)}),t)}),(function(){return Z(n,e,(function(){return n.complete()}),t)}),(function(r){return Z(n,e,(function(){return n.error(r)}),t)})))}))}function he(e,t){return void 0===t&&(t=0),V((function(r,n){n.add(e.schedule((function(){return r.subscribe(n)}),t))}))}function pe(e,t){if(!e)throw new Error("Iterable cannot be null");return new H((function(r){Z(r,t,(function(){var n=e[Symbol.asyncIterator]();Z(r,t,(function(){n.next().then((function(e){e.done?r.complete():r.next(e.value)}))}),0,!0)}))}))}function ve(e,t){if(null!=e){if(M(e))return function(e,t){return Y(e).pipe(he(t),de(t))}(e,t);if(f(e))return function(e,t){return new H((function(r){var n=0;return t.schedule((function(){n===e.length?r.complete():(r.next(e[n++]),r.closed||this.schedule())}))}))}(e,t);if(h(e))return function(e,t){return Y(e).pipe(he(t),de(t))}(e,t);if($(e))return pe(e,t);if(B(e))return function(e,t){return new H((function(r){var n;return Z(r,t,(function(){n=e[F](),Z(r,t,(function(){var e,t,o;try{t=(e=n.next()).value,o=e.done}catch(e){return void r.error(e)}o?r.complete():r.next(t)}),0,!0)})),function(){return d(null==n?void 0:n.return)&&n.return()}}))}(e,t);if(X(e))return function(e,t){return pe(J(e),t)}(e,t)}throw z(e)}function ye(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=function(e){return le(fe(e))?e.pop():void 0}(e);return function(e,t){return t?ve(e,t):Y(e)}(e,r)}var be=function(e){function r(t,r){return e.call(this)||this}return t(r,e),r.prototype.schedule=function(e,t){return void 0===t&&(t=0),this},r}(b),me={setInterval:function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var o=me.delegate;return(null==o?void 0:o.setInterval)?o.setInterval.apply(o,s([e,t],u(r))):setInterval.apply(void 0,s([e,t],u(r)))},clearInterval:function(e){var t=me.delegate;return((null==t?void 0:t.clearInterval)||clearInterval)(e)},delegate:void 0},we=function(e){function r(t,r){var n=e.call(this,t,r)||this;return n.scheduler=t,n.work=r,n.pending=!1,n}return t(r,e),r.prototype.schedule=function(e,t){var r;if(void 0===t&&(t=0),this.closed)return this;this.state=e;var n=this.id,o=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(o,n,t)),this.pending=!0,this.delay=t,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(o,this.id,t),this},r.prototype.requestAsyncId=function(e,t,r){return void 0===r&&(r=0),me.setInterval(e.flush.bind(e,this),r)},r.prototype.recycleAsyncId=function(e,t,r){if(void 0===r&&(r=0),null!=r&&this.delay===r&&!1===this.pending)return t;null!=t&&me.clearInterval(t)},r.prototype.execute=function(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(e,t);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},r.prototype._execute=function(e,t){var r,n=!1;try{this.work(e)}catch(e){n=!0,r=e||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),r},r.prototype.unsubscribe=function(){if(!this.closed){var t=this.id,r=this.scheduler,n=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,y(n,this),null!=t&&(this.id=this.recycleAsyncId(r,t,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},r}(be),ge={now:function(){return(ge.delegate||Date).now()},delegate:void 0},xe=function(){function e(t,r){void 0===r&&(r=e.now),this.schedulerActionCtor=t,this.now=r}return e.prototype.schedule=function(e,t,r){return void 0===t&&(t=0),new this.schedulerActionCtor(this,e).schedule(r,t)},e.now=ge.now,e}(),Se=new(function(e){function r(t,r){void 0===r&&(r=xe.now);var n=e.call(this,t,r)||this;return n.actions=[],n._active=!1,n}return t(r,e),r.prototype.flush=function(e){var t=this.actions;if(this._active)t.push(e);else{var r;this._active=!0;do{if(r=e.execute(e.state,e.delay))break}while(e=t.shift());if(this._active=!1,r){for(;e=t.shift();)e.unsubscribe();throw r}}},r}(xe))(we),Ee=Se;function _e(e,t,r){void 0===e&&(e=0),void 0===r&&(r=Ee);var n=-1;return null!=t&&(le(t)?r=t:n=t),new H((function(t){var o,i=(o=e)instanceof Date&&!isNaN(o)?+e-r.now():e;i<0&&(i=0);var u=0;return r.schedule((function(){t.closed||(t.next(u++),0<=n?this.schedule(void 0,n):t.complete())}),i)}))}function Te(e){switch(e.responseType){case"json":if("response"in e)return e.response;var t=e;return JSON.parse(t.responseText);case"document":return e.responseXML;default:return"response"in e?e.response:(t=e).responseText}}var Pe=function(e,t,r,n){void 0===n&&(n="download_load"),this.originalEvent=e,this.xhr=t,this.request=r,this.type=n;var o=t.status,i=t.responseType;this.status=null!=o?o:0,this.responseType=null!=i?i:"";var u=t.getAllResponseHeaders();this.responseHeaders=u?u.split("\n").reduce((function(e,t){var r=t.indexOf(": ");return e[t.slice(0,r)]=t.slice(r+2),e}),{}):{},this.response=Te(t);var s=e.loaded,c=e.total;this.loaded=s,this.total=c},Ie=p((function(e){return function(e,t,r){var n;this.message=e,this.name="AjaxError",this.xhr=t,this.request=r,this.status=t.status,this.responseType=t.responseType;try{n=Te(t)}catch(e){n=t.responseText}this.response=n}})),Oe=function(){function e(e,t){return Ie.call(this,"ajax timeout",e,t),this.name="AjaxTimeoutError",this}return e.prototype=Object.create(Ie.prototype),e}();function Ae(e,t){return Ue({method:"GET",url:e,headers:t})}function Le(e,t,r){return Ue({method:"POST",url:e,body:t,headers:r})}function je(e,t){return Ue({method:"DELETE",url:e,headers:t})}function Re(e,t,r){return Ue({method:"PUT",url:e,body:t,headers:r})}function ke(e,t,r){return Ue({method:"PATCH",url:e,body:t,headers:r})}var qe=W((function(e){return e.response}));function De(e,t){return qe(Ue({method:"GET",url:e,headers:t}))}var Ce,Ue=(Ce=function(e){var t;return t="string"==typeof e?{url:e}:e,new H((function(e){var n,o,i,u=r({async:!0,crossDomain:!1,withCredentials:!1,method:"GET",timeout:0,responseType:"json"},t),s=u.queryParams,c=u.body,a=u.headers,l=u.url;if(!l)throw new TypeError("url is required");if(s)if(l.includes("?")){var f=l.split("?");if(2<f.length)throw new TypeError("invalid url");i=new URLSearchParams(f[1]),new URLSearchParams(s).forEach((function(e,t){return i.set(t,e)})),l=f[0]+"?"+i}else l=l+"?"+(i=new URLSearchParams(s));var d={};if(a)for(var h in a)a.hasOwnProperty(h)&&(d[h.toLowerCase()]=a[h]);var p=u.crossDomain;p||"x-requested-with"in d||(d["x-requested-with"]="XMLHttpRequest");var v=u.withCredentials,y=u.xsrfCookieName,b=u.xsrfHeaderName;if((v||!p)&&y&&b){var m=null!==(o=null===(n=null===document||void 0===document?void 0:document.cookie.match(new RegExp("(^|;\\s*)("+y+")=([^;]*)")))||void 0===n?void 0:n.pop())&&void 0!==o?o:"";m&&(d[b]=m)}var w,g=function(e,t){var r;if(!e||"string"==typeof e||function(e){return"undefined"!=typeof FormData&&e instanceof FormData}(e)||function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}(e)||function(e){return Be(e,"ArrayBuffer")}(e)||function(e){return Be(e,"File")}(e)||function(e){return Be(e,"Blob")}(e)||function(e){return"undefined"!=typeof ReadableStream&&e instanceof ReadableStream}(e))return e;if(function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView(e)}(e))return e.buffer;if("object"==typeof e)return t["content-type"]=null!==(r=t["content-type"])&&void 0!==r?r:"application/json;charset=utf-8",JSON.stringify(e);throw new TypeError("Unknown body type")}(c,d),x=r(r({},u),{url:l,headers:d,body:g});w=t.createXHR?t.createXHR():new XMLHttpRequest;var S=t.progressSubscriber,E=t.includeDownloadProgress,_=void 0!==E&&E,T=t.includeUploadProgress,P=void 0!==T&&T,I=function(t,r){w.addEventListener(t,(function(){var t,n=r();null===(t=null==S?void 0:S.error)||void 0===t||t.call(S,n),e.error(n)}))};I("timeout",(function(){return new Oe(w,x)})),I("abort",(function(){return new Ie("aborted",w,x)}));var O=function(e,t){return new Pe(t,w,x,e+"_"+t.type)},A=function(t,r,n){t.addEventListener(r,(function(t){e.next(O(n,t))}))};P&&[Me,$e,ze].forEach((function(e){return A(w.upload,e,He)})),S&&[Me,$e].forEach((function(e){return w.upload.addEventListener(e,(function(e){var t;return null===(t=null==S?void 0:S.next)||void 0===t?void 0:t.call(S,e)}))})),_&&[Me,$e].forEach((function(e){return A(w,e,Ne)}));var L=function(t){var r="ajax error"+(t?" "+t:"");e.error(new Ie(r,w,x))};w.addEventListener("error",(function(e){var t;null===(t=null==S?void 0:S.error)||void 0===t||t.call(S,e),L()})),w.addEventListener(ze,(function(t){var r,n,o=w.status;if(o<400){null===(r=null==S?void 0:S.complete)||void 0===r||r.call(S);var i=void 0;try{i=O(Ne,t)}catch(t){return void e.error(t)}e.next(i),e.complete()}else null===(n=null==S?void 0:S.error)||void 0===n||n.call(S,t),L(o)}));var j=x.user,R=x.method,k=x.async;for(var h in j?w.open(R,l,k,j,x.password):w.open(R,l,k),k&&(w.timeout=x.timeout,w.responseType=x.responseType),"withCredentials"in w&&(w.withCredentials=x.withCredentials),d)d.hasOwnProperty(h)&&w.setRequestHeader(h,d[h]);return g?w.send(g):w.send(),function(){w&&4!==w.readyState&&w.abort()}}))},Ce.get=Ae,Ce.post=Le,Ce.delete=je,Ce.put=Re,Ce.patch=ke,Ce.getJSON=De,Ce),He="upload",Ne="download",Me="loadstart",$e="progress",ze="load";var Fe=Object.prototype.toString;function Be(e,t){return Fe.call(e)==="[object "+t+"]"}class Je{static createDate(e){const t=new Date(e);let r=t.getHours(),n=t.getMinutes(),o=t.getDate(),i=t.getMonth()+1;return r=r<10?`0${r}`:r,n=n<10?`0${n}`:n,o=o<10?`0${o}`:o,i=i<10?`0${i}`:i,`${r}:${n} ${o}.${i}.${t.getFullYear()}`}static createMessages(e){e.messages.forEach((e=>{const t=document.querySelector(".messages"),r=Je.createMessage(e);t.append(r)}))}static createMessage(e){const{subject:t,from:r,id:n,received:o}=e,i=document.createElement("div");i.classList.add("message__container"),i.dataset.id=n;const u=document.createElement("div");u.classList.add("message__sender"),u.textContent=r;const s=document.createElement("div");s.classList.add("date");const c=Je.createDate(o);s.textContent=c;const a=document.createElement("div");return a.classList.add("message__body"),a.textContent=t,i.append(u,a,s),i}}const Xe=document.getElementById("root");new class{constructor(e){this.url="https://rxjs-0pcd.onrender.com/messages/unread",this.container=e,this.messages=e.querySelector(".messages"),this.btnSubscribe=this.container.querySelector(".btn-subscribe"),this.btnUnsubscribe=this.container.querySelector(".btn-unsubscribe")}init(){this.unsub$=ue(this.btnUnsubscribe,"click"),ue(this.btnSubscribe,"click").pipe(ce((()=>this.getIntervalRequest()))).subscribe((e=>{"ok"===e.status&&Je.createMessages(e)}))}getRequest(){return Ue.getJSON(this.url).pipe(ae((e=>ye({status:"no messages",messages:"[{}]",timestamp:Date.now(),err:e}))),W((e=>{const t=e,{messages:r}=t;return t.messages=JSON.parse(r),t})))}getIntervalRequest(){return(t=2e3,void 0===t&&(t=0),void 0===r&&(r=Se),t<0&&(t=0),_e(t,t,r)).pipe(ce((()=>this.getRequest())),(e=this.unsub$,V((function(t,r){Y(e).subscribe(K(r,(function(){return r.complete()}),E)),!r.closed&&t.subscribe(r)}))));var e,t,r}}(Xe).init()})();
//# sourceMappingURL=main.js.map