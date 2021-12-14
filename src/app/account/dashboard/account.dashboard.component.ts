import { Component, OnInit } from '@angular/core';
import {AccountService} from "../shared/account.service";
import {Observable} from "rxjs";
import {AccountList} from "../shared/account-list.model";
import {Router} from "@angular/router";
import {group} from "@angular/animations";


@Component({
  selector: 'app-dashboard',
  templateUrl: './account.dashboard.component.html',
  styleUrls: ['./account.dashboard.component.scss']
})
export class AccountDashboardComponent implements OnInit {
  $accounts: Observable<AccountList> | undefined;


  constructor(private _accountService: AccountService,
              private _router: Router) { }


  public account: AccountService [] = [];

  ngOnInit(): void {
    this.getAccounts()
  }

  getAccounts(): void {
    this.$accounts = this._accountService.getAccounts();
  }


  sortAccountsByGroupAscending(): void{
    this.$accounts = this._accountService.getAccounts();
  }

  createNewGroup(){
    this._router.navigateByUrl('group/create');
  }

  deleteAccountWindow(id: number): void{
    this.popupWindow_deleteAccount_show(id)
  }



















  popupWindow_manageGroups_show(){
    // @ts-ignore
    document.querySelector('.groups_pop-up_background').style.display = 'flex';
  }
  popupWindow_manageGroups_hide(){
    // @ts-ignore
    document.querySelector('.groups_pop-up_background').style.display = 'none';
  }











  popupWindow_deleteAccount_show(accountId: number)  {
    // @ts-ignore
    document.querySelector('.pop-up_background').style.display = 'flex';
    // @ts-ignore
    document.getElementById('groupNameLabel').innerText ="group <- Here";
    // @ts-ignore
    document.getElementById('WebsiteNameLabel').innerText="Website <- Here";
    // @ts-ignore
    document.getElementById('EmailNameLabl').innerText= "Email <- Here";
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
    this._router.navigateByUrl("groups/create")
  }
//TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO
  updateGroup(){

  }











  //TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO

  getAccount_byId(accountId: number){
    let accounts = this._accountService.getAccount(accountId).toPromise().then(function (account){

      account.email,
        account.group,
        account.name
    });

  }




  /*
  getAccountGroup(accountId: number): string{
    let groupName: string;
    groupName = 'groupName'
    return groupName;
  }

  getAccountWebsite(accountId: number): string{
    let websiteName: string;
    websiteName = 'websiteName'
    return websiteName;
  }
  */


}
