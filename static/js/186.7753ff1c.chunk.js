"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{383:function(r,t,e){e.d(t,{Hg:function(){return s},M1:function(){return f},Pg:function(){return i},tx:function(){return p},z1:function(){return o}});var n=e(861),a=e(757),u=e.n(a),c=e(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"9403572a0ca29edc08cf527581f60a81"}}),s=function(){var r=(0,n.Z)(u().mark((function r(){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/trending/movie/day");case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/search/movie",{params:{query:t}});case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t));case 2:return e=r.sent,r.abrupt("return",e);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return e=r.sent,r.abrupt("return",e);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return e=r.sent,r.abrupt("return",e);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},186:function(r,t,e){e.r(t);var n=e(861),a=e(439),u=e(757),c=e.n(u),s=e(689),o=e(791),i=e(383),p=e(184);t.default=function(){var r=(0,s.UO)().movieId,t=(0,o.useState)([]),e=(0,a.Z)(t,2),u=e[0],f=e[1],v=u.map((function(r){var t=r.id,e=r.author,n=r.content;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h2",{children:["Author: ",e]}),(0,p.jsx)("p",{children:n})]},t)}));return(0,o.useEffect)((function(){var t=function(){var t=(0,n.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.tx)(r);case 3:e=t.sent,f(e.data.results),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),n=t.t0.response,console.log(n.data.message);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[r]),(0,p.jsx)("ul",{children:v})}}}]);
//# sourceMappingURL=186.7753ff1c.chunk.js.map