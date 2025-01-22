import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  handleForm(form : any){
    console.log(form);
    if (form.valid) {
      console.log('Form submitted successfully !');
    }  
  }

  // if I want to initialize values in the texboxes //
  // formValues = {
  //   userEmail: "Email Address",
  //   userPass: "Password"
  // }
}
