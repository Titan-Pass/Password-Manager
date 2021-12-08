import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/auth.service";
import {User} from "../../shared/user.model";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private _authService: AuthService) {}




  ngOnInit(): void {
  }


  createUser(email: string, plainTextPassword: string, plaintTextRepeatPassword: string){
    if(this.checkIfPasswordsAreEqual(plainTextPassword, plaintTextRepeatPassword)){
      this.create(email, plainTextPassword);
    }

  }


  checkIfPasswordsAreEqual(plainTextPassword: string, plainTextRepeatPassword: string): boolean{
    return plainTextPassword == plainTextRepeatPassword;
  }


  create(email: string, plainTextPassword: string): void {
    email = email.trim();
    plainTextPassword = plainTextPassword.trim();
    this._authService.createUser({email, plainTextPassword} as User).subscribe(value => {
    });
  }

  goBack(){
    window.history.back();
  }

}
