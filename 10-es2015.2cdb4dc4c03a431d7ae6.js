(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{lCCV:function(t,o,e){"use strict";e.r(o),e.d(o,"TodoPageModule",(function(){return g}));var n=e("ofXK"),i=e("3Pt+"),c=e("TEn/"),a=e("tyNb"),s=e("mrSG"),d=e("LRne"),l=e("fXoL"),r=e("XNiG");class b{constructor(){this.todoList=[]}addTodo(t){this.todoList.push(t)}deleteTodo(t){this.todoList.splice(t,1)}updateTodo(t,o){this.todoList[t]=o}}var u=e("lJxs");let h=(()=>{class t{constructor(){this.todo=new b,this.todoSubject=new r.a,this.todoState=this.todoSubject.asObservable().pipe(Object(u.a)(t=>t.todoList)),this.todoSubject.subscribe(t=>{console.log(t),localStorage.setItem("todo",JSON.stringify(t))})}addTodo(t){this.todo.addTodo(t),this.todoSubject.next(this.todo)}deleteTodo(t){this.todo.deleteTodo(t),this.todoSubject.next(this.todo)}updateTodo(t,o){this.todo.updateTodo(t,o),this.todoSubject.next(this.todo)}loadBackup(){const t=JSON.parse(localStorage.getItem("todo"));return t&&(this.todo.todoList=[...t.todoList],this.todoSubject.next(this.todo)),this.todo.todoList}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=l.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function p(t,o){if(1&t&&(l.Kb(0,"ion-label",10),l.hc(1),l.Vb(2,"date"),l.Ib(3,"br"),l.hc(4),l.Jb()),2&t){const t=l.Ub().$implicit;l.xb(1),l.jc(" ",l.Xb(2,2,null==t?null:t.create_at,"yyyy\u5e74MM\u6708dd\u65e5"),""),l.xb(3),l.jc(" ",null==t?null:t.label," ")}}function f(t,o){1&t&&(l.Kb(0,"ion-label",10),l.hc(1,"\u4e88\u5b9a\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"),l.Jb())}function T(t,o){if(1&t){const t=l.Lb();l.Kb(0,"ion-list"),l.Kb(1,"ion-item",6),l.Sb("click",(function(){l.dc(t);const e=o.index,n=o.$implicit;return l.Ub().updateToDo(e,n)})),l.Kb(2,"ion-button",7),l.Sb("click",(function(){l.dc(t);const e=o.index;return l.Ub().deleteToDo(e)})),l.Ib(3,"ion-icon",8),l.hc(4," \u524a\u9664 "),l.Jb(),l.gc(5,p,5,5,"ion-label",9),l.gc(6,f,2,0,"ion-label",9),l.Jb(),l.Jb()}if(2&t){const t=o.$implicit;l.xb(5),l.ac("ngIf",null==t?null:t.label),l.xb(1),l.ac("ngIf",!(null!=t&&t.label))}}const m=[{path:"",component:(()=>{class t{constructor(t,o){this.todo=t,this.alertController=o,this.todoState=this.todo.todoState}ngOnInit(){this.todoState=Object(d.a)(this.todo.loadBackup())}addToDo(){this.todo.addTodo({label:""})}deleteToDo(t){this.todo.deleteTodo(t)}updateToDo(t,o){return Object(s.a)(this,void 0,void 0,(function*(){const e=yield this.presentAlertPrompt(o);e&&this.todo.updateTodo(t,{create_at:e.ToDoDate,label:e.ToDoLabel,content:e.ToDoContent})}))}presentAlertPrompt(t){var o;return Object(s.a)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({header:"\u4e88\u5b9a\u78ba\u8a8d",inputs:[{name:"ToDoDate",type:"date",value:t.create_at?t.create_at:""},{name:"ToDoLabel",type:"text",value:t.label?t.label:"",placeholder:"\u4e88\u5b9a\u306e\u540d\u524d\u3092\u5165\u529b"},{name:"ToDoContent",type:"text",value:t.content?t.content:"",placeholder:"\u4e88\u5b9a\u306e\u8a73\u7d30\u3092\u5165\u529b"}],buttons:[{text:"\u30ad\u30e3\u30f3\u30bb\u30eb",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"\u66f4\u65b0",handler:()=>{}}]});yield e.present();const n=yield e.onDidDismiss();return"cancel"===n.role||null===(o=n.data)||void 0===o?void 0:o.values}))}}return t.\u0275fac=function(o){return new(o||t)(l.Hb(h),l.Hb(c.a))},t.\u0275cmp=l.Bb({type:t,selectors:[["app-todo"]],decls:13,vars:4,consts:[[3,"translucent"],["slot","start"],[1,"ion-padding"],[4,"ngFor","ngForOf"],["expand","full",1,"ion-margin",3,"click"],["slot","start","name","add"],["button","true",3,"click"],["slot","start","fill","outline","color","danger",3,"click"],["slot","start","name","trash"],["class","ion-text-wrap",4,"ngIf"],[1,"ion-text-wrap"]],template:function(t,o){1&t&&(l.Kb(0,"ion-header",0),l.Kb(1,"ion-toolbar"),l.Kb(2,"ion-buttons",1),l.Ib(3,"ion-menu-button"),l.Jb(),l.Kb(4,"ion-title"),l.hc(5,"ToDo"),l.Jb(),l.Jb(),l.Jb(),l.Kb(6,"ion-content",2),l.Kb(7,"ion-card"),l.gc(8,T,7,2,"ion-list",3),l.Vb(9,"async"),l.Kb(10,"ion-button",4),l.Sb("click",(function(){return o.addToDo()})),l.Ib(11,"ion-icon",5),l.hc(12," \u4e88\u5b9a\u8ffd\u52a0 "),l.Jb(),l.Jb(),l.Jb()),2&t&&(l.ac("translucent",!0),l.xb(8),l.ac("ngForOf",l.Wb(9,2,o.todoState)))},directives:[c.g,c.t,c.d,c.n,c.s,c.f,c.e,n.j,c.c,c.h,c.k,c.i,n.k,c.j],pipes:[n.b,n.e],styles:[""]}),t})()}];let y=(()=>{class t{}return t.\u0275mod=l.Fb({type:t}),t.\u0275inj=l.Eb({factory:function(o){return new(o||t)},imports:[[a.i.forChild(m)],a.i]}),t})(),g=(()=>{class t{}return t.\u0275mod=l.Fb({type:t}),t.\u0275inj=l.Eb({factory:function(o){return new(o||t)},imports:[[n.c,i.a,c.u,y]]}),t})()}}]);