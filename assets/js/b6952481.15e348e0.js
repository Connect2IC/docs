"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[449],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),l=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),g=r,m=d["".concat(i,".").concat(g)]||d[g]||p[g]||a;return t?o.createElement(m,s(s({ref:n},u),{},{components:t})):o.createElement(m,s({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<a;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1051:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),s=["components"],c={},i="Hooks",l={unversionedId:"React/hooks",id:"React/hooks",title:"Hooks",description:"useConnect",source:"@site/docs/03-React/04-hooks.md",sourceDirName:"03-React",slug:"/React/hooks",permalink:"/docs/docs/React/hooks",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-React/04-hooks.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/docs/docs/React/components"},next:{title:"Vue",permalink:"/docs/docs/Vue"}},u={},p=[{value:"useConnect",id:"useconnect",level:2},{value:"Usage",id:"usage",level:3},{value:"useCanister",id:"usecanister",level:2},{value:"Usage",id:"usage-1",level:3},{value:"useDialog",id:"usedialog",level:2},{value:"Usage",id:"usage-2",level:3},{value:"useWallet",id:"usewallet",level:2},{value:"Usage",id:"usage-3",level:3},{value:"useBalance",id:"usebalance",level:2},{value:"Usage",id:"usage-4",level:3},{value:"useProviders",id:"useproviders",level:2},{value:"Usage",id:"usage-5",level:3}],d={toc:p};function g(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hooks"},"Hooks"),(0,a.kt)("h2",{id:"useconnect"},"useConnect"),(0,a.kt)("p",null,"Gives you access to many things like the status of the connection, which provider is connected"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useConnect } from "@connect2ic/react"\n\nfunction App() {\n  const {\n    principal,\n    connect,\n    disconnect,\n    isIdle,\n    isConnecting,\n    isConnected,\n    isDisconnecting,\n    activeProvider,\n  } = useConnect({\n    onConnect: () => {\n      // Signed in\n    },\n    onDisconnect: () => {\n      // Signed out\n    }\n  })\n\n  // string\n  principal\n\n  // connect\n  connect()\n\n  // disconnect\n  disconnect()\n\n  // boolean\n  isIdle\n\n  // TODO\n  isConnecting\n\n  // boolean\n  isConnected\n\n  // boolean\n  isDisconnecting\n\n  // "inactive" | "idle" | "connecting" | "connected" | "disconnecting"\n  status\n}\n')),(0,a.kt)("h2",{id:"usecanister"},"useCanister"),(0,a.kt)("p",null,"Automatically switches between the anonymous & connected identity for the canister. Authenticated calls are now easy."),(0,a.kt)("h3",{id:"usage-1"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useCanister } from "@connect2ic/react"\n\nfunction App() {\n  const [counter, { loading, error }] = useCanister("counter")\n\n  // Make calls to the canister as you would normally\n  counter.increment()\n\n  // boolean\n  loading\n\n  // TODO\n  error\n\n  // Always use the non-signed in identity to make canister calls\n  const [counter] = useCanister("counter", { mode: "anonymous" })\n}\n')),(0,a.kt)("h2",{id:"usedialog"},"useDialog"),(0,a.kt)("p",null,"Programmatically control the prestyled ",(0,a.kt)("inlineCode",{parentName:"p"},"<Dialog />")," or check its state."),(0,a.kt)("h3",{id:"usage-2"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useDialog } from "@connect2ic/react"\n\nfunction App() {\n  const [dialog] = useDialog()\n\n  // opens the dialog\n  dialog.open()\n\n  // closes the dialog\n  dialog.close()\n\n  // true | false\n  dialog.isOpen\n}\n')),(0,a.kt)("h2",{id:"usewallet"},"useWallet"),(0,a.kt)("p",null,"Wallet info and addresses."),(0,a.kt)("h3",{id:"usage-3"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useWallet } from "@connect2ic/react"\n\nfunction App() {\n  const [wallet] = useWallet()\n\n  // wallet | false\n  wallet\n\n  // string\n  wallet.principal\n}\n')),(0,a.kt)("h2",{id:"usebalance"},"useBalance"),(0,a.kt)("p",null,"Provides you with a list of the users assets when a wallet is connected."),(0,a.kt)("h3",{id:"usage-4"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useBalance } from "@connect2ic/react"\n\nfunction App() {\n  const [assets] = useBalance()\n\n  assets.map(asset => {\n    // string\n    assets.canisterId\n\n    // string\n    assets.name\n\n    // number\n    assets.amount\n  })\n}\n')),(0,a.kt)("h2",{id:"useproviders"},"useProviders"),(0,a.kt)("p",null,"Gives you direct access to the providers, when you need more control."),(0,a.kt)("h3",{id:"usage-5"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useProviders } from "@connect2ic/react"\n\nfunction App() {\n  const [providers] = useProviders()\n\n  providers.map(provider => {\n    // string\n    provider.id\n\n    // string\n    provider.name\n\n    // <img /> src string\n    provider.icon.light\n    provider.icon.dark\n\n    // Connector\n    provider.connector\n  })\n}\n')))}g.isMDXComponent=!0}}]);