"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[650],{586:(e,r,o)=>{o.d(r,{z:()=>i});var t=o(959),n=o(725);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},a.apply(this,arguments)}const l={success:e=>e.theme.colors.success,error:e=>e.theme.colors.error,info:e=>e.theme.colors.info,warning:e=>e.theme.colors.warning},c=n.ZP.button`
    background-color: transparent;
    color: ${e=>e.theme.colors.bodyFontColor};
    font-size: 1.5rem;
    padding-bottom: 0.5vh;
    padding-top: 0.5vh;
    margin-bottom: 1vh;
    margin-top: 1vh;
    margin-left: 1vh;
    margin-right: 1vh;
    border: 2px solid ${e=>l[e.type]?l[e.type](e):null};
    border-radius: ${e=>e.radius};

    &:hover {
        background-color: ${e=>l[e.type]?l[e.type](e):null};
        color: white;
        cursor: pointer;
    }
`,i=({children:e,...r})=>((0,t.useContext)(n.Ni),t.createElement(c,a({},r),e))},277:(e,r,o)=>{o.d(r,{u:()=>d});var t=o(959),n=o(725),a=o(917);const l=n.ZP.div`
  display: ${e=>e.isOpen?"block":"none"}; /* Hidden by default */
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
`,c=n.ZP.div`
    background-color: ${e=>"light"===e.theme.id?"white":e.theme.colors.navBar.secondaryColor};
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
`,i=n.ZP.span`
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
`,d=({children:e,isOpen:r,setIsOpen:o,setIsPost:n,wrapperId:d="default",...s})=>{if(!r)return null;const p=e=>{e.target==document.getElementById(`${d}-modal`)&&(s.clearForm&&s.clearForm(),window.removeEventListener("click",p),n&&n(!0),o(!1))};return window.addEventListener("click",p),t.createElement(a.Mx,{wrapperId:d},t.createElement(l,{isOpen:!0,id:`${d}-modal`},t.createElement(c,null,t.createElement(i,{onClick:()=>(s.clearForm&&s.clearForm(),n&&n(!0),void o(!1))},"×"),e)))}},873:(e,r,o)=>{o.d(r,{M:()=>a});var t=o(959),n=o(422);const a=({children:e,wrapperId:r="react-portal-wrapper"})=>{const[o,a]=(0,t.useState)(null);return(0,t.useLayoutEffect)((()=>{let e=document.getElementById(r),o=!1;return e||(o=!0,e=(e=>{const r=document.createElement("div");return r.setAttribute("id",e),document.body.appendChild(r),r})(r)),a(e),()=>{o&&e.parentNode&&e.parentNode.removeChild(e)}}),[r]),null===o?null:(0,n.createPortal)(e,o)}}}]);