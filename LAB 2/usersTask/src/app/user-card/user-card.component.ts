import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-card',
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  // taking 'userInfo' from user-list.html
  // @Input nameInHTML--> nameInHTML that's coming from a PARENT comp.
  // value of 1 user is in 'userInfo'
  @Input() userInfo : any;
}
