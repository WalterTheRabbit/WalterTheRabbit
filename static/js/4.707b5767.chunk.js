(this.webpackJsonpWalterTheRabbit=this.webpackJsonpWalterTheRabbit||[]).push([[4],{804:function(e,t,c){"use strict";c.r(t),c.d(t,"Main",(function(){return le}));var n=c(5),s=c.n(n),a=c(157),l=c.p+"static/media/logo_greenblue.ef3d2756.png",r=c(803),o=c.p+"static/media/menu.e527a2ba.svg",i=c(219),d=c(11);const b=e=>{let{onDisconnect:t=(()=>{}),onPayments:c=(()=>{}),connectionStatus:a,account:l,ensName:b=null}=e;const m=Object(n.useRef)(null),j=Object(n.useRef)(null),[u,f]=s.a.useState(!1),x=Object(i.b)(l,b);return Object(d.jsx)("div",{className:"flex flex-col",children:Object(d.jsx)("div",{className:"w-full sm:w-6/12 md:w-4/12 px-4 min-w-max",children:Object(d.jsxs)("div",{className:"relative flex align-middle w-full",children:[Object(d.jsx)("img",{className:"text-white w-10 h-10 font-bold uppercase text-sm shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-pointer",src:o,alt:"",ref:m,onClick:()=>{u?f(!1):m.current&&j.current&&(Object(r.a)(m.current,j.current,{placement:"bottom"}),f(!0))}}),Object(d.jsxs)("div",{ref:j,className:(u?"block ":"hidden ")+"bg-white text-base z-10 py-2 list-none rounded shadow-lg mt-1",style:{minWidth:"12rem"},children:[Object(d.jsx)("a",{href:"/orders",className:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-slate-700",onClick:c,children:"List Orders"}),Object(d.jsx)("p",{className:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent cursor-pointer text-slate-700",onClick:t,children:"Disconnect"}),Object(d.jsx)("div",{className:"h-0 my-2 border border-solid border-t-0 border-slate-800 opacity-25"}),Object(d.jsx)("div",{className:"text-xs py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-slate-700",children:Object(i.a)(l)}),Object(d.jsx)("div",{className:"text-xs py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-slate-700",children:x})]})]})})})};var m=c(35);const j=e=>{let{size:t,onDisconnect:c=(()=>{}),onSelectAccount:n=(()=>{}),items:s,disabled:a=!1,status:r,ensName:o=null,account:j=""}=e;const u=Object(m.g)(),f=Object(i.b)(j,o);return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"flex items-center justify-between mh-4",style:{width:"100%",minWidth:t,position:"relative"},children:[Object(d.jsxs)("div",{className:"flex items-center justify-between mh-4 mt-2",children:[Object(d.jsx)("img",{className:"h-20 w-60 ml-4",src:l,alt:"",draggable:!1,onClick:()=>{console.info("home clicked"),u.replace("/home")}}),Object(d.jsx)("div",{className:"flex flex-col justify-between ml-2"})]}),Object(d.jsxs)("div",{className:"flex items-center",children:[Object(d.jsxs)("div",{className:"flex flex-col items-end justify-end",children:[!a&&!j&&Object(d.jsx)("p",{className:"text-white text-sm mr-4",children:r}),!a&&!j&&f&&Object(d.jsx)("p",{className:"text-white mr-2",children:f})]}),!a&&f&&Object(d.jsx)(b,{onDisconnect:c,onPayments:()=>{console.info("not implemented")},connectionStatus:r,account:j,ensName:o})]})]})})};c(797),c.p;var u=c(759),f=c.n(u),x=c(231),h=c(118);const g=e=>{let{accounts:t,account:c="",open:n,onClose:s,onSelect:a}=e;return Object(d.jsxs)(f.a,{onRequestClose:s,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},isOpen:n,children:[Object(d.jsx)("h2",{className:"mb-4",children:"Select Wallet"}),t.map((e=>{const[t,n,s]=e.split(":");if(!x.a[t]||!x.a[t][n])return Object(d.jsx)(d.Fragment,{});const l=x.a[t][n],r="solana"===t;return Object(d.jsxs)("div",{onClick:()=>a(e),className:"flex items-center mt-2 mb-2 border-2 p-2 rounded-xl cursor-pointer",style:{borderColor:"rgb(".concat(l.rgb,")"),boxShadow:c===e?"0 0 10px rgb(".concat(l.rgb,")"):"none",backgroundColor:r?"rgba(0,0,0,.3)":"transparent"},children:[Object(d.jsx)("img",{className:"w-10 h-10 rounded-full mr-2",src:l.logo,alt:t}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:l.name}),Object(d.jsx)("p",{children:Object(h.a)(s)})]})]},e)}))]})};var p=c.p+"static/media/qrCodeIcon.2d8128ac.svg",O=c.p+"static/media/qrCodeScanning.91cdebd5.svg",w=c.p+"static/media/qrCodeBar.bf25eaae.svg",v=c(143),A=c(165),N=c(798);const y=e=>e.userState,S=(Object(N.a)([y],(e=>e.isLogged)),Object(N.a)([y],(e=>e.loading)),Object(N.a)([y],(e=>e.account)),Object(N.a)([y],(e=>e.nonce)),Object(N.a)([y],(e=>e.account)),Object(N.a)([y],(e=>e.accountInfo))),z=Object(N.a)([y],(e=>e.ensName)),k=Object(N.a)([y],(e=>e.tickers)),C=Object(N.a)([y],(e=>e.transactionData));Object(N.a)([y],(e=>e.transactionInProgress)),Object(N.a)([y],(e=>e.transactionInfo)),Object(N.a)([y],(e=>e.order)),Object(N.a)([y],(e=>e.merchantInfo));var I=c(769),R=c.n(I),B=c(49),V=c(32),Z=c(770);function Q(e,t){let c=null;try{c=t?t.find((t=>t.currency===e)):null}catch(n){console.info("error searching for ticker ".concat(e,": ").concat(n))}return c}const E=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)throw new Error("input url must be not empty");let c=e;e.includes("?")&&(c=e.substring(e.lastIndexOf("?")));const n=new URLSearchParams(c);console.log("url: ".concat(e," queryString: ").concat(c," parsed: ").concat(n));const s=Number(n.get("amount")),a=n.get("orderId"),l=n.get("orderTrackingId"),r=n.get("merchantAddress");if(console.log("trackingId: ".concat(l," orderId: ").concat(a," amount: ").concat(s)),!t&&(!a||!s||!r))throw new Error("orderId, merchantAddress and amount are required.");return{externalOrderId:a||"",amount:s,orderTrackingId:l||"",merchantAddress:r||""}};var D=c(741),q=c.p+"static/media/background_landscape.effc869e.png";const L=()=>{const e=Object(m.g)(),t=Object(a.b)();let c=Object(D.a)().search;const[s,l]=Object(n.useState)(!1),[r,o]=Object(n.useState)(!1),[i,b]=Object(n.useState)(""),[j,u]=Object(n.useState)(!1),[f,x]=Object(n.useState)(!1),{accounts:h,balances:g,refreshBalances:N}=Object(v.b)(),y=Object(A.c)(h,g);console.info("selected account:".concat(y.account," balance:").concat(y.balanceString," token:").concat(y.token));const S=Object(a.c)(k),z=Object(a.c)(C);Object(n.useEffect)((()=>{console.info("useEffect transactionCreatedLock: ".concat(f," trxCreated: ").concat(z," transaction: ").concat(null===z||void 0===z?void 0:z.transaction)),null!==z&&void 0!==z&&z.transaction&&z.transaction.value&&!f&&(x(!0),j?e.replace("/buy"):e.push("/buy"))}),[z,f,x,e]),Object(n.useEffect)((()=>{if(c&&(null===S||void 0===S?void 0:S.length)>0){console.info("detected order query: ".concat(c));try{const e=E(c);console.log("orderTrackingId: ".concat(e.orderTrackingId," externalOrderId: ").concat(e.externalOrderId," amount: ").concat(e.amount)),e.orderTrackingId&&e.amount&&!j?(u(!0),L(e)):console.log("not creating trx")}catch(e){console.log(e),V.b.error("error scanning for url ".concat(null===e||void 0===e?void 0:e.message),{autoClose:600})}}}),[c,S]);const I=()=>{console.info("starting scanning...."),o(!r)},L=e=>{const c=((e,t,c)=>{let n,s=Q(t,c);return s?(n=e/s.price,console.info("converting ".concat(e," USD = ").concat(n," ").concat(t," - Price 1 ").concat(t," = ").concat(null===s||void 0===s?void 0:s.price," USD"))):(console.info("ticker are not available for ETH"),n=null),n})(e.amount,y.token,S);c?(l(!0),e.orderTrackingId?t(B.a.setCreateTransaction({account:y.account,amount:c,orderTrackingId:e.orderTrackingId})):V.b.error("Invalid order tracking ID")):V.b.error("Could not convert value to crypto. Invalid tickers ".concat(S.length))},F=Number(y.balanceString),M=y.token,T=((e,t,c)=>{let n,s=Q(t,c);return s?(n=e*s.price,console.info("".concat(e," ").concat(t," = ").concat(n," USD -  Price 1 ").concat(t," = ").concat(null===s||void 0===s?void 0:s.price," USD"))):(console.info("tickers are not available"),n=null),n})(F,M,S);function J(e){console.info("stop scanning...."),o(!1);try{b(e),console.info("qr ".concat(e));const t=E(e);L(t)}catch(t){console.info("Invalid QrCode url"),V.b.error("Invalid QrCode url")}}const P=Object(d.jsx)(Z.a,{onResult:(e,t)=>{e&&(console.log(null===e||void 0===e?void 0:e.getText()),J(e.getText())),t&&t.message&&console.info(t||"")},constraints:{facingMode:"environment"},scanDelay:300,containerStyle:{overflow:"initial"},videoStyle:{height:"100vh",width:"100vw",objectFit:"cover",overflow:"initial"},className:""});return Object(d.jsx)("div",{style:{backgroundImage:"url(".concat(q,")"),backgroundSize:"cover",transform:"scale(1.1)",position:"absolute",filter:"blur(0px) brightness(100%)",backgroundRepeat:"repeat",width:"100%",height:"100%",backfaceVisibility:"hidden"},children:Object(d.jsxs)("div",{className:"grid",children:[r&&P,Object(d.jsx)("div",{className:"absolute mt-10 w-full h-full",children:Object(d.jsx)("div",{className:"h-full flex justify-center items-center",children:Object(d.jsxs)("div",{className:"p-10 flex flex-col justify-between",children:[s?Object(d.jsx)("div",{className:"w-20 h-20 mt-10 mb-10",style:{alignSelf:"center"},children:Object(d.jsxs)("div",{className:"thecube w-20 h-20",style:{alignSelf:"center"},children:[Object(d.jsx)("div",{className:"cube c1"}),Object(d.jsx)("div",{className:"cube c2"}),Object(d.jsx)("div",{className:"cube c4"}),Object(d.jsx)("div",{className:"cube c3"})]})}):r?Object(d.jsx)("div",{className:"grid w-1/2 h-1/3 mb-4",onClick:I,style:{alignSelf:"center",backgroundImage:"url(".concat(O,")"),backgroundSize:"cover",overflow:"initial"},children:Object(d.jsx)("img",{className:"scan w-full",src:w,alt:""})}):Object(d.jsx)("img",{className:"w-1/2 h-1/3 mb-4 cursor-pointer",style:{alignSelf:"center"},src:p,alt:"",onClick:I}),Object(d.jsx)("p",{className:"text-white mt-8 text-center font-bold",children:"Scan Payment QR"}),Object(d.jsx)("div",{className:"mt-4",children:Object(d.jsx)("p",{className:"font-Righteous text-center text-secondary text-sm",style:{fontStyle:"normal"},children:"Scan the payment QR code provided by the store to checkout"})}),Object(d.jsx)("div",{className:"flex items-center justify-center mt-10",children:Object(d.jsxs)("div",{className:"w-full flex flex-col items-center justify-center bg-white font-secondary text-secondary bg-opacity-10 py-1 px-2 rounded-10xl",onClick:async()=>{console.info("refreshing balances "),await N(h)},children:[Object(d.jsx)("p",{style:{fontFamily:"Righteous",fontStyle:"normal"},className:"text-start text-xs mr-2 mt-2",children:"Current Balance"}),Object(d.jsx)("div",{className:"flex items-center",children:Object(d.jsx)("div",{className:"text-center font-bold",children:Object(d.jsx)("p",{style:{fontSize:"xx-large",fontFamily:"Montserrat",fontStyle:"normal"},children:T?"$ ".concat(R()(T).format("0,0.00")):""})})}),Object(d.jsxs)("div",{className:"flex items-center mb-2",children:[Object(d.jsx)("div",{className:"font-righteous text-center font-bold",children:Object(d.jsx)("p",{children:F?R()(F).format("0.000000"):y.balanceString.substring(0,y.balanceString.length>6?6:y.balanceString.length-1)})}),Object(d.jsx)("p",{className:"font-righteous text-white text-center font-bold text-sm ml-1",children:M})]})]})})]})})})]})})},F=()=>{console.info("loading dashboard");let e=L;return Object(d.jsx)("div",{className:"w-full h-full flex-1",children:Object(d.jsxs)(m.d,{children:[Object(d.jsx)(m.b,{path:"/home",component:e}),Object(d.jsx)(m.a,{to:"/home"})]})})};var M=c(771),T=c.n(M),J=(c.p,c.p+"static/media/superWalter.6bd01315.webp"),P=c.p+"static/media/text_bubble_small.38285679.svg",W=c.p+"static/media/walterLogoWhiteBorder.3148f34e.svg",X=c(805),U=c(772),Y=c(780),H=c.n(Y),G=(c(795),c(796),c.p+"static/media/1.21ec9026.png"),K=c.p+"static/media/2.6bb360df.png",_=c.p+"static/media/3.12048e5f.png",$=c.p+"static/media/4.3b9e1892.png",ee=c.p+"static/media/5.3613704f.png",te=c.p+"static/media/7.26326f11.png";const ce=()=>Object(d.jsx)("div",{className:"slider-container",children:Object(d.jsxs)(H.a,{dots:!0,infinite:!0,slidesToShow:3,slidesToScroll:1,centerMode:!0,centerPadding:"60px",autoplay:!0,autoplaySpeed:3e3,pauseOnHover:!0,children:[Object(d.jsx)("div",{className:"p-1",children:Object(d.jsx)("img",{className:"z-0 object-fill",src:G,alt:""})}),Object(d.jsx)("div",{className:"p-1",children:Object(d.jsx)("img",{className:"z-0 ",src:K,alt:""})}),Object(d.jsx)("div",{className:"p-1",children:Object(d.jsx)("img",{className:"z-0 ",src:_,alt:""})}),Object(d.jsx)("div",{className:"p-1",children:Object(d.jsx)("img",{className:"z-0 object-contain",src:$,alt:""})}),Object(d.jsx)("div",{className:"p-1",children:Object(d.jsx)("img",{className:"z-0 object-contain",src:ee,alt:""})}),Object(d.jsx)("div",{className:"p-1",children:Object(d.jsx)("img",{className:"z-0 object-contain",src:te,alt:""})})]})}),ne=()=>{const{qrCodeUri:e}=Object(v.b)(),[t,c]=Object(n.useState)(!1),[a,l]=Object(n.useState)(0),{t:r}=Object(X.a)(["special"]),[o,i]=Object(n.useState)(!1);function b(){navigator.clipboard.writeText(e||""),V.b.info("Copied",{autoClose:1200})}s.a.useEffect((()=>{if(console.log("setting qr code ".concat(e)),e){const t=new T.a({width:260,height:260,type:"svg",data:e,dotsOptions:{type:"dots",gradient:{type:"linear",rotation:90,colorStops:[{offset:.4,color:"#000000"},{offset:.9,color:"#000000"}]}},cornersDotOptions:{color:"#7214a7"},cornersSquareOptions:{color:"#f91f30",type:"extra-rounded"},backgroundOptions:{color:"rgb(255,255,255)"}}),c=document.getElementById("qrcode");c&&(c.innerHTML="",t.append(c))}}),[e]);const m=Object(d.jsx)("div",{className:"",children:Object(d.jsx)("div",{className:"flex flex-col items-center textBubble",style:{backgroundSize:"cover",alignSelf:"start",backgroundRepeat:"no-repeat",visibility:t||a>=2?"hidden":"visible"},children:Object(d.jsxs)("div",{className:"h-30 w-full flex flex-col items-center justify-center mt-8 pb-10 pr-1",style:{alignSelf:"start"},children:[Object(d.jsx)("div",{className:"z-10 flex justify-center items-center",children:Object(d.jsx)("a",{onClick:()=>{l(a+1)},children:0===a?Object(d.jsx)("p",{className:"font-righteous text-center text-black text-sm",children:r("loginMessage1")}):Object(d.jsx)("p",{className:"font-righteous text-center text-black text-sm",children:r("loginMessage2")})})}),1!==a?Object(d.jsx)("div",{}):Object(d.jsxs)("div",{className:"w-3/4 mt-1 flex flex-1 items-center justify-between",children:[Object(d.jsx)("a",{className:"cursor-pointer",rel:"noreferrer",target:"_blank",href:"https://twitter.com/WalterRabbitNFT",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})}),Object(d.jsx)("a",{className:"cursor-pointer",rel:"noreferrer",target:"_blank",href:"https://instagram.com/WalterRabbitNFT",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),Object(d.jsx)("a",{className:"cursor-pointer",rel:"noreferrer",target:"_blank",href:"https://discord.gg/UYcnzBnRQq",children:Object(d.jsx)("svg",{className:"h-7 w-6",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"})})})]})]})})});"url(".concat(P,")");"url(".concat(P,")");return Object(d.jsxs)("div",{className:"w-full h-full flex items-center overflow-auto",children:[Object(d.jsx)("div",{className:"bg-red-400 w-full lg:w-6/12 sm:w-6/12 md:w-4/12 absolute oscillateVertically z-10",style:{justifySelf:"start",alignSelf:"start"},children:Object(d.jsx)("img",{className:"mainLogo h-20 sm:h-20 md:h-30 lg:h-30 absolute z-10",src:W,alt:"",style:{justifySelf:"center",alignSelf:"center"},draggable:!1})}),Object(d.jsxs)(U.MouseParallaxContainer,{className:"w-full h-full parallax flex justify-center items-center",containerStyles:{width:"100%",display:"grid",gridTemplateColumns:"auto auto auto auto auto"},resetOnLeave:!0,children:[Object(d.jsx)(U.MouseParallaxChild,{factorX:.01,factorY:.005,updateStyles:{backgroundImage:"url(".concat(q,")"),backgroundSize:"cover",transform:"scale(1.1)",position:"absolute",filter:"blur(0px) brightness(100%)",backgroundRepeat:"no-repeat",width:"100%",height:"100%",backfaceVisibility:"hidden"},children:Object(d.jsx)("div",{className:"w-full flex justify-end",children:Object(d.jsx)("img",{className:"h-8 w-8 rotatingStar ".concat(o?"rotateIndefinitely":""),src:"data:image/png;base64,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",alt:"",style:{justifySelf:"end",alignSelf:"end"},draggable:!1,onClick:function(){i(!o)}})})}),Object(d.jsx)(U.MouseParallaxChild,{factorX:.005,factorY:.005,className:"h-full w-full flex items-center justify-end",children:Object(d.jsxs)("div",{className:"w-full h-full mt-40 lg:mt-80 pt-2 twoColumnContainer flex",children:[t?Object(d.jsx)("div",{}):Object(d.jsxs)("div",{className:"z-10",children:[" ",m," "]}),Object(d.jsx)("img",{className:"z-0 h-1/2 object-contain heightSmallerOnPortrait",src:J,alt:""}),Object(d.jsx)("div",{className:"bg-black bg-opacity-90 h-1/6 ml-20 p-8 flex items-center justify-center",style:{display:2===a?"block":"none"},children:Object(d.jsx)("div",{className:"w-128",children:Object(d.jsx)(ce,{})})})]})})]})]})};var se=c(346),ae=c.p+"static/media/menu_icon.7cde221c.svg";const le=()=>{const e=Object(a.c)(z),[t,c]=(Object(a.c)(S),Object(n.useState)(!1)),{session:l,isInitializing:r,connect:o,disconnect:i,switchAccount:b,initialized:m,account:u,isLoading:f,accounts:x}=Object(v.b)();s.a.useEffect((()=>{m&&!l&&o()}),[m,o,l]);let h=[{route:"/home",icon:ae}],p=e||null;return Object(d.jsxs)("div",{className:"h-screen w-screen flex flex-col",children:[u&&Object(d.jsx)(j,{status:f?"Connecting...":u?"Connected":"Disconnected",onDisconnect:()=>{l&&i()},onSelectAccount:()=>c(!0),account:u,ensName:p,items:h,size:200},"topMenu"),f||r?Object(d.jsx)(se.a,{}):u?Object(d.jsx)(F,{}):Object(d.jsx)(ne,{}),Object(d.jsx)(g,{account:u,accounts:x,open:t,onClose:()=>c(!1),onSelect:e=>{c(!1),b(e)}})]})}}}]);
//# sourceMappingURL=4.707b5767.chunk.js.map