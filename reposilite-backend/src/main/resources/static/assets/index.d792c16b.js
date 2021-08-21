var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,s=(e,s)=>{for(var r in s||(s={}))a.call(s,r)&&o(e,r,s[r]);if(t)for(var r of t(s))n.call(s,r)&&o(e,r,s[r]);return e};import{r,d as l,u as i,o as d,a as c,b as u,c as p,e as m,n as g,f as b,g as f,h as v,w as h,i as y,t as k,j as w,k as x,l as I,m as T,F as E,p as S,q as _,s as L,v as P,x as O,Q as M,y as V,z as R,A as D,B as j,C as $,D as H,V as A,T as B}from"./vendor.d68b1e98.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const C=r({isDark:!1});function U(){return{theme:C,fetchTheme:()=>{C.isDark="true"===localStorage.getItem("dark-theme")},toggleTheme:()=>{C.isDark=!C.isDark,localStorage.setItem("dark-theme",C.isDark)}}}const G=r({alias:"",token:""});function z(){const e=(e,t)=>{localStorage.setItem("alias",e),G.alias=e,localStorage.setItem("token",t),G.token=t};return{session:G,login:e,logout:()=>{e("","")},fetchSession:()=>{e(localStorage.getItem("alias"),localStorage.getItem("token"))},isLogged:()=>""!=G.alias}}const N=l({setup(){i({title:window.REPOSILITE_TITLE,description:window.REPOSILITE_DESCRIPTION});const{theme:e,fetchTheme:t}=U(),{fetchSession:a}=z();return d((()=>{t(),a()})),{theme:e}}});N.render=function(e,t,a,n,o,s){const r=c("router-view");return u(),p("div",{class:g({dark:e.theme.isDark})},[m(r,{class:"min-h-screen dark:bg-black dark:text-white"})],2)};const q={},K={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},W=[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)];q.render=function(e,t){return u(),p("svg",K,W)};const F={components:{GlobeIcon:q}},Y={class:"bg-gray-100 dark:bg-black"},J={class:"container mx-auto flex flex-row"},Q=b("div",{class:"w-35"},[b("img",{class:"border-2 rounded-full dark:border-gray-700",src:"https://avatars.githubusercontent.com/u/75123628?s=200&v=4"})],-1),X={class:"flex flex-col justify-center px-10"},Z=b("div",null,[b("p",null,"Public Maven repository for Bookkity organization")],-1),ee={class:"flex flex-row py-2"},te=b("a",{class:"px-3 text-gray-500",href:"https://github.com/bookkity"},"https://github.com/bookkity",-1);F.render=function(e,t,a,n,o,s){const r=c("GlobeIcon");return u(),p("div",Y,[b("div",J,[Q,b("div",X,[Z,b("div",ee,[m(r),te])])])])};const ae={},ne={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},oe=[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)];ae.render=function(e,t){return u(),p("svg",ne,oe)};const se={},re={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},le=[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)];se.render=function(e,t){return u(),p("svg",re,le)};const ie={components:{Hero:F,MoonIcon:ae,SunIcon:se},setup(){const e=f(),{session:t,isLogged:a,logout:n}=z(),{theme:o,toggleTheme:s}=U();return{title:v(window.REPOSILITE_TITLE),theme:o,toggleTheme:s,isLogged:a,signout:()=>{n(),e.push("/")}}}},de={class:"bg-gray-100 dark:bg-black dark:text-white"},ce={class:"container mx-auto flex flex-row py-10 justify-between"},ue={class:"text-xl font-medium py-1"},pe={class:"flex flex-row mt-0.5"},me=b("div",{class:"mx-2 py-1.5 rounded-full bg-white dark:bg-gray-900 font-bold px-6 text-sm"}," Dashboard ",-1);ie.render=function(e,t,a,n,o,s){const r=c("router-link"),l=c("SunIcon"),i=c("MoonIcon"),d=c("Hero");return u(),p("header",de,[b("div",ce,[b("h1",ue,[m(r,{to:"/"},{default:h((()=>[y(k(n.title),1)])),_:1})]),b("nav",pe,[m(r,{to:n.isLogged()?"/dashboard":"/login"},{default:h((()=>[me])),_:1},8,["to"]),n.isLogged()?(u(),p("div",{key:0,onClick:t[0]||(t[0]=e=>n.signout()),class:"ml-2 mr-4 py-1.5 rounded-full bg-white dark:bg-gray-900 font-bold px-6 text-sm cursor-pointer"}," Logout ")):w("",!0),b("div",{class:"pl-2 pr-1.5 py-0.9 cursor-pointer rounded-full bg-white dark:bg-gray-900",onClick:t[1]||(t[1]=e=>n.toggleTheme())},[n.theme.isDark?(u(),x(l,{key:0})):(u(),x(i,{key:1}))])])]),m(d,{class:"pt-2 pb-11"})])};const ge=()=>Vue.prototype.$reposilite.basePath,be={auth:{me:(e,t)=>I.get(ge()+"/auth/me",{auth:{username:e,password:t}})},maven:{details:e=>I.get(ge()+"/api/maven/details/"+(e||""))}},fe=[{name:"Maven",value:"\n<dependency>\n    <groupId>{groupId}</groupId>\n    <artifactId>{artifactId}</artifactId>\n    <version>{version}</version>\n</dependency>"},{name:"Gradle Groovy",value:'implementation "{groupId}:{artifactId}:{version}"'},{name:"Gradle Kotlin",value:'implementation("{groupId}:{artifactId}:{version}")'},{name:"SBT",value:'"{groupId}" %% "{artifactId}" %% "{version}"'}],ve={setup(){const e=r({selectedTab:fe[0].name});return s({tabs:fe},T(e))}},he={class:"bg-white dark:bg-gray-900 shadow-lg p-7 dark:border-4 rounded-xl border-gray-100 dark:border-black"},ye=b("div",{class:"flex flex-row justify-between"},[b("h1",{class:"font-bold"},"Artifact details")],-1),ke=b("hr",{class:"dark:border-gray-800"},null,-1),we={class:"mt-6 p-4 mr-1 rounded-lg bg-gray-100 dark:bg-gray-900"},xe={class:"text-sm max-w-21"};ve.render=function(e,t,a,n,o,s){const r=c("tab"),l=c("tabs"),i=c("tab-panel"),d=c("tab-panels");return u(),p("div",he,[ye,m(l,{modelValue:e.selectedTab,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedTab=t),class:"pt-3"},{default:h((()=>[(u(!0),p(E,null,S(n.tabs,((e,t)=>(u(),x(r,{class:"buildtool py-1 px-2 cursor-pointer",key:`t${t}`,val:e.name,label:e.name,indicator:!0},null,8,["val","label"])))),128))])),_:1},8,["modelValue"]),ke,m(d,{modelValue:e.selectedTab,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selectedTab=t),animate:!0},{default:h((()=>[(u(!0),p(E,null,S(n.tabs,((e,t)=>(u(),x(i,{key:`tp${t}`,val:e.name},{default:h((()=>[b("div",we,[b("pre",xe,k(e.value.trim()),1)])])),_:2},1032,["val"])))),128))])),_:1},8,["modelValue"])])};const Ie={components:{Card:ve},setup(){f();const e=_(),t=v("xyz"),a=v([]);return L((()=>e.params.qualifier),(async e=>{var n;t.value=((n=`/${e}`).endsWith("/")?n.slice(0,-1):n).split("/").slice(0,-1).join("/")||"/",be.maven.details(e).then((e=>a.value=e.data.files)).catch((e=>console.log(e)))}),{immediate:!0}),{parentPath:t,files:a}}},Te={class:"bg-gray-100"},Ee={class:"bg-gray-100 dark:bg-black"},Se={class:"container mx-auto"},_e={class:"pt-7 pb-3 pl-2 font-semibold"},Le=b("span",{class:"font-normal text-xl text-gray-500"}," ⤴ ",-1),Pe={class:"dark:bg-black"},Oe={class:"container mx-auto relative"},Me={class:"lg:absolute pt-5 -top-5 right-8"},Ve={class:"pt-4"},Re={class:"flex flex-row mb-1.5 py-3 rounded-full bg-white dark:bg-gray-900 xl:max-w-1/2 cursor-pointer"},De={key:0,class:"text-xm px-6 pt-1.75"},je={key:1,class:"text-xm px-6 pt-1.75"},$e={class:"font-semibold"};Ie.render=function(e,t,a,n,o,s){const r=c("router-link"),l=c("Card");return u(),p("div",Te,[b("div",Ee,[b("div",Se,[b("p",_e,[y(" Index of "+k(e.$route.path)+" ",1),m(r,{to:n.parentPath},{default:h((()=>[Le])),_:1},8,["to"])])])]),b("div",Pe,[b("div",Oe,[b("div",Me,[m(l)]),b("div",Ve,[(u(!0),p(E,null,S(n.files,(t=>(u(),x(r,{key:t,to:e.append(e.$route.path,t.name)},{default:h((()=>[b("div",Re,["DIRECTORY"==t.type?(u(),p("div",De,"⚫")):(u(),p("div",je,"⚪")),b("div",$e,k(t.name),1)])])),_:2},1032,["to"])))),128))])])])])};const He={components:{Hero:F,Browser:Ie}};He.render=function(e,t,a,n,o,s){const r=c("Browser");return u(),x(r,{ref:""},null,512)};const Ae={setup:()=>({configurations:[{type:"Maven",snippet:`\n        <repository>\n            <name>${window.REPOSILITE_TITLE}</name>\n            <id>${window.REPOSILITE_ID}</id>\n            <url>${window.location}</url>\n        </repository>\n        `},{type:"Gradle Groovy",snippet:`\n        maven {\n            url "${window.location}"\n        }\n        `},{type:"Gradle Kotlin",snippet:`\n        maven {\n            url = uri("${window.location}")\n        }\n        `},{type:"SBT",snippet:`\n        resolvers += "${window.REPOSILITE_TITLE}" at "${window.location}"\n        `}],trim:e=>{const t=e.length-e.trimStart().length-1;return e.split("\n").map((e=>e.substring(t))).join("\n").trim()}})},Be={class:"container mx-auto pt-10 pb-6 px-6"},Ce={class:"text-lg font-bold"},Ue={class:"my-4 py-4 px-6 rounded-lg shadow-md text-sm bg-gray-50 dark:bg-gray-900 justify-items-center"};Ae.render=function(e,t,a,n,o,s){return u(),p("div",Be,[(u(!0),p(E,null,S(n.configurations,(e=>(u(),p("div",{key:e.type,class:"px-7"},[b("h1",Ce,k(e.type),1),b("pre",Ue,k(n.trim(e.snippet)),1)])))),128))])};const Ge={},ze={class:"container mx-auto pt-10 px-6"},Ne=[b("i",null,"Endpoints :: soon™",-1)];Ge.render=function(e,t){return u(),p("div",ze,Ne)};const qe={components:{Header:ie,Overview:He,Usage:Ae,Endpoints:Ge},setup(){const e=["Overview","Usage","Endpoints"],t=r({selectedMenuTab:e[0]});return s({menuTabs:e},T(t))}};P("data-v-7be34a3d");const Ke={class:"bg-gray-100 dark:bg-black"},We={class:"container mx-auto"},Fe=b("hr",{class:"dark:border-gray-700"},null,-1),Ye={class:"overflow-auto"};O(),qe.render=function(e,t,a,n,o,s){const r=c("Header"),l=c("tab"),i=c("tabs"),d=c("Overview"),g=c("tab-panel"),f=c("Usage"),v=c("Endpoints"),y=c("tab-panels");return u(),p("div",null,[m(r),b("div",Ke,[b("div",We,[m(i,{modelValue:e.selectedMenuTab,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedMenuTab=t)},{default:h((()=>[(u(!0),p(E,null,S(n.menuTabs,((e,t)=>(u(),x(l,{class:"item font-normal",key:`menu${t}`,val:e,label:e,indicator:!0},null,8,["val","label"])))),128))])),_:1},8,["modelValue"])]),Fe,b("div",Ye,[m(y,{modelValue:e.selectedMenuTab,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selectedMenuTab=t),animate:!0},{default:h((()=>[m(g,{val:"Overview"},{default:h((()=>[m(d)])),_:1}),m(g,{val:"Usage"},{default:h((()=>[m(f)])),_:1}),m(g,{val:"Endpoints"},{default:h((()=>[m(v)])),_:1})])),_:1},8,["modelValue"])])])])},qe.__scopeId="data-v-7be34a3d";const Je={components:{Header:ie},setup(){const e=f(),{login:t}=z();return{alias:v(""),token:v(""),signin:(a,n)=>{be.auth.me(a,n).then((o=>{t(a,n),e.push("/dashboard")})).catch((e=>M(`${e.response.status}: ${e.response.data}`,{type:"danger"})))}}}};P("data-v-43ebe90d");const Qe={class:"container mx-auto pt-10 px-6 flex justify-center"},Xe={class:"border bg-white dark:bg-gray-900 border-gray-100 dark:border-black m-w-20 p-10 rounded-2xl shadow-xl text-center"},Ze=b("h1",{class:"font-bold text-xl pb-4"},"Login",-1),et={class:"flex flex-col w-96"},tt={class:"text-right mt-1"},at=y("← Back to index");O(),Je.render=function(e,t,a,n,o,s){const r=c("Header"),l=c("router-link");return u(),p("div",null,[m(r),b("div",Qe,[b("div",Xe,[Ze,b("form",et,[V(b("input",{placeholder:"Alias","onUpdate:modelValue":t[0]||(t[0]=e=>n.alias=e),type:"text",class:"input"},null,512),[[R,n.alias]]),V(b("input",{placeholder:"Token","onUpdate:modelValue":t[1]||(t[1]=e=>n.token=e),type:"password",class:"input"},null,512),[[R,n.token]]),b("div",tt,[m(l,{to:"/",class:"text-blue-400 text-xs"},{default:h((()=>[at])),_:1})]),b("div",{class:"bg-gray-100 dark:bg-gray-800 py-2 my-3 rounded-md cursor-pointer",onClick:t[2]||(t[2]=e=>n.signin(n.alias,n.token))},"Sign in")])])])])},Je.__scopeId="data-v-43ebe90d";const nt=["Dashboard"],ot={components:{Header:ie},setup(){const e=r({selectedMenuTab:nt[0]});return s({menuTabs:nt},T(e))}};P("data-v-a9afc412");const st={class:"bg-gray-100 dark:bg-black"},rt={class:"container mx-auto"},lt=b("hr",{class:"dark:border-gray-700"},null,-1),it={class:"overflow-auto"},dt=b("div",{class:"container mx-auto flex flex-row py-10 justify-between"},[b("div",null,"Dashboard")],-1);O(),ot.render=function(e,t,a,n,o,s){const r=c("Header"),l=c("tab"),i=c("tabs"),d=c("tab-panel"),g=c("tab-panels");return u(),p("div",null,[m(r),b("div",st,[b("div",rt,[m(i,{modelValue:e.selectedMenuTab,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedMenuTab=t)},{default:h((()=>[(u(!0),p(E,null,S(n.menuTabs,((e,t)=>(u(),x(l,{class:"item font-normal",key:`menu${t}`,val:e,label:e,indicator:!0},null,8,["val","label"])))),128))])),_:1},8,["modelValue"])]),lt,b("div",it,[m(g,{modelValue:e.selectedMenuTab,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selectedMenuTab=t),animate:!0},{default:h((()=>[m(d,{val:"Endpoints"},{default:h((()=>[dt])),_:1})])),_:1},8,["modelValue"])])])])},ot.__scopeId="data-v-a9afc412";const ct=D({history:j(),routes:[{path:"/:qualifier(.*)",name:"Index",component:qe},{path:"/login",name:"Login",component:Je},{path:"/dashboard",name:"Dashboard",component:ot}]}),ut=!"{{REPOSILITE.BASE_PATH}}".includes("REPOSILITE.BASE_PATH");window.REPOSILITE_BASE_PATH=ut?"{{REPOSILITE.BASE_PATH}}":"/",window.REPOSILITE_ID=ut?"{{REPOSILITE.ID}}":"reposilite-repository",window.REPOSILITE_TITLE=ut?"{{REPOSILITE.TITLE}}":"Reposilite Repository",window.REPOSILITE_DESCRIPTION=ut?"{{REPOSILITE.DESCRIPTION}}":"Default description";const pt=$(N);pt.config.globalProperties.append=(e,t)=>e+(e.endsWith("/")?"":"/")+t,pt.config.globalProperties.drop=e=>(e.endsWith("/")?e.slice(0,-1):e).split("/").slice(0,-1).join("/"),pt.use(H()).use(A,I).use(B).use(ct).mount("#app");
