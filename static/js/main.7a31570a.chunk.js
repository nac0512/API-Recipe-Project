(this["webpackJsonpfree-recipes"]=this["webpackJsonpfree-recipes"]||[]).push([[0],{21:function(e,t,r){},24:function(e,t,r){"use strict";r.r(t);var n=r(2),i=r.n(n),c=r(15),s=r.n(c),a=(r(21),r(9)),o=r(3),l=r(6),d=r.n(l),j=r(10),b=r(4),h=r(1),g=function(e){return Object(h.jsx)("button",{onClick:e.clickEvent,style:e.style,children:e.content})},u=function(e){return Object(h.jsx)("img",{src:e.imgSrc,alt:e.imgAlt,style:e.style,id:e.id})},m=r(11),p=r(7),x=function(e){for(var t=e.data,r=[],n=1;n<=15;n++)null!==t["strMeasure"+n]&&""!==t["strMeasure"+n]&&null!==t["strIngredient"+n]&&""!==t["strIngredient"+n]&&r.push("".concat(t["strMeasure"+n]," ").concat(t["strIngredient"+n]));return Object(h.jsxs)("article",{style:O.article,children:[Object(h.jsx)(u,{imgSrc:t.strDrinkThumb,imgAlt:"Finished result of ".concat(t.strDrink),style:O.img,id:t.idDrink}),Object(h.jsx)("h3",{style:O.h3,children:t.strDrink}),Object(h.jsxs)("p",{style:O.category,children:[Object(h.jsx)("span",{style:O.span,children:"Category:"})," ",t.strCategory," | ",Object(h.jsx)("span",{style:O.span,children:"Alcoholic:"})," ",t.strAlcoholic," | ",Object(h.jsx)("span",{style:O.span,children:"Glass:"})," ",t.strGlass]}),Object(h.jsxs)("h4",{style:O.ingh4,children:[Object(h.jsx)(m.a,{style:O.icon}),"Ingredients"]}),Object(h.jsx)("ul",{style:O.ul,children:r.map((function(e,t){return Object(h.jsx)("li",{children:e},t)}))}),Object(h.jsxs)("h4",{style:O.insth4,children:[Object(h.jsx)(p.b,{style:O.icon}),"Instructions"]}),Object(h.jsx)("p",{style:O.instructions,children:t.strInstructions})]},t.idDrink)},O={article:{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"max-content",gridTemplateAreas:'"h3 ingredientsh4"\n        "img ingredients"\n        "category ingredients"\n        "instructionsh4 instructionsh4"\n        "instructions instructions"',width:"65rem",margin:"0 auto 1.5rem auto",color:"rgb(21, 21, 21)",backgroundColor:"rgb(255, 253, 252)",borderBottom:"dashed 2px rgba(81,152,114,.5)"},img:{width:"25rem",height:"20rem",margin:"0 auto",border:"double 7px rgb(253, 184, 51)",borderRadius:".8rem",gridArea:"img"},h3:{gridArea:"h3"},category:{gridArea:"category"},span:{color:"rgba(81,152,114,.5)"},ingh4:{gridArea:"ingredientsh4"},ul:{margin:"0 0 0 9rem",display:"inline-block",textAlign:"left",gridArea:"ingredients"},icon:{fontSize:"2rem",verticalAlign:"text-top",marginRight:".5rem",color:"rgba(81,152,114,.5)"},insth4:{gridArea:"instructionsh4"},instructions:{gridArea:"instructions"}},y=function(e){for(var t=e.data,r=[],n=1;n<=20;n++)null!==t["strMeasure"+n]&&""!==t["strMeasure"+n]&&null!==t["strIngredient"+n]&&""!==t["strIngredient"+n]&&r.push("".concat(t["strMeasure"+n]," ").concat(t["strIngredient"+n]));return Object(h.jsxs)("article",{style:f.article,children:[Object(h.jsx)(u,{imgSrc:t.strMealThumb,imgAlt:"Finished result of ".concat(t.strMeal),style:f.img}),Object(h.jsx)("h3",{style:f.h3,children:t.strMeal}),Object(h.jsxs)("p",{style:f.category,children:[Object(h.jsx)("span",{style:f.span,children:"Cuisine:"})," ",t.strArea," | ",Object(h.jsx)("span",{style:f.span,children:"Category:"})," ",t.strCategory," | ",Object(h.jsx)("span",{style:f.span,children:"Tags:"})," ",t.strTags]}),Object(h.jsxs)("h4",{style:f.ingh4,children:[Object(h.jsx)(m.a,{style:f.icon}),"Ingredients"]}),Object(h.jsx)("ul",{style:f.ul,children:r.map((function(e,t){return Object(h.jsx)("li",{children:e},t)}))}),Object(h.jsxs)("h4",{style:f.insth4,children:[Object(h.jsx)(p.b,{style:f.icon}),"Instructions"]}),Object(h.jsx)("p",{style:f.instructions,children:t.strInstructions.replaceAll("\r\n","\r\n\r\n")}),Object(h.jsxs)("h4",{style:f.vidh4,children:[Object(h.jsx)(p.c,{style:f.icon}),"Video"]}),Object(h.jsx)("p",{style:f.vid,children:Object(h.jsxs)("a",{href:t.strYoutube,target:"_blank",rel:"noreferrer",style:f.a,children:["Join us in the kitchen! ",Object(h.jsx)(p.a,{style:f.linkIcon})]})})]},t.id)},f={article:{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"max-content",gridTemplateAreas:'"h3 ingredientsh4"\n        "img ingredients"\n        "category ingredients"\n        "instructionsh4 instructionsh4"\n        "instructions instructions"\n        "videoh4 videoh4"\n        "vidLink vidLink"',width:"65rem",margin:"0 auto 1.5rem auto",color:"rgb(21, 21, 21)",backgroundColor:"rgb(255, 253, 252)",borderBottom:"dashed 2px rgba(81,152,114,.5)"},img:{width:"25rem",height:"20rem",margin:"0 auto",border:"double 7px rgb(253, 184, 51)",borderRadius:".8rem",gridArea:"img"},h3:{gridArea:"h3"},category:{gridArea:"category"},span:{color:"rgba(81,152,114,.5)"},ingh4:{gridArea:"ingredientsh4"},ul:{margin:"0 0 0 9rem",display:"inline-block",textAlign:"left",gridArea:"ingredients"},icon:{fontSize:"2rem",verticalAlign:"text-top",marginRight:".5rem",color:"rgba(81,152,114,.5)"},insth4:{gridArea:"instructionsh4"},instructions:{gridArea:"instructions",whiteSpace:"pre-line"},vidh4:{gridArea:"videoh4",marginBottom:"0"},vid:{gridArea:"vidLink"},a:{color:"rgb(161, 103, 74)",textDecoration:"none",fontSize:"1.2rem"},linkIcon:{marginLeft:".1rem",verticalAlign:"text-top",fontSize:"1.5rem"}},k=r.p+"static/media/logo.a1e7277a.png",v=function(){return Object(h.jsxs)("nav",{children:[Object(h.jsx)(a.b,{to:"/",style:w.link,children:"Home"}),Object(h.jsx)(a.b,{to:"/randomMeal",style:w.link,children:"Random Meal Recipe"}),Object(h.jsx)(a.b,{to:"/randomDrink",style:w.link,children:"Random Drink Recipe"})]})},w={link:{paddingLeft:"1.5rem",color:"rgb(161,103,74)",fontSize:"1.1rem"}},S=r(8),A=function(){return Object(h.jsxs)("footer",{style:C.footer,children:[Object(h.jsx)("img",{src:k,alt:"Website Logo",style:C.img}),Object(h.jsx)("h2",{style:C.h2,children:"Anyone Can Cook"}),Object(h.jsx)(v,{}),Object(h.jsxs)("ul",{style:C.ul,children:[Object(h.jsx)("li",{style:C.li,children:Object(h.jsxs)("a",{href:"https://www.pinterest.com",target:"_blank",rel:"noreferrer",style:C.a,children:[Object(h.jsx)(S.c,{style:C.icon}),"Go to pinterest page"]})}),Object(h.jsx)("li",{style:C.li,children:Object(h.jsxs)("a",{href:"https://www.instagram.com",target:"_blank",rel:"noreferrer",style:C.a,children:[Object(h.jsx)(S.b,{style:C.icon}),"Go to instagram page"]})}),Object(h.jsx)("li",{style:C.li,children:Object(h.jsxs)("a",{href:"https://www.facebook.com",target:"_blank",rel:"noreferrer",style:C.a,children:[Object(h.jsx)(S.a,{style:C.icon}),"Go to facebook page"]})}),Object(h.jsx)("li",{style:C.li,children:Object(h.jsxs)("a",{href:"https://www.twitter.com",target:"_blank",rel:"noreferrer",style:C.a,children:[Object(h.jsx)(S.d,{style:C.icon}),"Go to twitter page"]})})]}),Object(h.jsxs)("div",{style:C.div,children:[Object(h.jsx)("p",{style:C.footnote,children:"\xa9 2021 Anyone Can Cook"}),Object(h.jsx)("p",{style:C.footnote,children:"Terms & Conditions | Privacy Policy"})]})]})},C={footer:{color:"rgb(21, 21, 21)",textAlign:"center",paddingTop:"1rem",backgroundColor:"rgba(81,152,114,.5)"},img:{width:"75px",verticalAlign:"middle",paddingBottom:"1rem"},h2:{fontFamily:"Great Vibes",fontSize:"2.5rem",display:"inline"},ul:{listStyleType:"none"},li:{display:"inline-block",marginRight:"1.5rem"},a:{color:"rgb(253,255,252)",fontSize:"0"},icon:{fontSize:"1.5rem"},div:{borderTop:"solid .5px rgb(21, 21, 21)",padding:"0 5rem",display:"flex",flexWrap:"wrap",justifyContent:"space-between"},footnote:{fontSize:".8rem"}},T=function(){return Object(h.jsxs)("header",{style:R.header,children:[Object(h.jsx)("img",{src:k,alt:"Website Logo",style:R.img}),Object(h.jsx)("h1",{style:R.h1,children:"Anyone Can Cook"}),Object(h.jsx)(v,{})]})},R={header:{textAlign:"center",padding:"1rem 0",backgroundColor:"rgba(81,152,114,.5)"},img:{width:"100px",verticalAlign:"middle",paddingBottom:"1.5rem"},h1:{fontFamily:"Great Vibes",fontSize:"4rem",display:"inline",verticalAlign:"middle"}},F=r(12),D=function(e){return Object(h.jsxs)("form",{onSubmit:e.findRecipe,style:I.form,children:[Object(h.jsxs)("div",{style:I.div,children:[Object(h.jsx)("label",{htmlFor:"recipeType",style:I.label,children:"Select the recipe category:"}),Object(h.jsx)("input",{type:"radio",id:"meal",name:"recipeType",value:"https://www.themealdb.com/",defaultChecked:!0}),Object(h.jsxs)("label",{htmlFor:"meal",style:I.option,children:[Object(h.jsx)(m.b,{style:I.icon})," Meal"]}),Object(h.jsx)("input",{type:"radio",id:"drink",name:"recipeType",value:"https://www.thecocktaildb.com/"}),Object(h.jsxs)("label",{htmlFor:"drink",children:[Object(h.jsx)(F.a,{style:I.icon})," Drink"]})]}),Object(h.jsxs)("div",{style:I.div,children:[Object(h.jsx)("label",{htmlFor:"searchTerm",style:I.label,children:"What are you looking for? "}),Object(h.jsx)("input",{type:"text",name:"searchTerm",id:"searchTerm",placeholder:"Search Recipes... ",style:I.input,autoFocus:!0})]}),Object(h.jsx)(g,{content:"Find Recipes",style:I.button})]})},I={form:{width:"40rem",margin:"0 auto",textAlign:"left"},div:{marginBottom:"1.5rem"},icon:{color:"rgba(81, 152, 114, .5)",fontSize:"1.8rem",verticalAlign:"text-top"},label:{marginRight:"1.2rem"},option:{marginRight:"1rem"},input:{width:"15rem",height:"2rem",borderColor:"rgba(81, 152, 114, .5)",borderRadius:".5rem",backgroundColor:"rgb(235, 235, 235)",textIndent:"1rem",fontSize:"1.2rem"},button:{marginLeft:"36%",marginTop:"1rem",width:"8rem",height:"2.5rem",borderRadius:"3rem",borderColor:"rgb(161, 103, 74)",color:"rgb(161, 103, 74)",backgroundColor:"rgb(253, 255, 252)",fontSize:".9rem"}},M=r(16),z=function(e){var t=e.data,r=e.choiceSelected;return Object(h.jsxs)("article",{style:B.display,children:[Object(h.jsx)("a",{href:t.strImageSource,onClick:r,children:Object(h.jsx)(u,{imgSrc:t.strDrinkThumb,imgAlt:"Finished result of ".concat(t.strDrink),style:B.img,id:t.idDrink})}),Object(h.jsx)("h3",{style:B.h3,children:t.strDrink}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{style:B.span,children:"Category:"})," ",t.strCategory," | ",Object(h.jsx)("span",{style:B.span,children:"Alcoholic:"})," ",t.strAlcoholic," | ",Object(h.jsx)("span",{style:B.span,children:"Glass:"})," ",t.strGlass]})]},t.idDrink)},B={display:{width:"65rem",margin:"0 auto 1.5rem auto",paddingBottom:"1.5rem",color:"rgb(21, 21, 21)",backgroundColor:"rgb(255, 253, 252)",borderBottom:"dashed 2px rgba(81,152,114,.5)",overflow:"auto"},img:{float:"left",width:"15rem",border:"double 7px rgb(253, 184, 51)",borderRadius:".8rem",cursor:"pointer",textWrap:"wrap"},h3:{marginTop:"5rem"},span:{color:"rgba(81,152,114,.5)"}},E=function(e){var t=e.data,r=e.choiceSelected;return Object(h.jsxs)("article",{style:G.display,children:[Object(h.jsx)("a",{href:t.strImageSource,onClick:r,children:Object(h.jsx)(u,{imgSrc:t.strMealThumb,imgAlt:"Finished result of ".concat(t.strMeal),style:G.img,id:t.idMeal})}),Object(h.jsx)("h3",{style:G.h3,children:t.strMeal}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{style:G.span,children:"Cuisine:"})," ",t.strArea," | ",Object(h.jsx)("span",{style:G.span,children:"Category:"})," ",t.strCategory," | ",Object(h.jsx)("span",{style:G.span,children:"Tags:"})," ",t.strTags]})]},t.idMeal)},G={display:{width:"65rem",margin:"0 auto 1.5rem auto",paddingBottom:"1.5rem",color:"rgb(21, 21, 21)",backgroundColor:"rgb(255, 253, 252)",borderBottom:"dashed 2px rgba(81,152,114,.5)",overflow:"auto"},img:{float:"left",width:"15rem",border:"double 7px rgb(253, 184, 51)",borderRadius:".8rem",zIndex:"2",cursor:"pointer"},h3:{marginTop:"5rem"},span:{color:"rgba(81,152,114,.5)"}};var L=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),r=t[0],i=t[1],c=Object(n.useState)(""),s=Object(b.a)(c,2),a=s[0],o=s[1],l=Object(n.useState)(""),u=Object(b.a)(l,2),m=u[0],p=u[1],O=Object(n.useState)(""),f=Object(b.a)(O,2),k=f[0],v=f[1],w=Object(n.useState)(!1),S=Object(b.a)(w,2),C=S[0],R=S[1],I=Object(n.useState)(!1),B=Object(b.a)(I,2),G=B[0],L=B[1],N=Object(n.useState)(!1),P=Object(b.a)(N,2),_=P[0],H=P[1],J=Object(n.useState)(""),V=Object(b.a)(J,2),Y=V[0],q=V[1],K=Object(n.useState)(!1),Q=Object(b.a)(K,2),U=Q[0],X=Q[1],Z=Object(n.useState)(""),$=Object(b.a)(Z,2),ee=$[0],te=$[1],re=Object(n.useState)(""),ne=Object(b.a)(re,2),ie=ne[0],ce=ne[1],se=function(){v(""),X(!1),te(""),R(!1),ce(""),H(!1)},ae=function(){X(!1),te("")},oe=function(e){e.preventDefault(),q(e.target.id)};return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,n,i,c,s,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===r){e.next=9;break}return e.next=3,fetch("".concat(r,"api/json/v1/1/search.php?s=").concat(a));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,"meal"===m?(v(n.meals),L(!0)):(v(n.drinks),L(!1)),R(!0);case 9:if(""===Y){e.next=28;break}if("meal"!==m){e.next=20;break}return e.next=13,fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(Y));case 13:return i=e.sent,e.next=16,i.json();case 16:c=e.sent,te(c.meals),e.next=27;break;case 20:return e.next=22,fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(Y));case 22:return s=e.sent,e.next=25,s.json();case 25:o=e.sent,te(o.drinks);case 27:X(!0);case 28:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),i(""),q(""),null==k&&H(!0)}),[r,a,m,k,Y]),Object(h.jsxs)("div",{style:W.display,children:[Object(h.jsx)(T,{}),Object(h.jsx)("main",{style:W.main,children:C?_?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h2",{style:W.h2,children:["all recipes found for: ",a]}),Object(h.jsx)(g,{content:"New Search",clickEvent:se,style:W.button}),Object(h.jsxs)("p",{children:[Object(h.jsx)(M.a,{style:W.icon})," We're sorry. We couldn't find any recipes matching ",a,". Please try again."]})]}):G?U?Object(h.jsxs)(h.Fragment,{children:[ee.map((function(e,t){return Object(h.jsx)(y,{data:e},t)})),Object(h.jsx)(g,{content:"New Search",clickEvent:se,style:W.button}),Object(h.jsx)(g,{content:"Back To Search Results",clickEvent:ae,style:W.button})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h2",{style:W.h2,children:["all recipes found for: ",a]}),Object(h.jsx)(g,{content:"New Search",clickEvent:se,style:W.button}),k.map((function(e,t){return Object(h.jsx)(E,{data:e,choiceSelected:oe},t)})),Object(h.jsx)(g,{content:"New Search",clickEvent:se,style:W.button})]}):U?Object(h.jsxs)(h.Fragment,{children:[ee.map((function(e,t){return Object(h.jsx)(x,{data:e},t)})),Object(h.jsx)(g,{content:"New Search",clickEvent:se,style:W.button}),Object(h.jsx)(g,{content:"Back To Search Results",clickEvent:ae,style:W.button})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h2",{style:W.h2,children:["all recipes found for: ",a]}),Object(h.jsx)(g,{content:"New Search",clickEvent:se,style:W.button}),k.map((function(e,t){return Object(h.jsx)(z,{data:e,choiceSelected:oe},t)})),Object(h.jsx)(g,{content:"New Search",clickEvent:se,style:W.button})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{style:W.h2,children:"search free recipes"}),Object(h.jsx)("p",{style:W.instructions,children:"Welcome to Anyone Can Cook, the online database for finding delicious recipes for any occasion! Looking for something specific? Enter a search word below and find exactly what you're looking for. Feeling a little adventourous? Try the random meal or drink recipe generators and try something new."}),Object(h.jsx)(D,{findRecipe:function(e){e.preventDefault(),""!==e.target.recipeType.value.trim()&&""!==e.target.searchTerm.value.trim()?(e.target.recipeType.value.includes("meal")?p("meal"):p("drink"),i(e.target.recipeType.value),o(e.target.searchTerm.value),e.target.reset()):ce([Object(h.jsx)(F.b,{style:W.icon})," Please don't leave any fields blank"])}}),Object(h.jsx)("p",{style:W.warning,children:ie})]})}),Object(h.jsx)(A,{})]})},W={display:{minHeight:"100vh",display:"flex",flexDirection:"column"},main:{flexGrow:"1",textAlign:"center",color:"rgb(21, 21, 21)"},h2:{borderBottom:"dashed 2px rgba(81, 152, 114, .5)",width:"max-content",margin:"2rem auto",textTransform:"capitalize"},instructions:{width:"65rem",margin:"0 auto 3rem auto"},warning:{color:"rgb(186, 63, 29)"},icon:{fontSize:"1.8rem",verticalAlign:"text-top"},button:{margin:"0 0 1.5rem 1rem",width:"max-content",height:"2.5rem",borderRadius:"3rem",borderColor:"rgb(161, 103, 74)",color:"rgb(161, 103, 74)",backgroundColor:"rgb(253, 255, 252)",fontSize:".9rem"}};var N=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),r=t[0],i=t[1],c=Object(n.useState)(!1),s=Object(b.a)(c,2),a=s[0],o=s[1];return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,i(r.drinks),o(!0);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(h.jsxs)("div",{style:P.display,children:[Object(h.jsx)(T,{}),Object(h.jsx)("main",{style:P.main,children:a?r.map((function(e,t){return Object(h.jsx)(x,{data:e},t)})):Object(h.jsx)("p",{children:"Recipe Loading . . ."})}),Object(h.jsx)(A,{})]})},P={display:{minHeight:"100vh",display:"flex",flexDirection:"column"},main:{flexGrow:"1",textAlign:"center",color:"rgb(21, 21, 21)"}};var _=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),r=t[0],i=t[1],c=Object(n.useState)(!1),s=Object(b.a)(c,2),a=s[0],o=s[1];return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.themealdb.com/api/json/v1/1/random.php");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,i(r.meals),o(!0);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(h.jsxs)("div",{style:H.display,children:[Object(h.jsx)(T,{}),Object(h.jsx)("main",{style:H.main,children:a?r.map((function(e,t){return Object(h.jsx)(y,{data:e},t)})):Object(h.jsx)("p",{children:"Recipe Loading . . ."})}),Object(h.jsx)(A,{})]})},H={display:{minHeight:"100vh",display:"flex",flexDirection:"column"},main:{flexGrow:"1",textAlign:"center",color:"rgb(21, 21, 21)"}},J=function(){return Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/",element:Object(h.jsx)(L,{})}),Object(h.jsx)(o.a,{path:"randomMeal",element:Object(h.jsx)(_,{})}),Object(h.jsx)(o.a,{path:"randomDrink",element:Object(h.jsx)(N,{})})]})};var V=function(){return Object(h.jsx)(a.a,{children:Object(h.jsx)("div",{children:Object(h.jsx)(J,{})})})},Y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,25)).then((function(t){var r=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),i(e),c(e),s(e)}))};s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(V,{})}),document.getElementById("root")),Y()}},[[24,1,2]]]);
//# sourceMappingURL=main.7a31570a.chunk.js.map