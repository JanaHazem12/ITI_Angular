import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CommonModule } from '@angular/common';


// import * as usersData from '../assets/users.json';
// import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'usersTask';
  // data: any = usersData;
}
