if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let a={};const r=e=>n(e,i),o={module:{uri:i},exports:a,require:r};s[i]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(c(...e),a)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/192.png",revision:"9bae114806230d82d4f098452088bb91"},{url:"/404.svg",revision:"4fc49eb0df0f3f1c2a98c80f2aa1a52f"},{url:"/512.png",revision:"92b778e2e356b4765cad396d7bcf0166"},{url:"/CNAME",revision:"c8d366f1610ac175e9055f455bc7b318"},{url:"/_next/static/3R7Tnifb8lksC2DrLq915/_buildManifest.js",revision:"4128b4845451b9e4ba6ede6ac657c527"},{url:"/_next/static/3R7Tnifb8lksC2DrLq915/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/_next/static/chunks/111.966d38d82145b8a1.js",revision:"966d38d82145b8a1"},{url:"/_next/static/chunks/12.b909d2f471e62970.js",revision:"b909d2f471e62970"},{url:"/_next/static/chunks/1a48c3c1-186497bc8e1891b8.js",revision:"186497bc8e1891b8"},{url:"/_next/static/chunks/1bfc9850-df034ed2d8dd4c3e.js",revision:"df034ed2d8dd4c3e"},{url:"/_next/static/chunks/252f366e-31244fe4e46f0352.js",revision:"31244fe4e46f0352"},{url:"/_next/static/chunks/279-816da4944e845a1f.js",revision:"816da4944e845a1f"},{url:"/_next/static/chunks/544-e9e52cf785421852.js",revision:"e9e52cf785421852"},{url:"/_next/static/chunks/574.0482dee029ead182.js",revision:"0482dee029ead182"},{url:"/_next/static/chunks/72fdc299.30ae96a14bbe7770.js",revision:"30ae96a14bbe7770"},{url:"/_next/static/chunks/7f0c75c1-b8f4620c167e5ef6.js",revision:"b8f4620c167e5ef6"},{url:"/_next/static/chunks/95b64a6e-bebee6bbe663f390.js",revision:"bebee6bbe663f390"},{url:"/_next/static/chunks/ae51ba48.c917bf0006c816d5.js",revision:"c917bf0006c816d5"},{url:"/_next/static/chunks/bd1a647f.1779877271d2b82a.js",revision:"1779877271d2b82a"},{url:"/_next/static/chunks/d0c16330.7eff1e15bf414cb1.js",revision:"7eff1e15bf414cb1"},{url:"/_next/static/chunks/d64684d8-09a8c8ddd24f5652.js",revision:"09a8c8ddd24f5652"},{url:"/_next/static/chunks/d7eeaac4-02a46709bb524b70.js",revision:"02a46709bb524b70"},{url:"/_next/static/chunks/de71a805-ac5c65a0fd23a197.js",revision:"ac5c65a0fd23a197"},{url:"/_next/static/chunks/framework-9b5d6ec4444c80fa.js",revision:"9b5d6ec4444c80fa"},{url:"/_next/static/chunks/main-d5d56727878981b8.js",revision:"d5d56727878981b8"},{url:"/_next/static/chunks/pages/404-161b10299f01f75d.js",revision:"161b10299f01f75d"},{url:"/_next/static/chunks/pages/Editor-f8e7ed4571114244.js",revision:"f8e7ed4571114244"},{url:"/_next/static/chunks/pages/Widget-f14e63eb512062dc.js",revision:"f14e63eb512062dc"},{url:"/_next/static/chunks/pages/_app-9f7c7cff51309763.js",revision:"9f7c7cff51309763"},{url:"/_next/static/chunks/pages/_error-7397496ca01950b1.js",revision:"7397496ca01950b1"},{url:"/_next/static/chunks/pages/index-bd745278a9d634d7.js",revision:"bd745278a9d634d7"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-628abd5d85eb0d04.js",revision:"628abd5d85eb0d04"},{url:"/_next/static/css/61df390b1644371a.css",revision:"61df390b1644371a"},{url:"/favicon.ico",revision:"6864e7778805bb89123fe3fc7187ae4d"},{url:"/jsoncrack-screenshot.webp",revision:"b5c07bfaf044bc835e2d979082848364"},{url:"/jsoncrack.png",revision:"79dd8386592fe2a1b489b617963933ee"},{url:"/jsonvisio-screenshot.webp",revision:"796131c9bbe3b08b6ba2f9cd6d21eff6"},{url:"/manifest.json",revision:"2d7bb87b73a2d025bad26f1f1abba57c"},{url:"/robots.txt",revision:"889cb00f522a611bc710e481c32a87c2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));