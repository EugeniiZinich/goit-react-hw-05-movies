"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[740],{7945:function(n,r,e){e.d(r,{Hg:function(){return s},Pg:function(){return p},qF:function(){return d},tx:function(){return x},yA:function(){return c},yO:function(){return f}});var t=e(5861),a=e(7757),u=e.n(a),o=e(2388),i="817d0625144161de217baa97c19455ca";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="https://image.tmdb.org/t/p/w500",s=function(){var n=(0,t.Z)(u().mark((function n(){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(i));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:i,language:"en-US",query:r,page:1,include_adult:!1}});case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(r,"/credits"),{params:{api_key:i,language:"en-US"}});case 2:return e=n.sent,t=e.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),x=function(){var n=(0,t.Z)(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(r,"/reviews"),{params:{api_key:i,language:"en-US",page:1}});case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results[0]);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},5740:function(n,r,e){e.r(r),e.d(r,{default:function(){return Z}});var t,a,u=e(5861),o=e(9439),i=e(7757),c=e.n(i),s=e(2791),p=e(1087),d=e(9014),f=e(168),x=e(6444),l=x.ZP.input(t||(t=(0,f.Z)(["\n  width: 250px;\n  outline: none;\n  border: 1.5px solid red;\n  border-radius: 20px;\n  margin-top: 25px;\n  margin-bottom: 25px;\n  margin-right: 15px;\n  padding: 10px;\n"]))),h=x.ZP.button(a||(a=(0,f.Z)(["\n  border: 20px;\n  color: black;\n  background-color: transparent;\n  text-decoration: none;\n  font-weight: 500;\n  cursor: pointer;\n  padding: 8px 16px;\n\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: red;\n    border-radius: 20px;\n  }\n"]))),v=e(184),m=function(n){var r=n.onChange,e=n.value,t=(0,s.useState)(""),a=(0,o.Z)(t,2),u=a[0],i=a[1];return(0,v.jsx)("div",{children:(0,v.jsxs)("form",{onSubmit:function(n){n.preventDefault(),r(u)},children:[(0,v.jsx)(l,{type:"text",name:"name",value:e,placeholder:'Enter correct film name. ex "SpiderMan"',onChange:function(n){return i(n.target.value)}}),(0,v.jsx)(h,{type:"submit",children:"SEARCH"})]})})},g=e(3291),b=e(7945),w=e(966),Z=function(){var n,r=(0,s.useState)({}),e=(0,o.Z)(r,2),t=e[0],a=e[1],i=(0,p.lr)(),f=(0,o.Z)(i,2),x=f[0],l=f[1],h=null!==(n=x.get("name"))&&void 0!==n?n:"",Z=(0,s.useState)(!1),k=(0,o.Z)(Z,2),y=k[0],j=k[1];(0,s.useEffect)((function(){if(""!==h){var n=function(){var n=(0,u.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),n.prev=1,n.next=4,(0,b.qF)(h);case 4:r=n.sent,a(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),d.ZP.error("Search is not working. Try again later");case 11:return n.prev=11,j(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}}),[h]);return(0,v.jsxs)("div",{children:[(0,v.jsx)(m,{onChange:function(n){n?l({name:n.toLowerCase().trim()}):d.ZP.error("Enter film name")}}),y&&(0,v.jsx)(w.Z,{}),t.length>0&&(0,v.jsx)(g.Z,{films:t}),(0,v.jsx)("div",{children:(0,v.jsx)(d.x7,{})})]})}},3291:function(n,r,e){e.d(r,{Z:function(){return h}});var t,a,u,o=e(7945),i=e(1087),c=e(7689),s=e(168),p=e(6444),d=p.ZP.ul(t||(t=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),f=p.ZP.li(a||(a=(0,s.Z)(["\n  flex-basis: calc((100% - 60px) / 4);\n  width: 100%;\n  border-radius: 5px;\n\n  &:hover,\n  &:focus {\n    box-shadow: 0px 0px 26px -1px rgba(59, 15, 232, 0.56);\n    -webkit-box-shadow: 0px 0px 26px -1px rgba(59, 15, 232, 0.56);\n    -moz-box-shadow: 0px 0px 26px -1px rgba(59, 15, 232, 0.56);\n  }\n"]))),x=p.ZP.img(u||(u=(0,s.Z)(["\n  width: 100%;\n  object-fit: cover;\n  border-radius: 5px;\n"]))),l=e(184),h=function(n){var r=n.films,e=(0,c.TH)();return(0,l.jsx)(d,{children:r.map((function(n){var r=n.poster_path,t=n.id,a=n.title;return(0,l.jsx)(f,{children:(0,l.jsxs)(i.rU,{to:"/movies/".concat(t),state:{from:e},children:[(0,l.jsx)(x,{src:o.yA+r,alt:a,loading:"lazy",width:250}),(0,l.jsx)("div",{children:(0,l.jsx)("p",{children:a})})]})},t)}))})}}}]);
//# sourceMappingURL=740.cee7c57d.chunk.js.map