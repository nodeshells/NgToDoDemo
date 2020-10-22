import { Component, OnInit } from '@angular/core';
import {TodoService} from '../service/todo.service';
import {AlertController} from '@ionic/angular';
import {Todo} from '../interface/todo';
import {of} from 'rxjs';

interface AlertForm {
  ToDoDate: string;
  ToDoLabel: string;
  ToDoContent: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  todoState = this.todo.todoState;
  disableButton = false;

  constructor(private todo: TodoService, private alertController: AlertController) {
  }

  ngOnInit() {
    // バックアップを取得してViewに反映
   this.todoState = of(this.todo.loadBackup());
  }

  onDisableButton(e){
    // console.log(e);
    this.disableButton = !this.disableButton;
    this.disableButton = false;
  }

  addToDo() {
    this.todo.addTodo({label: ''});
  }

  deleteToDo(id: number) {
    this.onDisableButton({});
    this.todo.deleteTodo(id);
  }

  async updateToDo(id: number, todo: Todo) {
    this.onDisableButton({});
    const formData = await this.presentAlertPrompt(todo);
    if (!formData){
     return;
   }
    const updateObject: Todo = {
     create_at: formData.ToDoDate,
     label: formData.ToDoLabel,
     content: formData.ToDoContent
   };
    this.todo.updateTodo(id, updateObject);
  }

  private async presentAlertPrompt(todo: Todo): Promise<AlertForm> {
      const alert = await this.alertController.create({
        header: '予定確認',
        inputs: [
          {
            name: 'ToDoDate',
            type: 'date',
            value: todo.create_at ? todo.create_at : ''
          },
          {
            name: 'ToDoLabel',
            type: 'text',
            value: todo.label ? todo.label : '',
            placeholder: '予定の名前を入力'
          },
          {
            name: 'ToDoContent',
            type: 'text',
            value: todo.content ? todo.content : '',
            placeholder: '予定の詳細を入力'
          },
        ],
        buttons: [
          {
            text: 'キャンセル',
            role: 'cancel',
            cssClass: 'secondary',
            handler:  () => {
              // console.log('Confirm Cancel');
            }
          }, {
            text: '更新',
            handler: () => {
              // console.log('Confirm Ok');
            }
          }
        ]
      });

      await alert.present();
      const updateData = await alert.onDidDismiss();
      if (updateData.role === 'cancel'){
        return undefined;
        }else {
        return updateData.data?.values;
      }
  }
}



