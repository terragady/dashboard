(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{11:function(e,a,s){},12:function(e,a,s){},21:function(e,a,s){"use strict";s.r(a);var t=s(1),l=s.n(t),n=s(6),c=s.n(n),r=(s(11),s(3)),i=(s(12),s(2)),o=s(0),u=function(e){var a=e.data;return Object(o.jsxs)(i.Chart,{padding:"auto",scale:{value:{formatter:function(e){return e+"%"}},week:{formatter:function(e){return"Week "+e}}},data:a,autoFit:!0,interactions:["active-region"],filter:[["value",function(e){return e>.01}]],children:[Object(o.jsx)(i.Interval,{adjust:[{type:"dodge",marginRatio:0}],color:"name",position:"week*value"}),Object(o.jsx)(i.Tooltip,{shared:!0,scale:{week:{formatter:function(e){return"Week"+e}}}}),Object(o.jsx)(i.Slider,{start:.3,padding:[5,15,5,5],data:[1]})]})},d=function(e){var a=e.data;return Object(o.jsxs)(i.Chart,{padding:"auto",data:a,autoFit:!0,interactions:["active-region"],children:[Object(o.jsx)(i.Interval,{adjust:[{type:"dodge",marginRatio:0}],color:"name",position:"week*value"}),Object(o.jsx)(i.Tooltip,{shared:!0,scale:{week:{formatter:function(e){return"Week"+e}}}}),Object(o.jsx)(i.Slider,{start:.5,padding:[5,15,5,5]})]})},v=function(e){var a=e.data;return Object(o.jsxs)(i.Chart,{padding:"auto",scale:{value:{alias:"Average IR",min:0,max:100,formatter:function(e){return e+"%"},tickInterval:5},value1:{alias:"Average IR",min:0,max:100,formatter:function(e){return e+"%"},tickInterval:5}},data:a,autoFit:!0,filter:[["value",function(e){return e>.1}]],children:[Object(o.jsx)(i.LineAdvance,{area:!0,shape:"smooth",position:"week*value",size:2,color:"blue",point:{size:3}}),Object(o.jsx)(i.Point,{position:"week*value1",size:0}),Object(o.jsx)(i.Axis,{name:"week",title:!0}),Object(o.jsx)(i.Tooltip,{showCrosshairs:!0,shared:!0,children:function(e,a){return Object(o.jsxs)("div",{className:"tooltip",children:["Week: ",e,Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Average Invoice Rate: ",Object(o.jsxs)("b",{style:{marginLeft:"15px"},children:[a[0].data.value,"%"]})]})}}),Object(o.jsx)(i.Slider,{start:.3,padding:[5,15,5,5]}),Object(o.jsx)(i.Axis,{name:"value1",position:"right"})]})},j=function(e){var a=e.data,s={value:{alias:"Cummulative",sync:!0,nice:!0,formatter:function(e){return Math.abs(e)<1e3?e+"NOK":Math.abs(e)>=1e3&&Math.abs(e)<1e6?e/1e3+"k NOK":Math.ceil(e/1e6)+","+(Math.abs(e)-1e6)/1e3+"k NOK"}},month:{sync:!0}};return Object(o.jsxs)(i.Chart,{padding:[20,80,80,80],scale:s,data:a.acc,autoFit:!0,interactions:["active-region"],children:[Object(o.jsx)(i.Tooltip,{shared:!0}),Object(o.jsx)(i.Interval,{position:"month*value",color:"rgba(10,10,10,0.2)"}),Object(o.jsx)(i.View,{padding:0,scale:s,data:a.rest,autoFit:!0,children:Object(o.jsx)(i.LineAdvance,{shape:"smooth",color:["name",["rgb(235, 236, 28)","#6E97D7"]],position:"month*value",size:2,point:{size:3}})})]})},g=function(e){var a=e.data;return Object(o.jsxs)(i.Chart,{padding:"auto",scale:{week:{formatter:function(e){return"Week "+e}}},data:a,autoFit:!0,interactions:["active-region"],children:[Object(o.jsx)(i.Interval,{adjust:[{type:"dodge",marginRatio:0}],color:"name",position:"week*value"}),Object(o.jsx)(i.Tooltip,{shared:!0,scale:{week:{formatter:function(e){return"Week"+e}}}}),Object(o.jsx)(i.Slider,{start:.3,padding:[5,15,5,5]})]})},h=function(e){var a=e.data;return Object(o.jsxs)(i.Chart,{padding:[0,0,80,65],scale:{week:{formatter:function(e){return"Week "+e}},value:{alias:"Offers sent",formatter:function(e){return e/1e3+"k NOK"}}},data:a,autoFit:!0,interactions:["active-region"],children:[Object(o.jsx)(i.Tooltip,{shared:!0}),Object(o.jsx)(i.Interval,{adjust:[{type:"dodge",marginRatio:0}],color:"name",position:"week*value"}),Object(o.jsx)(i.Slider,{start:.3,padding:[5,15,5,5]})]})},O=s(4),b=s.n(O);var m=function(){var e=l.a.useState(new Date),a=Object(r.a)(e,2),s=a[0],t=a[1];return l.a.useEffect((function(){var e=setInterval((function(){t(new Date)}),1e3);return function(){clearInterval(e)}})),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"clock-card logo"}),Object(o.jsx)("div",{className:"clock-card clock",children:Object(o.jsx)("div",{children:Intl.DateTimeFormat("en-UK",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}).format(s)})}),Object(o.jsxs)("div",{className:"clock-card date-card",children:[Object(o.jsx)("div",{children:Intl.DateTimeFormat("en-UK",{weekday:"long",month:"long",day:"numeric",year:"numeric"}).format(s)}),Object(o.jsxs)("div",{children:["Current Week: ",function(e){var a=new Date(e.getFullYear(),0,1),s=(e-a)/864e5;return s>7-a.getDay()?Math.ceil((s-(7-a.getDay()))/7):"yes"}(s)]})]})]})};document.title="Yallow Life Science - DashBoard";var x=function(){var e=Object(t.useState)({}),a=Object(r.a)(e,2),s=a[0],l=a[1],n=Object(t.useState)({}),c=Object(r.a)(n,2),i=c[0],O=c[1],x=Object(t.useState)(0),f=Object(r.a)(x,2),p=f[0],N=f[1],k=Object(t.useState)(0),w=Object(r.a)(k,2),R=w[0],S=w[1],y=Object(t.useState)(0),F=Object(r.a)(y,2),I=F[0],P=F[1],J=Object(t.useState)(0),z=Object(r.a)(J,2),C=z[0],A=z[1],D=Object(t.useState)(0),E=Object(r.a)(D,2),L=E[0],B=E[1],M=Object(t.useState)(0),T=Object(r.a)(M,2),W=T[0],K=T[1],U=Object(t.useState)(0),G=Object(r.a)(U,2),Q=G[0],Y=G[1],H=function(){fetch("https://sheets.googleapis.com/v4/spreadsheets/1VUxJ_qQwCoPou2nzBn2B-yPmN2ICeHzfT6FQvbMjOL8/values:batchGet?majorDimension=COLUMNS&ranges=Sheet1!D:N&ranges=Sheet1!P:Z&ranges=Sheet1!AB:AF&ranges=Sheet1!B2&ranges=Sheet1!B4&ranges=Sheet1!B5&ranges=Sheet1!B6&key=AIzaSyAhJlD7G3G5EWwHSQWJA-oiY3rm_9mr2P8").then((function(e){return e.json()})).then((function(e){var a=25,t=[],n=[];e.valueRanges[1].values[0].forEach((function(s,l){if(!(0===l||l<e.valueRanges[1].values[0].length-a))for(var c=1;c<e.valueRanges[1].values.length;c++)"Overall Avg. IR"===e.valueRanges[1].values[c][0]?n.push({week:e.valueRanges[1].values[0][l],name:e.valueRanges[1].values[c][0],value:parseFloat(e.valueRanges[1].values[c][l]),value1:parseFloat(e.valueRanges[1].values[c][l])}):"Employee 7"===e.valueRanges[1].values[c][0]||t.push({week:e.valueRanges[1].values[0][l],name:e.valueRanges[1].values[c][0],value:parseFloat(e.valueRanges[1].values[c][l]),avg:parseFloat(e.valueRanges[1].values[c][l])})})),B({instaFoll:e.valueRanges[0].values[1][e.valueRanges[0].values[1].length-1],instaPost:e.valueRanges[0].values[2][e.valueRanges[0].values[2].length-1],linkedFoll:e.valueRanges[0].values[3][e.valueRanges[0].values[3].length-1],linkedPost:e.valueRanges[0].values[4][e.valueRanges[0].values[4].length-1]});var c={rest:[],acc:[]};e.valueRanges[2].values[0].forEach((function(s,t){if(!(0===t||t<e.valueRanges[2].values[0].length-a))for(var l=1;l<5;l++)2===l||(4===l?c.acc.push({month:s,name:e.valueRanges[2].values[l][0],value:parseFloat(e.valueRanges[2].values[l][t])}):c.rest.push({month:s,name:e.valueRanges[2].values[l][0],value:parseFloat(e.valueRanges[2].values[l][t])}))}));var r=[];e.valueRanges[0].values[0].forEach((function(s,t){0===t||t<e.valueRanges[1].values[0].length-a||(r.push({week:s,value:parseInt(e.valueRanges[0].values[1][t]),name:"New Followers"}),r.push({week:s,value:parseInt(e.valueRanges[0].values[2][t]),name:"New Posts"}))}));var o=[];e.valueRanges[0].values[0].forEach((function(s,t){0===t||t<e.valueRanges[1].values[0].length-a||(o.push({week:s,value:parseInt(e.valueRanges[0].values[3][t]),name:"New Followers"}),o.push({week:s,value:parseInt(e.valueRanges[0].values[4][t]),name:"New Posts"}))}));var u=[];e.valueRanges[0].values[0].forEach((function(s,t){0===t||t<e.valueRanges[1].values[0].length-a||(u.push({week:s,value:parseInt(e.valueRanges[0].values[6][t]),name:"New Leads"}),u.push({week:s,value:parseInt(e.valueRanges[0].values[5][t]),name:"Sales Meetings"}),u.push({week:s,value:parseInt(e.valueRanges[0].values[7][t]),name:"Meetings Booked"}))}));var d=[];e.valueRanges[0].values[0].forEach((function(s,t){if(!(0===t||t<e.valueRanges[1].values[0].length-a)){d.push({name:"Offers sent",week:s,value:parseInt(e.valueRanges[0].values[8][t])});var l=e.valueRanges[0].values[10][t]?e.valueRanges[0].values[10][t]:0;d.push({name:"Wins",week:s,value:parseInt(l)})}})),JSON.stringify(Q)!==JSON.stringify(d)&&Y(d),JSON.stringify(W)!==JSON.stringify(u)&&K(u),JSON.stringify(C)!==JSON.stringify(c)&&A(c),JSON.stringify(I)!==JSON.stringify({instaNewFollPosts:r,linkedNewFollPosts:o})&&P({instaNewFollPosts:r,linkedNewFollPosts:o}),JSON.stringify(R)!==JSON.stringify({foll:e.valueRanges[3].values[0],posts:e.valueRanges[4].values[0]})&&S({foll:e.valueRanges[3].values[0],posts:e.valueRanges[4].values[0]}),JSON.stringify(p)!==JSON.stringify({foll:e.valueRanges[5].values[0],posts:e.valueRanges[6].values[0]})&&N({foll:e.valueRanges[5].values[0],posts:e.valueRanges[6].values[0]}),JSON.stringify(s)!==JSON.stringify(t)&&l(t),JSON.stringify(i)!==JSON.stringify(n)&&O(n)}))};return Object(t.useEffect)((function(){H();var e=setInterval((function(){H()}),36e5);return function(){return clearInterval(e)}}),[]),Object(o.jsxs)("div",{className:"card-wrapper",children:[Object(o.jsx)("div",{className:"header-row",children:Object(o.jsx)(m,{})}),Object(o.jsxs)("div",{className:"second-row",children:[Object(o.jsxs)("div",{className:"card-small-plus",children:[Object(o.jsx)("div",{className:"card-title",children:"Instagram New Followers and Posts"}),Object(o.jsx)("div",{className:"chart-box",children:I.instaNewFollPosts?Object(o.jsx)(d,{data:I.instaNewFollPosts}):Object(o.jsx)(b.a,{color:"darkgrey",size:20})})]}),Object(o.jsxs)("div",{className:"first-row",children:[Object(o.jsxs)("div",{className:"card-small",children:[Object(o.jsx)("div",{className:"card-title",children:"Instagram Followers:"}),Object(o.jsx)("div",{className:"card-value",children:p.foll?p.foll+" (".concat(L.instaFoll,")"):Object(o.jsx)(b.a,{color:"darkgrey",size:12})})]}),Object(o.jsxs)("div",{className:"card-small",children:[Object(o.jsx)("div",{className:"card-title",children:"Instagram Posts:"}),Object(o.jsx)("div",{className:"card-value",children:p.posts?p.posts:Object(o.jsx)(b.a,{color:"darkgrey",size:12})})]})]}),"        ",Object(o.jsxs)("div",{className:"first-row",children:[Object(o.jsxs)("div",{className:"card-small",children:[Object(o.jsx)("div",{className:"card-title",children:"LinkedIn Followers:"}),Object(o.jsx)("div",{className:"card-value",children:R.foll?R.foll+" (".concat(L.linkedFoll,")"):Object(o.jsx)(b.a,{color:"darkgrey",size:12})})]}),Object(o.jsxs)("div",{className:"card-small",children:[Object(o.jsx)("div",{className:"card-title",children:"LinkedIn Posts:"}),Object(o.jsx)("div",{className:"card-value",children:R.posts?R.posts:Object(o.jsx)(b.a,{color:"darkgrey",size:12})})]})]}),Object(o.jsxs)("div",{className:"card-small-plus",children:[Object(o.jsx)("div",{className:"card-title",children:"LinkedIn New Followers and Posts"}),Object(o.jsx)("div",{className:"chart-box",children:I.linkedNewFollPosts?Object(o.jsx)(d,{data:I.linkedNewFollPosts}):Object(o.jsx)(b.a,{color:"darkgrey",size:20})})]})]}),Object(o.jsxs)("div",{className:"third-row",children:[Object(o.jsxs)("div",{className:"card-big",children:[Object(o.jsx)("div",{className:"card-title",children:"Invoice Rate"}),Object(o.jsx)("div",{className:"chart-box",children:s[1]?Object(o.jsx)(u,{data:s}):Object(o.jsx)(b.a,{color:"darkgrey",size:20})})]}),Object(o.jsxs)("div",{className:"card-medium",children:[Object(o.jsx)("div",{className:"card-title",children:"Overall Average Invoice Rate"}),Object(o.jsx)("div",{className:"chart-box",children:i[1]?Object(o.jsx)(v,{data:i}):Object(o.jsx)(b.a,{color:"darkgrey",size:20})})]})]}),Object(o.jsxs)("div",{className:"fourth-row",children:[Object(o.jsxs)("div",{className:"card-small-plus",children:[Object(o.jsx)("div",{className:"card-title",children:"Finance"}),Object(o.jsx)("div",{className:"chart-box",children:C.acc?Object(o.jsx)(j,{data:C}):Object(o.jsx)(b.a,{color:"darkgrey",size:20})})]}),Object(o.jsxs)("div",{className:"card-small-plus",children:[Object(o.jsx)("div",{className:"card-title",children:"Sales"}),Object(o.jsx)("div",{className:"chart-box",children:C.acc?Object(o.jsx)(g,{data:W}):Object(o.jsx)(b.a,{color:"darkgrey",size:20})})]}),Object(o.jsxs)("div",{className:"card-small-plus",children:[Object(o.jsx)("div",{className:"card-title",children:"Offers"}),Object(o.jsx)("div",{className:"chart-box",children:C.acc?Object(o.jsx)(h,{data:Q}):Object(o.jsx)(b.a,{color:"darkgrey",size:20})})]})]})]})},f=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,22)).then((function(a){var s=a.getCLS,t=a.getFID,l=a.getFCP,n=a.getLCP,c=a.getTTFB;s(e),t(e),l(e),n(e),c(e)}))};c.a.render(Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),f()}},[[21,1,2]]]);
//# sourceMappingURL=main.8a493d8e.chunk.js.map