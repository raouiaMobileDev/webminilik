(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{272:function(e,t,n){"use strict";n.d(t,"c",function(){return p}),n.d(t,"d",function(){return h}),n.d(t,"b",function(){return m}),n.d(t,"a",function(){return g}),n.d(t,"h",function(){return b}),n.d(t,"f",function(){return y}),n.d(t,"g",function(){return v}),n.d(t,"e",function(){return E}),n.d(t,"j",function(){return k}),n.d(t,"i",function(){return w}),n.d(t,"k",function(){return j});var a=n(23),o=n(285),i=n.n(o),c=(n(289),n(273)),l=n.n(c),r="https://minilik-4e824.firebaseio.com/",s="AIzaSyD2raRNg7gb1bFPbB3WENlXEq2WEwI8NCA",u="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=".concat(s),d="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=".concat(s);i.a.initializeApp({apiKey:"AIzaSyD2raRNg7gb1bFPbB3WENlXEq2WEwI8NCA",authDomain:"minilik-4e824.firebaseapp.com",databaseURL:"https://minilik-4e824.firebaseio.com",projectId:"minilik-4e824",storageBucket:"minilik-4e824.appspot.com",messagingSenderId:"41678970934"});var f=i.a.database(),p=function(e){console.log("**********call the data base"),f.ref("pubs").push(e).then(function(){console.log("Data is saved!")}).catch(function(e){console.log("Failed.",e)})},h=function(e){console.log("**********call the data base"),f.ref("restaurants").push(e).then(function(){console.log("Data is saved!")}).catch(function(e){console.log("Failed.",e)})},m=function(e){console.log("**********call the data base"),f.ref("plats").push(e).then(function(){console.log("Data is saved!")}).catch(function(e){console.log("Failed.",e)})},g=function(e){console.log("**********call the data base"),f.ref("categories").push(e).then(function(){console.log("Data is saved!")}).catch(function(e){console.log("Failed.",e)})},b=function(){var e=[];return f.ref("restaurants").once("value").then(function(t){t.key;var n=t.val();console.log(n),t.forEach(function(t){e.push(Object(a.a)({id:t.key},t.val()))}),console.log(e)}).catch(function(e){console.log("Error fetching data",e)}),e};function y(){return{type:"GET_RESTAURANTS",payload:l()("".concat(r,"/restaurants.json")).then(function(e){var t=[];for(var n in e.data)t.push(Object(a.a)({},e.data[n],{id:n}));return t})}}var v=function(){var e=[];return f.ref("categories").once("value").then(function(t){t.key,t.val();t.forEach(function(t){e.push(Object(a.a)({id:t.key},t.val()))})}).catch(function(e){console.log("Error fetching data",e)}),e};function E(){return{type:"GET_COMMANDS",payload:l()("".concat(r,"/Commands.json")).then(function(e){var t=[];for(var n in e.data)t.push(Object(a.a)({},e.data[n],{id:n}));return t})}}var k=function(e){return{type:"register_user",payload:l()({method:"POST",url:u,data:{email:e.email,password:e.password,returnSecureToken:!0},headers:{"Content-Type":"application/json"}}).then(function(e){return e.data}).catch(function(e){return!1})}};function w(e){return{type:"sign_user",payload:l()({method:"POST",url:d,data:{email:e.email,password:e.password,returnSecureToken:!0},headers:{"Content-Type":"application/json"}}).then(function(e){return e.data}).catch(function(e){return!1})}}var j=function(e,t){f.ref("Commands/"+e).update(t)}},614:function(e,t,n){"use strict";n.r(t);var a=n(89),o=n(90),i=n(92),c=n(91),l=n(93),r=n(94),s=n(0),u=n.n(s),d=n(265),f=n(273),p=n.n(f),h=n(272),m=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).toggle=n.toggle.bind(Object(r.a)(Object(r.a)(n))),n.toggleFade=n.toggleFade.bind(Object(r.a)(Object(r.a)(n))),n.state={collapse:!0,fadeIn:!0,timeout:300,selectedFile:"Raouia"},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"fileChangedHandler",value:function(e){this.setState({selectedFile:e.target.files[0]}),console.log(this.state.selectedFile),console.log("************coco est *****************")}},{key:"uploadHandler",value:function(){console.log("************coco est bouton *****************");var e=new FormData;e.append("image",this.state.selectedFile,this.state.selectedFile.name),p.a.post("https://minilik.000webhostapp.com/pub.php",e).then(function(e){console.log(e)}),console.log("**** go to the base*******");var t={url:"https://minilik.000webhostapp.com/pub/"+this.state.selectedFile.name};Object(h.c)(t)}},{key:"handleClick",value:function(){console.log("this is:",this)}},{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleFade",value:function(){this.setState(function(e){return{fadeIn:!e}})}},{key:"render",value:function(){return console.log("************coco est render *****************"),console.log("state:",this.state.selectedFile),u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(d.ib,null,u.a.createElement(d.u,{xs:"12"},u.a.createElement(d.B,{timeout:this.state.timeout,in:this.state.fadeIn},u.a.createElement(d.i,null,u.a.createElement(d.n,null,u.a.createElement("strong",null,"Ajouter une publicit\xe9")),u.a.createElement(d.j,null,u.a.createElement(d.C,{action:"",method:"get",encType:"multipart/form-data",className:"form-horizontal"},u.a.createElement(d.E,{row:!0},u.a.createElement(d.u,{md:"3"},u.a.createElement(d.L,{htmlFor:"file-input"},"Ajouter une image")),u.a.createElement(d.u,{xs:"12",md:"9"},u.a.createElement("input",{type:"file",id:"file-input",name:"myImage",onChange:this.fileChangedHandler.bind(this)}))))),u.a.createElement(d.l,null,u.a.createElement(d.e,{type:"submit",size:"sm",color:"primary",onClick:this.uploadHandler.bind(this)},u.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),u.a.createElement(d.e,{type:"reset",size:"sm",color:"danger"},u.a.createElement("i",{className:"fa fa-ban"})," Reset")))))))}}]),t}(s.Component);t.default=m}}]);
//# sourceMappingURL=13.55e26cac.chunk.js.map