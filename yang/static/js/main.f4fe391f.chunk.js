(this.webpackJsonpaggregator=this.webpackJsonpaggregator||[]).push([[0],{21:function(e,t,n){e.exports={loader:"Loader_loader__3MXRD",spin:"Loader_spin__35Z7G"}},22:function(e,t,n){e.exports={component:"Topbar_component__1EqBD"}},23:function(e,t,n){e.exports=n(48)},28:function(e,t,n){},29:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(20),s=n.n(c),o=(n(28),n(3)),u=n(4),i=n(9),l=n(8),d=n(7),p=(n(29),n(10)),h=n(1),f=n.n(h),w=n(5),m=n(6),v=n.n(m),b=function(){function e(){Object(o.a)(this,e),this.queries=[new O(200),new g("topstories",300),new g("askstories",200),new g("showstories",200),new j,new j("javascript"),new j("typescript"),new j("shell"),new j("go"),new j("css"),new j("html"),new j("c%23","c#"),new j("c%2B%2B","c++"),new E("stackoverflow"),new E("serverfault"),new E("superuser"),new E("webapps"),new E("askubuntu"),new E("unix"),new E("stats"),new E("opendata"),new E("chess"),new E("dsp"),new E("parenting"),new E("quant"),new x("r/appideas"),new x("r/bash"),new x("r/bashtricks"),new x("r/commandline"),new x("r/coolgithubprojects"),new x("r/cpp"),new x("r/csharp"),new x("r/css"),new x("r/dataisbeautiful"),new x("r/datascience"),new x("r/datasets"),new x("r/docker"),new x("r/dotnet"),new x("r/lightbulb"),new x("r/linux"),new x("r/mlpapers"),new x("r/node"),new x("r/programming"),new x("r/python"),new x("r/raspberry_pi"),new x("r/raspberry_pi_projects"),new x("r/reactjs"),new x("r/sideproject"),new x("r/somebodymakethis"),new x("r/startup_ideas"),new x("r/startups"),new x("r/typescript"),new x("r/vim"),new x("r/vscode")]}return Object(u.a)(e,[{key:"query",value:function(){var e=Object(w.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.allSettled(this.queries.map(function(){var e=Object(w.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.query();case 2:return n=e.sent,e.next=5,t.process(n);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}();function y(e,t,n,r,a,c){var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";return{source:e,title:t,link:n,author:r,score:a,date:c,miscellaneous:s}}function k(e){var t=e.reduce((function(e,t){return e+t}),0)/e.length,n=Math.sqrt(e.map((function(e){return Math.pow(e-t,2)})).reduce((function(e,t){return e+t}))/e.length);return[t,n]}var g=function(){function e(t,n){Object(o.a)(this,e),this.path=t,this.take=n}return Object(u.a)(e,[{key:"process",value:function(){var e=Object(w.a)(f.a.mark((function e(t){var n,r,a,c,s,o,u=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],t.data.forEach((function(e,t){t<u.take&&n.push(v.a.get("https://hacker-news.firebaseio.com/v0/item/".concat(e,".json")))})),e.next=4,Promise.all(n);case 4:return r=e.sent,a=k(r.map((function(e){return e.data.score}))),c=Object(p.a)(a,2),s=c[0],o=c[1],e.abrupt("return",r.map((function(e){var t;return y("hn/".concat(u.path),e.data.title,null!==(t=e.data.url)&&void 0!==t?t:"https://news.ycombinator.com/item?id=".concat(e.data.id),e.data.by,(e.data.score-s)/o,new Date(1e3*e.data.time),"<br/>score: ".concat(e.data.score))})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"query",value:function(){var e=Object(w.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://hacker-news.firebaseio.com/v0/".concat(this.path,".json"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),j=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(o.a)(this,e),this.language=t,this.prettyName=n}return Object(u.a)(e,[{key:"process",value:function(){var e=Object(w.a)(f.a.mark((function e(t){var n,r,a,c,s,o=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=k(t.data.map((function(e){return e.currentPeriodStars}))),r=Object(p.a)(n,2),a=r[0],c=r[1],(s=new Date).setHours(0,0,0,0),e.abrupt("return",t.data.map((function(e){var t,n;return y("gh/".concat(null!==(t=null!==(n=o.prettyName)&&void 0!==n?n:o.language)&&void 0!==t?t:""),e.name,e.url,e.author,(e.currentPeriodStars-a)/c,s,"<br/>language: ".concat(e.language,"<br/>description: ").concat(e.description,"<br/>score: ").concat(e.stars))})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"query",value:function(){var e=Object(w.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.language?v.a.get("https://ghapi.huchen.dev/repositories?since=daily&language=".concat(this.language)):v.a.get("https://ghapi.huchen.dev/repositories?since=daily");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),x=function(){function e(t){Object(o.a)(this,e),this.subreddit=t}return Object(u.a)(e,[{key:"process",value:function(){var e=Object(w.a)(f.a.mark((function e(t){var n,r,a,c,s=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=k(t.data.data.children.map((function(e){return e.data.ups-e.data.downs}))),r=Object(p.a)(n,2),a=r[0],c=r[1],e.abrupt("return",t.data.data.children.map((function(e){return y(s.subreddit,e.data.title,e.data.url,e.data.author,(e.data.ups-e.data.downs-a)/c,new Date(1e3*(e.data.created-28800)),"<br/>score: ".concat(e.data.ups-e.data.downs))})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"query",value:function(){var e=Object(w.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://www.reddit.com/".concat(this.subreddit,".json?limit=25"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),O=function(){function e(t){Object(o.a)(this,e),this.take=t}return Object(u.a)(e,[{key:"process",value:function(){var e=Object(w.a)(f.a.mark((function e(t){var n,r,a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=k(t.data.map((function(e){return e.public_reactions_count}))),r=Object(p.a)(n,2),a=r[0],c=r[1],e.abrupt("return",t.data.map((function(e){return y("devto",e.title,e.url,e.user.name,(e.public_reactions_count-a)/c,new Date(e.created_at),"<br/>tags: ".concat(e.tags,"<br/>description: ").concat(e.description,"<br/>score: ").concat(e.public_reactions_count))})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"query",value:function(){var e=Object(w.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://dev.to/api/articles?per_page=".concat(this.take));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),E=function(){function e(t){Object(o.a)(this,e),this.site=t}return Object(u.a)(e,[{key:"process",value:function(){var e=Object(w.a)(f.a.mark((function e(t){var n,r,a,c,s=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=k(t.data.items.map((function(e){return e.view_count}))),r=Object(p.a)(n,2),a=r[0],c=r[1],e.abrupt("return",t.data.items.map((function(e){return y("stack/".concat(s.site),e.title,e.link,e.owner.display_name,(e.view_count-a)/c,new Date(1e3*e.creation_date))})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"query",value:function(){var e=Object(w.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://api.stackexchange.com/2.2/questions?sort=hot&site=".concat(this.site));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),_=n(21),S=n.n(_),D=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:S.a.loader})}}]),n}(a.a.Component),I=n(22),N=n.n(I),T=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e={className:N.a.component,children:this.props.children};return a.a.createElement("div",e)}}]),n}(a.a.Component),q=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).onKeyDown=r.onKeyDown.bind(Object(i.a)(r)),r.onScroll=r.onScroll.bind(Object(i.a)(r)),r.scrollTo=r.scrollTo.bind(Object(i.a)(r)),r.resource=new b,r.increment=15,r.state={results:[],selectedIndex:-1},r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keydown",this.onKeyDown),document.addEventListener("scroll",this.onScroll),this.resource.query().then((function(t){var n=[];t.forEach((function(e){"fulfilled"===e.status&&(n=n.concat(e.value))}));e.setState({results:n.filter((function(e){return(new Date-e.date)/36e5<=48})).sort((function(e,t){return e.score<=t.score?1:-1})),selectedIndex:0})})).catch((function(e){return console.error(e)}))}},{key:"onKeyDown",value:function(e){var t=this;switch(e.key){case"s":this.setState((function(e){return{results:e.results.sort((function(e,t){return e.score<=t.score?1:-1})),selectedIndex:0}}),(function(){return t.scrollTo()}));break;case"d":this.setState((function(e){return{results:e.results.sort((function(e,t){return e.date<=t.date?1:-1})),selectedIndex:0}}),(function(){return t.scrollTo()}));break;case"r":this.setState((function(e){return{results:t.shuffle(e.results),selectedIndex:0}}),(function(){return t.scrollTo()}));break;case"i":this.setState({selectedIndex:0},(function(){return t.scrollTo()}));break;case"ArrowDown":case"j":this.setState((function(e){return{selectedIndex:Math.min(e.selectedIndex+1,e.results.length-1)}}),(function(){return t.scrollTo()}));break;case"ArrowUp":case"k":this.setState((function(e){return{selectedIndex:Math.max(0,e.selectedIndex-1)}}),(function(){return t.scrollTo()}));break;case"Enter":this.state.selectedIndex>-1&&window.open(this.state.results[this.state.selectedIndex].link)}}},{key:"onScroll",value:function(e){var t=this,n=document.body,r=document.documentElement,a=Math.max(n.scrollHeight,n.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight);window.scrollY>=a-window.innerHeight&&this.setState((function(e){return{selectedIndex:e.selectedIndex+t.increment}}))}},{key:"shuffle",value:function(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[n],e[n]=t;return e}},{key:"render",value:function(){var e=this,t={className:"".concat(0===this.state.results.length?"show":"hide")},n={className:"".concat(0===this.state.results.length?"hide":"show"),style:{position:"absolute",width:"100%"}},r={className:"main"},c={className:"topbarLayout"},s={className:"button",onClick:function(){return e.onKeyDown({key:"s"})}},o={className:"button",onClick:function(){return e.onKeyDown({key:"d"})}},u={className:"button",onClick:function(){return e.onKeyDown({key:"r"})}},i={children:a.a.createElement("div",c,a.a.createElement("button",s,"Score"),a.a.createElement("button",o,"Date"),a.a.createElement("button",u,"Random"))},l={className:"list"};return a.a.createElement("div",null,a.a.createElement("div",t,a.a.createElement(D,null)),a.a.createElement("div",n,a.a.createElement(T,i),a.a.createElement("div",r,a.a.createElement("ul",l,this.state.results.map((function(t,n){if(n<e.state.selectedIndex+e.increment){var r={key:n},c={className:"card ".concat(n===e.state.selectedIndex?"selected":""),onClick:function(){return window.open(t.link)}},s={className:"info wrapText",children:"".concat(n," of ").concat(e.state.results.length)},o={className:"source wrapText",children:"".concat(t.source,": ").concat(t.author)},u={className:"score wrapText",children:t.score.toLocaleString("en-US")},i={className:"date wrapText",children:"".concat(((new Date-t.date)/36e5).toLocaleString("en-US")," hours (").concat(t.date.toLocaleString("en-US"),")")},l={className:"text multiWrap",dangerouslySetInnerHTML:{__html:"".concat(t.title)}};return a.a.createElement("li",r,a.a.createElement("div",c,a.a.createElement("div",s),a.a.createElement("div",o),a.a.createElement("div",u),a.a.createElement("div",i),a.a.createElement("div",l)))}}))))))}},{key:"scrollTo",value:function(){window.scrollTo(0,Math.max(0,126*this.state.selectedIndex-200))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.f4fe391f.chunk.js.map