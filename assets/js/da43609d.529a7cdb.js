"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[767],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(i,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,l(l({ref:e},p),{},{components:n})):r.createElement(f,l({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=s;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:a,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4339:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],c={},i="Components",u={unversionedId:"React/components",id:"React/components",title:"Components",description:"ConnectDialog",source:"@site/docs/03-React/03-components.md",sourceDirName:"03-React",slug:"/React/components",permalink:"/docs/React/components",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-React/03-components.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Provider",permalink:"/docs/React/provider"},next:{title:"Hooks",permalink:"/docs/React/hooks"}},p={},d=[{value:"ConnectDialog",id:"connectdialog",level:2},{value:"Props",id:"props",level:3},{value:"dark",id:"dark",level:4},{value:"ConnectButton",id:"connectbutton",level:2}],s={toc:d};function m(t){var e=t.components,n=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"components"},"Components"),(0,o.kt)("h2",{id:"connectdialog"},"ConnectDialog"),(0,o.kt)("p",null,"A pre-styled dialog"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { ConnectDialog } from "@connect2ic/react"\n\nfunction App() {\n  return (\n    <ConnectDialog dark={false} />\n  )\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Prop"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dark"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"Dark mode on or off"),(0,o.kt)("td",{parentName:"tr",align:null},"false")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"props"},"Props"),(0,o.kt)("h4",{id:"dark"},"dark"),(0,o.kt)("h2",{id:"connectbutton"},"ConnectButton"),(0,o.kt)("p",null,"A pre-styled button for connecting & disconnecting"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { ConnectButton } from "@connect2ic/react"\n\nfunction App() {\n  return (\n    <ConnectButton\n      dark={false}\n      onConnect={() => {/* connected */}}\n      onDisconnect={() => {/* disconnected */}}\n    />\n  )\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Prop"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dark"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"Dark mode on or off"),(0,o.kt)("td",{parentName:"tr",align:null},"false")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"onConnect"),(0,o.kt)("td",{parentName:"tr",align:null},"function"),(0,o.kt)("td",{parentName:"tr",align:null},"Fires when the user has connected"),(0,o.kt)("td",{parentName:"tr",align:null},"undefined")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"onDisconnect"),(0,o.kt)("td",{parentName:"tr",align:null},"function"),(0,o.kt)("td",{parentName:"tr",align:null},"Fires when the user has disconnected"),(0,o.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,o.kt)("hr",null))}m.isMDXComponent=!0}}]);