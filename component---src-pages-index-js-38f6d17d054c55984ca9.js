(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var o=n("vOnD"),a=n("q1tI"),r=n.n(a),i=n("qhky"),c=n("lD3z"),l=n.n(c),m=n("xecp"),u=n("uN9E");function d(e){return r.a.createElement(u.a,{currentPage:e.path},r.a.createElement(s,null,r.a.createElement(i.a,null,r.a.createElement("title",null,"Home | PsychoLlama")),r.a.createElement(g,null,r.a.createElement(p,null),r.a.createElement(f,null,r.a.createElement(h,null,"Jesse Gibson"),r.a.createElement(b,null,r.a.createElement(y,{href:"https://github.com/PsychoLlama"},"PsychoLlama")," ","on GitHub"),r.a.createElement(b,null,"Software Engineer in Portland, Oregon")))))}var s=o.b.main.withConfig({displayName:"pages__Container",componentId:"kzw1ig-0"})(["flex-grow:1;display:flex;"]),g=o.b.section.withConfig({displayName:"pages__Content",componentId:"kzw1ig-1"})(["padding:0.5rem;display:flex;flex-grow:1;"]),p=o.b.div.attrs({role:"presentation","aria-hidden":!0}).withConfig({displayName:"pages__VimSidebar",componentId:"kzw1ig-2"})(["display:flex;color:",";margin-right:1rem;background-image:url('","');background-repeat:repeat-y;width:1rem;@media screen and (max-width:640px){display:none;}"],(function(e){return e.theme.colors.blue}),l.a),f=o.b.div.withConfig({displayName:"pages__Hero",componentId:"kzw1ig-3"})(["display:flex;align-items:center;justify-content:center;flex-grow:1;text-align:center;flex-direction:column;font-size:20px;line-height:2rem;"]),b=o.b.p.withConfig({displayName:"pages__IntroductionLineItem",componentId:"kzw1ig-4"})(["margin:0;"]),h=Object(o.b)(b).withConfig({displayName:"pages__MyName",componentId:"kzw1ig-5"})(["margin-bottom:2rem;"]),y=Object(o.b)(m.a).withConfig({displayName:"pages__TaggedLink",componentId:"kzw1ig-6"})(["color:",";text-decoration:none;::before{content:'<';}::after{content:'>';}:hover,:focus{text-decoration:underline;}"],(function(e){return e.theme.colors.blue}))},lD3z:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMS4yZW0iIHZpZXdCb3g9IjAgMCAxcmVtIDFyZW0iPgogIDx0ZXh0IHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iIzYxYWZlZiI+fjwvdGV4dD4KPC9zdmc+Cg=="},uN9E:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("q1tI"),a=n.n(o),r=n("vOnD"),i=n("Wbzz");function c(e){var t=e.children,n=e.currentPage,r=[{name:"Home",target:"/"},{name:"About",target:"/about/"}],c=Object(o.useRef)([]),f=Object(o.useCallback)((function(e){var t=l(e);"ctrl+b"===t&&(c.current=[]),c.current=c.current.slice(-1).concat(t);var n=c.current[0],o=isNaN(c.current[1])?1/0:Number(c.current[1])-1;return"ctrl+b"===n&&o<r.length&&Object(i.c)(r[o].target),i.c}),[]);return Object(o.useEffect)((function(){return document.body.addEventListener("keydown",f),function(){document.body.removeEventListener("keydown",f)}}),[]),a.a.createElement(m,null,t,a.a.createElement(u,null,a.a.createElement(g,null,"PsychoLlama"),a.a.createElement(d,null,r.map((function(e,t){return a.a.createElement(s,{key:t,"data-active":n===e.target},a.a.createElement(p,{to:e.target},e.name))})))))}var l=function(e){return[e.ctrlKey&&"ctrl",e.altKey&&"alt",e.metaKey&&"cmd",e.key].filter(Boolean).join("+")},m=r.b.div.withConfig({displayName:"TmuxShell__Container",componentId:"jocbtk-0"})(["min-height:100vh;display:flex;flex-direction:column;justify-content:space-between;color:",";font-size:16px;"],(function(e){return e.theme.colors.text})),u=r.b.nav.withConfig({displayName:"TmuxShell__Navigation",componentId:"jocbtk-1"})(["padding:0.5rem;color:",";display:flex;position:sticky;bottom:0;background-color:",";"],(function(e){return e.theme.colors.green}),(function(e){return e.theme.colors.background})),d=r.b.ul.withConfig({displayName:"TmuxShell__Links",componentId:"jocbtk-2"})(["padding:0;margin:0;list-style-type:none;display:flex;counter-set:nav-link 0;"]),s=r.b.li.withConfig({displayName:"TmuxShell__NavItem",componentId:"jocbtk-3"})(["margin:0 1ch;::first-child{margin-left:0;}::before{content:counter(nav-link) ':';counter-increment:nav-link;}&[data-active='true']{margin-right:0;::after{content:'*';}}"]),g=Object(r.b)(s).attrs({as:"p"}).withConfig({displayName:"TmuxShell__SiteName",componentId:"jocbtk-4"})(["margin:0;::before{content:'[';}::after{content:']';}@media screen and (max-width:640px){display:none;}"]),p=Object(r.b)(i.a).withConfig({displayName:"TmuxShell__NavLink",componentId:"jocbtk-5"})(["cursor:pointer;border-bottom:1px solid transparent;color:inherit;text-decoration:none;:hover,:focus{color:",";border-bottom-color:",";}"],(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text}))},xecp:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("q1tI"),a=n.n(o);function r(e){var t=e.rel,n=void 0===t?"":t;return a.a.createElement("a",Object.assign({},e,{rel:"noreferrer noopener "+n}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-38f6d17d054c55984ca9.js.map