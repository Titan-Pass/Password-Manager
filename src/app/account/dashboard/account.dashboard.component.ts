import {Component, OnInit} from '@angular/core';
import {AccountService} from "../shared/account.service";
import {Observable} from "rxjs";
import {AccountList} from "../shared/account-list.model";
import {Router} from "@angular/router";
import {Account} from "../shared/account.model";
import {Password} from "../shared/password.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './account.dashboard.component.html',
  styleUrls: ['./account.dashboard.component.scss']
})
export class AccountDashboardComponent implements OnInit {
  $accounts: Observable<AccountList> | undefined;
  public accountID: number = 0;

  constructor(private _accountService: AccountService,
              private _router: Router) { }

  ngOnInit(): void {
    this.getAccounts()
  }

  getAccounts(): void {
    this.$accounts = this._accountService.getAccounts();
  }

  getPassword(id: number, password: string): void {
    this.accountID =  +id.valueOf();
    this._accountService.getPassword({id, password} as Password);
    window.location.reload();
  }

  updateAccount(id: number) {
    this._router.navigateByUrl('accounts/update/' + id)
  }

  sortAccountsByGroupAscending(): void{
    this.$accounts = this._accountService.getAccounts();
  }

  createNewGroup(){
    this._router.navigateByUrl('group/create');
  }

  deleteAccountWindow(id: any): void{
    this.popupWindow_deleteAccount_show(id)
  }

  deleteAccount(id: number){
    if(id !=0){
      this._accountService.delete(id).subscribe();
      window.location.reload();
    }
  }

  popupWindow_manageGroups_show(){
    // @ts-ignore
    document.querySelector('.groups_pop-up_background').style.display = 'flex';

  }
  popupWindow_manageGroups_hide(){
    // @ts-ignore
    document.querySelector('.groups_pop-up_background').style.display = 'none';
  }

  popupWindow_deleteAccount_show(id: any)  {
    // @ts-ignore
    document.querySelector('.pop-up_background').style.display = 'flex';
    // @ts-ignore
    document.getElementById('groupNameLabel').innerText ="group <- Here";
    // @ts-ignore
    document.getElementById('WebsiteNameLabel').innerText="Website <- Here";
    // @ts-ignore
    document.getElementById('EmailNameLabel').innerText="Email: " ;
    this.accountID =  +id.valueOf();

  }

  popupWindow_deleteAccount_hide(){
    // @ts-ignore
    document.querySelector('.pop-up_background').style.display = 'none';
    // @ts-ignore
    document.getElementById('groupNameLabel').dir('');
    // @ts-ignore
    document.getElementById('WebsiteNameLabel').after('');
    // @ts-ignore
    document.getElementById('EmailNameLabl').after('');
  }

  newGroup(){
    this._router.navigateByUrl("groups/create");
  }

  deleteGroup(){
    this._router.navigateByUrl("groups/delete");
  }

  addAccount(){
    this._router.navigateByUrl("accounts/create");
  }

  popUp_Window_Show(){
    // @ts-ignore
    document.querySelector('.pop-up_password').style.display = 'flex';
  }
}
