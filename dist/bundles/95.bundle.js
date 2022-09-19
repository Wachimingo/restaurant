"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[95],{860:(e,t,o)=>{o.d(t,{Z:()=>s});var i=o(959),r=o(556),n=o(725);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},a.apply(this,arguments)}const l={new:e=>e.theme.colors.states.new,pending:e=>e.theme.colors.states.pending,cancel:e=>e.theme.colors.states.pending,"In progress":e=>e.theme.colors.states.inProgress,completed:e=>e.theme.colors.states.completed},d=(0,n.ZP)(r.ZC)`
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
`,c=(0,n.ZP)(r.ZC)`
    /* padding: 2px 16px; */
`,s=(0,i.memo)((({children:e,...t})=>i.createElement(d,a({},t),i.createElement(c,{column:!0},e))))},896:(e,t,o)=>{o(959);var i=o(725);o(917),i.ZP.div`
    width: 150px;
    text-align: center;
    overflow: hidden;
`,i.ZP.div`
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
`,i.ZP.div`
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
`,i.ZP.a`
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
`},707:(e,t,o)=>{o.d(t,{$0:()=>n,ZC:()=>a,or:()=>r});var i=o(725);i.ZP.div`
    background: url(${e=>e.backgroundImage});
    background-repeat: no-repeat;
    background-size: 100%;
    background-color: #fcf8f5;
    @media(max-width: 768px){
        flex-direction: column;
    }
`;const r=i.ZP.main`
    display: flex;
    align-items: center;
    flex-direction: ${e=>e.column?"column":"row"};
    justify-content: ${e=>e.column?"space-around":"center"};
    width: 100%;
    /* border: 1px solid black; */
    @media(max-width: 768px){
        flex-direction: column;
    }
`,n=i.ZP.section`
    display: flex;
    align-items: center;
    flex-direction: ${e=>e.column?"column":"row"};
    justify-content: ${e=>e.column?"space-around":"center"};
    width: ${e=>e.width?e.width:"100%"};
    /* border: 1px solid black; */
    @media(max-width: 768px){
        flex-direction: column;
    }
`,a=i.ZP.div`
    display: flex;
    align-items: center;
    flex-direction: ${e=>e.column?"column":"row"};
    justify-content: ${e=>e.column?"center":"space-around"};
    width: ${e=>e.width?e.width:"100%"};
    /* border: 1px solid black; */

    @media(max-width: 768px){
        flex-direction: column;
    }
`},935:(e,t,o)=>{o.d(t,{P:()=>i});const i=o(725).ZP.p`
    font-size: 1.1rem;
    padding: 0 0 5px 0;
    margin:0;
`},889:(e,t,o)=>{o.d(t,{M:()=>i});const i=o(725).ZP.img`
    width: ${e=>e.width?e.width:"150px"};
    height: ${e=>e.height?e.height:"150px"};
`},982:(e,t,o)=>{o.d(t,{l:()=>s});var i=o(959),r=o(725),n=o(917);const a=r.ZP.header`
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    display: block;
    padding: 0 16px;
    top: 0;
    background-image: linear-gradient(to right, ${e=>e.theme.colors.navBar.primaryColor}, ${e=>e.theme.colors.navBar.secondaryColor});
    border-bottom: 3px solid ${e=>e.theme.colors.navBar.secondaryColor};
`,l=r.ZP.nav`
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
`,d=r.ZP.a`
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
`,c=r.ZP.div`
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
`,s=()=>{const e=window.matchMedia("(min-width: 768px)");e.addEventListener("change",(e=>{o(e.matches)}));const[t,o]=(0,i.useState)(e.matches),{id:s,setTheme:p}=(0,i.useContext)(r.Ni);return i.createElement(a,null,i.createElement(c,{onClick:()=>o((e=>!e))},i.createElement("div",null),i.createElement("div",null),i.createElement("div",null)),i.createElement(l,{id:"mainBar",title:"mainBar",open:t},i.createElement("div",null,i.createElement(d,{href:"/index.html"},"Home"),i.createElement(d,{href:"/catalog.html"},"Catalog"),i.createElement(d,{href:"/transactions/sell.html"},"Sell"))),i.createElement(n.ZD,{isActive:"dark"===s,onToggle:p}))}}}]);