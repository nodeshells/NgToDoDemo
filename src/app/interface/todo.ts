export class TodoState {
  todoList: Todo[];

  constructor(){
    this.todoList = [];
  }

  addTodo(todo: Todo){
    this.todoList.push(todo);
  }

  deleteTodo(id: number){
   this.todoList.splice(id, 1);
  }

  updateTodo(id: number, updateTodo: Todo){
    this.todoList[id] = updateTodo;
  }
}

export interface Todo {
  create_at?: string;
  update_at?: string;
  content?: string;
  label: string;
}
