import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountList} from "./account-list.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountsApi = environment.api + 'api/Accounts'

  constructor(private _http: HttpClient) { }

  getAccounts(): Observable<AccountList> {
    return this._http.get<AccountList>(this.accountsApi);
  }
}
