(this.webpackJsonpJPMS=this.webpackJsonpJPMS||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var i=a(2),s=a(11),c=a.n(s),n=(a(35),a(36),a(37),a(38),a(24)),l=a(1),r=a(4),o=a(0);var d=function(e){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:23.335,height:23.335,...e,children:Object(o.jsxs)("g",{"data-name":"Group 99",fill:"#fff",children:[Object(o.jsx)("path",{"data-name":"Rectangle 58",d:"M21.213 0l2.121 2.121L2.121 23.335 0 21.213z"}),Object(o.jsx)("path",{"data-name":"Rectangle 59",d:"M23.334 21.213l-2.121 2.121L-.001 2.121 2.121 0z"})]})})};var x=a.p+"static/media/jams_logo_small.d5900e0f.png";const m=l.a.div`
  overflow: hidden;
  position: relative;
  transform: rotate(-1deg);
  width: 300px; // Default size for larger screens
  height: 90px; // Default size for larger screens
  display: flex;
  justify-content: center;
  align-items: center;

  // /* Media Queries */
  // @media (max-width: 1080px) {
  //   width: 300px; /* Adjust size for large smartphones */
  //   height: 90px;
  // }

  // @media (max-width: 768px) {
  //   width: 300px; /* Adjust size for tablets */
  //   height: 90px;
  // }

  // @media (max-width: 480px) {
  //   width: 60px; /* Adjust size for small smartphones */
  //   height: 60px;
  // }
`,h={width:"100%",height:"100%",objectFit:"contain"};var p=e=>{let{src:t,alt:a,style:i}=e;return Object(o.jsx)(m,{children:Object(o.jsx)("img",{src:t,alt:a,style:h})})};function j(e){let{sidebarOpen:t,toggleSidebar:a}=e;return Object(o.jsxs)(b,{className:"animate",sidebarOpen:t,style:{backgroundColor:"#1976D2"},children:[Object(o.jsxs)(g,{className:"flexSpaceCenter",children:[Object(o.jsx)("div",{className:"flexNullCenter",children:Object(o.jsx)(p,{src:x,alt:"Jash Pharmaceuticals & Medical supplies"})}),Object(o.jsx)(f,{onClick:()=>a(!t),className:"animate pointer",children:Object(o.jsx)(d,{})})]}),Object(o.jsxs)(u,{className:"flexNullCenter flexColumn",children:[Object(o.jsx)("li",{className:"semiBold font15 pointer",children:Object(o.jsx)(r.Link,{onClick:()=>a(!t),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"home",spy:!0,smooth:!0,offset:-60,children:"Home"})}),Object(o.jsx)("li",{className:"semiBold font15 pointer",children:Object(o.jsx)(r.Link,{onClick:()=>a(!t),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"services",spy:!0,smooth:!0,offset:-60,children:"About Us"})}),Object(o.jsx)("li",{className:"semiBold font15 pointer",children:Object(o.jsx)(r.Link,{onClick:()=>a(!t),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"projects",spy:!0,smooth:!0,offset:-60,children:"Services"})}),Object(o.jsx)("li",{className:"semiBold font15 pointer",children:Object(o.jsx)(r.Link,{onClick:()=>a(!t),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"blog",spy:!0,smooth:!0,offset:-60,children:"Product"})}),Object(o.jsx)("li",{className:"semiBold font15 pointer",children:Object(o.jsx)(r.Link,{onClick:()=>a(!t),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"pricing",spy:!0,smooth:!0,offset:-60,children:"Why Us"})}),Object(o.jsx)("li",{className:"semiBold font15 pointer",children:Object(o.jsx)(r.Link,{onClick:()=>a(!t),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"contact",spy:!0,smooth:!0,offset:-60,children:"Contact"})})]})]})}const b=l.a.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${e=>e.sidebarOpen?"0px":"-400px"};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`,g=l.a.div`
  padding: 20px 0;
