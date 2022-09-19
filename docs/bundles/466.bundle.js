"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[466,650],{586:(o,r,e)=>{e(959);var t=e(725);const a={success:o=>o.theme.colors.success,error:o=>o.theme.colors.error,info:o=>o.theme.colors.info,warning:o=>o.theme.colors.warning};t.ZP.button`
    background-color: transparent;
    color: ${o=>o.theme.colors.bodyFontColor};
    font-size: 1.5rem;
    padding-bottom: 0.5vh;
    padding-top: 0.5vh;
    margin-bottom: 1vh;
    margin-top: 1vh;
    margin-left: 1vh;
    margin-right: 1vh;
    border: 2px solid ${o=>a[o.type]?a[o.type](o):null};
    border-radius: ${o=>o.radius};

    &:hover {
        background-color: ${o=>a[o.type]?a[o.type](o):null};
        color: white;
        cursor: pointer;
    }
`},527:(o,r,e)=>{e(586),e(670)},277:(o,r,e)=>{e(959);var t=e(725);e(917),t.ZP.div`
  display: ${o=>o.isOpen?"block":"none"}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`,t.ZP.div`
    background-color: ${o=>"light"===o.theme.id?"white":o.theme.colors.navBar.secondaryColor};
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
`,t.ZP.span`
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    &:hover{
        cursor: pointer;
    }
    &:focus{
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
`},873:(o,r,e)=>{e(959),e(422)},522:(o,r,e)=>{e(959);var t=e(725);t.ZP.table`
    border-collapse: collapse;
    width: 100%;
`,t.ZP.th`
    border: 1px solid #ddd;
    padding: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: ${o=>o.theme.colors.navBar.primaryColor};
    color: white;
`,t.ZP.td`
    border: 1px solid #ddd;
    padding: 8px;
`,t.ZP.tr`
    &:nth-child(even){background-color: ${o=>"light"===o.theme.id?"#D4D3D3":"#615F5F"}}
    &:hover {background-color: #ddd;}
`}}]);