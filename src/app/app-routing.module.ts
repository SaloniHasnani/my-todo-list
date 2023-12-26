import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddTodoTaskComponent } from './add-todo-task/add-todo-task.component';
import { ImportantTaskListComponent } from './important-task-list/important-task-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'add-task',
    component: AddTodoTaskComponent
  },
  {
    path: 'important-task-list',
    component: ImportantTaskListComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
