import {Component, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup
  minLengthOfEmail: boolean = false;

  userEmail: string = 'info@box.ch';
  userPassword: string = 'admin2021';
  credentialsValidation: boolean = false;

  constructor() {

  }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required, Validators.email
      ], []),

      password: new FormControl('', [Validators.required])
    })

    this.loginForm.valueChanges.subscribe((data) => {
      console.log(data.email.length)
      if (data.email.length > 0) {
        this.minLengthOfEmail = true;
      } else {
        this.minLengthOfEmail = false
      }
    })


  }


  onSubmit():void {

    if (this.loginForm.value.email === this.userEmail && this.loginForm.value.password === this.userPassword) {
      alert('You are successfully logged in')
      this.credentialsValidation = false
    } else {
      this.credentialsValidation = true;
    }
  }

  pswForgot(): void {
    console.log('Passwort vergessen');
  }

  register(): void {
    console.log('Hier registrieren');
  }

}

