import { Injectable } from '@angular/core';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {Todo, TodoState} from '../interface/todo';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo = new TodoState();
  todoSubject: Subject<TodoState> = new Subject<TodoState>();
  todoState: Observable<Todo[]> = this.todoSubject.asObservable().pipe(map(state => state.todoList));

  constructor() {
  }

  addTodo(todoData: Todo){
    this.todo.addTodo(todoData);
    this.todoSubject.next(this.todo);
  }

  deleteTodo(id: number){
    this.todo.deleteTodo(id);
    this.todoSubject.next(this.todo);
  }

  updateTodo(id: number, todoData: Todo){
    this.todo.updateTodo(id, todoData);
    this.todoSubject.next(this.todo);
  }

}
