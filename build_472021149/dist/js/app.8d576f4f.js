(function(t){function e(e){for(var s,n,i=e[0],l=e[1],c=e[2],v=0,m=[];v<i.length;v++)n=i[v],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("64a9")},"441a":function(t,e,a){t.exports=a.p+"img/gray.515206b7.png"},"4a4f":function(t,e,a){"use strict";a("e39f")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Principale")],1)},o=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"principale"}},[a("div",{staticClass:"row"},[a("Destinazioni",{staticClass:"col-6"}),a("PannelloMosart",{staticClass:"col-3"}),a("DebugPannel",{staticClass:"col-3"})],1)])},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"position-relative",attrs:{id:"destinazioni"}},[a("div",{staticClass:"mod"},[a("div",{staticClass:"mt-3"},[a("h6",{staticClass:"title text-start"},[t._v("Destinazioni")]),a("div",{staticClass:"d-flex align-items-center mx-1 my-3"},[t._m(0),a("select",{directives:[{name:"model",rawName:"v-model",value:t.destination,expression:"destination"}],staticClass:"form-select mb-1",attrs:{name:"area1",id:"area1","aria-label":"Default select example"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.destination=e.target.multiple?a:a[0]},function(e){return t.selectArea(t.destination)}]}},[a("option",{attrs:{selected:"",value:"0"}},[t._v("...")]),a("option",{attrs:{value:"1"}},[t._v("Area 1-2")]),a("option",{attrs:{value:"3"}},[t._v("Area 3")]),a("option",{attrs:{value:"4"}},[t._v("Area 4")]),a("option",{attrs:{value:"5"}},[t._v("Area 5")])])])]),t.area1?a("Area1",{attrs:{name:"A1-A2"}}):t._e(),t.area3?a("Area3",{attrs:{name:"A3"}}):t._e(),t.area4?a("Area4",{attrs:{name:"A4"}}):t._e(),t.area5?a("Area5",{attrs:{name:"A5"}}):t._e()],1),a("div",{staticClass:"d-flex flex-row-reverse bd-highlight border position-absolute bottom-0 end-0"},[a("div",[t._v(t._s(t.release))])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"area1"}},[a("span",{staticClass:"px-1"},[t._v("Ledwall:")])])}],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod my-3 position-relative"},[a("h6",{staticClass:"title text-start"},[t._v(t._s(t.name))]),a("div",{staticClass:"row mt-3"},[a("ImageSingola",{staticClass:"col-3",attrs:{nameIdUnivoco:"area1img1"}}),a("ImageSingola",{staticClass:"col-3",attrs:{nameIdUnivoco:"area1img2"}}),a("ImageSingola",{staticClass:"col-3",attrs:{nameIdUnivoco:"area1img3"}}),a("ImageSingola",{staticClass:"col-3",attrs:{nameIdUnivoco:"area1img4"}})],1)])},v=[],m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"d-flex flex-column justify-content-center mt-3"},[s("div",[s("img",{staticClass:"mx-auto mb-3",attrs:{src:a("441a"),alt:"img-1",width:"50",height:"50"}}),t._m(0),s("div",{staticClass:"form-check d-flex justify-content-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.controlliAvanzati,expression:"controlliAvanzati"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"",id:"flexCheckDefault"},domProps:{checked:Array.isArray(t.controlliAvanzati)?t._i(t.controlliAvanzati,"")>-1:t.controlliAvanzati},on:{change:function(e){var a=t.controlliAvanzati,s=e.target,r=!!s.checked;if(Array.isArray(a)){var o="",n=t._i(a,o);s.checked?n<0&&(t.controlliAvanzati=a.concat([o])):n>-1&&(t.controlliAvanzati=a.slice(0,n).concat(a.slice(n+1)))}else t.controlliAvanzati=r}}}),s("label",{staticClass:"form-check-label fs-6 px-1",attrs:{for:"flexCheckDefault"}},[t._v("\n                    Controlli Avanzati\n                ")])])]),t.controlliAvanzati?s("div",{staticClass:"d-flex flex-column justify-content-center mt-3"},[s("div",[s("label",{staticClass:"form-label",attrs:{for:"customRange1"}},[t._v("Pos X "+t._s(t.range1))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.range1,expression:"range1"}],staticClass:"form-range",attrs:{type:"range",id:"customRange1",min:"0",max:"5",step:"0.5"},domProps:{value:t.range1},on:{__r:function(e){t.range1=e.target.value}}})]),s("div",[s("label",{staticClass:"form-label",attrs:{for:"customRange2"}},[t._v("Pos Y "+t._s(t.range2))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.range2,expression:"range2"}],staticClass:"form-range",attrs:{type:"range",id:"customRange2",min:"0",max:"5",step:"0.5"},domProps:{value:t.range2},on:{__r:function(e){t.range2=e.target.value}}})]),s("div",[s("label",{staticClass:"form-label",attrs:{for:"customRange3"}},[t._v("Scale "+t._s(t.range3))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.range3,expression:"range3"}],staticClass:"form-range",attrs:{type:"range",id:"customRange3",min:"0",max:"5",step:"0.5"},domProps:{value:t.range3},on:{__r:function(e){t.range3=e.target.value}}})]),s("div",t._l(t.dataRadio,(function(e,a){return s("div",{key:a,staticClass:"form-check"},[s("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"flexRadioDefault",id:t.nameIdUnivoco+"-"+e.id}}),s("label",{staticClass:"form-check-label",attrs:{for:t.nameIdUnivoco+"-"+e.id}},[t._v("\n                        "+t._s(e.text)+"\n                    ")])])})),0)]):t._e()])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("select",{staticClass:"form-select",attrs:{id:"inputGroupSelect01"}},[a("option",{attrs:{selected:""}},[t._v("Choose...")]),a("option",{attrs:{value:"player1"}},[t._v("giocatore 1")]),a("option",{attrs:{value:"player2"}},[t._v("giocatore 2")]),a("option",{attrs:{value:"player3"}},[t._v("giocatore 3")]),a("option",{attrs:{value:"player4"}},[t._v("giocatore 4")]),a("option",{attrs:{value:"player5"}},[t._v("giocatore 5")]),a("option",{attrs:{value:"player6"}},[t._v("giocatore 6")])])}],f={props:{nameIdUnivoco:String},data:function(){return{controlliAvanzati:!1,range1:0,range2:0,range3:0,dataRadio:[{id:1,text:"Nessuna Selezione "},{id:2,text:"Bagliore SX"},{id:3,text:"Bagliore DX"}]}}},d=f,_=a("2877"),g=Object(_["a"])(d,m,p,!1,null,null,null),h=g.exports,b={components:{ImageSingola:h},props:{name:String},data:function(){return{controlli:!1}}},C=b,x=Object(_["a"])(C,u,v,!1,null,"48fac140",null),y=x.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod"},[a("h6",{staticClass:"title text-left"},[t._v(t._s(t.name))]),t._m(0)])},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-1 my-3"},[a("div",{staticClass:"input-group mb-3"},[a("label",{staticClass:"input-group-text",attrs:{for:"inputGroupSelect01"}},[t._v("Nome Team:")]),a("select",{staticClass:"form-select",attrs:{id:"inputGroupSelect01"}},[a("option",{attrs:{selected:""}},[t._v("Choose...")]),a("option",{attrs:{value:"1"}},[t._v("Inter")]),a("option",{attrs:{value:"2"}},[t._v("Milan")]),a("option",{attrs:{value:"3"}},[t._v("Juventus")]),a("option",{attrs:{value:"4"}},[t._v("Napoli")]),a("option",{attrs:{value:"5"}},[t._v("Roma")]),a("option",{attrs:{value:"6"}},[t._v("Atalanta")])])])])}],O={components:{ImageSingola:h},props:{name:String},data:function(){return{controlli:!1}}},P=O,I=Object(_["a"])(P,A,S,!1,null,"5fd78fa6",null),w=I.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod"},[a("h6",{staticClass:"title text-left"},[t._v(t._s(t.name))]),a("ImageSingola",{attrs:{nameIdUnivoco:"area4img1"}})],1)},k=[],N={components:{ImageSingola:h},props:{name:String},data:function(){return{controlli:!1}}},U=N,D=Object(_["a"])(U,j,k,!1,null,"6a40d24a",null),Z=D.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod"},[a("h6",{staticClass:"title text-left"},[t._v(t._s(t.name))]),a("ImageSingola",{attrs:{nameIdUnivoco:"area5img1"}})],1)},z=[],H={components:{ImageSingola:h},props:{name:String},data:function(){return{controlli:!1}}},$=H,M=Object(_["a"])($,E,z,!1,null,"baa43b8a",null),T=M.exports,R=(new Date).getDate(),J=(new Date).getMonth()+1,B=(new Date).getFullYear(),F=(new Date).getHours(),G=(new Date).getMinutes(),L="release"+R+J+B+F+G,X={components:{Area1:y,Area3:w,Area4:Z,Area5:T},data:function(){return{destination:"0",area1:!1,area3:!1,area4:!1,area5:!1,release:L}},methods:{selectArea:function(t){switch(t){case"1":this.area1=!0,this.area3=!1,this.area4=!1,this.area5=!1;break;case"3":this.area1=!1,this.area3=!0,this.area4=!1,this.area5=!1;break;case"4":this.area1=!1,this.area3=!1,this.area4=!0,this.area5=!1;break;case"5":this.area1=!1,this.area3=!1,this.area4=!1,this.area5=!0;break;default:this.area1=!1,this.area3=!1,this.area4=!1,this.area5=!1;break}}}},Y=X,K=(a("4a4f"),Object(_["a"])(Y,l,c,!1,null,null,null)),W=K.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"m-1",attrs:{id:"pannellinoMosart"}},[a("select",{staticClass:"form-select"},[a("option",{attrs:{value:"1"}},[t._v("CH1")]),a("option",{attrs:{value:"2"}},[t._v("CH2")]),a("option",{attrs:{value:"3"}},[t._v("CH3")]),a("option",{attrs:{value:"4"}},[t._v("CH4")]),a("option",{attrs:{value:"5"}},[t._v("CH5")]),a("option",{attrs:{value:"6"}},[t._v("CH6")]),a("option",{attrs:{value:"7"}},[t._v("CH7")]),a("option",{attrs:{value:"8"}},[t._v("CH8")]),a("option",{attrs:{value:"9"}},[t._v("CH9")]),a("option",{attrs:{value:"10"}},[t._v("CH10")]),a("option",{attrs:{value:"11"}},[t._v("CH11")]),a("option",{attrs:{value:"12"}},[t._v("CH12")]),a("option",{attrs:{value:"13"}},[t._v("CH13")]),a("option",{attrs:{value:"14"}},[t._v("CH14")]),a("option",{attrs:{value:"15"}},[t._v("CH15")]),a("option",{attrs:{value:"16"}},[t._v("CH16")])]),a("select",{staticClass:"form-select"},[a("option",{attrs:{value:"1"}},[t._v("AUTO+")]),a("option",{attrs:{value:"2"}},[t._v("MANUAL")])]),a("br"),a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"00:04"}}),a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"00:05"}}),a("br"),a("br"),a("select",{staticClass:"form-select"},[a("option",{attrs:{value:"1"}},[t._v("AUTOOUT")]),a("option",{attrs:{value:"2"}},[t._v("BACKGROUNDEND")]),a("option",{attrs:{value:"3"}},[t._v("STORYEND")]),a("option",{attrs:{value:"4"}},[t._v("OPENEND")])]),a("div",{staticClass:"form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"}}),a("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[t._v("Mosart replace logic")])]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Check")]),a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Mosart=W101|00:04|O"}})])])}],V={},tt=V,et=(a("7645"),Object(_["a"])(tt,q,Q,!1,null,"3841d1d1",null)),at=et.exports,st=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},rt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex  flex-column justify-content-center",attrs:{id:"debugpannel"}},[s("div",{staticClass:"border mb-2"},[s("label",{attrs:{for:"dbg-1"}},[t._v("Guide:")]),s("input",{staticClass:"border",attrs:{type:"number",name:"",id:"dbg-1",min:"0",max:"5"}})]),s("div",{staticClass:"border mb-2"},[s("label",{attrs:{for:"dbg-2"}},[t._v("L5:")]),s("select",{staticClass:"form-select",attrs:{id:"dbg-2"}},[s("option",{attrs:{selected:"",value:"tm_0"}},[t._v("Choose Team...")]),s("option",{attrs:{value:"tm_1"}},[t._v("Team_Z1")]),s("option",{attrs:{value:"tm_2"}},[t._v("Team_Z2")]),s("option",{attrs:{value:"tm_3"}},[t._v("Team_Z3")]),s("option",{attrs:{value:"tm_4"}},[t._v("Team_Z4")]),s("option",{attrs:{value:"tm_5"}},[t._v("Team_Z5")])])]),s("div",{staticClass:"border mb-2"},[s("select",{staticClass:"form-select my-2"},[s("option",{attrs:{selected:"",value:"bg_0"}},[t._v("Choose Bg...")]),s("option",{attrs:{value:"bg_1"}},[t._v("Bg_Z1")]),s("option",{attrs:{value:"bg_2"}},[t._v("Bg_Z2")]),s("option",{attrs:{value:"bg_3"}},[t._v("Bg_Z3")]),s("option",{attrs:{value:"bg_4"}},[t._v("Bg_Z4")]),s("option",{attrs:{value:"bg_5"}},[t._v("Bg_Z5")])]),s("select",{staticClass:"form-select my-2"},[s("option",{attrs:{selected:"",value:"bg_0"}},[t._v("Choose Struttura...")]),s("option",{attrs:{value:"struttura_1"}},[t._v("Struttura_Z1")]),s("option",{attrs:{value:"struttura_2"}},[t._v("Struttura_Z2")]),s("option",{attrs:{value:"struttura_3"}},[t._v("Struttura_Z3")]),s("option",{attrs:{value:"struttura_4"}},[t._v("Struttura_Z4")]),s("option",{attrs:{value:"struttura_5"}},[t._v("Struttura_Z5")])]),s("select",{staticClass:"form-select my-2"},[s("option",{attrs:{selected:"",value:"bg_0"}},[t._v("Choose Flare...")]),s("option",{attrs:{value:"flare_1"}},[t._v("Flare_Z1")]),s("option",{attrs:{value:"flare_2"}},[t._v("Flare_Z2")]),s("option",{attrs:{value:"flare_3"}},[t._v("Flare_Z3")]),s("option",{attrs:{value:"flare_4"}},[t._v("Flare_Z4")]),s("option",{attrs:{value:"flare_5"}},[t._v("Flare_Z5")])])]),s("div",{staticClass:"d-flex justify-between"},[s("img",{staticClass:"mx-auto mb-3",attrs:{src:a("441a"),alt:"img-1",width:"50",height:"50"}}),s("img",{staticClass:"mx-auto mb-3",attrs:{src:a("441a"),alt:"img-1",width:"50",height:"50"}})])])}],ot={},nt=ot,it=(a("5787"),Object(_["a"])(nt,st,rt,!1,null,"55e39377",null)),lt=it.exports,ct={name:"team",components:{Destinazioni:W,PannelloMosart:at,DebugPannel:lt}},ut=ct,vt=(a("7c0b"),Object(_["a"])(ut,n,i,!1,null,"1ba79174",null)),mt=vt.exports,pt=a("2f62"),ft=a("bc3a"),dt=a.n(ft);s["a"].use(pt["a"]);var _t=new pt["a"].Store({state:{users:[],posts:[],albums:[],photos:[]},mutations:{setUsers:function(t,e){t.users=e},setPosts:function(t,e){t.posts=e},setAlbums:function(t,e){t.albums=e},setPhotos:function(t,e){t.photos=e},setMatchAll:function(t,e){t.matchAll=e}},actions:{getUsers:function(t,e){if(null===e)return dt.a.get("https://jsonplaceholder.typicode.com/users/").then((function(e){sessionStorage.setItem("users",JSON.stringify(e.data)),t.commit("setUsers",e.data)})).catch((function(t){console.log(t)}));t.commit("setUsers",e)},getPosts:function(t,e){if(null===e)return dt.a.get("https://jsonplaceholder.typicode.com/posts/").then((function(e){sessionStorage.setItem("posts",JSON.stringify(e.data)),t.commit("setPosts",e.data)})).catch((function(t){console.log(t)}));t.commit("setPosts",e)},getAlbums:function(t,e){if(null===e)return dt.a.get("https://jsonplaceholder.typicode.com/albums/").then((function(e){sessionStorage.setItem("albums",JSON.stringify(e.data)),t.commit("setAlbums",e.data)})).catch((function(t){console.log(t)}));t.commit("setAlbums",e)},getPhotos:function(t,e){if(null===e)return dt.a.get("https://jsonplaceholder.typicode.com/photos/").then((function(e){sessionStorage.setItem("photos",JSON.stringify(e.data)),t.commit("setPhotos",e.data)})).catch((function(t){console.log(t)}));t.commit("setPhotos",e)}},getters:{getUsers:function(t){return t.users},getPosts:function(t){return t.posts},getAlbums:function(t){return t.albums},getPhotos:function(t){return t.photos},getAllItems:function(t){var e=[];for(var a in t.users)t.users[a]["__posts"]=[],t.users[a]["__albums"]=[],t.users[a]["__photos"]=[],e.push(t.users[a]);for(var s in e){for(var r in t.posts)t.posts[r]["userId"]==e[s]["id"]&&e[s]["__posts"].push(t.posts[r]);for(var o in t.albums)t.albums[o]["userId"]==e[s]["id"]&&e[s]["__albums"].push(t.albums[o])}return e}}}),gt={name:"app",components:{Principale:mt},beforeMount:function(){var t=sessionStorage.getItem("users"),e=sessionStorage.getItem("posts"),a=sessionStorage.getItem("albums"),s=sessionStorage.getItem("photos");_t.dispatch("getUsers",JSON.parse(t)),_t.dispatch("getPosts",JSON.parse(e)),_t.dispatch("getAlbums",JSON.parse(a)),_t.dispatch("getPhotos",JSON.parse(s))},methods:{},computed:{doneUsers:function(){var t=_t.getters.getUsers;return t},donePosts:function(){var t=_t.getters.getPosts;return t},doneAlbums:function(){var t=_t.getters.getAlbums;return t},donePhotos:function(){var t=_t.getters.getPhotos;return t},getAllItems:function(){var t=_t.getters.getAllItems;return t}}},ht=gt,bt=(a("034f"),Object(_["a"])(ht,r,o,!1,null,null,null)),Ct=bt.exports,xt=(a("ab8b"),a("f309"));s["a"].use(xt["a"]);var yt=new xt["a"]({});s["a"].config.productionTip=!1,new s["a"]({store:_t,vuetify:yt,render:function(t){return t(Ct)}}).$mount("#app")},5787:function(t,e,a){"use strict";a("9918")},"64a9":function(t,e,a){},7645:function(t,e,a){"use strict";a("f7ac")},"7c0b":function(t,e,a){"use strict";a("96bd")},"96bd":function(t,e,a){},9918:function(t,e,a){},e39f:function(t,e,a){},f7ac:function(t,e,a){}});
//# sourceMappingURL=app.8d576f4f.js.map