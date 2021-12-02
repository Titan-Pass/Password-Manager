import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth.service";
import {LoginDto} from "../shared/login.dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: new FormControl('',
      [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', Validators.required),
  });

  constructor(private fb: FormBuilder,
              private _auth: AuthService,
              private _router: Router) {

  }

  get password() {
    return this.loginForm.get('password')
  }
  get email() {
    return this.loginForm.get('email');
  }

  login(){
    const loginDto = this.loginForm.value as LoginDto;
    this._auth.login(loginDto)
      .subscribe(token => {
        if(token && token.jwt){
          this._router.navigateByUrl('accounts')
        }
        //console.log('Token: ', token);
      });
  }


  ngOnInit(): void {
  }

}
