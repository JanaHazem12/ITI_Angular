import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoWrapperComponent } from './to-do-wrapper/to-do-wrapper.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToDoFormComponent, ToDoListComponent, ToDoWrapperComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'toDoApp';
}
