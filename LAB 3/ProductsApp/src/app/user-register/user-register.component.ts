import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormControl, FormControlName } from '@angular/forms';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
  this.userForm = this.fb.group({
    userName : ['' , Validators.required],
    email: ['', [Validators.required, Validators.email]],
    userUsername: ['', [Validators.required, Validators.pattern]],
    password: ['', [Validators.required, Validators.minLength(8),Validators.pattern]],
    confirmPass: ['', [Validators.required]
    , {validator: this.passwordMatchValidator}],
 })
  }

  passwordMatchValidator(form: FormGroup) {
    const password = this.userForm.get('password')?.value;
    const confirmPassword = this.userForm.get('confirmPass')?.value;
    if (confirmPassword !== password) {
        console.log("don't match");
        return { passwordMismatch: true };
    }
    return null;
}


  get formControls(){
    return this.userForm.controls;
  }

  handleLoginForm(){
    console.log(this.userForm);
  }
}
