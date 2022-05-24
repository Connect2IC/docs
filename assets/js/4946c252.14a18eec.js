"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4712],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,v=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return t?n.createElement(v,c(c({ref:r},l),{},{components:t})):n.createElement(v,c({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7109:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),c=["components"],a={},s="Provider",p={unversionedId:"Svelte/provider",id:"Svelte/provider",title:"Provider",description:"Connect2ICProvider",source:"@site/docs/05-Svelte/02-provider.md",sourceDirName:"05-Svelte",slug:"/Svelte/provider",permalink:"/docs/docs/Svelte/provider",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-Svelte/02-provider.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/docs/Svelte/quick_start_svelte"},next:{title:"Components",permalink:"/docs/docs/Svelte/components"}},l={},u=[{value:"Connect2ICProvider",id:"connect2icprovider",level:2},{value:"Usage",id:"usage",level:3}],d={toc:u};function f(e){var r=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"provider"},"Provider"),(0,i.kt)("h2",{id:"connect2icprovider"},"Connect2ICProvider"),(0,i.kt)("p",null,"The top-level provider"),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script>\n  import { PlugWallet } from "@connect2ic/core/providers/plug-wallet"\n  import { AstroX } from "@connect2ic/core/providers/astrox"\n  import { Connect2ICProvider } from "@connect2ic/svelte"\n  import * as myCanister from "canisters/my-canister"\n  // List of providers\n  const providers = [\n    // Either import them from @connect2ic/core\n    AstroX,\n    PlugWallet,\n    // or create your own (check the existing ones to see how they\'re implemented)\n  ]\n\n  // Map of canister definitions as generated by dfx\n  // It requires the canisterId & idlFactory\n  const canisterDefinitions = {\n    myCanister\n  }\n\n  // url string\n  const host = window.location.origin\n<\/script>\n\n\x3c!-- Wrap your whole App with the Provider --\x3e\n<Connect2ICProvider\n  canisters={canisterDefinitions}\n  providers={providers}\n  host={host}\n>\n  <App />\n</Connect2ICProvider>\n')))}f.isMDXComponent=!0}}]);