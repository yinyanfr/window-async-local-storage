import{g as i}from"./index-0d7dc32b.js";function f(e,s){for(var o=0;o<s.length;o++){const r=s[o];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,c;function v(){if(c)return a;c=1,a=e,e.displayName="csv",e.aliases=[];function e(s){s.languages.csv={value:/[^\r\n,"]+|"(?:[^"]|"")*"(?!")/,punctuation:/,/}}return a}var u=v();const l=i(u),g=f({__proto__:null,default:l},[u]);export{g as c};
