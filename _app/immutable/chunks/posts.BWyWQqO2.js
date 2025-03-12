import{w as n}from"./index.B-g6canH.js";import{l as r}from"./scheduler.ClFW5XwA.js";const U={},V=n({});function _(s){const t=s-1;return t*t*t+1}function C(s,{delay:t=0,duration:e=400,easing:i=_,x:f=0,y:p=0,opacity:l=0}={}){const o=getComputedStyle(s),a=+o.opacity,u=o.transform==="none"?"":o.transform,m=a*(1-l),[y,$]=r(f),[b,g]=r(p);return{delay:t,duration:e,easing:i,css:(c,x)=>`
			transform: ${u} translate(${(1-c)*y}${$}, ${(1-c)*b}${g});
			opacity: ${a-m*x}`}}const O=n([]),S=n([]);export{S as a,U as b,C as f,O as p,V as t};
