import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-important-task-list',
  templateUrl: './important-task-list.component.html',
  styleUrls: ['./important-task-list.component.css']
})
export class ImportantTaskListComponent implements OnInit {

  public importantTaskList: any = [];
  public importantList: any = [];
  public list: any = [];

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      this.list = JSON.parse(localStorage.getItem('todoList') || '');
      this.importantTaskList = JSON.parse(localStorage.getItem('ImportantTaskList') || '');

    }, 1000)
  }

  removeFromList(item: any) {

    this.importantTaskList.splice(item, 1)
    localStorage.setItem('ImportantTaskList', JSON.stringify(this.importantTaskList))

    Swal.fire({
      title: "Removed Successfully!",
      text: "Task is removed from important task list !",
      icon: "error"
    });
  }



}
