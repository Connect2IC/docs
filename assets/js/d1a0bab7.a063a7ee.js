"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7192],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},i="FAQ",c={unversionedId:"FAQ",id:"FAQ",title:"FAQ",description:"Can I create my own dialog?",source:"@site/docs/06-FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/docs/docs/FAQ",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06-FAQ.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Stores",permalink:"/docs/docs/Svelte/stores"}},l={},s=[{value:"Can I create my own dialog?",id:"can-i-create-my-own-dialog",level:2},{value:"I want to add support for my own provider",id:"i-want-to-add-support-for-my-own-provider",level:2},{value:"I dont want the canister calls to be authenticated",id:"i-dont-want-the-canister-calls-to-be-authenticated",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h2",{id:"can-i-create-my-own-dialog"},"Can I create my own dialog?"),(0,o.kt)("p",null,"Yes. It's recommended to check the ",(0,o.kt)("inlineCode",{parentName:"p"},"<ConnectDialog />")," source code to see how it's implemented. It uses a few hooks under the hood\nsuch as ",(0,o.kt)("inlineCode",{parentName:"p"},"useProviders")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useConnect")," that the library ships with. "),(0,o.kt)("h2",{id:"i-want-to-add-support-for-my-own-provider"},"I want to add support for my own provider"),(0,o.kt)("p",null,"See how the other providers are implemented and pass it in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { createClient } from "@connect2ic/core"\n\nconst client = createClient({\n  providers: [new MyProvider()]\n})\n')),(0,o.kt)("h2",{id:"i-dont-want-the-canister-calls-to-be-authenticated"},"I dont want the canister calls to be authenticated"),(0,o.kt)("p",null,"See the ",(0,o.kt)("inlineCode",{parentName:"p"},'{ mode: "anonymous" }')," option for the ",(0,o.kt)("inlineCode",{parentName:"p"},"useCanister")," hook"))}d.isMDXComponent=!0}}]);