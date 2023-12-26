import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-todo-task',
  templateUrl: './add-todo-task.component.html',
  styleUrls: ['./add-todo-task.component.css']
})
export class AddTodoTaskComponent implements OnInit {

  public addTaskForm: FormGroup | any;
  public isSubmitted: boolean = false;
  public list: any = [];
  public taskList: any[] = [];
  public addedList: any = [];

  constructor() { }

  ngOnInit(): void {
    this.addTaskForm = new FormGroup({
      taskFormControl: new FormControl('', [Validators.required])
    })
    setInterval(() => {
      this.addedList = JSON.parse(localStorage.getItem('todoList') || '')

    }, 1000)
  }

  add() {
    if (this.addTaskForm.valid) {
      let body = {
        "task": this.addTaskForm.get('taskFormControl').value
      }

      localStorage.setItem('tasks', JSON.stringify(body))
      this.list = JSON.parse(localStorage.getItem('tasks') || '')
      this.taskList.push(this.list)
      localStorage.setItem('todoList', JSON.stringify(this.taskList))
      Swal.fire({
        title: "'Added Successfully!'",
        text: "'Task is added to todo list successfully !'",
        icon: "success"
      });
      this.addTaskForm.reset();
    }
  }
}
