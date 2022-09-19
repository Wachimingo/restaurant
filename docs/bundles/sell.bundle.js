(()=>{"use strict";var e,t={527:(e,t,r)=>{r.d(t,{z:()=>n.z});var n=r(586);r(670)},556:(e,t,r)=>{r.d(t,{ZC:()=>n.ZC,H1:()=>a,H3:()=>o,H4:()=>c,or:()=>n.or,P:()=>m.P,$0:()=>n.$0});var n=r(707),l=r(725);const a=l.ZP.h1`
    font-size: 3rem;
    padding: 0 0 10px 0;
    margin:0;
`,o=(l.ZP.h2`
    font-size: 2.5rem;
    padding: 0 0 10px 0;
    margin:0;
`,l.ZP.h3`
    font-size: 2.0rem;
    padding: 0 0 10px 0;
    margin:0;
`),c=l.ZP.h4`
    font-size: 1.3rem;
    padding: 0 0 10px 0;
    margin:0;
`;var m=r(935)},917:(e,t,r)=>{r.d(t,{$0:()=>i.$0,H1:()=>i.H1,H3:()=>i.H3,H4:()=>i.H4,MY:()=>s.M,Mx:()=>m.M,P:()=>i.P,TD:()=>d.TD,TH:()=>d.TH,TR:()=>d.TR,ZC:()=>i.ZC,ZD:()=>l.Z,ZL:()=>u.Z,Zb:()=>a.Z,iA:()=>d.i,l2:()=>n.l,or:()=>i.or,u_:()=>c.u,zx:()=>o.z});var n=r(982),l=r(224),a=r(860),o=r(527),c=r(277),m=r(873),i=r(556),s=(r(896),r(889)),u=(r(288),r(672)),d=r(522)},522:(e,t,r)=>{r.d(t,{TD:()=>o,TH:()=>a,TR:()=>c,i:()=>l}),r(959);var n=r(725);const l=n.ZP.table`
    border-collapse: collapse;
    width: 100%;
`,a=n.ZP.th`
    border: 1px solid #ddd;
    padding: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: ${e=>e.theme.colors.navBar.primaryColor};
    color: white;
`,o=n.ZP.td`
    border: 1px solid #ddd;
    padding: 8px;
`,c=n.ZP.tr`
    &:nth-child(even){background-color: ${e=>"light"===e.theme.id?"#D4D3D3":"#615F5F"}}
    &:hover {background-color: #ddd;}
`},516:(e,t,r)=>{var n=r(959),l=r(478),a=r(725),o=r(943),c=r(686),m=r(917),i=r(284);const s=({name:e,price:t,image:r,children:l})=>n.createElement(m.Zb,null,n.createElement(m.MY,{src:`https://raw.githubusercontent.com/Wachimingo/restaurant/main/docs/assets/${r}`,width:"100%",height:"250px"}),n.createElement(m.H4,null,e),n.createElement(m.H3,null,"$",t),l),u=(0,a.ZP)(m.zx)`
    border-radius: 100%;
    width: auto;
    height: auto;
    display: flex;
    align-content: center;
    text-align: center;

    &>svg{
        padding: 0.2rem 0.2rem;
    }
`;function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}const p=({dishes:e,counters:t,addToCart:r,removeFromCart:l})=>n.createElement(n.Fragment,null,e?.map(((e,a)=>n.createElement(s,d({key:`${e.name}_card_${a}`},e),n.createElement(m.ZC,null,n.createElement(m.P,null,"Amount: ",t[a])),n.createElement(m.ZC,null,n.createElement(u,{type:"success",onClick:()=>r(e,a)},n.createElement(i.FeP,null)),n.createElement(u,{type:"error",onClick:()=>l(e._id,e.price,a)},n.createElement(i.Xm5,null))))))),E=({selecteds:e,dishes:t,counters:r,amount:l,total:a})=>n.createElement(m.iA,null,n.createElement("thead",null,n.createElement(m.TR,null,n.createElement(m.TH,null,"Name"),n.createElement(m.TH,null,"Price"),n.createElement(m.TH,null,"Amount"),n.createElement(m.TH,null,"Total"))),n.createElement("tbody",null,e?.map((e=>{const l=t.map(((t,r)=>{if(t.name===e.name)return r})).filter((e=>void 0!==e));return n.createElement(m.TR,{key:`${e.name}-row`},n.createElement(m.TD,null,e.name),n.createElement(m.TD,null,"$",e.price),n.createElement(m.TD,null,r[l]),n.createElement(m.TD,null,"$",(e.price*r[l]).toFixed(2)))})),n.createElement(m.TR,null,n.createElement(m.TD,{colSpan:2},"Totals"),n.createElement(m.TD,null,"Plates:",l),n.createElement(m.TD,null,"$",a.toFixed(2)))));var h=r(11);const g=()=>{const[e,t]=(0,n.useState)("undefined"!==localStorage.getItem("dishes")&&localStorage.getItem("dishes")?JSON.parse(localStorage.getItem("dishes")):h),[r,l]=(0,n.useState)((()=>e.map((()=>0)))),[a,o]=(0,n.useState)(0),[c,i]=(0,n.useState)(0),[s,u]=(0,n.useState)([]),[d,g]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement(m.l2,null),n.createElement(m.or,null,n.createElement(m.H1,null,"Sell")),n.createElement(m.$0,null,n.createElement(n.Suspense,null,n.createElement(p,{dishes:e,counters:r,addToCart:(e,t)=>{r[t]<1&&u((t=>[...t,{id:e?.id,name:e?.name,description:e?.description,price:e?.price}])),r[t]++,l((e=>[...e,r[t]])),o((t=>t+e.price)),i((e=>e+1))},removeFromCart:(e,t,n)=>{r[n]>0&&(r[n]--,l((e=>[...e,r[n]])),o((e=>e-t)),i((e=>e-1))),r[n]<1&&u((t=>t.filter((t=>t.id!==e))))}}))),n.createElement(m.$0,{column:!0},n.createElement(m.ZC,{width:"50%"},n.createElement(E,{selecteds:s,dishes:e,counters:r,amount:c,total:a})),n.createElement(m.zx,{type:"info",onClick:()=>a>0?g(!0):void 0},"Checkout")),n.createElement(m.u_,{wrapperId:"checkout",isOpen:d,setIsOpen:g},n.createElement(m.H1,null,"Checkout Details:"),n.createElement(m.$0,{column:!0},n.createElement(E,{selecteds:s,dishes:e,counters:r,amount:c,total:a}),n.createElement("br",null),n.createElement(m.zx,{type:"success"},"Pay now"))))},f=()=>{const[e,t]=(0,n.useState)(JSON.parse(localStorage.getItem("theme"))??o.Z);return(0,n.useEffect)((()=>{localStorage.setItem("theme",JSON.stringify(e))}),[e]),n.createElement(a.f6,{theme:{...e,setTheme:()=>{t((e=>"light"===e.id?c.Z:o.Z))}}},n.createElement(m.ZL,null),n.createElement(g,null))};(0,l.s)(document.getElementById("root")).render(n.createElement(n.StrictMode,null,n.createElement(f,null)))}},r={};function n(e){var l=r[e];if(void 0!==l)return l.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,l,a)=>{if(!r){var o=1/0;for(s=0;s<e.length;s++){for(var[r,l,a]=e[s],c=!0,m=0;m<r.length;m++)(!1&a||o>=a)&&Object.keys(n.O).every((e=>n.O[e](r[m])))?r.splice(m--,1):(c=!1,a<o&&(o=a));if(c){e.splice(s--,1);var i=l();void 0!==i&&(t=i)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,l,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={789:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var l,a,[o,c,m]=r,i=0;if(o.some((t=>0!==e[t]))){for(l in c)n.o(c,l)&&(n.m[l]=c[l]);if(m)var s=m(n)}for(t&&t(r);i<o.length;i++)a=o[i],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},r=self.webpackChunkrestaurant=self.webpackChunkrestaurant||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l=n.O(void 0,[893,80,284,35,95,666,650],(()=>n(516)));l=n.O(l)})();