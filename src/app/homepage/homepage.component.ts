import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public taskList: any = [];
  public addedImportantTask: any = [];
  public deletedTask: any;
  public important_task: any = [];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.taskList = JSON.parse(localStorage.getItem('todoList') || '');
      this.important_task = JSON.parse(localStorage.getItem('ImportantTaskList') || '');
    }, 1000)


  }

  addToImportant(item: any) {

    let imp_list = item
    localStorage.setItem('importantList', JSON.stringify(imp_list))
    let imp_task = JSON.parse(localStorage.getItem('importantList') || '')
    this.addedImportantTask.push(imp_task)
    localStorage.setItem('ImportantTaskList', JSON.stringify(this.addedImportantTask))

    Swal.fire({
      title: "Added Successfully!",
      text: "Task is added to important task list successfully !",
      icon: "success"
    });
  }

  deleteTask(item: any) {

    this.deletedTask = item;
    this.taskList.splice(item, 1)
    localStorage.setItem('todoList', JSON.stringify(this.taskList));
    Swal.fire({
      title: "Deleted Successfully!",
      text: "Task is deleted successfully !",
      icon: "error"
    });
    this.important_task.splice(item, 1)
    localStorage.setItem('ImportantTaskList', JSON.stringify(this.important_task))

  }
}
