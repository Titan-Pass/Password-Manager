import { Component, OnInit } from '@angular/core';
import {AccountService} from "../shared/account.service";
import {Observable} from "rxjs";
import {AccountList} from "../shared/account-list.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './account.dashboard.component.html',
  styleUrls: ['./account.dashboard.component.scss']
})
export class AccountDashboardComponent implements OnInit {
  $accounts: Observable<AccountList> | undefined;


  constructor(private _accountService: AccountService) { }

  ngOnInit(): void {
    this.getAccounts()
  }

  getAccounts(): void {
    this.$accounts = this._accountService.getAccounts();
  }

  sortAccountsByGroupAscending(): void{
    this.$accounts = this._accountService.getAccounts();
  }

}
