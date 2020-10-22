!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,o){if(!t)return;if("string"==typeof t)return e(t,o);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,o)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{lCCV:function(e,n,r){"use strict";r.r(n),r.d(n,"TodoPageModule",(function(){return D}));var a,c=r("ofXK"),u=r("3Pt+"),l=r("TEn/"),s=r("tyNb"),d=r("mrSG"),b=r("LRne"),f=r("fXoL"),h=r("XNiG"),p=function(){function t(){o(this,t),this.todoList=[]}return i(t,[{key:"addTodo",value:function(t){this.todoList.push(t)}},{key:"deleteTodo",value:function(t){this.todoList.splice(t,1)}},{key:"updateTodo",value:function(t,e){this.todoList[t]=e}}]),t}(),y=r("lJxs"),v=((a=function(){function e(){o(this,e),this.todo=new p,this.todoSubject=new h.a,this.todoState=this.todoSubject.asObservable().pipe(Object(y.a)((function(t){return t.todoList}))),this.todoSubject.subscribe((function(t){localStorage.setItem("todo",JSON.stringify(t))}))}return i(e,[{key:"addTodo",value:function(t){this.todo.addTodo(t),this.todoSubject.next(this.todo)}},{key:"deleteTodo",value:function(t){this.todo.deleteTodo(t),this.todoSubject.next(this.todo)}},{key:"updateTodo",value:function(t,e){this.todo.updateTodo(t,e),this.todoSubject.next(this.todo)}},{key:"loadBackup",value:function(){var e=JSON.parse(localStorage.getItem("todo"));return e&&(this.todo.todoList=t(e.todoList),this.todoSubject.next(this.todo)),this.todo.todoList}}]),e}()).\u0275fac=function(t){return new(t||a)},a.\u0275prov=f.Db({token:a,factory:a.\u0275fac,providedIn:"root"}),a);function m(t,e){if(1&t&&(f.Kb(0,"ion-label",10),f.hc(1),f.Vb(2,"date"),f.Ib(3,"br"),f.hc(4),f.Jb()),2&t){var o=f.Ub().$implicit;f.xb(1),f.jc(" ",f.Xb(2,2,null==o?null:o.create_at,"yyyy\u5e74MM\u6708dd\u65e5"),""),f.xb(3),f.jc(" ",null==o?null:o.label," ")}}function g(t,e){1&t&&(f.Kb(0,"ion-label",10),f.hc(1,"\u4e88\u5b9a\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"),f.Jb())}function k(t,e){if(1&t){var o=f.Lb();f.Kb(0,"ion-list"),f.Kb(1,"ion-item",6),f.Sb("click",(function(){f.dc(o);var t=e.index,n=e.$implicit;return f.Ub().updateToDo(t,n)})),f.Kb(2,"ion-button",7),f.Sb("click",(function(){f.dc(o);var t=e.index;return f.Ub().deleteToDo(t)})),f.Ib(3,"ion-icon",8),f.hc(4," \u524a\u9664 "),f.Jb(),f.gc(5,m,5,5,"ion-label",9),f.gc(6,g,2,0,"ion-label",9),f.Jb(),f.Jb()}if(2&t){var n=e.$implicit;f.xb(5),f.ac("ngIf",null==n?null:n.label),f.xb(1),f.ac("ngIf",!(null!=n&&n.label))}}var T,x,S,w=[{path:"",component:(T=function(){function t(e,n){o(this,t),this.todo=e,this.alertController=n,this.todoState=this.todo.todoState,this.disableButton=!1}return i(t,[{key:"ngOnInit",value:function(){this.todoState=Object(b.a)(this.todo.loadBackup())}},{key:"onDisableButton",value:function(t){this.disableButton=!this.disableButton,this.disableButton=!1}},{key:"addToDo",value:function(){this.todo.addTodo({label:""})}},{key:"deleteToDo",value:function(t){this.onDisableButton({}),this.todo.deleteTodo(t)}},{key:"updateToDo",value:function(t,e){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return this.onDisableButton({}),o.next=3,this.presentAlertPrompt(e);case 3:(n=o.sent)&&this.todo.updateTodo(t,{create_at:n.ToDoDate,label:n.ToDoLabel,content:n.ToDoContent});case 5:case"end":return o.stop()}}),o,this)})))}},{key:"presentAlertPrompt",value:function(t){var e;return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function o(){var n,i;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.alertController.create({header:"\u4e88\u5b9a\u78ba\u8a8d",inputs:[{name:"ToDoDate",type:"date",value:t.create_at?t.create_at:""},{name:"ToDoLabel",type:"text",value:t.label?t.label:"",placeholder:"\u4e88\u5b9a\u306e\u540d\u524d\u3092\u5165\u529b"},{name:"ToDoContent",type:"text",value:t.content?t.content:"",placeholder:"\u4e88\u5b9a\u306e\u8a73\u7d30\u3092\u5165\u529b"}],buttons:[{text:"\u30ad\u30e3\u30f3\u30bb\u30eb",role:"cancel",cssClass:"secondary",handler:function(){}},{text:"\u66f4\u65b0",handler:function(){}}]});case 2:return n=o.sent,o.next=5,n.present();case 5:return o.next=7,n.onDidDismiss();case 7:return i=o.sent,o.abrupt("return","cancel"===i.role||null===(e=i.data)||void 0===e?void 0:e.values);case 9:case"end":return o.stop()}}),o,this)})))}}]),t}(),T.\u0275fac=function(t){return new(t||T)(f.Hb(v),f.Hb(l.a))},T.\u0275cmp=f.Bb({type:T,selectors:[["app-todo"]],decls:13,vars:4,consts:[[3,"translucent"],["slot","start"],[1,"ion-padding"],[4,"ngFor","ngForOf"],["expand","full",1,"ion-margin",3,"click"],["slot","start","name","add"],["button","true",3,"click"],["slot","start","fill","outline","color","danger",3,"click"],["slot","start","name","trash"],["class","ion-text-wrap",4,"ngIf"],[1,"ion-text-wrap"]],template:function(t,e){1&t&&(f.Kb(0,"ion-header",0),f.Kb(1,"ion-toolbar"),f.Kb(2,"ion-buttons",1),f.Ib(3,"ion-menu-button"),f.Jb(),f.Kb(4,"ion-title"),f.hc(5,"ToDo"),f.Jb(),f.Jb(),f.Jb(),f.Kb(6,"ion-content",2),f.Kb(7,"ion-card"),f.gc(8,k,7,2,"ion-list",3),f.Vb(9,"async"),f.Kb(10,"ion-button",4),f.Sb("click",(function(){return e.addToDo()})),f.Ib(11,"ion-icon",5),f.hc(12," \u4e88\u5b9a\u8ffd\u52a0 "),f.Jb(),f.Jb(),f.Jb()),2&t&&(f.ac("translucent",!0),f.xb(8),f.ac("ngForOf",f.Wb(9,2,e.todoState)))},directives:[l.g,l.t,l.d,l.n,l.s,l.f,l.e,c.j,l.c,l.h,l.k,l.i,c.k,l.j],pipes:[c.b,c.e],styles:[""]}),T)}],j=((S=function t(){o(this,t)}).\u0275mod=f.Fb({type:S}),S.\u0275inj=f.Eb({factory:function(t){return new(t||S)},imports:[[s.i.forChild(w)],s.i]}),S),D=((x=function t(){o(this,t)}).\u0275mod=f.Fb({type:x}),x.\u0275inj=f.Eb({factory:function(t){return new(t||x)},imports:[[c.c,u.a,l.u,j]]}),x)}}])}();