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
  password: string |undefined;
  public loginPassword: string |undefined;
  accountToDelete : Account | undefined;
  passwordField:any| undefined;
  showOreHidePassword:any | undefined;


  constructor(private _accountService: AccountService,
              private _router: Router) { }

  ngOnInit(): void {
    this.getAccounts()
  }

  getAccounts(): void {
    this.$accounts = this._accountService.getAccounts();
  }


  getPassword(id: number, password: string): void {
    id = this.accountID;
    this._accountService.getPassword({id, password} as Password).subscribe(value => {
        this.password = value.password
        this.passwordField = 1;
        // @ts-ignore
        document.getElementById("masterPassword").value = this.password;
      });
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

  deleteAccount(){
    let id: number | undefined = this.accountToDelete?.id;
    if(id && id !=0){
      this._accountService.delete(id).subscribe(()=>{
        this.getAccounts();
        this.accountToDelete = undefined;
      });
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

  popupWindow_deleteAccount_show(account: Account)  {
    this.accountToDelete = account
  }

  popupWindow_deleteAccount_hide(){
    this.accountToDelete = undefined;
  }

  goBack(): void {
    this.password = '';
    this.loginPassword = '';
    // @ts-ignore
    document.querySelector('.pop-up_password').style.display = 'none';
    this.passwordField = undefined;
    this.password = undefined;
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

  popUp_Window_Show(id: any){
    // @ts-ignore
    document.querySelector('.pop-up_password').style.display = 'flex';
    this.accountID =  +id.valueOf();
  }
  showPassword():void{
    if(!this.passwordField){
      this.passwordField = 1;
    }
    else{
      this.passwordField = undefined;
    }
  }
}
