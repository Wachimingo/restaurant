(()=>{var e,t={860:(e,t,r)=>{"use strict";r(959);var n=r(556),o=r(725);const a={new:e=>e.theme.colors.states.new,pending:e=>e.theme.colors.states.pending,cancel:e=>e.theme.colors.states.pending,"In progress":e=>e.theme.colors.states.inProgress,completed:e=>e.theme.colors.states.completed};(0,o.ZP)(n.ZC)`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: ${e=>e.width?e.width:"fit-content"};
    margin: 1rem;
    background-color: ${e=>"light"===e.theme.id?"white":e.theme.colors.navBar.secondaryColor};
    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    span{
        color: ${e=>a[e.state]?a[e.state](e):""};
    }
`,(0,o.ZP)(n.ZC)`
    /* padding: 2px 16px; */
`},896:(e,t,r)=>{"use strict";r.d(t,{lr:()=>d});var n=r(959),o=r(725),a=r(917);const i=o.ZP.div`
    width: 150px;
    text-align: center;
    overflow: hidden;
`,l=o.ZP.div`
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: black;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
`,s=o.ZP.div`
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 150px;
    height: 150px;
    margin-right: 25px;
    border-radius: 10px;
    background: #eee;
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    position: relative;
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
`,c=o.ZP.a`
    display: inline-flex;
    width: 1.5rem;
    height: 1.5rem;
    background: #29b1ff;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 0 0.5rem 0;
    position: relative;
    &:active {
        top: 1px;
    }
    &:hover {
        background: #2de7ff;
    }
    &:focus {
        background: #000;
    }
`,d=({data:e})=>{const t=e?.map(((e,t)=>n.createElement(c,{key:`indicator_${t}`,href:`#slide-${t}`},t+1))),r=e?.map(((e,t)=>n.createElement(s,{key:`item_${t}`,id:`slide-${t}`},n.createElement(a.MY,{src:`/assets/${e.image}`}))));return n.createElement(i,null,t,n.createElement(l,null,r))}},707:(e,t,r)=>{"use strict";r.d(t,{$0:()=>i,W2:()=>o,ZC:()=>l,or:()=>a});var n=r(725);const o=n.ZP.div`
    background: url(${e=>e.backgroundImage});
    background-repeat: no-repeat;
    background-size: 100%;
    background-color: #fcf8f5;
    @media(max-width: 768px){
        flex-direction: column;
    }
`,a=n.ZP.main`
    display: flex;
    align-items: center;
    flex-direction: ${e=>e.column?"column":"row"};
    justify-content: ${e=>e.column?"space-around":"center"};
    width: 100%;
    /* border: 1px solid black; */
    @media(max-width: 768px){
        flex-direction: column;
    }
`,i=n.ZP.section`
    display: flex;
    align-items: center;
    flex-direction: ${e=>e.column?"column":"row"};
    justify-content: ${e=>e.column?"space-around":"center"};
    width: ${e=>e.width?e.width:"100%"};
    /* border: 1px solid black; */
    @media(max-width: 768px){
        flex-direction: column;
    }
`,l=n.ZP.div`
    display: flex;
    align-items: center;
    flex-direction: ${e=>e.column?"column":"row"};
    justify-content: ${e=>e.column?"center":"space-around"};
    width: ${e=>e.width?e.width:"100%"};
    /* border: 1px solid black; */

    @media(max-width: 768px){
        flex-direction: column;
    }
`},935:(e,t,r)=>{"use strict";r.d(t,{P:()=>n});const n=r(725).ZP.p`
    font-size: 1.1rem;
    padding: 0 0 5px 0;
    margin:0;
`},556:(e,t,r)=>{"use strict";r.d(t,{W2:()=>n.W2,ZC:()=>n.ZC,H1:()=>a,H2:()=>i,H3:()=>l,H4:()=>s,or:()=>n.or,P:()=>c.P,$0:()=>n.$0});var n=r(707),o=r(725);const a=o.ZP.h1`
    font-size: 3rem;
    padding: 0 0 10px 0;
    margin:0;
`,i=o.ZP.h2`
    font-size: 2.5rem;
    padding: 0 0 10px 0;
    margin:0;
`,l=o.ZP.h3`
    font-size: 2.0rem;
    padding: 0 0 10px 0;
    margin:0;
`,s=o.ZP.h4`
    font-size: 1.3rem;
    padding: 0 0 10px 0;
    margin:0;
`;var c=r(935)},889:(e,t,r)=>{"use strict";r.d(t,{M:()=>n});const n=r(725).ZP.img`
    width: ${e=>e.width?e.width:"150px"};
    height: ${e=>e.height?e.height:"150px"};
`},917:(e,t,r)=>{"use strict";r.d(t,{$0:()=>a.$0,H1:()=>a.H1,H2:()=>a.H2,H3:()=>a.H3,H4:()=>a.H4,MY:()=>l.M,P:()=>a.P,W2:()=>a.W2,ZC:()=>a.ZC,ZD:()=>o.Z,ZL:()=>s.Z,l2:()=>n.l,lr:()=>i.lr,or:()=>a.or});var n=r(982),o=r(224),a=(r(860),r(527),r(277),r(873),r(556)),i=r(896),l=r(889),s=(r(288),r(672));r(522)},982:(e,t,r)=>{"use strict";r.d(t,{l:()=>d});var n=r(959),o=r(725),a=r(917);const i=o.ZP.header`
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    display: block;
    padding: 0 16px;
    top: 0;
    background-image: linear-gradient(to right, ${e=>e.theme.colors.navBar.primaryColor}, ${e=>e.theme.colors.navBar.secondaryColor});
    border-bottom: 3px solid ${e=>e.theme.colors.navBar.secondaryColor};
`,l=o.ZP.nav`
    position: relative;
    width: 100%;
    height: 10vh;
    left: 0;
    padding: 0;
    box-sizing: border-box;
    /* background-color: ${e=>e.theme.colors.navBar.primaryColor}; */
    div{
        position: relative;
        top: 9vh;
        background-color: ${e=>e.theme.colors.navBar.secondaryColor};
        display: ${e=>e.open?"block":"none"};
    }
    
    @media(min-width: 768px){
        display: relative;
        background: none;
        left: initial;
        top: initial;
        margin: auto 0 auto auto;
        /* background-color: ${e=>e.theme.colors.navBar.primaryColor}; */
        div{
            position: relative;
            top: 3vh;
            background-color: transparent;
            display: ${e=>e.open?"block":"none"};     
        }
    }
`,s=o.ZP.a`
    padding: 4px 8px;
    display: block;
    text-align: center;
    box-sizing: border-box;
    margin: auto 0;
    font-weight: ${e=>e.isActive?"bold":"normal"};
    color: white;
    text-decoration: none;

    &:hover{
        cursor: pointer;
        font-weight: bold;
        color: blue;
    }

    @media(min-width: 768px){
        display: inline-block;
    }
`,c=o.ZP.div`
    margin: auto 0 auto auto;
    width: 25px;
    min-width: 35px;
    padding: 5px;
    position: absolute;
    display: block;
    z-index: 10;
    top: 1vh;
    right: 2vw;
    div{
        height: 3px;
        background-color: white;
        border: 1px solid black;
        margin: 5px 0;
        width: 100%;
    }
    @media(min-width: 768px){
        display: none;
    }
`,d=()=>{const e=window.matchMedia("(min-width: 768px)");e.addEventListener("change",(e=>{r(e.matches)}));const[t,r]=(0,n.useState)(e.matches),{id:d,setTheme:m}=(0,n.useContext)(o.Ni);return n.createElement(i,null,n.createElement(c,{onClick:()=>r((e=>!e))},n.createElement("div",null),n.createElement("div",null),n.createElement("div",null)),n.createElement(l,{id:"mainBar",title:"mainBar",open:t},n.createElement("div",null,n.createElement(s,{href:"/index.html"},"Home"),n.createElement(s,{href:"/catalog.html"},"Catalog"),n.createElement(s,{href:"/transactions/sell.html"},"Sell"))),n.createElement(a.ZD,{isActive:"dark"===d,onToggle:m}))}},871:(e,t,r)=>{"use strict";var n=r(959),o=r(478),a=r(725),i=r(943),l=r(686),s=r(917),c=r(11);const d=()=>{const[e]=(0,n.useState)("undefined"!==localStorage.getItem("dishes")&&localStorage.getItem("dishes")?JSON.parse(localStorage.getItem("dishes")):c);return(0,n.useEffect)((()=>{"undefined"!==localStorage.getItem("dishes")&&localStorage.getItem("dishes")||localStorage.setItem("dishes",JSON.stringify(c))}),[]),n.createElement(s.W2,{backgroundImage:"/assets/home_background.webp"},n.createElement(s.l2,null),n.createElement(s.or,{column:!0},n.createElement(s.H1,null,"Restaurant"),n.createElement(s.MY,{src:"/assets/logo.webp"}),n.createElement(s.H2,null,"Nice taste"),n.createElement(s.P,null,"Today's menu:"),n.createElement(n.Suspense,null,n.createElement(s.lr,{data:e}))),n.createElement(s.$0,{column:!0},n.createElement(s.H3,null,"Enjoy our:"),n.createElement(s.ZC,null,n.createElement(s.ZC,{column:!0},n.createElement(s.H4,null,"Breakfast"),n.createElement(s.MY,{src:"/assets/breakfast.webp",width:"22rem",height:"22rem"})),n.createElement(s.ZC,{column:!0},n.createElement(s.H4,null,"Lunch"),n.createElement(s.MY,{src:"/assets/lunch.webp",width:"22rem",height:"22rem"})),n.createElement(s.ZC,{column:!0},n.createElement(s.H4,null,"Dinner"),n.createElement(s.MY,{src:"/assets/dinner.webp",width:"22rem",height:"22rem"})))),n.createElement("br",null))};r(541);const m=()=>{const[e,t]=(0,n.useState)(JSON.parse(localStorage.getItem("theme"))??i.Z);return(0,n.useEffect)((()=>{localStorage.setItem("theme",JSON.stringify(e))}),[e]),n.createElement(a.f6,{theme:{...e,setTheme:()=>{t((e=>"light"===e.id?l.Z:i.Z))}}},n.createElement(s.ZL,null),n.createElement(d,null))};(0,o.s)(document.getElementById("root")).render(n.createElement(n.StrictMode,null,n.createElement(m,null)))},541:(e,t,r)=>{var n={"./Hamburger.webp":786,"./Pizza.webp":776,"./breakfast.webp":64,"./dinner.webp":801,"./home_background.webp":876,"./logo.webp":886,"./lunch.webp":376};function o(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id=541},786:(e,t,r)=>{"use strict";e.exports=r.p+"assets/Hamburger.webp"},776:(e,t,r)=>{"use strict";e.exports=r.p+"assets/Pizza.webp"},64:(e,t,r)=>{"use strict";e.exports=r.p+"assets/breakfast.webp"},801:(e,t,r)=>{"use strict";e.exports=r.p+"assets/dinner.webp"},876:(e,t,r)=>{"use strict";e.exports=r.p+"assets/home_background.webp"},886:(e,t,r)=>{"use strict";e.exports=r.p+"assets/logo.webp"},376:(e,t,r)=>{"use strict";e.exports=r.p+"assets/lunch.webp"}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,o,a]=e[d],l=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",(()=>{var e={826:0,95:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,l,s]=r,c=0;if(i.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)var d=s(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},r=self.webpackChunkrestaurant=self.webpackChunkrestaurant||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[893,17,35,666,466],(()=>n(871)));o=n.O(o)})();