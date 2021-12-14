import { Component, OnInit } from '@angular/core';
import {AccountService} from "../shared/account.service";
import {GroupService} from "../../groups/shared/group.service";
import {Observable} from "rxjs";
import {GroupList} from "../../groups/shared/group-list.model";
import {Account} from "../shared/account.model";
import {Group} from "../../groups/shared/group.model";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {LoginDto} from "../../auth/shared/login.dto";

@Component({
  selector: 'app-account',
  templateUrl: './create.account.component.html',
  styleUrls: ['./create.account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  $groups: Observable<GroupList> | undefined;
  public selectedGroup: number = 0;

  constructor(private _accountService: AccountService,
              private _groupService: GroupService,
              private _router:Router) { }

  ngOnInit(): void {
    this.getGroups();
  }

  selectChangeHandler(event: any) {
    this.selectedGroup = event.target.value;
  }

  getGroups(): void {
    this.$groups = this._groupService.getGroups();
  }

  create(email: string, name: string, encryptedPassword: string, masterPassword: string, groupId: number, ): void {
    if(this.checksMasterpassword()){
      this._accountService.createAccount({
        email,
        name,
        encryptedPassword,
        masterPassword,
        groupId
      } as Account).subscribe(value => {});
    }else{
      this.masterPasswordWarning_show();
    }
  }


  checksMasterpassword():boolean{
    return false;
  }

  popUp_Window_Show(){
    // @ts-ignore
    document.querySelector('.pop-up_background').style.display = 'flex';
  }
  goBack(){
    window.history.back();
  }
  masterPasswordWarning_show(){
    // @ts-ignore
    document.querySelector('.masterPassword_warning').style.display = 'flex';
    // @ts-ignore
    document.querySelector('.pop-up_container_confirm').style.height = '280px';
    // @ts-ignore
    document.querySelector('.pop-up_button_confirm').style.marginTop = '50px';
  }
  masterPasswordWarning_hide(){
    // @ts-ignore
    document.querySelector('.masterPassword_warning').style.display = 'none';
    // @ts-ignore
    document.querySelector('.pop-up_container_confirm').style.height = '260px';
    // @ts-ignore
    document.querySelector('.pop-up_button_confirm').style.marginTop = '30px';
  }

  newGroup(){
    this._router.navigateByUrl("groups/create")
  }
}
