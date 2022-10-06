(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[400],{4754:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Editor",function(){return t(1116)}])},3565:function(n,e,t){"use strict";t.d(e,{z:function(){return h}});var r,i=t(6042),o=t(9396),a=t(9534),c=t(7297),u=t(5893),s=(t(7294),t(9521));function l(){var n=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  background: ",';\n  color: #ffffff;\n  padding: 8px 16px;\n  min-width: 60px;\n  min-height: 32px;\n  border-radius: 3px;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: "Catamaran", sans-serif;\n  width: ',";\n  height: 40px;\n  background-image: none;\n\n  :disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n\n  div {\n    white-space: normal;\n    margin: 0 auto;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n\n  &:hover {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n  }\n\n  @media only screen and (max-width: 768px) {\n    font-size: 14px;\n  }\n"]);return l=function(){return n},n}function d(){var n=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]);return d=function(){return n},n}!function(n){n.PRIMARY="PRIMARY",n.SECONDARY="BLURPLE",n.DANGER="DANGER",n.SUCCESS="SEAGREEN",n.WARNING="ORANGE"}(r||(r={}));var f=s.ZP.button(l(),(function(n){return function(n,e){return e[r[n]]}(n.status,n.theme)}),(function(n){return n.block?"100%":"fit-content"})),p=s.ZP.div(d()),h=function(n){var e=n.children,t=n.status,r=n.block,c=void 0!==r&&r,s=n.link,l=void 0!==s&&s,d=(0,a.Z)(n,["children","status","block","link"]);return(0,u.jsx)(f,(0,o.Z)((0,i.Z)({as:l?"a":"button",type:"button",status:null!==t&&void 0!==t?t:"PRIMARY",block:c},d),{children:(0,u.jsx)(p,{children:e})}))}},1427:function(n,e,t){"use strict";t.d(e,{I:function(){return u}});var r=t(6042),i=t(7297),o=t(5893);t(7294);function a(){var n=(0,i.Z)(["\n  background: ",";\n  color: ",";\n  outline: none;\n  border: none;\n  border-radius: 4px;\n  line-height: 32px;\n  padding: 10px;\n  width: 100%;\n  margin-bottom: 10px;\n  height: 40px;\n"]);return a=function(){return n},n}var c=t(9521).ZP.input(a(),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.INTERACTIVE_NORMAL})),u=function(n){return(0,o.jsx)(c,(0,r.Z)({},n))}},2628:function(n,e,t){"use strict";t.d(e,{g:function(){return v}});var r=t(7297),i=t(5893),o=(t(7294),t(9521));function a(){var n=(0,r.Z)(["\n 99% {\n    visibility: hidden;\n  }\n  100% {\n    visibility: visible;\n  }\n"]);return a=function(){return n},n}function c(){var n=(0,r.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: grid;\n  place-content: center;\n  width: 100%;\n  height: 100vh;\n  text-align: center;\n  background: ",";\n  z-index: 36;\n  pointer-events: none;\n  animation: 0.2s ",";\n  animation-fill-mode: forwards;\n  visibility: hidden;\n"]);return c=function(){return n},n}function u(){var n=(0,r.Z)(["\n  font-weight: 600;\n  font-size: 56px;\n  pointer-events: none;\n  margin-bottom: 10px;\n"]);return u=function(){return n},n}function s(){var n=(0,r.Z)(["\n  color: #faa81a;\n"]);return s=function(){return n},n}function l(){var n=(0,r.Z)(["\n  color: #b9bbbe;\n  font-size: 24px;\n  font-weight: 500;\n"]);return l=function(){return n},n}var d=(0,o.F4)(a()),f=o.ZP.div(c(),(function(n){return n.theme.BLACK_DARK}),d),p=o.ZP.h2(u()),h=o.ZP.span(s()),x=o.ZP.div(l()),v=function(n){var e=n.message;return(0,i.jsxs)(f,{children:[(0,i.jsxs)(p,{children:[(0,i.jsx)(h,{children:"JSON"})," Crack"]}),(0,i.jsx)(x,{children:null!==e&&void 0!==e?e:"Preparing the environment for you..."})]})}},1342:function(n,e,t){"use strict";t.d(e,{u:function(){return E}});var r=t(5893),i=t(7294),o=t(3565),a=t(828),c=function(n){var e=(0,a.Z)(i.useState(!1),2),t=e[0],r=e[1];return i.useEffect((function(){var e=function(e){e.key===n&&r(!0)},t=function(e){e.key===n&&r(!1)};return window.addEventListener("keydown",e),window.addEventListener("keyup",t),function(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",t)}}),[n]),t},u=t(7297),s=t(9521);function l(){var n=(0,u.Z)(["\n  from { transform: scale(0.6); opacity: 0; }\n  to { transform: scale(1); opacity: 1; };\n"]);return l=function(){return n},n}function d(){var n=(0,u.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.85);\n  z-index: 36;\n\n  * {\n    box-sizing: border-box;\n  }\n"]);return d=function(){return n},n}function f(){var n=(0,u.Z)(["\n  min-width: 440px;\n  max-width: 490px;\n  width: fit-content;\n  animation: "," 220ms ease-in-out;\n  line-height: 20px;\n\n  @media only screen and (max-width: 768px) {\n    min-width: 90%;\n    max-width: 90%;\n  }\n"]);return f=function(){return n},n}function p(){var n=(0,u.Z)(["\n  color: ",";\n  font-size: 20px !important;\n  margin: 0;\n"]);return p=function(){return n},n}function h(){var n=(0,u.Z)(["\n  background: ",";\n  padding: 16px;\n  border-radius: 5px 5px 0 0;\n"]);return h=function(){return n},n}function x(){var n=(0,u.Z)(["\n  color: ",";\n  background: ",";\n  padding: 16px;\n  overflow: hidden auto;\n"]);return x=function(){return n},n}function v(){var n=(0,u.Z)(["\n  display: flex;\n  flex-direction: row-reverse;\n  background: ",";\n  padding: 16px;\n  border-radius: 0 0 5px 5px;\n  gap: 10px;\n"]);return v=function(){return n},n}var g=(0,s.F4)(l()),m=s.ZP.div(d()),b=s.ZP.div(f(),g),j=s.ZP.h2(p(),(function(n){return n.theme.INTERACTIVE_ACTIVE})),Z=s.ZP.div(h(),(function(n){return n.theme.MODAL_BACKGROUND})),C=s.ZP.div(x(),(function(n){return n.theme.TEXT_NORMAL}),(function(n){return n.theme.MODAL_BACKGROUND})),y=s.ZP.div(v(),(function(n){return n.theme.BACKGROUND_SECONDARY})),E=function(n){var e=n.children,t=n.visible,i=n.setVisible;return t?(0,r.jsx)(m,{onClick:function(n){n.currentTarget===n.target&&i((function(n){return!n}))},children:(0,r.jsx)(b,{children:e})}):null};E.Header=function(n){var e=n.children;return(0,r.jsx)(Z,{children:(0,r.jsx)(j,{children:e})})},E.Content=function(n){var e=n.children;return(0,r.jsx)(C,{children:e})},E.Controls=function(n){var e=n.children,t=n.setVisible,a=c("Escape");return i.useEffect((function(){a&&t(!1)}),[a,t]),(0,r.jsxs)(y,{children:[(0,r.jsx)(o.z,{onClick:function(){return t(!1)},children:"Close"}),e]})}},7471:function(n,e,t){"use strict";t.d(e,{_:function(){return P}});var r=t(7568),i=t(4924),o=t(6042),a=t(9396),c=t(828),u=t(7297),s=t(414),l=t(5893),d=t(7294),f=t(6293),p=t(713),h=t(6501),x=t(9647),v=t(3565),g=t(1427),m=t(1342),b=t(9189),j=t(9521);function Z(){var n=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 12px 0;\n  border-top: 1px solid ",";\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: ",";\n\n  &:first-of-type {\n    padding-top: 0;\n    border: none;\n  }\n"]);return Z=function(){return n},n}function C(){var n=(0,u.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]);return C=function(){return n},n}function y(){var n=(0,u.Z)(["\n  flex: 1;\n  width: 100%;\n  height: auto;\n  border-radius: 6px;\n  background: ",";\n  border: 1px solid;\n  border-color: rgba(0, 0, 0, 0.1);\n"]);return y=function(){return n},n}var E={card:{background:"transparent",boxShadow:"none"},body:{padding:0},input:{background:"rgba(0, 0, 0, 0.2)",boxShadow:"none",textTransform:"none",whiteSpace:"nowrap",textOverflow:"ellipsis"},hash:{background:"rgba(180, 180, 180, 0.3)"}},w=["#B80000","#DB3E00","#FCCB00","#008B02","#006B76","#1273DE","#004DCF","#5300EB","#EB9694","#FAD0C3","#FEF3BD","#C1E1C5","#BEDADC","#C4DEF6","#BED3F3","#D4C4FB","transparent"];var N=j.ZP.div(Z(),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT}),(function(n){return n.theme.INTERACTIVE_NORMAL})),k=j.ZP.div(C()),R=j.ZP.div(y(),(function(n){return n.color})),P=function(n){var e=n.visible,t=n.setVisible,u=(0,b.Z)((function(n){return n.setConfig})),j=(0,c.Z)(d.useState({filename:"jsoncrack.com",backgroundColor:"transparent",quality:1}),2),Z=j[0],C=j[1],y=function(){var n=(0,r.Z)((function(){var n,e;return(0,s.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,3,4]),h.ZP.loading("Copying to clipboard...",{id:"toastClipboard"}),u("performanceMode",!1),n=document.querySelector("svg[id*='ref']"),[4,(0,f.SE)(n,{quality:Z.quality,backgroundColor:Z.backgroundColor})];case 1:return(e=r.sent())?(navigator.clipboard.write([new ClipboardItem((0,i.Z)({},e.type,e))]),h.ZP.success("Copied to clipboard"),[3,4]):[2];case 2:return r.sent(),h.ZP.error("Failed to copy to clipboard"),[3,4];case 3:return h.ZP.dismiss("toastClipboard"),t(!1),u("performanceMode",!0),[7];case 4:return[2]}}))}));return function(){return n.apply(this,arguments)}}(),P=function(){var n=(0,r.Z)((function(){var n;return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,3,4]),h.ZP.loading("Downloading...",{id:"toastDownload"}),u("performanceMode",!1),n=document.querySelector("svg[id*='ref']"),[4,(0,f.YM)(n,{quality:Z.quality,backgroundColor:Z.backgroundColor})];case 1:return function(n,e){var t=document.createElement("a");t.download=e,t.href=n,document.body.appendChild(t),t.click(),document.body.removeChild(t)}(e.sent(),"".concat(Z.filename,".png")),[3,4];case 2:return e.sent(),h.ZP.error("Failed to download image!"),[3,4];case 3:return h.ZP.dismiss("toastDownload"),t(!1),u("performanceMode",!0),[7];case 4:return[2]}}))}));return function(){return n.apply(this,arguments)}}(),A=function(n,e){return C((0,a.Z)((0,o.Z)({},Z),(0,i.Z)({},n,e)))};return(0,l.jsxs)(m.u,{visible:e,setVisible:t,children:[(0,l.jsx)(m.u.Header,{children:"Download Image"}),(0,l.jsxs)(m.u.Content,{children:[(0,l.jsxs)(N,{children:["File Name",(0,l.jsx)(k,{children:(0,l.jsx)(g.I,{placeholder:"File Name",value:Z.filename,onChange:function(n){return A("filename",n.target.value)}})})]}),(0,l.jsxs)(N,{children:["Background Color",(0,l.jsxs)(k,{children:[(0,l.jsx)(p.e8,{triangle:"hide",colors:w,color:Z.backgroundColor,onChange:function(n){return A("backgroundColor",n.hex)},styles:{default:E}}),(0,l.jsx)(R,{color:Z.backgroundColor})]})]})]}),(0,l.jsxs)(m.u.Controls,{setVisible:t,children:[(0,l.jsxs)(v.z,{status:"SECONDARY",onClick:y,children:[(0,l.jsx)(x.C3L,{size:18})," Clipboard"]}),(0,l.jsxs)(v.z,{status:"SUCCESS",onClick:P,children:[(0,l.jsx)(x._hL,{size:18}),"Download"]})]})]})}},3719:function(n,e,t){"use strict";t.d(e,{Z:function(){return f}});var r=t(4924),i=t(6042),o=t(9396),a=t(828),c=function(n,e){var t=n.map((function(n){return n.id}));return e.filter((function(n){return t.includes(n.from)||t.includes(n.to)}))},u=t(9815),s=function(n,e,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=[],o=[],a=function(n){var c,s=t.filter((function(e){return e.from===n})).map((function(n){return n.to})),l=e.filter((function(n){return r.includes(n.id)&&!o.includes(n.id)&&o.push(n.id),s.includes(n.id)&&!r.includes(n.id)}));(c=i).push.apply(c,(0,u.Z)(l)),l.forEach((function(n){return a(n.id)}))};return a(n),[i,o]},l=t(6902),d={loading:!1,graphCollapsed:!1,nodes:[],edges:[],collapsedNodes:[],collapsedEdges:[],collapsedParents:[]},f=(0,l.ZP)((function(n,e){return(0,o.Z)((0,i.Z)({},d),{setGraphValue:function(e,t){return n((0,r.Z)({collapsedParents:[],collapsedNodes:[],collapsedEdges:[]},e,t))},expandNodes:function(t){var r=(0,a.Z)(s(t,e().nodes,e().edges,e().collapsedParents),2),i=r[0],o=r[1],u=c(i,e().edges),l=i.map((function(n){return n.id})).concat(o),d=u.map((function(n){return n.id})),f=e().collapsedParents.filter((function(n){return n!==t})),p=e().collapsedNodes.filter((function(n){return!l.includes(n)})),h=e().collapsedEdges.filter((function(n){return!d.includes(n)}));n({collapsedParents:f,collapsedNodes:p,collapsedEdges:h,graphCollapsed:!1})},collapseNodes:function(t){var r=(0,a.Z)(s(t,e().nodes,e().edges),1)[0],i=c(r,e().edges),o=r.map((function(n){return n.id})),u=i.map((function(n){return n.id}));n({collapsedParents:e().collapsedParents.concat(t),collapsedNodes:e().collapsedNodes.concat(o),collapsedEdges:e().collapsedEdges.concat(u)})},collapseGraph:function(){var t=e().edges,r=t.map((function(n){return n.to})),i=t.map((function(n){return n.from})).filter((function(n){return!r.includes(n)})),o=t.filter((function(n){return i.includes(n.from)})).map((function(n){return n.to}));n({collapsedParents:e().nodes.filter((function(n){return!i.includes(n.id)&&n.data.isParent})).map((function(n){return n.id})),collapsedNodes:e().nodes.filter((function(n){return!i.includes(n.id)&&!o.includes(n.id)})).map((function(n){return n.id})),collapsedEdges:e().edges.filter((function(n){return!i.includes(n.from)})).map((function(n){return n.id})),graphCollapsed:!0})},expandGraph:function(){n({collapsedNodes:[],collapsedEdges:[],collapsedParents:[],graphCollapsed:!1})}})}))},1116:function(n,e,t){"use strict";t.r(e),t.d(e,{StyledEditorWrapper:function(){return $n},StyledPageWrapper:function(){return Qn},default:function(){return ne}});var r=t(7297),i=t(5893),o=t(7294),a=t(9008),c=t.n(a),u=t(828),s=t(1664),l=t.n(s),d=t(1163),f=t(6501),p=t(8193),h=t(471),x=t(9647),v=t(3854),g=t(5434),m=t(9327),b=t(6042),j=t(9396),Z=t(9534),C=t(9521);function y(){var n=(0,r.Z)(["\n  position: relative;\n  width: fit-content;\n  height: 100%;\n"]);return y=function(){return n},n}function E(){var n=(0,r.Z)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(calc(100% + 15px), 25%);\n  z-index: 2;\n  background: ",";\n  color: ",";\n  border-radius: 5px;\n  padding: 4px 8px;\n  display: ",';\n  white-space: nowrap;\n  font-size: 16px;\n  user-select: none;\n  font-weight: 500;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),\n    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),\n    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);\n\n  &::after {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform: translate(-90%, 50%);\n    border-width: 8px;\n    border-style: solid;\n    border-color: transparent '," transparent\n      transparent;\n  }\n\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return E=function(){return n},n}function w(){var n=(0,r.Z)([""]);return w=function(){return n},n}var N=C.ZP.div(y()),k=C.ZP.div(E(),(function(n){return n.theme.BACKGROUND_PRIMARY}),(function(n){return n.theme.TEXT_NORMAL}),(function(n){return n.visible?"initial":"none"}),(function(n){return n.theme.BACKGROUND_PRIMARY})),R=C.ZP.div(w()),P=function(n){var e=n.children,t=n.title,r=(0,Z.Z)(n,["children","title"]),a=(0,u.Z)(o.useState(!1),2),c=a[0],s=a[1];return(0,i.jsxs)(N,(0,j.Z)((0,b.Z)({},r),{children:[t&&(0,i.jsx)(k,{visible:c,children:t}),(0,i.jsx)(R,{onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},children:e})]}))},A=t(3565),O=t(1342),S=t(9189),D=function(n){var e=n.visible,t=n.setVisible,r=(0,S.Z)((function(n){return n.setJson}));return(0,i.jsxs)(O.u,{visible:e,setVisible:t,children:[(0,i.jsx)(O.u.Header,{children:"Clear JSON"}),(0,i.jsx)(O.u.Content,{children:"Are you sure you want to clear JSON?"}),(0,i.jsx)(O.u.Controls,{setVisible:t,children:(0,i.jsx)(A.z,{status:"DANGER",onClick:function(){r("{}"),f.ZP.success("Cleared JSON and removed from memory."),t(!1)},children:"Confirm"})})]})},_=t(7471),T=t(1427);function I(){var n=(0,r.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return I=function(){return n},n}function G(){var n=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: ",";\n  border: 2px dashed ",';\n  border-radius: 5px;\n  width: 100%;\n  min-height: 200px;\n  padding: 16px;\n  cursor: pointer;\n\n  input[type="file"] {\n    display: none;\n  }\n']);return G=function(){return n},n}function L(){var n=(0,r.Z)(["\n  color: ",";\n"]);return L=function(){return n},n}function z(){var n=(0,r.Z)(["\n  color: ",";\n  margin-bottom: 0;\n"]);return z=function(){return n},n}var V=(0,C.ZP)(O.u.Content)(I()),B=C.ZP.label(G(),(function(n){return n.theme.BACKGROUND_SECONDARY}),(function(n){return n.theme.BACKGROUND_TERTIARY})),F=C.ZP.span(L(),(function(n){return n.theme.INTERACTIVE_NORMAL})),J=C.ZP.h3(z(),(function(n){return n.theme.INTERACTIVE_ACTIVE})),M=function(n){var e,t=n.visible,r=n.setVisible,a=(0,S.Z)((function(n){return n.setJson})),c=(0,u.Z)(o.useState(""),2),s=c[0],l=c[1],d=(0,u.Z)(o.useState(null),2),h=d[0],x=d[1];return(0,i.jsxs)(O.u,{visible:t,setVisible:r,children:[(0,i.jsx)(O.u.Header,{children:"Import JSON"}),(0,i.jsxs)(V,{children:[(0,i.jsx)(T.I,{value:s,onChange:function(n){return l(n.target.value)},type:"url",placeholder:"URL of JSON to fetch"}),(0,i.jsxs)(B,{children:[(0,i.jsx)("input",{onChange:function(n){var e;n.target.files&&x(null===(e=n.target.files)||void 0===e?void 0:e.item(0))},type:"file",accept:"application/JSON"},null===h||void 0===h?void 0:h.name),(0,i.jsx)(p.aBR,{size:48}),(0,i.jsx)(J,{children:"Click Here to Upload JSON"}),(0,i.jsx)(F,{children:null!==(e=null===h||void 0===h?void 0:h.name)&&void 0!==e?e:"None"})]})]}),(0,i.jsx)(O.u.Controls,{setVisible:r,children:(0,i.jsx)(A.z,{status:"SECONDARY",onClick:function(){if(s)return x(null),f.ZP.loading("Loading...",{id:"toastFetch"}),fetch(s).then((function(n){return n.json()})).then((function(n){a(JSON.stringify(n)),r(!1)})).catch((function(){return f.ZP.error("Failed to fetch JSON!")})).finally((function(){return f.ZP.dismiss("toastFetch")}));if(h){var n=new FileReader;n.readAsText(h,"UTF-8"),n.onload=function(n){var e;a(null===(e=n.target)||void 0===e?void 0:e.result),r(!1)}}},disabled:!(h||s),children:"Import"})})]})},U=t(8305),K=t(7516),Y=t(9193);function H(){var n=(0,r.Z)([""]);return H=function(){return n},n}function X(){var n=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  font-weight: 600;\n"]);return X=function(){return n},n}function q(){var n=(0,r.Z)(["\n  display: flex;\n  gap: 12px;\n"]);return q=function(){return n},n}function W(){var n=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 12px 0;\n  border-top: 1px solid ",";\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: ",";\n\n  &:first-of-type {\n    padding-top: 0;\n    border: none;\n  }\n"]);return W=function(){return n},n}var Q=C.ZP.p(H()),$=C.ZP.div(X(),(function(n){return n.theme.TEXT_DANGER})),nn=C.ZP.div(q()),en=C.ZP.div(W(),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT}),(function(n){return n.theme.INTERACTIVE_NORMAL})),tn=function(n){var e=n.visible,t=n.setVisible,r=(0,S.Z)((function(n){return n.json})),a=(0,u.Z)(o.useState(""),2),c=a[0],s=a[1],l='<iframe src="'.concat(Y.v,"/widget?json=").concat(c,'" width="512" height="384" style="border: 2px solid #b9bbbe; border-radius: 6px;"></iframe>'),d="".concat(Y.v,"/editor?json=").concat(c);o.useEffect((function(){if(e){var n=(0,U.nN)(JSON.parse(r)),t=JSON.stringify(n);s(encodeURIComponent(t))}}),[r,e]);var p=function(n){navigator.clipboard.writeText(n),f.ZP.success("Link copied to clipboard."),t(!1)};return(0,i.jsxs)(O.u,{visible:e,setVisible:t,children:[(0,i.jsx)(O.u.Header,{children:"Create a Share Link"}),(0,i.jsx)(O.u.Content,{children:c.length>5e3?(0,i.jsxs)($,{children:[(0,i.jsx)(K.tJu,{size:60}),(0,i.jsx)(Q,{children:"Link size exceeds 5000 characters, unable to generate link for file of this size!"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(en,{children:["Share Link",(0,i.jsxs)(nn,{children:[(0,i.jsx)(T.I,{value:d,type:"url",readOnly:!0}),(0,i.jsx)(A.z,{status:"SECONDARY",onClick:function(){return p(d)},children:"Copy"})]})]}),(0,i.jsxs)(en,{children:["Embed into your website",(0,i.jsxs)(nn,{children:[(0,i.jsx)(T.I,{value:l,type:"url",readOnly:!0}),(0,i.jsx)(A.z,{status:"SECONDARY",onClick:function(){return p(l)},children:"Copy"})]})]})]})}),(0,i.jsx)(O.u.Controls,{setVisible:t})]})},rn=t(3719);var on=t(374);function an(){var n=(0,r.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: fit-content;\n  background: ",";\n  padding: 4px;\n  border-right: 1px solid ",";\n\n  @media only screen and (max-width: 768px) {\n    flex-direction: row;\n    width: 100%;\n  }\n"]);return an=function(){return n},n}function cn(){var n=(0,r.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  font-size: 26px;\n  font-weight: 600;\n  width: fit-content;\n  color: ",";\n  cursor: pointer;\n\n  svg {\n    padding: 12px 8px;\n    vertical-align: middle;\n  }\n\n  a {\n    display: flex;\n  }\n\n  &:hover :is(a, svg) {\n    color: ",";\n  }\n\n  @media only screen and (max-width: 768px) {\n    font-size: 22px;\n\n    svg {\n      padding: 8px 4px;\n      vertical-align: middle;\n    }\n  }\n"]);return cn=function(){return n},n}function un(){var n=(0,r.Z)(["\n  color: ",";\n"]);return un=function(){return n},n}function sn(){var n=(0,r.Z)(["\n  transform: rotate(",");\n"]);return sn=function(){return n},n}function ln(){var n=(0,r.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  .mobile {\n    display: none;\n  }\n\n  @media only screen and (max-width: 768px) {\n    justify-content: space-evenly;\n    flex-direction: row;\n\n    .mobile {\n      display: initial;\n    }\n\n    .desktop {\n      display: none;\n    }\n  }\n"]);return ln=function(){return n},n}function dn(){var n=(0,r.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return dn=function(){return n},n}function fn(){var n=(0,r.Z)(["\n  color: ",";\n  padding: 8px 4px;\n  border-bottom: 1px solid ",";\n\n  @media only screen and (max-width: 768px) {\n    border-bottom: 0;\n  }\n"]);return fn=function(){return n},n}var pn=C.ZP.div(an(),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),hn=C.ZP.button(cn(),(function(n){return n.theme.SIDEBAR_ICONS}),(function(n){return n.theme.INTERACTIVE_HOVER})),xn=C.ZP.span(un(),(function(n){var e=n.theme;return n.secondary?e.INTERACTIVE_HOVER:e.ORANGE})),vn=(0,C.ZP)(m.S$H)(sn(),(function(n){var e=n.rotate;return"".concat(e,"deg")})),gn=C.ZP.nav(ln()),mn=C.ZP.nav(dn()),bn=C.ZP.a(fn(),(function(n){return n.theme.FULL_WHITE}),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT}));function jn(n){return"LEFT"===n?90:"UP"===n?180:"RIGHT"===n?270:360}var Zn=function(){var n=(0,S.Z)((function(n){return n.getJson})),e=(0,S.Z)((function(n){return n.setConfig})),t=(0,S.Z)((function(n){return n.centerView})),r=(0,u.Z)(o.useState(!1),2),a=r[0],c=r[1],s=(0,u.Z)(o.useState(!1),2),m=s[0],b=s[1],j=(0,u.Z)(o.useState(!1),2),Z=j[0],C=j[1],y=(0,u.Z)(o.useState(!1),2),E=y[0],w=y[1],N=((0,d.useRouter)().push,(0,u.Z)((0,S.Z)((function(n){return[n.expand,n.layout,n.hideEditor]}),on.Z),3)),k=N[0],R=N[1],A=N[2],O=(0,rn.Z)(),T=O.collapseGraph,I=O.expandGraph,G=O.graphCollapsed;return(0,i.jsxs)(pn,{children:[(0,i.jsxs)(gn,{children:[(0,i.jsx)(l(),{passHref:!0,href:"/",children:(0,i.jsxs)(hn,{as:bn,children:[(0,i.jsx)(xn,{children:"J"}),(0,i.jsx)(xn,{secondary:!0,children:"C"})]})}),(0,i.jsx)(P,{className:"mobile",title:"Edit JSON",children:(0,i.jsx)(hn,{onClick:function(){return e("hideEditor",!A)},children:(0,i.jsx)(p.$iz,{})})}),(0,i.jsx)(P,{title:"Import File",children:(0,i.jsx)(hn,{onClick:function(){return c(!0)},children:(0,i.jsx)(p.O1u,{})})}),(0,i.jsx)(P,{title:"Rotate Layout",children:(0,i.jsx)(hn,{onClick:function(){var n=function(n){switch(n){case"RIGHT":return"DOWN";case"DOWN":return"LEFT";case"LEFT":return"UP";default:return"RIGHT"}}(R);e("layout",n)},children:(0,i.jsx)(vn,{rotate:jn(R)})})}),(0,i.jsx)(P,{className:"mobile",title:"Center View",children:(0,i.jsx)(hn,{onClick:t,children:(0,i.jsx)(g.XIv,{})})}),(0,i.jsx)(P,{className:"desktop",title:k?"Shrink Nodes":"Expand Nodes",children:(0,i.jsx)(hn,{title:"Toggle Expand/Shrink",onClick:function(){e("expand",!k),(0,f.ZP)("".concat(k?"Shrunk":"Expanded"," nodes."))},children:k?(0,i.jsx)(h.DUJ,{}):(0,i.jsx)(h.q6J,{})})}),(0,i.jsx)(P,{className:"desktop",title:G?"Expand Graph":"Collapse Graph",children:(0,i.jsx)(hn,{title:"Expand/Collapse Graph",onClick:function(){G?I():T(),(0,f.ZP)("".concat(G?"Expanded":"Collapsed"," graph."))},children:G?(0,i.jsx)(h.Dc4,{}):(0,i.jsx)(h.jQ7,{})})}),(0,i.jsx)(P,{className:"desktop",title:"Save JSON",children:(0,i.jsx)(hn,{onClick:function(){var e=document.createElement("a"),t=new Blob([n()],{type:"text/plain"});e.href=window.URL.createObjectURL(t),e.download="jsoncrack.json",e.click()},children:(0,i.jsx)(p.JMf,{})})}),(0,i.jsx)(P,{className:"mobile",title:"Download Image",children:(0,i.jsx)(hn,{onClick:function(){return w(!0)},children:(0,i.jsx)(x._hL,{})})}),(0,i.jsx)(P,{title:"Clear JSON",children:(0,i.jsx)(hn,{onClick:function(){return b(!0)},children:(0,i.jsx)(p.VPh,{})})}),(0,i.jsx)(P,{className:"desktop",title:"Share",children:(0,i.jsx)(hn,{onClick:function(){return C(!0)},children:(0,i.jsx)(p.uFt,{})})})]}),(0,i.jsxs)(mn,{children:[(0,i.jsx)(hn,{children:(0,i.jsx)(l(),{href:"https://twitter.com/jsoncrack",children:(0,i.jsx)("a",{"aria-label":"Twitter",rel:"me",target:"_blank",children:(0,i.jsx)(p.h3E,{})})})}),(0,i.jsx)(hn,{children:(0,i.jsx)(l(),{href:"https://github.com/AykutSarac/jsoncrack.com",children:(0,i.jsx)("a",{"aria-label":"GitHub",rel:"me",target:"_blank",children:(0,i.jsx)(p.RrF,{})})})}),(0,i.jsx)(hn,{children:(0,i.jsx)(l(),{href:"https://github.com/sponsors/AykutSarac",children:(0,i.jsx)("a",{"aria-label":"GitHub Sponsors",rel:"me",target:"_blank",children:(0,i.jsx)(v.dOX,{})})})})]}),(0,i.jsx)(M,{visible:a,setVisible:c}),(0,i.jsx)(D,{visible:m,setVisible:b}),(0,i.jsx)(tn,{visible:Z,setVisible:C}),(0,i.jsx)(_._,{visible:E,setVisible:w})]})},Cn=t(5152),yn=t.n(Cn),En=t(524);t(1722);function wn(){var n=(0,r.Z)(["\n  z-index: 1;\n"]);return wn=function(){return n},n}function Nn(){var n=(0,r.Z)(["\n  position: relative;\n  display: flex;\n  width: 100%;\n  padding: 4px 16px;\n  height: 28px;\n  border-radius: 0;\n  justify-content: space-between;\n  align-items: center;\n  color: ",";\n  pointer-events: ",";\n  background: ",";\n  box-shadow: 0 1px 0px ",";\n"]);return Nn=function(){return n},n}function kn(){var n=(0,r.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n  gap: 10px;\n  font-size: 16px;\n"]);return kn=function(){return n},n}function Rn(){var n=(0,r.Z)(["\n  color: ",";\n  border-bottom: 1px solid ",";\n  font-size: 12px;\n  padding: 12px;\n  margin: 0;\n  word-wrap: break-word;\n  white-space: pre-line;\n"]);return Rn=function(){return n},n}var Pn=C.ZP.div(wn()),An=C.ZP.div(Nn(),(function(n){var e=n.theme;return n.error?e.TEXT_DANGER:e.TEXT_POSITIVE}),(function(n){return!n.error&&"none"}),(function(n){return n.theme.BACKGROUND_SECONDARY}),(function(n){return n.theme.BACKGROUND_TERTIARY})),On=C.ZP.span(kn()),Sn=(C.ZP.pre(Rn(),(function(n){return n.theme.TEXT_DANGER}),(function(n){return n.theme.SILVER_DARK})),function(n){var e=n.hasError;return(0,i.jsx)(Pn,{children:(0,i.jsx)(An,{error:e,children:(0,i.jsxs)(On,{children:[e?(0,i.jsx)(g.pKf,{size:20}):(0,i.jsx)(g.S5G,{size:20}),e?"Invalid JSON":"JSON Valid"]})})})}),Dn=t(9604),_n=t(6065),Tn=t(2628),In=t(9577),Gn=t(369);function Ln(){var n=(0,r.Z)(["\n  display: grid;\n  height: calc(100vh - 36px);\n  grid-template-columns: 100%;\n  grid-template-rows: minmax(0, 1fr);\n"]);return Ln=function(){return n},n}Dn._m.config({paths:{vs:"https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs"}});var zn={formatOnPaste:!0,minimap:{enabled:!1}},Vn=C.ZP.div(Ln());function Bn(n){n.languages.json.jsonDefaults.setDiagnosticsOptions({allowComments:!0,comments:"ignore"})}var Fn=function(n){var e=n.setHasError,t=(0,S.Z)((function(n){return n.json})),r=(0,S.Z)((function(n){return n.expand})),a=(0,S.Z)((function(n){return n.setJson})),c=(0,rn.Z)((function(n){return n.setGraphValue})),s=(0,In.Z)((function(n){return n.lightmode?"light":"vs-dark"})),l=(0,u.Z)(o.useState(""),2),d=l[0],f=l[1];return o.useEffect((function(){var n=(0,Gn.E)(t,r),e=n.nodes,i=n.edges;c("loading",!0),c("nodes",e),c("edges",i),f(t)}),[r,t,c]),o.useEffect((function(){var n=setTimeout((function(){try{if(!d)return e(!1),a("{}");var n=JSON.stringify((0,_n.Qc)(d),null,2);a(n),e(!1)}catch(t){e(!0)}}),1200);return function(){return clearTimeout(n)}}),[d,a,e]),(0,i.jsx)(Vn,{children:(0,i.jsx)(Dn.ZP,{height:"100%",defaultLanguage:"json",value:d,theme:s,options:zn,onChange:f,loading:(0,i.jsx)(Tn.g,{message:"Loading Editor..."}),beforeMount:Bn})})};function Jn(){var n=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: auto;\n  user-select: none;\n"]);return Jn=function(){return n},n}var Mn=C.ZP.div(Jn()),Un=function(){var n=(0,u.Z)(o.useState(!1),2),e=n[0],t=n[1];return(0,i.jsxs)(Mn,{children:[(0,i.jsx)(Sn,{hasError:e}),(0,i.jsx)(Fn,{setHasError:t})]})};function Kn(){var n=(0,r.Z)(["\n  position: relative !important;\n  display: flex;\n  background: ",";\n"]);return Kn=function(){return n},n}var Yn=(0,C.ZP)(En.oL)(Kn(),(function(n){return n.theme.BACKGROUND_SECONDARY})),Hn=yn()((function(){return Promise.all([t.e(987),t.e(866),t.e(434),t.e(907),t.e(260),t.e(847),t.e(62),t.e(111)]).then(t.bind(t,1111))}),{loadableGenerated:{webpack:function(){return[1111]}},ssr:!1}),Xn=function(){var n=(0,S.Z)((function(n){return n.hideEditor})),e=(0,S.Z)((function(n){return n.setConfig})),t=window.innerWidth<=768;return o.useEffect((function(){t&&e("hideEditor",!0)}),[t,e]),(0,i.jsxs)(Yn,{proportionalLayout:!1,vertical:t,children:[(0,i.jsx)(En.oL.Pane,{preferredSize:t?"100%":400,minSize:n?0:300,maxSize:t?1/0:800,visible:!n,children:(0,i.jsx)(Un,{})}),(0,i.jsx)(En.oL.Pane,{minSize:0,maxSize:t&&!n?0:1/0,children:(0,i.jsx)(Hn,{})})]})};function qn(){var n=(0,r.Z)(["\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n  width: 100%;\n\n  @media only screen and (max-width: 768px) {\n    position: fixed;\n    height: -webkit-fill-available;\n    flex-direction: column;\n  }\n"]);return qn=function(){return n},n}function Wn(){var n=(0,r.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n"]);return Wn=function(){return n},n}var Qn=C.ZP.div(qn()),$n=C.ZP.div(Wn()),ne=function(){return(0,i.jsxs)($n,{children:[(0,i.jsxs)(c(),{children:[(0,i.jsx)("title",{children:"Editor | JSON Crack"}),(0,i.jsx)("meta",{name:"description",content:"View your JSON data in graphs instantly."})]}),(0,i.jsxs)(Qn,{children:[(0,i.jsx)(Zn,{}),(0,i.jsx)($n,{children:(0,i.jsx)(Xn,{})})]})]})}},369:function(n,e,t){"use strict";t.d(e,{E:function(){return v}});var r=t(2670),i=t(9534),o=t(828),a=t(9815),c=t(6065),u=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2?arguments[2]:void 0,r=("string"===typeof n?n:n.map((function(n){var e=(0,o.Z)(n,2),t=e[0],r=e[1];return"".concat(t,": ").concat(r)})).join("\n")).split("\n"),i=r.map((function(n){return n.length})),a=i.sort((function(n,e){return e-n}))[0],c=function(){return Array.isArray(n)&&!n.length?40:t?35+8*a+(e?60:0):e?170:200},u=function(){return 17.8*r.length<30?40:18*(r.length+1)};return{width:c(),height:u()}},s=function(n){var e=(0,o.Z)(n,2),t=(e[0],e[1]),i=null===t,a=Array.isArray(t)&&t.length,c=(0,r.Z)(t,Object);return!i&&(a||c)},l=function(n){var e=(0,o.Z)(n,2),t=(e[0],e[1]);return!Array.isArray(t)&&!(0,r.Z)(t,Object)};function d(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2?arguments[2]:void 0;return(0,r.Z)(n,Object)||(n=[n]),Object.entries(n).filter(s).flatMap((function(n){var r=(0,o.Z)(n,2),i=r[0],a=r[1],c=u(i,!0,e),s=c.width,l=c.height,d=p(a,e,t);return[{id:t(),text:i,children:d,width:s,height:l,data:{isParent:!0,childrenCount:d.length}}]}))}function f(n){return(0,r.Z)(n,Object)?Object.entries(n).filter(l):String(n)}var p=function(n){var e,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(e=0,function(){return String(++e)});return n?[n].flat().map((function(n){var e=f(n),i=u(e,!1,t),o=i.width,a=i.height;return{id:r(),text:e,width:o,height:a,children:d(n,t,r),data:{isParent:!1,childrenCount:0,isEmpty:!e.length}}})):[]},h=function(n){return n.flatMap((function(n){var e=n.children;return[(0,i.Z)(n,["children"])].concat((0,a.Z)(h(e)))}))},x=function(n){return n.flatMap((function(n){var e=n.id,t=n.children,r=void 0===t?[]:t;return(0,a.Z)(r.map((function(n){var t=n.id;return{id:"e".concat(e,"-").concat(t),from:e,to:t}}))).concat((0,a.Z)(x(r)))}))},v=function(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{var t=(0,c.Qc)(n);Array.isArray(t)||(t=[t]);var r=[],i=[],o=p(t,e),u=(0,a.Z)(h(o)).concat((0,a.Z)(x(o)));return u.forEach((function(n){g(n)?r.push(n):i.push(n)})),{nodes:r,edges:i}}catch(s){return console.error(s),{nodes:[],edges:[]}}};function g(n){return"text"in n}}},function(n){n.O(0,[228,556,90,955,874,617,279,544,774,888,179],(function(){return e=4754,n(n.s=e);var e}));var e=n.O();_N_E=e}]);