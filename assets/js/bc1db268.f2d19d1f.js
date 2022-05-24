"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8038],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2338:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={},s="Getting started",u={unversionedId:"React/quick_start_react",id:"React/quick_start_react",title:"Getting started",description:"Installation",source:"@site/docs/03-React/01-quick_start_react.md",sourceDirName:"03-React",slug:"/React/quick_start_react",permalink:"/docs/docs/React/quick_start_react",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-React/01-quick_start_react.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/docs/docs/category/react"},next:{title:"Provider",permalink:"/docs/docs/React/provider"}},p={},l=[{value:"Installation",id:"installation",level:2},{value:"Wrap your app with the Provider",id:"wrap-your-app-with-the-provider",level:2},{value:"Place the components inside your app",id:"place-the-components-inside-your-app",level:2},{value:"Done. Now customize it",id:"done-now-customize-it",level:2}],d={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm i -S @connect2ic/core @connect2ic/react\n")),(0,i.kt)("h2",{id:"wrap-your-app-with-the-provider"},"Wrap your app with the Provider"),(0,i.kt)("p",null,"Optionally pass in canister definitions as well (as generated by dfx)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { defaultProviders } from "@connect2ic/core/providers"\nimport { Connect2ICProvider } from "@connect2ic/react"\n// Styles for the ConnectDialog & Button\nimport "@connect2ic/core/style.css"\n// optional: canister definitions generated by dfx\nimport * as counter from "canisters/counter"\n\nconst AppRoot = () => (\n  <Connect2ICProvider\n    canisters={{\n      counter,\n    }}\n    providers={defaultProviders}\n  >\n    <App />\n  </Connect2ICProvider>\n)\n\n')),(0,i.kt)("h2",{id:"place-the-components-inside-your-app"},"Place the components inside your app"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { ConnectButton, ConnectDialog, Connect2ICProvider, useConnect } from "@connect2ic/react"\n\nfunction App() {\n\n  return (\n    <>\n      <ConnectButton />\n      <ConnectDialog dark={false} />\n    </>\n  )\n}\n\n')),(0,i.kt)("h2",{id:"done-now-customize-it"},"Done. Now customize it"),(0,i.kt)("p",null,"Explore the remaining sections for further customization. Most likely you will need the\n",(0,i.kt)("inlineCode",{parentName:"p"},"useConnect()")," hook next."))}f.isMDXComponent=!0}}]);