`,f=l.a.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`,u=l.a.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;function O(e){let{toggleSidebar:t}=e;return Object(o.jsx)(v,{className:"",onClick:()=>t(!1)})}const v=l.a.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  opacity: 0.8;
`;var w=function(e){return Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:22,viewBox:"0 0 28 22",...e,children:[Object(o.jsx)("path",{"data-name":"Line 5",fill:"none",stroke:"#0b093b",strokeLinecap:"round",strokeWidth:2,d:"M1 1h26"}),Object(o.jsx)("path",{"data-name":"Line 6",fill:"none",stroke:"#0b093b",strokeLinecap:"round",strokeWidth:2,d:"M1 11h26"}),Object(o.jsx)("path",{"data-name":"Line 7",fill:"none",stroke:"#0b093b",strokeLinecap:"round",strokeWidth:2,d:"M1 21h26"})]})};function y(){const[e,t]=Object(i.useState)(window.scrollY),[a,s]=Object(i.useState)(!1);return Object(i.useEffect)((()=>(window.addEventListener("scroll",(()=>t(window.scrollY))),()=>{window.removeEventListener("scroll",(()=>t(window.scrollY)))})),[e]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{sidebarOpen:a,toggleSidebar:s}),a&&Object(o.jsx)(O,{toggleSidebar:s}),Object(o.jsx)(N,{className:"flexCenter animate whiteBg",children:Object(o.jsxs)(k,{className:"container flexSpaceCenter",children:[Object(o.jsx)(r.Link,{className:"pointer flexNullCenter",to:"home",smooth:!0,children:Object(o.jsx)(p,{src:x,alt:"Jash Pharmaceuticals & Medical supplies"})}),Object(o.jsx)(C,{className:"pointer",onClick:()=>s(!a),children:Object(o.jsx)(w,{})}),Object(o.jsxs)(E,{className:"flexNullCenter",children:[Object(o.jsx)("li",{className:"semiBold font15 pointer",children:Object(o.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"home",spy:!0,smooth:!0,offset:-80,children:"Home"})}),Object(o.jsx)("li",{className:"semiBold font15 pointer",children:Object(o.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"services",spy:!0,smooth:!0,offset:-80,children:"About Us"})}),Object(o.jsx)("li",{className:"semiBold font15 pointer",children:Object(o.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"projects",spy:!0,smooth:!0,offset:-80,children:"Services"})}),Object(o.jsx)("li",{className:"semiBold font15 pointer",children:Object(o.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"blog",spy:!0,smooth:!0,offset:-80,children:"Product"})}),Object(o.jsx)("li",{className:"semiBold font15 pointer",children:Object(o.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"pricing",spy:!0,smooth:!0,offset:-80,children:"Why Us"})}),Object(o.jsx)("li",{className:"semiBold font15 pointer",children:Object(o.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"contact",spy:!0,smooth:!0,offset:-80,children:"Contact"})})]}),Object(o.jsx)(S,{className:"flexNullCenter",children:Object(o.jsx)("li",{className:"semiBold font15 pointer flexCenter",children:Object(o.jsx)("li",{className:"semiBold font15 pointer",children:Object(o.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"contact",spy:!0,smooth:!0,offset:-80,children:"Get Quote"})})})})]})})]})}const N=l.a.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`,k=l.a.div`
  position: relative;
  height: 100%;
`,C=l.a.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  f @media (max-width: 760px) {
    display: block;
  }
  @media (max-width: 1024px) {
    /* Adjusted breakpoint */
    display: block;
  }
`,E=l.a.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`,S=l.a.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;l.a.button`
  border: 1px solid ${e=>e.border?"#707070":"#7620ff"};
  background-color: ${e=>e.border?"transparent":"#7620ff"};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${e=>e.border?"#707070":"#fff"};
  :hover {
    background-color: ${e=>e.border?"transparent":"#580cd2"};
    border: 1px solid #7620ff;
    color: ${e=>e.border?"#7620ff":"#fff"};
  }
`;var z=function(e){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:42.282,height:34.626,viewBox:"0 0 42.282 34.626",...e,children:Object(o.jsx)("path",{"data-name":"Path 131",d:"M18.966.004l-8 34.626H0L4 .004zm23.316 0l-7.83 34.622H23.49L27.49 0z",fill:"#f2b300"})})};var B=function(e){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:186.223,height:249.21,viewBox:"0 0 186.223 249.21",...e,children:Object(o.jsxs)("g",{"data-name":"Group 102",fill:"#bebdce",children:[Object(o.jsxs)("g",{"data-name":"Group 59",transform:"translate(-.09 .208)",children:[Object(o.jsx)("ellipse",{"data-name":"Ellipse 1",cx:4,cy:5,rx:4,ry:5,transform:"translate(.228 -.08)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 2",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 39.806)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 3",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 79.819)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 4",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 119.833)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 5",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 159.846)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 6",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 199.859)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 7",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 239.873)"})]}),Object(o.jsxs)("g",{"data-name":"Group 60",transform:"translate(35.419)",children:[Object(o.jsx)("circle",{"data-name":"Ellipse 8",cx:4.565,cy:4.565,r:4.565}),Object(o.jsx)("circle",{"data-name":"Ellipse 9",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 40.014)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 10",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 80.027)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 11",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 120.041)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 12",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 160.054)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 13",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 200.067)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 14",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 240.081)"})]}),Object(o.jsxs)("g",{"data-name":"Group 61",transform:"translate(70.838)",children:[Object(o.jsx)("circle",{"data-name":"Ellipse 15",cx:4.565,cy:4.565,r:4.565}),Object(o.jsx)("circle",{"data-name":"Ellipse 16",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 40.014)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 17",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 80.027)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 18",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 120.041)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 19",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 160.054)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 20",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 200.067)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 21",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 240.081)"})]}),Object(o.jsxs)("g",{"data-name":"Group 62",transform:"translate(106.256)",children:[Object(o.jsx)("circle",{"data-name":"Ellipse 22",cx:4.565,cy:4.565,r:4.565}),Object(o.jsx)("circle",{"data-name":"Ellipse 23",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 40.014)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 24",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 80.027)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 25",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 120.041)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 26",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 160.054)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 27",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 200.067)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 28",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 240.081)"})]}),Object(o.jsxs)("g",{"data-name":"Group 63",transform:"translate(141.675)",children:[Object(o.jsx)("circle",{"data-name":"Ellipse 29",cx:4.565,cy:4.565,r:4.565}),Object(o.jsx)("circle",{"data-name":"Ellipse 30",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 40.014)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 31",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 80.027)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 32",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 120.041)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 33",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 160.054)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 34",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 200.067)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 35",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 240.081)"})]}),Object(o.jsxs)("g",{"data-name":"Group 64",transform:"translate(177.094)",children:[Object(o.jsx)("circle",{"data-name":"Ellipse 36",cx:4.565,cy:4.565,r:4.565}),Object(o.jsx)("circle",{"data-name":"Ellipse 37",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 40.014)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 38",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 80.027)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 39",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 120.041)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 40",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 160.054)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 41",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 200.067)"}),Object(o.jsx)("circle",{"data-name":"Ellipse 42",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 240.081)"})]})]})})},P=a.p+"static/media/hero_image.1bb98c0d.png";function M(){return Object(o.jsxs)(L,{id:"home",className:"container ",children:[Object(o.jsx)(A,{className:"flexCenter",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"extraBold font60",children:"Jash Pharmaceuticals & Medical supplies"}),Object(o.jsx)(F,{className:"font17 ",children:"Jash Pharmaceuticals & Medical Supplies Pvt Ltd is dedicated to becoming a globally recognized leader in the pharmaceutical supply chain industry. With a clear focus on delivering quality medical supplies, the company strives to streamline the distribution of pharmaceuticals, ensuring accessibility and reliability across diverse markets worldwide."}),Object(o.jsx)(H,{})]})}),Object(o.jsxs)(D,{children:[Object(o.jsxs)(T,{children:[Object(o.jsx)(V,{className:"radius8",src:P,alt:"office",style:{zIndex:9}}),Object(o.jsxs)(W,{className:"flexCenter darkBg radius8",children:[Object(o.jsx)(R,{children:Object(o.jsx)(z,{})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:"font15 whiteColor",children:Object(o.jsx)("em",{children:"Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."})}),Object(o.jsx)("p",{className:"font13 orangeColor textRight",style:{marginTop:"10px"},children:"Ralph Waldo Emerson"})]})]}),Object(o.jsx)(J,{children:Object(o.jsx)(B,{})})]}),Object(o.jsx)(G,{className:"lightBg"})]})]})}const L=l.a.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
  @media (min-width: 960px) {
    display: flex;
    justify-content: space-between;
    align-items: center; /* or whatever the flexSpaceCenter does */
  }
