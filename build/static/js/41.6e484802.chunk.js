(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{272:function(e,t,n){"use strict";n.d(t,"c",function(){return p}),n.d(t,"d",function(){return f}),n.d(t,"b",function(){return h}),n.d(t,"a",function(){return g}),n.d(t,"h",function(){return b}),n.d(t,"f",function(){return v}),n.d(t,"g",function(){return E}),n.d(t,"e",function(){return y}),n.d(t,"j",function(){return k}),n.d(t,"i",function(){return w}),n.d(t,"k",function(){return S});var a=n(23),o=n(285),r=n.n(o),c=(n(289),n(273)),l=n.n(c),s="https://minilik-4e824.firebaseio.com/",i="AIzaSyD2raRNg7gb1bFPbB3WENlXEq2WEwI8NCA",u="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=".concat(i),d="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=".concat(i);r.a.initializeApp({apiKey:"AIzaSyD2raRNg7gb1bFPbB3WENlXEq2WEwI8NCA",authDomain:"minilik-4e824.firebaseapp.com",databaseURL:"https://minilik-4e824.firebaseio.com",projectId:"minilik-4e824",storageBucket:"minilik-4e824.appspot.com",messagingSenderId:"41678970934"});var m=r.a.database(),p=function(e){console.log("**********call the data base"),m.ref("pubs").push(e).then(function(){console.log("Data is saved!")}).catch(function(e){console.log("Failed.",e)})},f=function(e){console.log("**********call the data base"),m.ref("restaurants").push(e).then(function(){console.log("Data is saved!")}).catch(function(e){console.log("Failed.",e)})},h=function(e){console.log("**********call the data base"),m.ref("plats").push(e).then(function(){console.log("Data is saved!")}).catch(function(e){console.log("Failed.",e)})},g=function(e){console.log("**********call the data base"),m.ref("categories").push(e).then(function(){console.log("Data is saved!")}).catch(function(e){console.log("Failed.",e)})},b=function(){var e=[];return m.ref("restaurants").once("value").then(function(t){t.key;var n=t.val();console.log(n),t.forEach(function(t){e.push(Object(a.a)({id:t.key},t.val()))}),console.log(e)}).catch(function(e){console.log("Error fetching data",e)}),e};function v(){return{type:"GET_RESTAURANTS",payload:l()("".concat(s,"/restaurants.json")).then(function(e){var t=[];for(var n in e.data)t.push(Object(a.a)({},e.data[n],{id:n}));return t})}}var E=function(){var e=[];return m.ref("categories").once("value").then(function(t){t.key,t.val();t.forEach(function(t){e.push(Object(a.a)({id:t.key},t.val()))})}).catch(function(e){console.log("Error fetching data",e)}),e};function y(){return{type:"GET_COMMANDS",payload:l()("".concat(s,"/Commands.json")).then(function(e){var t=[];for(var n in e.data)t.push(Object(a.a)({},e.data[n],{id:n}));return t})}}var k=function(e){return{type:"register_user",payload:l()({method:"POST",url:u,data:{email:e.email,password:e.password,returnSecureToken:!0},headers:{"Content-Type":"application/json"}}).then(function(e){return e.data}).catch(function(e){return!1})}};function w(e){return{type:"sign_user",payload:l()({method:"POST",url:d,data:{email:e.email,password:e.password,returnSecureToken:!0},headers:{"Content-Type":"application/json"}}).then(function(e){return e.data}).catch(function(e){return!1})}}var S=function(e,t){m.ref("Commands/"+e).update(t)}},604:function(e,t,n){e.exports=n.p+"static/media/ok.a1413391.png"},642:function(e,t,n){"use strict";n.r(t);var a=n(89),o=n(90),r=n(92),c=n(91),l=n(93),s=n(94),i=n(0),u=n.n(i),d=(n(296),n(265)),m=n(604),p=n.n(m),f=n(272),h=n(99),g=n(30),b=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(c.a)(t).call(this,e))).handleData=function(e,t){t.props.getCommands().then(function(){var a=[],o=new Date;console.log("this.props.Command.list"),console.log(n.props.Command.list),t.props.Command.list.forEach(function(t){var n=new Date(t.clientSentTime);console.log("element.restaurant"),console.log(t.restaurant),t.restaurant===e&&o.getDate()===n.getDate()&&o.getMonth()===n.getMonth()&&o.getFullYear()===n.getFullYear()&&a.push(t)}),a.length!==n.state.commands.length&&(a.sort(function(e,t){return new Date(t.clientSentTime)-new Date(e.clientSentTime)}),t.setState({commands:a},function(){console.log(n.state.commands)}))})},n.validRestaurantHandler=function(e){var t=e.target.id,a={};n.state.commands.forEach(function(e){e.id!==t||(a={client:e.client,clientSentTime:e.clientSentTime,isClosed:e.isClosed,plats:e.plats,price:e.price,restaurant:e.restaurant,restaurantReservedTime:(new Date).toString(),table:e.table})}),Object(f.k)(t,a),n.props.getCommands().then(function(){n.setState({commands:n.props.Command.list},function(){console.log(n.state.commands)})})},n.isClosedHandler=function(e){var t=e.target.id,a={};n.state.commands.forEach(function(e){e.id!==t||""===e.restaurantReservedTime||(a={client:e.client,clientSentTime:e.clientSentTime,isClosed:!0,plats:e.plats,price:e.price,restaurant:e.restaurant,restaurantReservedTime:e.restaurantReservedTime,table:e.table})}),Object(f.k)(t,a),n.props.getCommands().then(function(){n.setState({commands:n.props.Command.list},function(){console.log(n.state.commands)})})},n.loadPlats=function(e){return e.map(function(e,t){return u.a.createElement("div",{key:t},u.a.createElement("strong",null," ",e.name),"   ",u.a.createElement("br",null),u.a.createElement("strong",null," Quantit\xe9: ",e.quantity)," ",u.a.createElement("br",null),u.a.createElement("hr",null))})},n.loadTable=function(){return n.state.commands.map(function(e,t){return u.a.createElement("tr",{key:"key_${i}"},u.a.createElement("td",{className:"text-center"},n.loadPlats(e.plats)),u.a.createElement("td",{className:"text-center"},u.a.createElement("strong",null,e.price,",000 DNT")),u.a.createElement("td",{className:"text-center"},u.a.createElement("strong",null,e.table)),u.a.createElement("td",{className:"text-center"},u.a.createElement("strong",null,new Date(e.clientSentTime).toISOString().replace(/T/," ").replace(/\..+/,"")," ")),u.a.createElement("td",{className:"text-center"},""!==e.restaurantReservedTime?u.a.createElement("strong",null,new Date(e.restaurantReservedTime).toISOString().replace(/T/," ").replace(/\..+/,"")," "):u.a.createElement(d.e,{type:"submit",size:"sm",color:"primary",id:e.id,onClick:n.validRestaurantHandler.bind(Object(s.a)(Object(s.a)(n)))}," Valid\xe9")),u.a.createElement("td",{className:"text-center"},e.isClosed?u.a.createElement(d.Q,{style:v.media,object:!0,src:p.a}):u.a.createElement(d.e,{type:"submit",size:"sm",color:"primary",id:e.id,onClick:n.isClosedHandler.bind(Object(s.a)(Object(s.a)(n)))}," Valid\xe9")))})},n.loading=function(){return u.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},n.toggle=n.toggle.bind(Object(s.a)(Object(s.a)(n))),n.onRadioBtnClick=n.onRadioBtnClick.bind(Object(s.a)(Object(s.a)(n))),n.state={dropdownOpen:!1,radioSelected:2,commands:[],idRestaurant:""},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("this.props"),console.log(this.props.match.params.key);var t=this.props.match.params.key,n="";this.props.getRestaurants().then(function(){var a=e.props.Restaurant.list;a.length>0&&a.forEach(function(e){if(console.log(e.uid),console.log(t),e.uid===t)return console.log("trueeeeeeee"),void(n=e.id)}),console.log("idRestaurant"),console.log(n),e.setState({idRestaurant:n},function(){console.log(e.state.idRestaurant)}),""!==n&&setInterval(e.handleData(n,e),2e4)})}},{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"onRadioBtnClick",value:function(e){this.setState({radioSelected:e})}},{key:"render",value:function(){return setInterval(this.handleData(this.state.idRestaurant,this),2e4),u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(d.ib,null,u.a.createElement(d.u,null,u.a.createElement(d.i,null,u.a.createElement(d.n,null,"Liste de commandes"),u.a.createElement(d.j,null,u.a.createElement(d.lb,{hover:!0,responsive:!0,className:"table-outline mb-0 d-none d-sm-table"},u.a.createElement("thead",{className:"thead-light"},u.a.createElement("tr",null,u.a.createElement("th",{className:"text-center"},"commande"),u.a.createElement("th",{className:"text-center"},"prix"),u.a.createElement("th",{className:"text-center"},"Table"),u.a.createElement("th",{className:"text-center"},"Date de commande"),u.a.createElement("th",{className:"text-center"},"Date de validation"),u.a.createElement("th",{className:"text-center"},"Lib\xe9r\xe9 table"))),u.a.createElement("tbody",null,this.loadTable())))))))}}]),t}(i.Component),v={media:{width:50}};t.default=Object(h.b)(function(e){return console.log(e),{Command:e.Command,Restaurant:e.Restaurant}},function(e){return Object(g.b)({getCommands:f.e,getRestaurants:f.f},e)})(b)}}]);
//# sourceMappingURL=41.6e484802.chunk.js.map