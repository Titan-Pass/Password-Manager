import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountList} from "./account-list.model";
import {Account} from "./account.model";
import {Group} from "../../groups/shared/group.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountsApi = environment.api + 'api/Accounts'

  constructor(private _http: HttpClient) { }

  getAccounts(): Observable<AccountList> {
    return this._http.get<AccountList>(this.accountsApi);
  }

  createAccount(account: Account): Observable<Account> {
    return this._http.post<Account>(this.accountsApi, account);
  }

  update(account: Account): Observable<Account>{
    return this._http.put<Account>(this.accountsApi + '/' + account.id, account);
  }

  delete(id: number){
    return this._http.delete(this.accountsApi + '/' + id);
  }
}
