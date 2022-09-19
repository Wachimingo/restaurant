"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[95],{860:(e,t,o)=>{o.d(t,{Z:()=>s});var r=o(959),n=o(556),i=o(725);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},a.apply(this,arguments)}const l={new:e=>e.theme.colors.states.new,pending:e=>e.theme.colors.states.pending,cancel:e=>e.theme.colors.states.pending,"In progress":e=>e.theme.colors.states.inProgress,completed:e=>e.theme.colors.states.completed},d=(0,i.ZP)(n.ZC)`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: ${e=>e.width?e.width:"fit-content"};
    margin: 1rem;
    background-color: ${e=>"light"===e.theme.id?"white":e.theme.colors.navBar.secondaryColor};
    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    span{
        color: ${e=>l[e.state]?l[e.state](e):""};
    }
`,c=(0,i.ZP)(n.ZC)`
    /* padding: 2px 16px; */
`,s=(0,r.memo)((({children:e,...t})=>r.createElement(d,a({},t),r.createElement(c,{column:!0},e))))},896:(e,t,o)=>{o(959);var r=o(725);o(917),r.ZP.div`
    width: 150px;
    text-align: center;
    overflow: hidden;
`,r.ZP.div`
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
`,r.ZP.div`
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
`,r.ZP.a`
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
`},707:(e,t,o)=>{o.d(t,{$0:()=>i,ZC:()=>a,or:()=>n});var r=o(725);r.ZP.div`
    background: url(${e=>e.backgroundImage});
    background-repeat: no-repeat;
    background-size: 100%;
    background-color: #fcf8f5;
    @media(max-width: 768px){
        flex-direction: column;
    }
`;const n=r.ZP.main`
    display: flex;
    align-items: center;
    flex-direction: ${e=>e.column?"column":"row"};
    justify-content: ${e=>e.column?"space-around":"center"};
    width: 100%;
    /* border: 1px solid black; */
    @media(max-width: 768px){
        flex-direction: column;
    }
`,i=r.ZP.section`
    display: flex;
    align-items: center;
    flex-direction: ${e=>e.column?"column":"row"};
    justify-content: ${e=>e.column?"space-around":"center"};
    width: ${e=>e.width?e.width:"100%"};
    /* border: 1px solid black; */
    @media(max-width: 768px){
        flex-direction: column;
    }
`,a=r.ZP.div`
    display: flex;
    align-items: center;
    flex-direction: ${e=>e.column?"column":"row"};
    justify-content: ${e=>e.column?"center":"space-around"};
    width: ${e=>e.width?e.width:"100%"};
    /* border: 1px solid black; */

    @media(max-width: 768px){
        flex-direction: column;
    }
`},935:(e,t,o)=>{o.d(t,{P:()=>r});const r=o(725).ZP.p`
    font-size: 1.1rem;
    padding: 0 0 5px 0;
    margin:0;
`},889:(e,t,o)=>{o.d(t,{M:()=>r});const r=o(725).ZP.img`
    width: ${e=>e.width?e.width:"150px"};
    height: ${e=>e.height?e.height:"150px"};
`},982:(e,t,o)=>{o.d(t,{l:()=>s});var r=o(959),n=o(725),i=o(917);const a=n.ZP.header`
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    display: block;
    padding: 0 16px;
    top: 0;
    background-image: linear-gradient(to right, ${e=>e.theme.colors.navBar.primaryColor}, ${e=>e.theme.colors.navBar.secondaryColor});
    border-bottom: 3px solid ${e=>e.theme.colors.navBar.secondaryColor};
`,l=n.ZP.nav`
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
`,d=n.ZP.a`
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
`,c=n.ZP.div`
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
`,s=()=>{const e=window.matchMedia("(min-width: 768px)");e.addEventListener("change",(e=>{o(e.matches)}));const[t,o]=(0,r.useState)(e.matches),{id:s,setTheme:p}=(0,r.useContext)(n.Ni);return r.createElement(a,null,r.createElement(c,{onClick:()=>o((e=>!e))},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null)),r.createElement(l,{id:"mainBar",title:"mainBar",open:t},r.createElement("div",null,r.createElement(d,{href:"/restaurant/index.html"},"Home"),r.createElement(d,{href:"/restaurant/catalog.html"},"Catalog"),r.createElement(d,{href:"/restaurant/transactions/sell.html"},"Sell"))),r.createElement(i.ZD,{isActive:"dark"===s,onToggle:p}))}}}]);