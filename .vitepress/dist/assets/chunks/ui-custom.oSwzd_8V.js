import{u as i,a as l}from"./theme.B9ca0tSU.js";import{d as p,j as f,x as c,k as u,o as _,c as m,_ as b}from"./framework.CC2Slv9P.js";const v=p({__name:"VPCarbonAds",props:{carbonAds:{}},setup(r){const{page:d}=i(),a=r.carbonAds,{isAsideEnabled:s}=l(),o=f();let n=!1;function t(){if(!n){n=!0;const e=document.createElement("script");e.id="_carbonads_js",e.src=`//cdn.carbonads.com/carbon.js?serve=${a.code}&placement=${a.placement}`,e.async=!0,o.value.appendChild(e)}}return c(()=>d.value.relativePath,()=>{var e;n&&s.value&&((e=window._carbonads)==null||e.refresh())}),a&&u(()=>{s.value?t():c(s,e=>e&&t())}),(e,h)=>(_(),m("div",{class:"VPCarbonAds",ref_key:"container",ref:o},null,512))}}),x=b(v,[["__scopeId","data-v-46df5e75"]]);export{x as default};
