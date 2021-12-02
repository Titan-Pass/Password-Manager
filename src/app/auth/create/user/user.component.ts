import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/auth.service";
import {User} from "../../shared/user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
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
