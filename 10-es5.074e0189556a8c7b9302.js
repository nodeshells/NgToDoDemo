!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{lCCV:function(e,n,i){"use strict";i.r(n),i.d(n,"TodoPageModule",(function(){return D}));var a,r=i("ofXK"),c=i("3Pt+"),u=i("TEn/"),l=i("tyNb"),s=i("mrSG"),d=i("fXoL"),b=i("XNiG"),f=function(){function e(){t(this,e),this.todoList=[]}return o(e,[{key:"addTodo",value:function(t){this.todoList.push(t)}},{key:"deleteTodo",value:function(t){this.todoList.splice(t,1)}},{key:"updateTodo",value:function(t,e){this.todoList[t]=e}}]),e}(),p=i("lJxs"),h=((a=function(){function e(){t(this,e),this.todo=new f,this.todoSubject=new b.a,this.todoState=this.todoSubject.asObservable().pipe(Object(p.a)((function(t){return t.todoList})))}return o(e,[{key:"addTodo",value:function(t){this.todo.addTodo(t),this.todoSubject.next(this.todo)}},{key:"deleteTodo",value:function(t){this.todo.deleteTodo(t),this.todoSubject.next(this.todo)}},{key:"updateTodo",value:function(t,e){this.todo.updateTodo(t,e),this.todoSubject.next(this.todo)}}]),e}()).\u0275fac=function(t){return new(t||a)},a.\u0275prov=d.Db({token:a,factory:a.\u0275fac,providedIn:"root"}),a);function v(t,e){if(1&t&&(d.Kb(0,"ion-label",10),d.hc(1),d.Vb(2,"date"),d.Ib(3,"br"),d.hc(4),d.Jb()),2&t){var o=d.Ub().$implicit;d.xb(1),d.jc(" ",d.Xb(2,2,null==o?null:o.create_at,"yyyy\u5e74MM\u6708dd\u65e5"),""),d.xb(3),d.jc(" ",null==o?null:o.label," ")}}function y(t,e){1&t&&(d.Kb(0,"ion-label",10),d.hc(1,"\u4e88\u5b9a\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"),d.Jb())}function m(t,e){if(1&t){var o=d.Lb();d.Kb(0,"ion-list"),d.Kb(1,"ion-item",6),d.Sb("click",(function(){d.dc(o);var t=e.index,n=e.$implicit;return d.Ub().updateToDo(t,n)})),d.Kb(2,"ion-button",7),d.Sb("click",(function(){d.dc(o);var t=e.index;return d.Ub().deleteToDo(t)})),d.Ib(3,"ion-icon",8),d.hc(4," \u524a\u9664 "),d.Jb(),d.gc(5,v,5,5,"ion-label",9),d.gc(6,y,2,0,"ion-label",9),d.Jb(),d.Jb()}if(2&t){var n=e.$implicit;d.xb(5),d.ac("ngIf",null==n?null:n.label),d.xb(1),d.ac("ngIf",!(null!=n&&n.label))}}var T,k,x,g=[{path:"",component:(T=function(){function e(o,n){t(this,e),this.todo=o,this.alertController=n,this.todoState=this.todo.todoState}return o(e,[{key:"ngOnInit",value:function(){}},{key:"addToDo",value:function(){this.todo.addTodo({label:""})}},{key:"deleteToDo",value:function(t){this.todo.deleteTodo(t)}},{key:"updateToDo",value:function(t,e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.presentAlertPrompt(e);case 2:(n=o.sent)&&this.todo.updateTodo(t,{create_at:n.ToDoDate,label:n.ToDoLabel,content:n.ToDoContent});case 4:case"end":return o.stop()}}),o,this)})))}},{key:"presentAlertPrompt",value:function(t){var e;return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function o(){var n,i;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.alertController.create({header:"\u4e88\u5b9a\u78ba\u8a8d",inputs:[{name:"ToDoDate",type:"date",value:t.create_at?t.create_at:""},{name:"ToDoLabel",type:"text",value:t.label?t.label:"",placeholder:"\u4e88\u5b9a\u306e\u540d\u524d\u3092\u5165\u529b"},{name:"ToDoContent",type:"text",value:t.content?t.content:"",placeholder:"\u4e88\u5b9a\u306e\u8a73\u7d30\u3092\u5165\u529b"}],buttons:[{text:"\u30ad\u30e3\u30f3\u30bb\u30eb",role:"cancel",cssClass:"secondary",handler:function(){}},{text:"\u66f4\u65b0",handler:function(){}}]});case 2:return n=o.sent,o.next=5,n.present();case 5:return o.next=7,n.onDidDismiss();case 7:return i=o.sent,o.abrupt("return","cancel"===i.role||null===(e=i.data)||void 0===e?void 0:e.values);case 9:case"end":return o.stop()}}),o,this)})))}}]),e}(),T.\u0275fac=function(t){return new(t||T)(d.Hb(h),d.Hb(u.a))},T.\u0275cmp=d.Bb({type:T,selectors:[["app-todo"]],decls:13,vars:4,consts:[[3,"translucent"],["slot","start"],[1,"ion-padding"],[4,"ngFor","ngForOf"],["expand","full",1,"ion-margin",3,"click"],["slot","start","name","add"],["button","true",3,"click"],["slot","start","fill","outline","color","danger",3,"click"],["slot","start","name","trash"],["class","ion-text-wrap",4,"ngIf"],[1,"ion-text-wrap"]],template:function(t,e){1&t&&(d.Kb(0,"ion-header",0),d.Kb(1,"ion-toolbar"),d.Kb(2,"ion-buttons",1),d.Ib(3,"ion-menu-button"),d.Jb(),d.Kb(4,"ion-title"),d.hc(5,"ToDo"),d.Jb(),d.Jb(),d.Jb(),d.Kb(6,"ion-content",2),d.Kb(7,"ion-card"),d.gc(8,m,7,2,"ion-list",3),d.Vb(9,"async"),d.Kb(10,"ion-button",4),d.Sb("click",(function(){return e.addToDo()})),d.Ib(11,"ion-icon",5),d.hc(12," \u4e88\u5b9a\u8ffd\u52a0 "),d.Jb(),d.Jb(),d.Jb()),2&t&&(d.ac("translucent",!0),d.xb(8),d.ac("ngForOf",d.Wb(9,2,e.todoState)))},directives:[u.g,u.t,u.d,u.n,u.s,u.f,u.e,r.j,u.c,u.h,u.k,u.i,r.k,u.j],pipes:[r.b,r.e],styles:[""]}),T)}],w=((x=function e(){t(this,e)}).\u0275mod=d.Fb({type:x}),x.\u0275inj=d.Eb({factory:function(t){return new(t||x)},imports:[[l.i.forChild(g)],l.i]}),x),D=((k=function e(){t(this,e)}).\u0275mod=d.Fb({type:k}),k.\u0275inj=d.Eb({factory:function(t){return new(t||k)},imports:[[r.c,c.a,u.u,w]]}),k)}}])}();