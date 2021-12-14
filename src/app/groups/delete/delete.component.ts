import { Component, OnInit } from '@angular/core';
import {GroupService} from "../shared/group.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {GroupList} from "../shared/group-list.model";
import {AccountService} from "../../account/shared/account.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  $groups: Observable<GroupList> | undefined;
  public selectedGroup: number = 0;

  constructor(private _groupService: GroupService,
              private _accountService: AccountService,
              private _router: Router) { }


  selectChangeHandler(event: any) {
    this.selectedGroup = event.target.value;
  }
  deleteGroup(groupId: number):void{
    if(groupId != 0){
      this._groupService.delete(groupId).subscribe();
      this.showPopUpWindow()
    }
    else {
      this.noGroupSelected_Warning_show()
    }
  }
  getGroups(): void {
    this.$groups = this._groupService.getGroups();
  }

  ngOnInit(): void {
    this.getGroups();
  }
  goBack(){
    window.history.back();
  }
  showPopUpWindow(){
    // @ts-ignore
    document.querySelector('.pop-up_background').style.display = 'flex';
  }
  continue(){
    this._router.navigateByUrl('accounts/dashboard');
  }
  noGroupSelected_Warning_show(){
    // @ts-ignore
    document.querySelector('.noGroupSelected_Warning').style.display = 'flex';
    // @ts-ignore
    document.querySelector('.WhiteContainer').style.height = '265px';
    // @ts-ignore
    document.querySelector('.pop-up_button_confirm').style.marginTop = '20px';

  }
  noGroupSelected_Warning_hide(){
    // @ts-ignore
    document.querySelector('.noGroupSelected_Warning').style.display = 'none';
    // @ts-ignore
    document.querySelector('.WhiteContainer').style.height = '235px';
    // @ts-ignore
    document.querySelector('.pop-up_button_confirm').style.marginTop = '10px';
  }

}
