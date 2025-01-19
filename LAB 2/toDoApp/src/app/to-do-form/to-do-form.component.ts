import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-form',
  imports: [FormsModule],
  templateUrl: './to-do-form.component.html',
  styleUrl: './to-do-form.component.css'
})

export class ToDoFormComponent {
  // @Output when we are sharing data from CHILD to PARENT
  @Output() addToParent = new EventEmitter<string>();
  

  // we're taking USER-INPUT
  addItem(value: string) {
    this.addToParent.emit(value)
    // console.log(value)
    // ADD 'value' TO ARRAY OF TO-DOs IN PARENT //
  }
}
