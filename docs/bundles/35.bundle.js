"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[35],{672:(r,o,e)=>{e.d(o,{Z:()=>i});const i=e(725).vJ`
    body{
        background-color: ${r=>r.theme.colors.bodyBackgroundColor};
        min-height: 100vh;
        margin: 0;
        padding: 0;
        color: ${r=>r.theme.colors.bodyFontColor};
        /* width */
        ::-webkit-scrollbar {
        width: 12px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
        background: #f1f1f1;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: #888;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: #555;
        }
    }
`},224:(r,o,e)=>{e.d(o,{Z:()=>d});var i=e(959),a=e(725);const t=a.ZP.div`
    width: 50px;
    min-width: 50px;
    height: 25px;
    border-radius: 25px;
    border: 1px solid #666;
    margin: auto;
    display: flex;
    position: absolute;
    left: 2vw;
    top: 3vh;
    background-image: linear-gradient(to bottom, ${r=>r.theme.colors.primaryColor}, ${r=>r.theme.colors.secondaryColor});

    @media(min-width: 768px){
        width: 50px;
        min-width: 50px;
        height: 25px;
        border-radius: 25px;
        border: 1px solid #666;
        margin: auto;
        display: flex;
        position: absolute;
        margin-left: 90vw;
        top: 3vh;
        background-image: linear-gradient(to bottom, ${r=>r.theme.colors.primaryColor}, ${r=>r.theme.colors.secondaryColor});
    }
`,n=a.ZP.div`
    height: 21px;
    width: 21px;
    border: 1px solid #666;
    margin-top: 1px;
    background: white;
    border-radius: 50%;
    transition: transform 0.1s linear;
    transform: translate(${r=>r.isActive?"26px":"1px"});
`,d=({isActive:r,onToggle:o})=>i.createElement(t,{onClick:()=>o()},i.createElement(n,{isActive:r}))},686:(r,o,e)=>{e.d(o,{Z:()=>i});const i={id:"dark",colors:{primaryColor:"#434445",secondaryColor:"#5B5B5C",bodyBackgroundColor:"#2B2B2D",bodyFontColor:"white",error:"red",success:"green",info:"blue",warning:"yellow",navBar:{primaryColor:"#434445",secondaryColor:"#5B5B5C"},states:{new:"lightblue",pending:"lightred",inProgress:"Green",completed:"lightgreen"}}}},943:(r,o,e)=>{e.d(o,{Z:()=>i});const i={id:"light",colors:{primaryColor:"#C5CAD1",secondaryColor:"#CBD0D8",bodyBackgroundColor:"white",bodyFontColor:"#4B4E58",error:"red",success:"green",info:"blue",warning:"yellow",navBar:{primaryColor:"#36383F",secondaryColor:"#4B4E58"},states:{new:"blue",pending:"red",inProgress:"Green",completed:"Gray"}}}},11:r=>{r.exports=JSON.parse('[{"id":"01","name":"Pizza","price":15.99,"description":"Pepperoni pizza XL","image":"Pizza.webp","forToday":true},{"id":"02","name":"Hamburguer","price":9.99,"description":"Meat, cheese and lettuce","image":"Hamburger.webp","forToday":true}]')}}]);