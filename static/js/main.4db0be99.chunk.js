(this["webpackJsonpmerkle-drop"]=this["webpackJsonpmerkle-drop"]||[]).push([[0],{31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(13),i=n.n(s),a=n(8),r=n(9),o=n(11),l=n(10),d=n(14),j=n(3),u=n.p+"static/media/salty-spinner.d3cf30b2.gif",h=(n(31),n(1)),b=function(){return Object(h.jsx)("div",{className:"loader-container",children:Object(h.jsx)("img",{className:"loader-spinner",src:u,alt:""})})},m=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&this.pageDidChange()}},{key:"pageDidChange",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),n}(c.Component),p=Object(j.g)(m),O=n.p+"static/media/salty-plain.b3a5eff6.png",x=n(44),f=n(45),g=n(46),v=n(47),N={to:"https://balancer.exchange/#/swap/ether/0xfb5453340c03db5ade474b27e68b6a9c6b2823eb",title:"Buy"},y=[{to:"https://shop.metafactory.ai",title:"Shop"},{to:"https://gov.metafactory.ai/",title:"Forum"}],w=[{to:"https://discord.gg/syk4SWmUPu",title:"Discord"},{to:"https://twitter.com/MetaFactory",title:"Twitter"}],k=(n(37),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).onResize=function(){c.setState({isLarge:window.innerWidth>=992,isMedium:window.innerWidth>=768&&window.innerWidth<992,isSmall:window.innerWidth<768})},c.onToggleDrawer=function(){c.setState((function(e){return{isExpanded:!e.isExpanded}}))},c.onToggleAccordion=function(e){c.state.isItemOpen===e?c.setState({isItemOpen:null}):c.setState({isItemOpen:e})},c.getAccordion=function(e,t){var n=e[0].toUpperCase()+e.substring(1);return Object(h.jsxs)("div",{className:"accordion-container",children:[Object(h.jsxs)("div",{className:"accordion-toggle",onClick:function(){return c.onToggleAccordion(e)},children:[n,c.state.isItemOpen===e?Object(h.jsx)(x.a,{}):Object(h.jsx)(f.a,{})]}),Object(h.jsx)("div",{className:"accordion-menu ".concat(c.state.isItemOpen===e?"expanded":""),children:t.map((function(e,t){return Object(h.jsx)("a",{href:e.to,onClick:function(){c.setState({isExpanded:null,isItemOpen:null}),"Litepaper"===e.title&&window.open("http://saltandsatoshi.com/","_blank")},children:e.title},t)}))})]})},c.scrollTo=function(e){return Object(h.jsx)("div",{className:"menu-item",onClick:function(){var t;c.setState({isExpanded:null,isItemOpen:null}),null===(t=document.getElementById(e.to))||void 0===t||t.scrollIntoView({behavior:"smooth"})},children:e.title})},c.getLink=function(e){return Object(h.jsx)("a",{href:e.to,className:"menu-item",onClick:function(){c.setState({isExpanded:null,isItemOpen:null})},children:e.title})},c.state={isSmall:null,isMedium:null,isLarge:null,isExpanded:null,isItemOpen:null},c}return Object(r.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize),this.onResize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize())}},{key:"render",value:function(){var e=this,t=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"xs-nav-toggle",onClick:e.onToggleDrawer,children:e.state.isExpanded?Object(h.jsx)(v.a,{}):Object(h.jsx)(g.a,{})}),Object(h.jsxs)("div",{className:"xs-nav-menu ".concat(e.state.isExpanded?"expanded":""),children:[e.getLink(N),e.getAccordion("resources",y),e.getAccordion("social",w)]})]})},n=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"lg-nav-menu",children:[e.getLink(N),e.getAccordion("resources",y),e.getAccordion("social",w)]})})};return Object(h.jsx)("div",{className:"header-container",children:Object(h.jsxs)("div",{className:"header-content",children:[Object(h.jsxs)("a",{href:"https://metafactory.ai",className:"logo-container",children:[Object(h.jsx)("div",{className:"logo-img",children:Object(h.jsx)("img",{src:O,alt:"logo"})}),Object(h.jsx)("div",{className:"logo-title",children:"Salt&Satoshi"})]}),this.state.isSmall||this.state.isMedium?Object(h.jsx)(t,{}):Object(h.jsx)(n,{})]})})}}]),n}(c.Component)),S=[[n.p+"static/media/coingecko.4bc28e65.webp","coingecko","https://www.coingecko.com/en/coins/robot"]],C=n(24),E=n.n(C),I=(n(38),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"footer-bar",children:Object(h.jsxs)("div",{className:"footer-container",children:[Object(h.jsxs)("div",{className:"upper",children:[Object(h.jsxs)("div",{className:"navigation",children:[Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("div",{className:"header",children:"Applications"}),Object(h.jsx)("a",{href:"https://shop.metafactory.ai",children:"Shop"})]}),Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("div",{className:"header",children:"Social"}),Object(h.jsx)("a",{href:"https://discord.gg/syk4SWmUPu",children:"Discord"}),Object(h.jsx)("a",{href:"https://twitter.com/MetaFactory",children:"Twitter"})]}),Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("div",{className:"header",children:"Resources"}),Object(h.jsx)("a",{href:"https://gov.metafactory.ai/",children:"Forum"})]})]}),Object(h.jsxs)("div",{className:"media",children:[Object(h.jsx)("div",{className:"header",children:"Find us"}),Object(h.jsx)("div",{className:"items",children:S.map((function(e){return Object(h.jsx)("a",{href:e[2],target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("img",{src:e[0],alt:e[1]})},e[1])}))})]})]}),Object(h.jsxs)("div",{className:"bottom",children:[Object(h.jsx)("a",{href:"http://saltandsatoshi.com/",children:Object(h.jsx)("img",{src:O,alt:"",className:"logo"})}),Object(h.jsx)("div",{className:"footer-typer-container",children:Object(h.jsx)(E.a,{text:["Welcome"],cursorRenderer:function(e){return Object(h.jsx)("span",{className:"footer-typer-cursor",children:e})},displayTextRenderer:function(e,t){return Object(h.jsx)("div",{className:"footer-typer-text",children:e.split("").map((function(e,t){return Object(h.jsx)("span",{children:"_"!==e?e:Object(h.jsx)("span",{className:"typer-text-space"})},t)}))})}})})]})]})})}}]),n}(c.Component)),T=Object(c.lazy)((function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,492))})),F=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsx)(d.a,{children:Object(h.jsx)(c.Suspense,{fallback:Object(h.jsx)(b,{}),children:Object(h.jsxs)(p,{children:[Object(h.jsx)(k,{}),Object(h.jsxs)(j.d,{children:[Object(h.jsx)(j.b,{exact:!0,path:"/",component:T}),Object(h.jsx)(j.b,{path:"/404",render:function(){return window.location.replace("https://saltandsatoshi.com")}}),Object(h.jsx)(j.a,{to:"/404"})]}),Object(h.jsx)(I,{})]})})})}}]),n}(c.Component),L=n(22),z=function(e){var t=e.closeToast;return Object(h.jsx)(v.a,{size:20,onClick:t})},A=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(L.a,{position:"bottom-right",autoClose:3e3,closeButton:Object(h.jsx)(z,{}),pauseOnFocusLoss:!1,draggable:!0,draggablePercent:25}),Object(h.jsx)(F,{})]})}}]),n}(c.Component);n(39),n(40);i.a.render(Object(h.jsx)(A,{}),document.getElementById("root"))}},[[41,1,3]]]);
//# sourceMappingURL=main.4db0be99.chunk.js.map