(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{11:function(e,a,s){},12:function(e,a,s){},21:function(e,a,s){"use strict";s.r(a);var t=s(1),n=s.n(t),l=s(6),c=s.n(l),r=(s(11),s(3)),i=(s(12),s(2)),o=s(0),u=function(e){var a=e.data;return Object(o.jsxs)(i.Chart,{padding:"auto",scale:{value:{formatter:function(e){return e+"%"}},week:{formatter:function(e){return"Week "+e}}},data:a,autoFit:!0,interactions:["active-region"],filter:[["value",function(e){return e>.1}]],children:[Object(o.jsx)(i.Interval,{adjust:[{type:"dodge",marginRatio:0}],color:"name",position:"week*value"}),Object(o.jsx)(i.Tooltip,{shared:!0,scale:{week:{formatter:function(e){return"Week"+e}}}}),Object(o.jsx)(i.Slider,{start:.3,padding:[5,15,5,5],data:[1]})]})},d=function(e){var a=e.data;return Object(o.jsxs)(i.Chart,{padding:"auto",data:a,autoFit:!0,interactions:["active-region"],children:[Object(o.jsx)(i.Interval,{adjust:[{type:"dodge",marginRatio:0}],color:"name",position:"week*value"}),Object(o.jsx)(i.Tooltip,{shared:!0,scale:{week:{formatter:function(e){return"Week"+e}}}}),Object(o.jsx)(i.Slider,{start:.5,padding:[5,15,5,5]})]})},v=function(e){var a=e.data;return Object(o.jsxs)(i.Chart,{padding:"auto",scale:{value:{alias:"Average IR",min:0,max:100,formatter:function(e){return e+"%"},tickInterval:5},value1:{alias:"Average IR",min:0,max:100,formatter:function(e){return e+"%"},tickInterval:5}},data:a,autoFit:!0,filter:[["value",function(e){return e>.1}]],children:[Object(o.jsx)(i.LineAdvance,{area:!0,shape:"smooth",position:"week*value",size:2,color:"blue",point:{size:3}}),Object(o.jsx)(i.Point,{position:"week*value1",size:0}),Object(o.jsx)(i.Axis,{name:"week",title:!0}),Object(o.jsx)(i.Tooltip,{showCrosshairs:!0,shared:!0,children:function(e,a){return Object(o.jsxs)("div",{className:"tooltip",children:["Week: ",e,Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Average Invoice Rate: ",Object(o.jsxs)("b",{style:{marginLeft:"15px"},children:[a[0].data.value,"%"]})]})}}),Object(o.jsx)(i.Slider,{start:.3,padding:[5,15,5,5]}),Object(o.jsx)(i.Axis,{name:"value1",position:"right"})]})},j=function(e){var a=e.data,s={value:{alias:"Cummulative",sync:!0,nice:!0,formatter:function(e){return Math.abs(e)<1e3?e+"NOK":Math.abs(e)>=1e3&&Math.abs(e)<1e6?e/1e3+"k NOK":Math.ceil(e/1e6)+","+(Math.abs(e)-1e6)/1e3+"k NOK"}},month:{sync:!0}};return Object(o.jsxs)(i.Chart,{padding:[20,80,80,80],scale:s,data:a.acc,autoFit:!0,interactions:["active-region"],children:[Object(o.jsx)(i.Tooltip,{shared:!0}),Object(o.jsx)(i.Interval,{position:"month*value",color:"rgba(10,10,10,0.2)"}),Object(o.jsx)(i.View,{padding:0,scale:s,data:a.rest,autoFit:!0,children:Object(o.jsx)(i.LineAdvance,{shape:"smooth",color:["name",["rgb(235, 236, 28)","#6E97D7"]],position:"month*value",size:2,point:{size:3}})})]})},h=function(e){var a=e.data;return Object(o.jsxs)(i.Chart,{padding:"auto",scale:{week:{formatter:function(e){return"Week "+e}}},data:a,autoFit:!0,interactions:["active-region"],children:[Object(o.jsx)(i.Interval,{adjust:[{type:"dodge",marginRatio:0}],color:"name",position:"week*value"}),Object(o.jsx)(i.Tooltip,{shared:!0,scale:{week:{formatter:function(e){return"Week"+e}}}}),Object(o.jsx)(i.Slider,{start:.3,padding:[5,15,5,5]})]})},g=function(e){var a=e.data;return Object(o.jsxs)(i.Chart,{padding:[0,0,80,65],scale:{week:{formatter:function(e){return"Week "+e}},value:{alias:"Offers sent",formatter:function(e){return e/1e3+"k NOK"}}},data:a,autoFit:!0,interactions:["active-region"],children:[Object(o.jsx)(i.Tooltip,{shared:!0}),Object(o.jsx)(i.Interval,{adjust:[{type:"dodge",marginRatio:0}],color:"name",position:"week*value"}),Object(o.jsx)(i.Slider,{start:.3,padding:[5,15,5,5]})]})},b=s(4),O=s.n(b);var m=function(){var e=n.a.useState(new Date),a=Object(r.a)(e,2),s=a[0],t=a[1];return n.a.useEffect((function(){var e=setInterval((function(){t(new Date)}),1e3);return function(){clearInterval(e)}})),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"clock-card logo"}),Object(o.jsx)("div",{className:"clock-card clock",children:Object(o.jsx)("div",{children:Intl.DateTimeFormat("en-UK",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}).format(s)})}),Object(o.jsxs)("div",{className:"clock-card date-card",children:[Object(o.jsx)("div",{children:Intl.DateTimeFormat("en-UK",{weekday:"long",month:"long",day:"numeric",year:"numeric"}).format(s)}),Object(o.jsxs)("div",{children:["Current Week: ",function(e){var a=new Date(e.getFullYear(),0,1),s=(e-a)/864e5;return s>7-a.getDay()?Math.ceil((s-(7-a.getDay()))/7):"yes"}(s)]})]})]})};document.title="Yallow Life Science - DashBoard";var f=function(){var e=Object(t.useState)({}),a=Object(r.a)(e,2),s=a[0],n=a[1],l=Object(t.useState)({}),c=Object(r.a)(l,2),i=c[0],b=c[1],f=Object(t.useState)({foll:0,posts:0}),x=Object(r.a)(f,2),p=x[0],N=x[1],w=Object(t.useState)(0),k=Object(r.a)(w,2),R=k[0],y=k[1],F=Object(t.useState)(0),S=Object(r.a)(F,2),I=S[0],P=S[1],z=Object(t.useState)(0),J=Object(r.a)(z,2),_=J[0],C=J[1],A=Object(t.useState)(0),D=Object(r.a)(A,2),E=D[0],L=D[1],M=Object(t.useState)(0),T=Object(r.a)(M,2),W=T[0],B=T[1],K=Object(t.useState)(0),q=Object(r.a)(K,2),U=q[0],Y=q[1],G=function(){fetch("https://sheets.googleapis.com/v4/spreadsheets/1VUxJ_qQwCoPou2nzBn2B-yPmN2ICeHzfT6FQvbMjOL8/values:batchGet?majorDimension=COLUMNS&ranges=Sheet1!D:N&ranges=Sheet1!P:Y&ranges=Sheet1!AB:AF&ranges=Sheet1!B2&ranges=Sheet1!B4&key=AIzaSyAhJlD7G3G5EWwHSQWJA-oiY3rm_9mr2P8").then((function(e){return e.json()})).then((function(e){var a=25,t=[],l=[];e.valueRanges[1].values[0].forEach((function(s,n){if(!(0===n||n<e.valueRanges[1].values[0].length-a))for(var c=1;c<e.valueRanges[1].values.length;c++)"Overall Avg. IR"===e.valueRanges[1].values[c][0]?l.push({week:e.valueRanges[1].values[0][n],name:e.valueRanges[1].values[c][0],value:parseFloat(e.valueRanges[1].values[c][n]),value1:parseFloat(e.valueRanges[1].values[c][n])}):"Employee 7"===e.valueRanges[1].values[c][0]||t.push({week:e.valueRanges[1].values[0][n],name:e.valueRanges[1].values[c][0],value:parseFloat(e.valueRanges[1].values[c][n]),avg:parseFloat(e.valueRanges[1].values[c][n])})})),L({instaFoll:e.valueRanges[0].values[1][e.valueRanges[0].values[1].length-1],instaPost:e.valueRanges[0].values[2][e.valueRanges[0].values[2].length-1],linkedFoll:e.valueRanges[0].values[3][e.valueRanges[0].values[3].length-1],linkedPost:e.valueRanges[0].values[4][e.valueRanges[0].values[4].length-1]});var c={rest:[],acc:[]};e.valueRanges[2].values[0].forEach((function(s,t){if(!(0===t||t<e.valueRanges[2].values[0].length-a))for(var n=1;n<5;n++)2===n||(4===n?c.acc.push({month:s,name:e.valueRanges[2].values[n][0],value:parseFloat(e.valueRanges[2].values[n][t])}):c.rest.push({month:s,name:e.valueRanges[2].values[n][0],value:parseFloat(e.valueRanges[2].values[n][t])}))})),console.log(c);var r=[];e.valueRanges[0].values[0].forEach((function(s,t){0===t||t<e.valueRanges[1].values[0].length-a||(r.push({week:s,value:parseInt(e.valueRanges[0].values[1][t]),name:"New Followers"}),r.push({week:s,value:parseInt(e.valueRanges[0].values[2][t]),name:"New Posts"}))}));var o=[];e.valueRanges[0].values[0].forEach((function(s,t){0===t||t<e.valueRanges[1].values[0].length-a||(o.push({week:s,value:parseInt(e.valueRanges[0].values[3][t]),name:"New Followers"}),o.push({week:s,value:parseInt(e.valueRanges[0].values[4][t]),name:"New Posts"}))}));var u=[];e.valueRanges[0].values[0].forEach((function(s,t){0===t||t<e.valueRanges[1].values[0].length-a||(u.push({week:s,value:parseInt(e.valueRanges[0].values[6][t]),name:"New Leads"}),u.push({week:s,value:parseInt(e.valueRanges[0].values[5][t]),name:"Sales Meetings"}),u.push({week:s,value:parseInt(e.valueRanges[0].values[7][t]),name:"Meetings Booked"}))}));var d=[];e.valueRanges[0].values[0].forEach((function(s,t){if(!(0===t||t<e.valueRanges[1].values[0].length-a)){d.push({name:"Offers sent",week:s,value:parseInt(e.valueRanges[0].values[8][t])});var n=e.valueRanges[0].values[10][t]?e.valueRanges[0].values[10][t]:0;d.push({name:"Wins",week:s,value:parseInt(n)})}})),JSON.stringify(U)!==JSON.stringify(d)&&Y(d),JSON.stringify(W)!==JSON.stringify(u)&&B(u),JSON.stringify(_)!==JSON.stringify(c)&&C(c),JSON.stringify(I)!==JSON.stringify({instaNewFollPosts:r,linkedNewFollPosts:o})&&P({instaNewFollPosts:r,linkedNewFollPosts:o}),JSON.stringify(R)!==JSON.stringify({foll:e.valueRanges[3].values[0],posts:e.valueRanges[4].values[0]})&&y({foll:e.valueRanges[3].values[0],posts:e.valueRanges[4].values[0]}),JSON.stringify(s)!==JSON.stringify(t)&&n(t),JSON.stringify(i)!==JSON.stringify(l)&&b(l)}))},Q=function(){fetch("https://www.instagram.com/yallowlifescience/channel/?__a=1").then((function(e){return e.json()})).then((function(e){p.foll===e.graphql.user.edge_followed_by.count&&p.posts===e.graphql.user.edge_owner_to_timeline_media.coun||N({foll:e.graphql.user.edge_followed_by.count,posts:e.graphql.user.edge_owner_to_timeline_media.count})})).catch((function(e){return console.log("Fetch Error: "+e)}))};return Object(t.useEffect)((function(){G(),Q();var e=setInterval((function(){G(),Q()}),36e5);return function(){return clearInterval(e)}}),[]),Object(o.jsxs)("div",{className:"card-wrapper",children:[Object(o.jsx)("div",{className:"header-row",children:Object(o.jsx)(m,{})}),Object(o.jsxs)("div",{className:"second-row",children:[Object(o.jsxs)("div",{className:"card-small-plus",children:[Object(o.jsx)("div",{className:"card-title",children:"Instagram New Followers and Posts"}),Object(o.jsx)("div",{className:"chart-box",children:I.instaNewFollPosts?Object(o.jsx)(d,{data:I.instaNewFollPosts}):Object(o.jsx)(O.a,{color:"darkgrey",size:20})})]}),Object(o.jsxs)("div",{className:"first-row",children:[Object(o.jsxs)("div",{className:"card-small",children:[Object(o.jsx)("div",{className:"card-title",children:"Instagram Followers:"}),Object(o.jsx)("div",{className:"card-value",children:p.foll?p.foll+" (".concat(E.instaFoll,")"):Object(o.jsx)(O.a,{color:"darkgrey",size:12})})]}),Object(o.jsxs)("div",{className:"card-small",children:[Object(o.jsx)("div",{className:"card-title",children:"Instagram Posts:"}),Object(o.jsx)("div",{className:"card-value",children:p.posts?p.posts:Object(o.jsx)(O.a,{color:"darkgrey",size:12})})]}),"        "]}),"        ",Object(o.jsxs)("div",{className:"first-row",children:[Object(o.jsxs)("div",{className:"card-small",children:[Object(o.jsx)("div",{className:"card-title",children:"LinkedIn Followers:"}),Object(o.jsx)("div",{className:"card-value",children:R.foll?R.foll+" (".concat(E.linkedFoll,")"):Object(o.jsx)(O.a,{color:"darkgrey",size:12})})]}),Object(o.jsxs)("div",{className:"card-small",children:[Object(o.jsx)("div",{className:"card-title",children:"LinkedIn Posts:"}),Object(o.jsx)("div",{className:"card-value",children:R.posts?R.posts:Object(o.jsx)(O.a,{color:"darkgrey",size:12})})]})]}),Object(o.jsxs)("div",{className:"card-small-plus",children:[Object(o.jsx)("div",{className:"card-title",children:"LinkedIn New Followers and Posts"}),Object(o.jsx)("div",{className:"chart-box",children:I.linkedNewFollPosts?Object(o.jsx)(d,{data:I.linkedNewFollPosts}):Object(o.jsx)(O.a,{color:"darkgrey",size:20})})]})]}),Object(o.jsxs)("div",{className:"third-row",children:[Object(o.jsxs)("div",{className:"card-big",children:[Object(o.jsx)("div",{className:"card-title",children:"Invoice Rate"}),Object(o.jsx)("div",{className:"chart-box",children:s[1]?Object(o.jsx)(u,{data:s}):Object(o.jsx)(O.a,{color:"darkgrey",size:20})})]}),Object(o.jsxs)("div",{className:"card-medium",children:[Object(o.jsx)("div",{className:"card-title",children:"Overall Average Invoice Rate"}),Object(o.jsx)("div",{className:"chart-box",children:i[1]?Object(o.jsx)(v,{data:i}):Object(o.jsx)(O.a,{color:"darkgrey",size:20})})]})]}),Object(o.jsxs)("div",{className:"fourth-row",children:[Object(o.jsxs)("div",{className:"card-small-plus",children:[Object(o.jsx)("div",{className:"card-title",children:"Finance"}),Object(o.jsx)("div",{className:"chart-box",children:_.acc?Object(o.jsx)(j,{data:_}):Object(o.jsx)(O.a,{color:"darkgrey",size:20})})]}),Object(o.jsxs)("div",{className:"card-small-plus",children:[Object(o.jsx)("div",{className:"card-title",children:"Sales"}),Object(o.jsx)("div",{className:"chart-box",children:_.acc?Object(o.jsx)(h,{data:W}):Object(o.jsx)(O.a,{color:"darkgrey",size:20})})]}),Object(o.jsxs)("div",{className:"card-small-plus",children:[Object(o.jsx)("div",{className:"card-title",children:"Offers"}),Object(o.jsx)("div",{className:"chart-box",children:_.acc?Object(o.jsx)(g,{data:U}):Object(o.jsx)(O.a,{color:"darkgrey",size:20})})]})]})]})},x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,22)).then((function(a){var s=a.getCLS,t=a.getFID,n=a.getFCP,l=a.getLCP,c=a.getTTFB;s(e),t(e),n(e),l(e),c(e)}))};c.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),x()}},[[21,1,2]]]);
//# sourceMappingURL=main.ed7758e2.chunk.js.map