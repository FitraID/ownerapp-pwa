if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let l={};const u=e=>i(e,r),c={module:{uri:r},exports:l,require:u};n[r]=Promise.all(s.map((e=>c[e]||u(e)))).then((e=>(o(...e),l)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"ownerapp-pwa"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.d52e169d.css",revision:null},{url:"/css/chunk-vendors.6ecd00e0.css",revision:null},{url:"/fonts/cryptocoins.2fde3f81.woff2",revision:null},{url:"/fonts/cryptocoins.698a44ef.woff",revision:null},{url:"/fonts/cryptocoins.6b702ee1.ttf",revision:null},{url:"/fonts/icofont.6c4bc344.woff",revision:null},{url:"/fonts/icofont.c6ed992f.woff2",revision:null},{url:"/img/android.dbd59fd7.svg",revision:null},{url:"/img/apple.3347e5c2.svg",revision:null},{url:"/img/cintabunda.7690a4d5.png",revision:null},{url:"/img/qr.fb2f12f9.svg",revision:null},{url:"/img/user.fccfb05e.png",revision:null},{url:"/index.html",revision:"aa3773f3939dc8d0f08cd7416bf55227"},{url:"/js/app.8464475e.js",revision:null},{url:"/js/chunk-vendors.488906a2.js",revision:null},{url:"/manifest.json",revision:"6959614dd08ca6ba0cac965d4414256a"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
