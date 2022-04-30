"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[348],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1677:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},u="Connect2IC",l={unversionedId:"intro",id:"version-0.8/intro",title:"Connect2IC",description:"We are happy to announce Connect2IC to Internet Computer(IC) community!",source:"@site/versioned_docs/version-0.8/01-intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/docs/0.8/intro",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.8/01-intro.md",tags:[],version:"0.8",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Quick Start",permalink:"/docs/docs/0.8/category/quick-start"}},p={},s=[{value:"Getting Started",id:"getting-started",level:2},{value:"Community",id:"community",level:2}],d={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connect2ic"},"Connect2IC"),(0,a.kt)("p",null,"We are happy to announce Connect2IC to Internet Computer(IC) community! "),(0,a.kt)("p",null,"Due to the fact that they act as the first entrance for the users to log into IC DApps, the DApp developers find it more and more difficult to integrate all of them in a short time.  There are many new wallets coming out and adding support for these isn't always easy. "),(0,a.kt)("p",null,"To solve such a dilemma, we launch the Connect2IC project. It is an open protocol to aggregate a few widely used identity and wallet service of IC, including ",(0,a.kt)("a",{parentName:"p",href:"https://identity.ic0.app/"},"Internet Identity"),", ",(0,a.kt)("a",{parentName:"p",href:"https://astrox.me"},"AstroX ME"),", ",(0,a.kt)("a",{parentName:"p",href:"https://plugwallet.ooo/"},"Plug"),", ",(0,a.kt)("a",{parentName:"p",href:"https://plugwallet.ooo/"},"Stoic Wallet"),", etc. Connect2IC allows you to get fully working for the most popular providers with only a few lines of code. It's totally a frontend tool and open sourced. The prestyled components can be customized by your own."),(0,a.kt)("p",null,"Github repo: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Connect2IC/connect2ic"},"https://github.com/Connect2IC/connect2ic")),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Currently the Connect2IC protocol is written in React for the frontends. Vue and Svelte will be supported soon as well."),(0,a.kt)("p",null,"To quickly start with your Dapp, go to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/0.8/quick_start/quick_start_rn"},"Quick Start"),"."),(0,a.kt)("p",null,"To read more about the Connect2IC protocol, go to ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/0.8/tech_spec"},"Technical Specification"),"."),(0,a.kt)("h2",{id:"community"},"Community"),(0,a.kt)("p",null,"Contribute, ask questions or communicate with the team members and other developers here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Discord: ",(0,a.kt)("a",{parentName:"li",href:"https://discord.gg/aaaaaaaa"},"https://discord.gg/aaaaaaaa"))))}f.isMDXComponent=!0}}]);