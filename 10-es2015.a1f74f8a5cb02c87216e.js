(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{lCCV:function(t,o,e){"use strict";e.r(o),e.d(o,"TodoPageModule",(function(){return D}));var n=e("ofXK"),i=e("3Pt+"),s=e("TEn/"),a=e("tyNb"),l=e("mrSG"),d=e("LRne"),c=e("fXoL"),r=e("XNiG");class b{constructor(){this.todoList=[]}addTodo(t){this.todoList.push(t)}deleteTodo(t){this.todoList.splice(t,1)}updateTodo(t,o){this.todoList[t]=o}}var u=e("lJxs");let h=(()=>{class t{constructor(){this.todo=new b,this.todoSubject=new r.a,this.todoState=this.todoSubject.asObservable().pipe(Object(u.a)(t=>t.todoList)),this.todoSubject.subscribe(t=>{localStorage.setItem("todo",JSON.stringify(t))})}addTodo(t){this.todo.addTodo(t),this.todoSubject.next(this.todo)}deleteTodo(t){this.todo.deleteTodo(t),this.todoSubject.next(this.todo)}updateTodo(t,o){this.todo.updateTodo(t,o),this.todoSubject.next(this.todo)}loadBackup(){const t=JSON.parse(localStorage.getItem("todo"));return t&&(this.todo.todoList=[...t.todoList],this.todoSubject.next(this.todo)),this.todo.todoList}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=c.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function p(t,o){if(1&t&&(c.Kb(0,"ion-label",10),c.hc(1),c.Vb(2,"date"),c.Ib(3,"br"),c.hc(4),c.Jb()),2&t){const t=c.Ub().$implicit;c.xb(1),c.jc(" ",c.Xb(2,2,null==t?null:t.create_at,"yyyy\u5e74MM\u6708dd\u65e5"),""),c.xb(3),c.jc(" ",null==t?null:t.label," ")}}function f(t,o){1&t&&(c.Kb(0,"ion-label",10),c.hc(1,"\u4e88\u5b9a\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"),c.Jb())}function T(t,o){if(1&t){const t=c.Lb();c.Kb(0,"ion-list"),c.Kb(1,"ion-item",6),c.Sb("click",(function(){c.dc(t);const e=o.index,n=o.$implicit;return c.Ub().updateToDo(e,n)})),c.Kb(2,"ion-button",7),c.Sb("click",(function(){c.dc(t);const e=o.index;return c.Ub().deleteToDo(e)})),c.Ib(3,"ion-icon",8),c.hc(4," \u524a\u9664 "),c.Jb(),c.gc(5,p,5,5,"ion-label",9),c.gc(6,f,2,0,"ion-label",9),c.Jb(),c.Jb()}if(2&t){const t=o.$implicit;c.xb(5),c.ac("ngIf",null==t?null:t.label),c.xb(1),c.ac("ngIf",!(null!=t&&t.label))}}const m=[{path:"",component:(()=>{class t{constructor(t,o){this.todo=t,this.alertController=o,this.todoState=this.todo.todoState,this.disableButton=!1}ngOnInit(){this.todoState=Object(d.a)(this.todo.loadBackup())}onDisableButton(t){this.disableButton=!this.disableButton,this.disableButton=!1}addToDo(){this.todo.addTodo({label:""})}deleteToDo(t){this.onDisableButton({}),this.todo.deleteTodo(t)}updateToDo(t,o){return Object(l.a)(this,void 0,void 0,(function*(){this.onDisableButton({});const e=yield this.presentAlertPrompt(o);e&&this.todo.updateTodo(t,{create_at:e.ToDoDate,label:e.ToDoLabel,content:e.ToDoContent})}))}presentAlertPrompt(t){var o;return Object(l.a)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({header:"\u4e88\u5b9a\u78ba\u8a8d",inputs:[{name:"ToDoDate",type:"date",value:t.create_at?t.create_at:""},{name:"ToDoLabel",type:"text",value:t.label?t.label:"",placeholder:"\u4e88\u5b9a\u306e\u540d\u524d\u3092\u5165\u529b"},{name:"ToDoContent",type:"text",value:t.content?t.content:"",placeholder:"\u4e88\u5b9a\u306e\u8a73\u7d30\u3092\u5165\u529b"}],buttons:[{text:"\u30ad\u30e3\u30f3\u30bb\u30eb",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"\u66f4\u65b0",handler:()=>{}}]});yield e.present();const n=yield e.onDidDismiss();return"cancel"===n.role||null===(o=n.data)||void 0===o?void 0:o.values}))}}return t.\u0275fac=function(o){return new(o||t)(c.Hb(h),c.Hb(s.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-todo"]],decls:13,vars:4,consts:[[3,"translucent"],["slot","start"],[1,"ion-padding"],[4,"ngFor","ngForOf"],["expand","full",1,"ion-margin",3,"click"],["slot","start","name","add"],["button","true",3,"click"],["slot","start","fill","outline","color","danger",3,"click"],["slot","start","name","trash"],["class","ion-text-wrap",4,"ngIf"],[1,"ion-text-wrap"]],template:function(t,o){1&t&&(c.Kb(0,"ion-header",0),c.Kb(1,"ion-toolbar"),c.Kb(2,"ion-buttons",1),c.Ib(3,"ion-menu-button"),c.Jb(),c.Kb(4,"ion-title"),c.hc(5,"ToDo"),c.Jb(),c.Jb(),c.Jb(),c.Kb(6,"ion-content",2),c.Kb(7,"ion-card"),c.gc(8,T,7,2,"ion-list",3),c.Vb(9,"async"),c.Kb(10,"ion-button",4),c.Sb("click",(function(){return o.addToDo()})),c.Ib(11,"ion-icon",5),c.hc(12," \u4e88\u5b9a\u8ffd\u52a0 "),c.Jb(),c.Jb(),c.Jb()),2&t&&(c.ac("translucent",!0),c.xb(8),c.ac("ngForOf",c.Wb(9,2,o.todoState)))},directives:[s.g,s.t,s.d,s.n,s.s,s.f,s.e,n.j,s.c,s.h,s.k,s.i,n.k,s.j],pipes:[n.b,n.e],styles:[""]}),t})()}];let y=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(o){return new(o||t)},imports:[[a.i.forChild(m)],a.i]}),t})(),D=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(o){return new(o||t)},imports:[[n.c,i.a,s.u,y]]}),t})()}}]);