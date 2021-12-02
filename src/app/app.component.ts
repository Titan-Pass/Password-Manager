import { Component } from '@angular/core';
import {AuthService} from "./auth/shared/auth.service";
import {pipe} from "rxjs";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Password-Manager';
  jwt: string | null | undefined;
  constructor(private _auth: AuthService) {
    _auth.isLoggedIn$.subscribe(jwt => {
      this.jwt = jwt;
    })
  }

  logout() {
    this._auth.logout()
  }
}
