import { style } from '@angular/animations';
import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { ToDoWrapperComponent } from '../to-do-wrapper/to-do-wrapper.component';

@Component({
  selector: 'app-to-do-list',
  imports: [],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  @Input() itemsArrayChild: string[] = [];
  @Output() deleteTask = new EventEmitter<string>();
  @Output() completeTask = new EventEmitter<string>();

  deleteItem(valueD: string) {
    this.deleteTask.emit(valueD);
    // console.log(valueD);
    // ADD 'value' TO ARRAY OF TO-DOs IN PARENT //
  }

  completeItem(valueC:string){
    this.completeTask.emit(valueC);
    // how to apply NG style
  }
}
