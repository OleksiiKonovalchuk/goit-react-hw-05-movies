"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[433],{383:function(t,r,e){e.d(r,{Hg:function(){return s},M1:function(){return p},Pg:function(){return o},tx:function(){return f},z1:function(){return i}});var n=e(861),a=e(757),u=e.n(a),c=e(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"9403572a0ca29edc08cf527581f60a81"}}),s=function(){var t=(0,n.Z)(u().mark((function t(){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/trending/movie/day");case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/search/movie",{params:{query:r}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(r));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},11:function(t,r,e){e.r(r),e.d(r,{default:function(){return f}});var n=e(439),a=e(87),u=e(689),c=e(791),s=e(383),i={list:"Home_list__axoM8"},o=e(184),f=function(){var t=(0,c.useState)(),r=(0,n.Z)(t,2),e=r[0],f=r[1],p=(0,u.TH)();return(0,c.useEffect)((function(){(0,s.Hg)().then((function(t){var r=t.results;f(r.map((function(t){var r=t.id,e=t.title;return(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"movies/".concat(r),state:{from:p},children:e})},r)})))}))}),[p]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:i.title,children:"Trending today"}),(0,o.jsx)("ul",{className:i.list,children:e}),";"]})}}}]);
//# sourceMappingURL=433.3058d95c.chunk.js.map