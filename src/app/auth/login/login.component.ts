import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth.service";
import {LoginDto} from "../shared/login.dto";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: new FormControl('',
      [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', Validators.required),
  });

  constructor(private fb: FormBuilder,
              private _auth: AuthService) {

  }

  get password() {
    return this.loginForm.get('password')
  }
  get username() {
    return this.loginForm.get('username');
  }

  login(){
    const loginDto = this.loginForm.value as LoginDto;
    this._auth.login(loginDto)
      .subscribe(token => {
        console.log('Token: ', token);
      });
  }


  ngOnInit(): void {
  }

}
