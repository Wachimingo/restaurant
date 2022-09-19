(()=>{"use strict";var e,t={670:(e,t,r)=>{r.d(t,{n:()=>n});const n=r(725).ZP.button`
    border-radius: 100%;
    width: 4rem;
    height: 4rem;
    font-size: 2em;
    background-color: #1b91f8;
    position:absolute;
    right: 2vw;
    bottom: 2vh;
    &:hover{
        cursor: pointer;
        background-color:#34a0ff;
        color:white;
    }
`},527:(e,t,r)=>{r.d(t,{n:()=>o.n,z:()=>n.z});var n=r(586),o=r(670)},288:(e,t,r)=>{r.d(t,{l:()=>c,I:()=>l});var n=r(959),o=r(725);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}const i=o.ZP.form`
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    color: black;
`,l=o.ZP.input`
    &[type=text],
    &[type=number],
    &[type=email],
    &[type=password],
    &[type=date], select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    &[type=submit] {
        display:inline-block;
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    &[type=submit]:hover {
        background-color: #45a049;
    }

`,c=({children:e,...t})=>((0,n.useContext)(o.Ni),n.createElement(i,a({},t),e))},556:(e,t,r)=>{r.d(t,{ZC:()=>n.ZC,H1:()=>a,H2:()=>i,H4:()=>l,or:()=>n.or,P:()=>c.P,$0:()=>n.$0});var n=r(707),o=r(725);const a=o.ZP.h1`
    font-size: 3rem;
    padding: 0 0 10px 0;
    margin:0;
`,i=o.ZP.h2`
    font-size: 2.5rem;
    padding: 0 0 10px 0;
    margin:0;
`,l=(o.ZP.h3`
    font-size: 2.0rem;
    padding: 0 0 10px 0;
    margin:0;
`,o.ZP.h4`
    font-size: 1.3rem;
    padding: 0 0 10px 0;
    margin:0;
`);var c=r(935)},917:(e,t,r)=>{r.d(t,{$0:()=>s.$0,H1:()=>s.H1,H2:()=>s.H2,H4:()=>s.H4,II:()=>m.I,MY:()=>d.M,Mx:()=>c.M,P:()=>s.P,ZC:()=>s.ZC,ZD:()=>o.Z,ZL:()=>p.Z,Zb:()=>a.Z,l0:()=>m.l,l2:()=>n.l,nD:()=>i.n,or:()=>s.or,u_:()=>l.u,zx:()=>i.z});var n=r(982),o=r(224),a=r(860),i=r(527),l=r(277),c=r(873),s=r(556),d=(r(896),r(889)),m=r(288),p=r(672);r(522)},522:(e,t,r)=>{r(959);var n=r(725);n.ZP.table`
    border-collapse: collapse;
    width: 100%;
`,n.ZP.th`
    border: 1px solid #ddd;
    padding: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: ${e=>e.theme.colors.navBar.primaryColor};
    color: white;
`,n.ZP.td`
    border: 1px solid #ddd;
    padding: 8px;
`,n.ZP.tr`
    &:nth-child(even){background-color: ${e=>"light"===e.theme.id?"#D4D3D3":"#615F5F"}}
    &:hover {background-color: #ddd;}
`},127:(e,t,r)=>{var n=r(959),o=r(478),a=r(917),i=r(725),l=r(943),c=r(686);const s=({name:e,description:t,price:r,image:o,children:i,...l})=>n.createElement(a.Zb,null,i,n.createElement(a.MY,{src:`https://raw.githubusercontent.com/Wachimingo/restaurant/main/docs/assets/${o}`,width:"100%",height:"250px"}),n.createElement(a.H4,null,e),n.createElement(a.P,null,t),n.createElement(a.P,null,"$",r));var d=r(284),m=r(22);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}const[,u,h]=(g="dishes",[async e=>{const t=e.filter?e.filter:"",r=e.selects?e.selects:"";try{const e=await fetch(`/${g.trim().toLocaleLowerCase()}?filter=${t}&selects=${r}`,{method:"GET",headers:{"content-type":"application/json"}});if(e.ok)return await e.json()}catch(e){console.log("%cError caught in useFetch->get method:","color: red",e.message)}},async e=>{try{const t=await fetch("/dishes",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)});if(t.ok)return await t.json()}catch(e){console.log("%cError caught in useFetch->post method:","color: red",e.message)}},async e=>{try{const t=await fetch(`/dishes/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(e)});if(t.ok)return await t.json()}catch(e){console.log("%cError caught in useFetch->patch method:","color: red",e.message)}},async e=>{try{const t=await fetch(`/dishes/${e.id}`,{method:"DELETE"});if(t.ok)return await t.json()}catch(e){console.log("%cError caught in useFetch->post remove:","color: red",e.message)}}]);var g;const f=({handleSubmit:e,register:t,setIsModalOpen:r,isPost:o,setIsPost:i,setDishes:l})=>n.createElement(a.l0,{onSubmit:e((async e=>{let t=e.id;var n;if(e.image=e?.file[0]?await(n=e.file[0],new Promise(((e,t)=>{const r=new FileReader;r.readAsDataURL(n),r.onload=()=>e(r.result),r.onerror=e=>t(e)}))):e.img,e.file=void 0,e.img=void 0,o){e.id=void 0;const t=await u(e);l((e=>[...e,t]))}if(!o){const r=await h(e);l((e=>{const n=e.map((e=>(e._id===t&&(e=r),e)));return t=void 0,n})),i(!1)}r(!1)}))},n.createElement("label",{htmlFor:"name"},"Name:"),n.createElement(a.II,p({type:"text",id:"name"},t("name"))),n.createElement("label",{htmlFor:"description"},"Description:"),n.createElement(a.II,p({type:"text",id:"description"},t("description"))),n.createElement("label",{htmlFor:"price"},"Price:"),n.createElement(a.II,p({type:"number",step:.01,pattern:"^\\d*(\\.\\d{0,2})?$",min:0,id:"price"},t("price"))),n.createElement("label",{htmlFor:"file"},"Image:"),n.createElement(a.II,p({type:"file",id:"file"},t("file"))),n.createElement(a.II,p({type:"text",id:"id"},t("id"),{style:{display:"none"}})),n.createElement(a.II,p({type:"text",id:"img"},t("img"),{style:{display:"none"}})),n.createElement(a.II,{type:"submit",value:"Submit"})),y=(0,i.ZP)(a.zx)`
    border-radius: 100%;
    width: auto;
    height: auto;
    display: flex;
    align-content: center;
    text-align: center;

    &>svg{
        padding: 0.2rem 0.2rem;
    }
`;var b=r(11);function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v.apply(this,arguments)}const E=()=>{const[e,t]=(0,n.useState)("undefined"!==localStorage.getItem("dishes")&&localStorage.getItem("dishes")?JSON.parse(localStorage.getItem("dishes")):b),[r,o]=(0,n.useState)(!1),[i,l]=(0,n.useState)(!0),{register:c,handleSubmit:p,reset:u,setValue:h,formState:{isSubmitSuccessful:g}}=(0,m.cI)(),E=e?.map(((e,r)=>n.createElement(s,v({key:`${e.name}_card_${r}`},e),n.createElement(a.ZC,null,n.createElement(y,{type:"warning",onClick:()=>(({name:e,description:t,price:r,image:n,id:a})=>{h("name",e),h("description",t),h("price",r),h("img",n),h("id",a),l(!1),o(!0)})(e)},n.createElement(d.p4t,null)),n.createElement(y,{type:"error",onClick:()=>(async e=>{t((t=>{const r=t?.filter((t=>t.id!==e));return r}))})(e.id)},n.createElement(d.Xm5,null)),n.createElement(y,{type:e.forToday?"error":"success",onClick:()=>(async(e,r)=>{const n=b.map((t=>(t.id===e&&(t.forToday=!r),t)));t((()=>[...n])),localStorage.setItem("dishes",JSON.stringify(n))})(e.id,e.forToday)},e.forToday?n.createElement(d.SiH,null):n.createElement(d.PcH,null))))));return n.createElement(n.Fragment,null,n.createElement(a.l2,null),n.createElement(a.or,null,n.createElement(a.H1,null,"Catalog")),n.createElement(a.$0,null,n.createElement(n.Suspense,null,E),n.createElement(a.nD,{onClick:()=>(l(!0),void o((e=>!e)))},"+")),n.createElement(a.u_,{wrapperId:"catalog",isOpen:r,setIsOpen:o,setIsPost:l,clearForm:()=>{u({name:"",description:"",price:"",image:"",img:"",id:""})}},n.createElement(a.H2,null,i?"Add":"Modify"),n.createElement(f,{handleSubmit:p,register:c,setIsModalOpen:o,isPost:i,setIsPost:l,setDishes:t})))},x=()=>{const[e,t]=(0,n.useState)(JSON.parse(localStorage.getItem("theme"))??l.Z);return(0,n.useEffect)((()=>{localStorage.setItem("theme",JSON.stringify(e))}),[e]),n.createElement(i.f6,{theme:{...e,setTheme:()=>{t((e=>"light"===e.id?c.Z:l.Z))}}},n.createElement(a.ZL,null),n.createElement(E,null))};(0,o.s)(document.getElementById("root")).render(n.createElement(n.StrictMode,null,n.createElement(x,null)))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,o,a]=e[d],l=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={20:0,666:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,l,c]=r,s=0;if(i.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(c)var d=c(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},r=self.webpackChunkrestaurant=self.webpackChunkrestaurant||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[893,80,707,35,95,650],(()=>n(127)));o=n.O(o)})();