`,A=l.a.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 10px 0 50px 0;
  }
`,D=l.a.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`,F=l.a.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`,H=l.a.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`,G=l.a.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`,T=l.a.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`,V=l.a.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`,W=l.a.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
  background-color: #1976d2;
`,R=l.a.div`
  position: absolute;
  left: -20px;
  top: -10px;
`,J=l.a.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;a(13),a.p,a.p,a.p,a.p,a.p,a.p;l.a.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`,l.a.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;var q=function(e){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:35.459,height:43.42,viewBox:"0 0 35.459 43.42",...e,children:Object(o.jsxs)("g",{"data-name":"Group 70",children:[Object(o.jsx)("path",{"data-name":"Path 121",d:"M24.571 12.115H4.778a3.425 3.425 0 01-3.412-3.411V4.78a3.425 3.425 0 013.411-3.415h19.792a3.427 3.427 0 013.413 3.412v3.924a3.424 3.424 0 01-3.408 3.414z",fill:"#f2b300"}),Object(o.jsx)("path",{"data-name":"Path 122",d:"M30.981 4.552h-1.647a4.782 4.782 0 00-4.765-4.55H4.779A4.787 4.787 0 00.001 4.781v3.922a4.787 4.787 0 004.778 4.778h19.79a4.785 4.785 0 004.776-4.778V7.282h1.636a1.836 1.836 0 011.748 1.876 4.152 4.152 0 01-2.31 3.309l-13.158 5.54a6.889 6.889 0 00-3.98 5.995v1.5a4.784 4.784 0 00-3.555 4.612v8.531a4.782 4.782 0 004.778 4.775h.339a4.784 4.784 0 004.776-4.776v-8.531a4.782 4.782 0 00-3.611-4.626V24a4.292 4.292 0 012.311-3.478l13.16-5.542a6.75 6.75 0 003.98-5.824 4.553 4.553 0 00-4.478-4.604zm-4.364 4.15a2.069 2.069 0 01-2.048 2.047H4.779a2.069 2.069 0 01-2.048-2.047V4.78a2.07 2.07 0 012.048-2.049h19.79a2.07 2.07 0 012.048 2.049v3.922zM16.89 30.114v8.531a2.067 2.067 0 01-2.047 2.046h-.339a2.07 2.07 0 01-2.05-2.046v-8.531a2.071 2.071 0 012.05-2.048h.339a2.066 2.066 0 012.047 2.047z",fill:"#0b093b"})]})})};var I=function(e){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:43.336,height:32.531,viewBox:"0 0 43.336 32.531",...e,children:Object(o.jsxs)("g",{"data-name":"Group 71",children:[Object(o.jsx)("path",{"data-name":"Path 123",d:"M38.562 24.112H4.778a3.428 3.428 0 01-3.414-3.406V4.776a3.424 3.424 0 013.409-3.412h33.784a3.425 3.425 0 013.41 3.41V20.7a3.425 3.425 0 01-3.407 3.412z",fill:"#f40051"}),Object(o.jsx)("path",{"data-name":"Path 124",d:"M38.559 0H4.778A4.785 4.785 0 000 4.776v15.922a4.786 4.786 0 004.778 4.778h13.507v4.322h-3.926a.684.684 0 00-.681.683v1.366a.684.684 0 00.681.683h14.619a.685.685 0 00.682-.683v-1.366a.685.685 0 00-.682-.683h-3.926v-4.322H38.56a4.786 4.786 0 004.776-4.778V4.776A4.785 4.785 0 0038.559 0zM22.321 29.8h-1.308v-4.322h1.308zm18.283-9.1a2.068 2.068 0 01-2.045 2.048H4.778a2.07 2.07 0 01-2.05-2.048V4.778a2.069 2.069 0 012.048-2.047h33.782a2.069 2.069 0 012.045 2.047z",fill:"#0b093b"})]})})};var U=function(e){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:39.581,height:39.58,viewBox:"0 0 39.581 39.58",...e,children:Object(o.jsxs)("g",{"data-name":"Group 72",children:[Object(o.jsx)("path",{"data-name":"Path 127",d:"M34.807 38.214H4.778a3.424 3.424 0 01-3.412-3.41V14.548a3.426 3.426 0 013.408-3.4h30.029a3.423 3.423 0 013.41 3.411v20.246a3.423 3.423 0 01-3.408 3.413z",fill:"#4cd5c5"}),Object(o.jsxs)("g",{"data-name":"Group 69",fill:"#0b093b",children:[Object(o.jsx)("path",{"data-name":"Path 128",d:"M34.803 0H4.777A4.785 4.785 0 000 4.777v30.025a4.787 4.787 0 004.777 4.778h30.026a4.785 4.785 0 004.776-4.778V4.777A4.785 4.785 0 0034.803 0zm2.046 34.8a2.068 2.068 0 01-2.046 2.048H4.777A2.07 2.07 0 012.729 34.8V14.547a2.07 2.07 0 012.048-2.04h30.026a2.069 2.069 0 012.046 2.05zm0-24.552a4.775 4.775 0 00-2.046-.47H4.777a4.783 4.783 0 00-2.048.47V4.774a2.069 2.069 0 012.047-2.047h30.026a2.068 2.068 0 012.046 2.047z"}),Object(o.jsx)("path",{"data-name":"Path 129",d:"M25.905 3.182a3.072 3.072 0 103.071 3.072 3.075 3.075 0 00-3.071-3.072zm0 4.378a1.307 1.307 0 111.307-1.305 1.314 1.314 0 01-1.305 1.306z"}),Object(o.jsx)("path",{"data-name":"Path 130",d:"M32.673 3.182a3.072 3.072 0 103.07 3.072 3.073 3.073 0 00-3.07-3.072zm0 4.378a1.307 1.307 0 111.307-1.305 1.315 1.315 0 01-1.305 1.306z"})]})]})})};var Y=function(e){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:39.581,height:39.58,viewBox:"0 0 39.581 39.58",...e,children:Object(o.jsxs)("g",{"data-name":"Group 73",children:[Object(o.jsx)("path",{"data-name":"Path 125",d:"M34.806 34.007h-2.5v-1.362a3.43 3.43 0 00-3.414-3.414H10.696a3.434 3.434 0 00-3.413 3.416v1.362h-2.5A3.429 3.429 0 011.369 30.6V20.417a3.428 3.428 0 013.411-3.412h30.028a3.428 3.428 0 013.414 3.409v10.181a3.429 3.429 0 01-3.411 3.414z",fill:"#7620ff"}),Object(o.jsx)("path",{"data-name":"Path 126",d:"M34.804 15.64h-3.525V4.777A4.784 4.784 0 0026.504 0H13.081a4.785 4.785 0 00-4.775 4.777v10.862H4.781a4.784 4.784 0 00-4.778 4.777v10.177a4.785 4.785 0 004.778 4.776h1.175a4.782 4.782 0 004.74 4.208h18.2a4.785 4.785 0 004.738-4.209h1.175a4.786 4.786 0 004.778-4.776V20.417a4.784 4.784 0 00-4.783-4.777zM11.034 4.778A2.069 2.069 0 0113.08 2.73h13.423a2.068 2.068 0 012.046 2.048V15.64H11.034zm17.857 32.073h-18.2a2.066 2.066 0 01-1.955-1.479 1.944 1.944 0 01-.094-.568v-2.159a2.07 2.07 0 012.049-2.046h18.2a2.068 2.068 0 012.047 2.046v2.159a1.943 1.943 0 01-.093.568 2.068 2.068 0 01-1.954 1.479zm7.962-6.256a2.072 2.072 0 01-2.049 2.048h-1.137a4.787 4.787 0 00-4.776-4.776h-18.2a4.788 4.788 0 00-4.778 4.778H4.776a2.073 2.073 0 01-2.049-2.048v-10.18a2.072 2.072 0 012.049-2.049h30.025a2.071 2.071 0 012.049 2.049z",fill:"#0b093b"})]})})};l.a.div`
  width: 100%;
`,l.a.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`,l.a.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`,l.a.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;var $=a.p+"static/media/1.bb23c752.png",_=a.p+"static/media/2.f61a9316.png",Q=a.p+"static/media/3.e78f2e6d.png",K=a.p+"static/media/4.804d6ae3.png";function X(){return Object(o.jsx)(Z,{id:"services",children:Object(o.jsx)("div",{className:"whiteBg",style:{padding:"60px 0"},children:Object(o.jsx)("div",{className:"lightBg",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(ee,{className:"flexSpaceCenter",children:[Object(o.jsxs)(ae,{children:[Object(o.jsx)("h4",{className:"font15 semiBold",children:"Who We Are"}),Object(o.jsx)("h2",{className:"font30 extraBold",children:"Commitment to Global Health"}),Object(o.jsx)("p",{className:"font16",children:"At Jash Pharmaceuticals, we are dedicated to improving global health by ensuring the reliable, efficient, and quality-driven distribution of essential medical supplies worldwide. Our mission is to make healthcare more accessible by focusing on the affordability of vital medicines, ensuring that people from all economic backgrounds can receive the treatments they need. We are committed to inclusivity, reaching diverse and underserved populations with expert pharmaceutical solutions. With decades of experience and a strong commitment to timely delivery, we ensure that high-quality medicines are available when and where they are needed most."}),Object(o.jsx)(te,{className:"flexNullCenter",style:{margin:"30px 0"},children:Object(o.jsx)("div",{style:{width:"190px",height:"50px",border:"0.5px solid black",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row",borderRadius:"10px",backgroundColor:"#FFFFFF"},children:Object(o.jsx)(r.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-80,children:"Get Quote"})})})]}),Object(o.jsx)(ie,{children:Object(o.jsxs)(se,{children:[Object(o.jsxs)("div",{className:"flexNullCenter",children:[Object(o.jsx)(ce,{className:"flexCenter",children:Object(o.jsx)("img",{src:$,alt:"office"})}),Object(o.jsx)(ne,{children:Object(o.jsx)("img",{src:_,alt:"office"})})]}),Object(o.jsxs)("div",{className:"flexNullCenter",children:[Object(o.jsx)(le,{children:Object(o.jsx)("img",{src:Q,alt:"office"})}),Object(o.jsx)(re,{children:Object(o.jsx)("img",{src:K,alt:"office"})})]})]})})]})})})})})}const Z=l.a.section`
  width: 100%;
`,ee=(l.a.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`,l.a.div`
  width: 25%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`,l.a.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`,l.a.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`),te=l.a.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`,ae=l.a.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`,ie=l.a.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`,se=l.a.div`
  width: 100%;
`,ce=l.a.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`,ne=l.a.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`,le=l.a.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`,re=l.a.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;function oe(e){let{img:t,title:a,text:i,action:s}=e;return Object(o.jsxs)(de,{children:[Object(o.jsxs)(xe,{className:"animate pointer",onClick:s||null,children:[Object(o.jsx)("img",{className:"radius8",src:t,alt:a})," "]}),Object(o.jsx)("h3",{className:"font20 extraBold",children:a}),Object(o.jsx)("p",{className:"font15",children:i})]})}const de=l.a.div`
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
  h3 {
    padding-bottom: 10px;
  }
`,xe=l.a.button`
  background-color: transparent;
  border: 0;
  outline: none;
  padding: 0;
  margin: 0;

  :hover > img {
    transform: scale(1.06); /* Scale up the image */
  }
`;var me=a.p+"static/media/1.5a90a44c.png",he=a.p+"static/media/2.27962416.png",pe=a.p+"static/media/3.e7b4a392.png",je=a.p+"static/media/4.f68a152f.png",be=a.p+"static/media/5.fcce8e3b.png",ge=a.p+"static/media/6.abe3dfb2.png",fe=a.p+"static/media/jpms_founder.9ceaaab5.png";function ue(){return Object(o.jsxs)(Oe,{id:"projects",children:[Object(o.jsx)("div",{className:"whiteBg",children:Object(o.jsxs)("div",{className:"container",style:{paddingBottom:"100px",paddingTop:"100px"},children:[Object(o.jsxs)(ve,{children:[Object(o.jsx)("h1",{className:"font40 extraBold",children:"Our Services"}),Object(o.jsx)("p",{className:"font16",children:"Our services encompass efficient pharmaceutical distribution, supply chain management, and logistics solutions, ensuring timely delivery of essential medical supplies."})]}),Object(o.jsxs)("div",{className:"row textCenter",children:[Object(o.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(o.jsx)(oe,{img:me,title:"Medical Devices",text:"Browse our range of medical devices, engineered for precision, reliability, and patient care."})}),Object(o.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(o.jsx)(oe,{img:he,title:"Surgical Instruments",text:"Discover our surgical instruments, crafted for precision, reliability, and superior performance."})}),Object(o.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(o.jsx)(oe,{img:pe,title:"Medical Furniture",text:"Explore our durable medical furniture, designed for comfort, functionality, and patient care."})})]}),Object(o.jsxs)("div",{className:"row textCenter",children:[Object(o.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(o.jsx)(oe,{img:je,title:"Medical Disposables",text:"Browse our reliable medical disposables, ensuring hygiene, safety, and quality care for all."})}),Object(o.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(o.jsx)(oe,{img:be,title:"Over-the-counter Drugs",text:"Shop our over-the-counter drugs, offering safe, effective relief for common health concerns."})}),Object(o.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(o.jsx)(oe,{img:ge,title:"Speciality Drugs",text:"Explore our specialty drugs, providing targeted treatment for complex and chronic conditions."})})]}),Object(o.jsx)("div",{className:"row flexCenter",children:Object(o.jsx)("div",{style:{margin:"50px 0",width:"200px"}})})]})}),Object(o.jsx)("div",{className:"lightBg",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(we,{className:"flexSpaceCenter",children:[Object(o.jsx)(ye,{children:Object(o.jsx)(ke,{children:Object(o.jsx)(Ce,{className:"flexCenter",children:Object(o.jsx)("img",{className:"radius8",src:fe,alt:"add"})})})}),Object(o.jsxs)(Ne,{children:[Object(o.jsx)("h4",{className:"font15 semiBold",children:"Founder Of Jash Pharmaceuticals"}),Object(o.jsx)("h2",{className:"font30 extraBold",children:"Prof. Dr. Sangameswaran MBBS., D.Ortho., M.S. Ortho.,"}),Object(o.jsx)("p",{className:"font16",children:"Prof. Dr. Sangameswaran, the founder of Jash Pharmaceuticals, is a highly distinguished orthopedic surgeon with over 40 years of experience in healthcare. His extensive qualifications and deep expertise drive his commitment to advancing patient care. By seamlessly integrating his medical knowledge with innovative pharmaceutical solutions, he is dedicated to improving patient outcomes and shaping the future of healthcare."})]})]})})})]})}const Oe=l.a.section`
  width: 100%;
`,ve=l.a.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`,we=l.a.div`
  padding: 50px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
  margin-bottom: 200px;
`,ye=(l.a.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`,l.a.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`),Ne=l.a.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`,ke=l.a.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`,Ce=l.a.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;function Ee(e){let{tag:t,title:a,text:i,action:s,author:c}=e;return Object(o.jsx)(Se,{onClick:s?()=>s():null,className:"animate pointer",children:Object(o.jsxs)(ze,{children:[Object(o.jsx)(Be,{children:a}),Object(o.jsx)(Pe,{children:i}),Object(o.jsx)(Me,{children:Object(o.jsx)(Le,{children:c})}),t&&Object(o.jsx)(Ae,{children:t})]})})}const Se=l.a.div`
  background: #f9f9f9;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  width: 100%;
  max-width: 350px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: 1px solid #e6e6e6;
  min-height: 350px;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    background: #eeeeee;
  }
`,ze=l.a.div`
  padding: 25px;
  flex: 1;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Be=l.a.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
  line-height: 1.4;
`,Pe=l.a.p`
  font-size: 1rem;
  color: #777;
  line-height: 1.7;
  margin-bottom: 18px;
`,Me=l.a.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`,Le=l.a.p`
  font-size: 0.95rem;
  font-weight: 500;
  color: #555;
  margin-left: 10px;
`,Ae=l.a.div`
  background-color: #1a73e8;
  color: white;
  padding: 16px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  align-self: flex-start;
  display: flex;
  justify-content: space-evenly;
`;l.a.button`
  background-color: #1a73e8;
  color: white;
  padding: 12px 20px;
  font-size: 1rem;
  border: none;
  border-top: 1px solid #e6e6e6;
  border-radius: 0 0 20px 20px;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #1558b2;
    transform: translateY(-2px);
  }
`;l.a.div`
  width: 100%;
  padding: 20px 30px;
  margin-top: 30px;
  background-color: #1976d2;
`,l.a.div`
  position: relative;
  top: -40px;
`;l.a.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;function De(){return Object(o.jsx)(Fe,{id:"blog",children:Object(o.jsx)("div",{className:"whiteBg",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)(He,{children:[Object(o.jsx)("h1",{className:"font40 extraBold",children:"Our Products"}),Object(o.jsx)("p",{className:"font13",children:"Explore our Product Guide for comprehensive details on our high-quality medical supplies."})]}),Object(o.jsxs)("div",{className:"row textCenter",children:[Object(o.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(o.jsx)(Ee,{title:"OMEJASH",text:"Omeprazole Gastro-resistant Capsules I.P\r 20 mg Demonstrates Effectiveness and Excellent Tolerance in Managing Acid-related Disorders and Alleviating Associated\r Symptoms.",tag:"Omeprazole Gastro-resistant Capsules\r I.P. 20 mg",author:"",action:()=>alert("clicked")})}),Object(o.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(o.jsx)(Ee,{title:"JASHVIT",text:"Vitamins, Minerals, and L-Glutamic Acid Tablets Combination Demonstrates Effectiveness and Outstanding Tolerance in Supporting Overall Health and Preventing Deficiency-Related Conditions.",tag:"Vitamins, Minerals, and L-Glutamic Acid Tablets",author:"",action:()=>alert("clicked")})}),Object(o.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(o.jsx)(Ee,{title:"JASHCAL",text:"The Calcium Carbonate with Vitamin D3 Tablets Combination Shows Effectiveness and Superior Tolerance in Supporting Bone Health and Preventing Deficiency-Related Conditions.",tag:"Calcium Carbonate with Vitamin D3 Tablets I.P. (500 mg / 250 lU)",author:"",action:()=>alert("clicked")})})]}),Object(o.jsxs)("div",{className:"row textCenter",children:[Object(o.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(o.jsx)(Ee,{title:"FEPAGESIC P",text:"The Aceclofenac - Paracetamol Combination is Effective & Well Tolerated in Relieving Painful OA Flare up*",tag:"Aceclofenac 100 mg + Paracetamol 325 mg",author:"",action:()=>alert("clicked")})}),Object(o.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(o.jsx)(Ee,{title:"JASH GEL",text:"The Diclofenac Diethylamine, Linseed Oil, Methyl Salicylate, and Menthol Gel Combination Demonstrates Efficacy and Excellent Tolerance in Alleviating Pain Associated with Osteoarthritis Flare-ups.",tag:"Diclofenac Diethylamine, Linseed Oil, Methyl Salicylate with Menthol Gel",author:"",action:()=>alert("clicked")})}),Object(o.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(o.jsx)(Ee,{title:"FEPAGESIC SP",text:"The Aceclofenac - Paracetamol and Serratiopeptidase Combination is Effective & Well Tolerated in Relieving Painful OA Flare up*",tag:"Aceclofenac 100 mg + Paracetamol 325 mg + Serratiopeptidase 10 mg",author:"",action:()=>alert("clicked")})})]}),Object(o.jsx)("div",{className:"row flexCenter",style:{height:"100px"}})]})})})}const Fe=l.a.section`
  width: 100%;
  padding-top: 20px;
  margin: 50px 0px 0 0px;
  @media (max-width: 960px) {
    flex-direction: column;
    margin: 100px 0px 0 0px;
  }
`,He=l.a.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;var Ge=function(e){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:18.641,height:12.607,...e,children:Object(o.jsxs)("g",{"data-name":"Group 77",fill:"#49cb86",children:[Object(o.jsx)("path",{"data-name":"Rectangle 40",d:"M16.52 0l2.122 2.529L6.63 12.607l-2.122-2.529z"}),Object(o.jsx)("path",{"data-name":"Rectangle 41",d:"M9.16 10.485L6.63 12.607.001 4.705 2.53 2.583z"})]})})};function Te(e){let t,{icon:a,price:i,title:s,text:c,offers:n,action:l}=e;switch(a){case"roller":t=Object(o.jsx)(q,{});break;case"monitor":t=Object(o.jsx)(I,{});break;case"browser":t=Object(o.jsx)(U,{});break;case"printer":t=Object(o.jsx)(Y,{});break;default:t=Object(o.jsx)(q,{})}return Object(o.jsxs)(Ve,{className:" radius8 shadow",children:[Object(o.jsx)("div",{className:"flexSpaceCenter"}),Object(o.jsxs)("div",{style:{margin:"30px 0"},children:[Object(o.jsx)("h4",{className:"font30 extraBold",children:s}),Object(o.jsx)("p",{className:"font13",children:c})]}),Object(o.jsx)("div",{children:n?n.map(((e,t)=>Object(o.jsxs)("div",{className:"flexNullCenter",style:{margin:"15px 0"},children:[Object(o.jsx)("div",{style:{position:"relative",top:"-1px",marginRight:"15px"},children:e.cheked?Object(o.jsx)("div",{style:{minWidth:"20px"},children:Object(o.jsx)(Ge,{})}):Object(o.jsx)("div",{style:{minWidth:"20px"}})}),Object(o.jsx)("p",{className:"font20 extraBold",children:e.name})]},t))):null})]})}const Ve=l.a.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
  background-color: #f5f5f5;
