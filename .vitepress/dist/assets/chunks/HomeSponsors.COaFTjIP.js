import{d as v,u as S,h as f,o as s,c as n,l as r,t as _,F as u,E as k,n as d,m as o,R as y,_ as b,b as l,e as p}from"./framework.CC2Slv9P.js";const D=[],w=[],L=[{alt:"VueMastery",href:"https://www.vuemastery.com/",imgSrcDark:"https://posva-sponsors.pages.dev/logos/vuemastery-dark.png",imgSrcLight:"https://posva-sponsors.pages.dev/logos/vuemastery-light.svg"},{alt:"Prefect",href:"https://www.prefect.io/",imgSrcDark:"https://posva-sponsors.pages.dev/logos/prefectlogo-dark.svg",imgSrcLight:"https://posva-sponsors.pages.dev/logos/prefectlogo-light.svg"}],z=[{alt:"Stanislas Ormières",href:"https://stormier.ninja",imgSrcDark:"https://avatars.githubusercontent.com/u/2486424?u=7b0c73ae5d090ce53bf59473094e9606fe082c59&v=4",imgSrcLight:"https://avatars.githubusercontent.com/u/2486424?u=7b0c73ae5d090ce53bf59473094e9606fe082c59&v=4"},{alt:"Antony Konstantinidis",href:"https://www.vuejs.de",imgSrcDark:"https://avatars.githubusercontent.com/u/4183726?u=6b50a8ea16de29d2982f43c5640b1db9299ebcd1&v=4",imgSrcLight:"https://avatars.githubusercontent.com/u/4183726?u=6b50a8ea16de29d2982f43c5640b1db9299ebcd1&v=4"},{alt:"Storyblok",href:"https://storyblok.com",imgSrcDark:"https://posva-sponsors.pages.dev/logos/storyblok.png",imgSrcLight:"https://posva-sponsors.pages.dev/logos/storyblok.png"},{alt:"Nuxt UI Pro Templates",href:"https://ui.nuxt.com/pro",imgSrcDark:"https://avatars.githubusercontent.com/u/81570812?v=4",imgSrcLight:"https://avatars.githubusercontent.com/u/81570812?v=4"}],c={platinum:D,gold:w,silver:L,bronze:z},B=["href","title"],x=["src","alt"],C=v({__name:"HomeSponsorsGroup",props:{name:{},size:{default:140}},setup(m){const i=m,{isDark:a}=S(),h=f(()=>c[i.name.toLowerCase()].map(e=>({...e,imgSrc:a.value?e.imgSrcDark:e.imgSrcLight})));return(e,P)=>(s(),n(u,null,[r("h3",null,_(e.name)+" Sponsors",1),r("p",null,[(s(!0),n(u,null,k(h.value,t=>(s(),n("a",{key:t.href,href:t.href,title:t.alt,target:"_blank",rel:"sponsored noopener",class:d(["sponsor_wrapper",o(a)&&t.imgSrcLight===t.imgSrcDark&&"apply-bg"])},[r("img",{src:t.imgSrc,class:d(o(a)&&t.imgSrcLight===t.imgSrcDark&&"invert-colors"),alt:t.alt,style:y({height:e.size+"px"})},null,14,x)],10,B))),128))])],64))}}),g=b(C,[["__scopeId","data-v-c9d03a5a"]]),H={class:"sponsors_outer"},N={class:"cta"},G={class:"become-sponsor",href:"https://github.com/sponsors/posva"},I=v({__name:"HomeSponsors",setup(m){const{site:i}=S(),a={en:"Become a sponsor","en-US":"Become a Sponsor!","zh-CN":"成为赞助者！"};return(h,e)=>(s(),n("div",H,[r("div",null,[o(c).platinum.length?(s(),l(g,{key:0,name:"Platinum",size:"96"})):p("",!0),o(c).gold.length?(s(),l(g,{key:1,name:"Gold",size:"38"})):p("",!0),o(c).silver.length?(s(),l(g,{key:2,name:"Silver",size:"24"})):p("",!0),r("div",N,[r("a",G,_(a[o(i).lang]||a.en),1)])])]))}}),$=b(I,[["__scopeId","data-v-626a3219"]]);export{$ as H};
