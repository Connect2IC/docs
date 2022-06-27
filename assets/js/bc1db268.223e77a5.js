"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8038],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||c;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const c={},a="Getting started",i={unversionedId:"React/quick_start_react",id:"React/quick_start_react",title:"Getting started",description:"Installation",source:"@site/docs/03-React/01-quick_start_react.md",sourceDirName:"03-React",slug:"/React/quick_start_react",permalink:"/docs/docs/React/quick_start_react",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-React/01-quick_start_react.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/docs/docs/category/react"},next:{title:"Provider",permalink:"/docs/docs/React/provider"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Wrap your app with the Provider",id:"wrap-your-app-with-the-provider",level:2},{value:"Place the components inside your app",id:"place-the-components-inside-your-app",level:2},{value:"Done",id:"done",level:2}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm i -S @connect2ic/core @connect2ic/react\n")),(0,o.kt)("h2",{id:"wrap-your-app-with-the-provider"},"Wrap your app with the Provider"),(0,o.kt)("p",null,"Optionally pass in canister definitions as well (as generated by dfx)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { defaultProviders } from "@connect2ic/core/providers"\nimport { createClient } from "@connect2ic/core"\nimport { Connect2ICProvider } from "@connect2ic/react"\nimport "@connect2ic/core/style.css"\nimport * as counter from "canisters/counter"\n\nconst client = createClient({\n  canisters: {\n    counter,\n  },\n  providers: defaultProviders,\n})\n\nconst AppRoot = () => (\n  <Connect2ICProvider client={client}>\n    <App />\n  </Connect2ICProvider>\n)\n\n')),(0,o.kt)("h2",{id:"place-the-components-inside-your-app"},"Place the components inside your app"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { ConnectButton, ConnectDialog, Connect2ICProvider, useConnect } from "@connect2ic/react"\n\nfunction App() {\n\n  const { isConnected, principal, activeProvider } = useConnect({\n    onConnect: () => {\n      // Signed in\n    },\n    onDisconnect: () => {\n      // Signed out\n    }\n  })\n\n  return (\n    <>\n      <ConnectButton />\n      <ConnectDialog dark={false} />\n    </>\n  )\n}\n\n')),(0,o.kt)("h2",{id:"done"},"Done"),(0,o.kt)("p",null,"Explore the remaining sections for further customization & features."))}u.isMDXComponent=!0}}]);