`;function We(){return Object(o.jsx)(Re,{id:"pricing",children:Object(o.jsx)("div",{className:"whiteBg",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)(Je,{children:[Object(o.jsx)("h1",{className:"font40 extraBold",children:"Why Our Customers Choose Us"}),Object(o.jsx)("p",{className:"font16",children:"Customers choose us for our proven commitment to quality, reliability, and innovation in delivering medical supplies that meet all healthcare needs. We are trusted for consistently providing high-quality products that healthcare professionals and patients can depend on. Our focus on developing cutting-edge solutions, ensuring timely availability, and maintaining affordability sets us apart, making us the preferred partner for those who seek excellence and dependability in healthcare."})]}),Object(o.jsxs)(qe,{className:"flexSpaceNull",children:[Object(o.jsx)(Ie,{children:Object(o.jsx)(Te,{title:"Quality",text:"Delivering superior quality with reliable, high-performance medical supplies for optimal care.",offers:[{name:"Precision",cheked:!0},{name:"Durability",cheked:!0},{name:"Integrity",cheked:!0},{name:"Trustworthiness",cheked:!0},{name:"Performance",cheked:!0}]})}),Object(o.jsx)(Ie,{children:Object(o.jsx)(Te,{title:"Reliability",text:"Trusted for consistent performance, delivering safe and effective healthcare solutions.",offers:[{name:"Consistent Performance",cheked:!0},{name:"Proven Trust",cheked:!0},{name:"Dependable Solutions",cheked:!0},{name:"Unwavering Quality",cheked:!0},{name:"Reliable Service",cheked:!0}],action:()=>alert("clicked")})}),Object(o.jsx)(Ie,{children:Object(o.jsx)(Te,{title:"Innovative",text:"Driven by innovation, we provide cutting-edge solutions that enhance healthcare outcomes.",offers:[{name:"Creative Solutions",cheked:!0},{name:"Forward Thinking",cheked:!0},{name:"Cutting-Edge",cheked:!0},{name:"Game-Changing",cheked:!0},{name:"Pioneering Technology",cheked:!0}],action:()=>alert("clicked")})})]})]})})})}const Re=l.a.section`
  width: 100%;
  padding: 50px 0;
