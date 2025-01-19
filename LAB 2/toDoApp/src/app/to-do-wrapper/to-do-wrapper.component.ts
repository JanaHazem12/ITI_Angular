import { Component} from '@angular/core';
import { ToDoFormComponent } from '../to-do-form/to-do-form.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do-wrapper',
  imports: [ToDoFormComponent, ToDoListComponent, FormsModule, CommonModule],
  templateUrl: './to-do-wrapper.component.html',
  styleUrl: './to-do-wrapper.component.css'
})

export class ToDoWrapperComponent {
    // add an empty array //
    // logs the array to know if the value is in the array or not //
    itemsArray: string[] = [];

  itemsArrayMethod(value: string):string[]{
      var specialChars = "[A-Za-z0-9]"
      if(value.match(specialChars)){
        console.log(value+" added");
        this.itemsArray.push(value);
        return this.itemsArray;
      }
      alert("Please enter a valid input !");
      return this.itemsArray;
      // console.log(this.itemsArray);
  }

  deleteItemParent(valueDel: string){
    if(this.itemsArray.length == 1){
        this.itemsArray = this.itemsArray.filter(item => item != valueDel);
        alert("All tasks are deleted successfully !");
    }
    console.log(valueDel+" deleted");
    this.itemsArray = this.itemsArray.filter(item => item != valueDel);
    // return this.itemsArray;
  }

}

// display what's entered in the array
// delete what's entered