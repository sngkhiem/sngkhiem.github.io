import{w as a}from"./index.BI7v63FY.js";import{C as c}from"./scheduler.FGUOCI5T.js";function S(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}var m={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const t={author:{avatar:"/assets/avatar.jpg",bio:".",name:"Tran Hoang Khiem",status:"🌸",metadata:[{link:"https://github.com/sngkhiem",icon:"github"},{link:"https://www.facebook.com/hoangkhiem1403/",icon:"facebook"}]},description:"A personal website to archive my notes",domain:m.URARA_SITE_DOMAIN??"dungxibo123.github.io",lang:"en-US",protocol:m.URARA_SITE_PROTOCOL??!1?"http://":"https://",subtitle:"Note",themeColor:"#3D4451",title:"Tran Hoang Khiem |"},R={sizes:"48x48",src:`${t.protocol+t.domain}/favicon.png`,type:"image/png"},w={180:{sizes:"180x180",src:`${t.protocol+t.domain}/assets/any@180.png`,type:"image/png"},192:{sizes:"192x192",src:`${t.protocol+t.domain}/assets/any@192.png`,type:"image/png"},512:{sizes:"512x512",src:`${t.protocol+t.domain}/assets/any@512.png`,type:"image/png"}},O={192:{sizes:"192x192",src:`${t.protocol+t.domain}/assets/maskable@192.png`,type:"image/png"},512:{sizes:"512x512",src:`${t.protocol+t.domain}/assets/maskable@512.png`,type:"image/png"}},U=[{name:"aqua",text:"💦 Aqua"}],z={},D={nav:[{link:"/about-me",text:"About"}],search:{colors:!0,provider:"google"}},E={nav:[{link:"/atom.xml",text:"Feed"},{link:"/sitemap.xml",text:"Sitemap"}]},T={locales:"en-US",options:{day:"numeric",month:"short",weekday:"long",year:"2-digit"}},C={},I=a({});function v(s){const o=s-1;return o*o*o+1}function V(s,{delay:o=0,duration:p=400,easing:g=v,x:l=0,y:r=0,opacity:u=0}={}){const n=getComputedStyle(s),e=+n.opacity,d=n.transform==="none"?"":n.transform,f=e*(1-u),[h,y]=c(l),[b,x]=c(r);return{delay:o,duration:p,easing:g,css:(i,$)=>`
			transform: ${d} translate(${(1-i)*h}${y}, ${(1-i)*b}${x});
			opacity: ${e-f*$}`}}const j=a([]),q=a([]);export{q as a,R as b,w as c,C as d,S as e,V as f,D as g,z as h,U as i,E as j,T as k,O as m,j as p,t as s,I as t};
