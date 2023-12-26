import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-todo-list';
  public add: boolean = false;
  public important: boolean = false;
  public home: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  test(event: any) {

    if (event.srcElement.href == 'http://localhost:4200/add-task') {
      this.add = true;
      this.important = false;
      this.home = false;
    }
    else if (event.srcElement.href == 'http://localhost:4200/important-task-list') {
      this.important = true;
      this.add = false;
      this.home = false;
    }

    else if (event.srcElement.href == 'http://localhost:4200/home') {
      this.home = true;
      this.add = false;
      this.important = false;
    }
    else {
      this.add = false;
      this.important = false;
      this.home = false;
    }
  }
}
