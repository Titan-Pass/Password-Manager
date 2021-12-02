import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginDto} from "./login.dto";
import {BehaviorSubject, Observable, of} from "rxjs";
import {TokenDto} from "./token.dto";
import {environment} from "../../../environments/environment";
import {take, tap} from "rxjs/operators";
import {User} from "./user.model";

const jwtToken = 'jwtToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authApi = environment.api + 'api/Auth'

  isLoggedIn$ = new BehaviorSubject<string | null>(this.getToken());
  constructor(private _http: HttpClient) { }

  login(loginDto: LoginDto): Observable<TokenDto>{
    return this._http.post<TokenDto>(environment.api + 'api/auth/login', loginDto)
      .pipe(
        tap(token => {
          if(token && token.jwt) {
            localStorage.setItem(jwtToken, token.jwt);
            this.isLoggedIn$.next(token.jwt);
          } else {
            this.logout();
          }
        })
      )
  }

  createUser(user: User): Observable<User> {
    return this._http.post<User>(this.authApi, user)
  }

  getToken(): string | null {
    return localStorage.getItem(jwtToken);

  }

  logout():Observable<boolean> {
    localStorage.removeItem(jwtToken)
    this.isLoggedIn$.next(null);
    return of(true).pipe(take(1));
    return of(true);
  }


}