`,Je=l.a.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`,qe=l.a.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`,Ie=l.a.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
  }
`;var Ue=a(30),Ye=a.p+"static/media/contact-1.3f464323.png",$e=a.p+"static/media/contact-2.6a4fb44e.png",_e=a.p+"static/media/contact-3.de759c02.png";function Qe(){const[e,t]=Object(i.useState)({fname:"",email:"",subject:"",message:""}),[a,s]=Object(i.useState)({}),[c,n]=Object(i.useState)(!1),[l,r]=Object(i.useState)(!0),d=a=>{t({...e,[a.target.name]:a.target.value})};return Object(o.jsx)(Xe,{id:"contact",children:Object(o.jsx)("div",{className:"lightBg",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)(Ze,{children:[Object(o.jsx)("h1",{className:"font40 extraBold",children:"Let's get in touch"}),Object(o.jsx)("p",{className:"font13",children:"Reach out to us today for any inquiries or assistance. We're here to help and connect!"})]}),Object(o.jsxs)("div",{className:"row",style:{paddingBottom:"30px"},children:[Object(o.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6",children:Object(o.jsxs)(et,{onSubmit:t=>{t.preventDefault(),(()=>{const t={};return e.fname.trim()||(t.fname="First name is required"),e.email.trim()?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email is invalid"):t.email="Email is required",e.subject.trim()||(t.subject="Subject is required"),e.message.trim()||(t.message="Message is required"),s(t),0===Object.keys(t).length})()&&(console.log("Form data:",e),Ue.a.send("service_t71xo9o","template_jh149fs",{fname:e.fname,email:e.email,subject:e.subject,message:e.message},"5QJWfYuzFt_5CFwr1").then((e=>{console.log("Email successfully sent:",e.text),"OK"===e.text&&r(!1)}),(e=>{console.log("Error sending email:",e.text)})),n(!0),setTimeout((()=>n(!1)),500))},children:[Object(o.jsx)("label",{className:"font16",children:"First name:"}),Object(o.jsx)("input",{type:"text",id:"fname",name:"fname",className:"font20 extraBold",value:e.fname,onChange:d,placeholder:"Share your name with us",disabled:!l}),a.fname&&Object(o.jsx)(st,{children:a.fname}),Object(o.jsx)("label",{className:"font16",children:"Email:"}),Object(o.jsx)("input",{type:"email",id:"email",name:"email",className:"font20 extraBold",value:e.email,onChange:d,placeholder:"Share your Email with us",disabled:!l}),a.email&&Object(o.jsx)(st,{children:a.email}),Object(o.jsx)("label",{className:"font16",children:"Subject:"}),Object(o.jsx)("input",{type:"text",id:"subject",name:"subject",className:"font20 extraBold",value:e.subject,onChange:d,placeholder:"Tell us what you\u2019re focusing on",disabled:!l}),a.subject&&Object(o.jsx)(st,{children:a.subject}),Object(o.jsx)("label",{className:"font16",children:"Message:"}),Object(o.jsx)("textarea",{rows:"4",cols:"50",id:"message",name:"message",className:"font20 extraBold",value:e.message,onChange:d,placeholder:"Share what\u2019s on your mind, and don\u2019t forget to add your contact info",disabled:!l}),a.message&&Object(o.jsx)(st,{children:a.message}),l&&Object(o.jsx)(it,{className:"flex",children:Object(o.jsx)(tt,{type:"submit",value:"Send Message",className:"pointer animate radius8 "+(c?"clicked":""),style:{maxWidth:"220px",backgroundColor:"#1976d2",height:"40px"}})})]})}),Object(o.jsxs)("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 flex",children:[Object(o.jsxs)("div",{style:{width:"50%"},className:"flexNullCenter flexColumn",children:[Object(o.jsx)(at,{children:Object(o.jsx)("img",{src:Ye,alt:"office",className:"radius6"})}),Object(o.jsx)(at,{children:Object(o.jsx)("img",{src:$e,alt:"office",className:"radius6"})})]}),Object(o.jsx)("div",{style:{width:"50%"},children:Object(o.jsx)("div",{style:{marginTop:"100px"},children:Object(o.jsx)("img",{src:_e,alt:"office",className:"radius6"})})})]})]})]})})})}const Ke=l.b`
  0% { transform: scale(1); }
  50% { transform: scale(0.9); }
  100% { transform: scale(1); }
`,Xe=l.a.section`
  width: 100%;
`,Ze=l.a.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`,et=l.a.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
  input::placeholder,
  textarea::placeholder {
    color: #707070; /* Change to any desired color */
    opacity: 0.7; /* Adjust the opacity to make it more subtle if needed */
    font-style: italic; /* Optional: make the placeholder italic */
    font-size: 14px;
  }
`,tt=l.a.input`
  background-color: #1976d2; /* Primary background color */
  width: 100%;
  outline: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  transition:
    transform 0.3s ease-in-out,
    background-color 0.3s,
    box-shadow 0.3s;
  z-index: 10; /* Ensure the button is on top if needed */

  /* Hover effects */
  :hover {
    background-color: #155a8a; /* Darker blue on hover */
    color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow effect */
  }

  /* Focus effect for accessibility */
  :focus {
    outline: none;
    box-shadow: 0 0 5px rgba(25, 118, 210, 0.8); /* Blue glow on focus */
  }

  /* Animation when button is clicked */
  &.clicked {
    animation: ${Ke} 0.5s ease-in-out;
  }

  /* Responsive design for smaller screens */
  @media (max-width: 991px) {
    width: 100%; /* Ensures button spans full width on smaller screens */
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    font-size: 14px; /* Smaller font size for small devices */
    padding: 12px;
  }
`,at=l.a.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`,it=l.a.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`,st=l.a.div`
  color: red;
  font-size: 12px;
  margin-top: -20px;
  margin-bottom: 20px;
`;function ct(){return Object(o.jsx)(nt,{children:Object(o.jsx)("div",{style:{backgroundColor:"#1976D2"},children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(lt,{className:"flexSpaceCenter",style:{padding:"30px 0"},children:[Object(o.jsx)(r.Link,{className:"flexCenter animate pointer",to:"home",smooth:!0,offset:-80,children:Object(o.jsx)(p,{src:x,alt:"Jash Pharmaceuticals & Medical supplies"})}),Object(o.jsxs)(rt,{className:"whiteColor font13",children:["\xa9 ",(new Date).getFullYear()," -"," ",Object(o.jsx)("span",{className:"font16",style:{color:"#000",fontSize:"17px"},children:"Jash Pharmaceuticals & Medical supplies"})," ","All Right Reserved"]}),Object(o.jsx)(r.Link,{className:"whiteColor animate pointer font13",to:"home",smooth:!0,offset:-80,children:"Back to top"})]})})})})}const nt=l.a.div`
  width: 100%;
`,lt=l.a.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`,rt=l.a.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;function ot(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(y,{}),Object(o.jsx)(M,{}),Object(o.jsx)(De,{}),Object(o.jsx)(X,{}),Object(o.jsx)(ue,{}),Object(o.jsx)(We,{}),Object(o.jsx)(Qe,{}),Object(o.jsx)(ct,{})]})}function dt(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(n.a,{children:[Object(o.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),Object(o.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),Object(o.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap",rel:"stylesheet"})]}),Object(o.jsx)(ot,{})]})}var xt=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,67)).then((t=>{let{getCLS:a,getFID:i,getFCP:s,getLCP:c,getTTFB:n}=t;a(e),i(e),s(e),c(e),n(e)}))};c.a.render(Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(dt,{})}),document.getElementById("root")),xt()}},[[66,1,2]]]);
//# sourceMappingURL=main.910ac66b.chunk.js.map