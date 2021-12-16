import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService} from "../shared/account.service";
import {Account} from "../shared/account.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {GroupList} from "../../groups/shared/group-list.model";
import {GroupService} from "../../groups/shared/group.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.account.component.html',
  styleUrls: ['./update.account.component.scss']
})
export class UpdateAccountComponent implements OnInit {
  accountForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    masterPassword: new FormControl('', Validators.required),
    encryptedPassword: new FormControl('', Validators.required),
    groupId: new FormControl('', Validators.required)
  })

  $groups: Observable<GroupList> | undefined;
  public selectedGroup: number = 0;
  accountToUpdate: Account | undefined;
  passwordField:any| undefined;
  showOreHidePassword:any | undefined;
  public password:string | undefined;

  constructor(private _activated: ActivatedRoute,
              private _accountService: AccountService,
              private _groupService: GroupService,
              private _router: Router) { }

  ngOnInit(): void {
    this.getGroups();
    let id = this._activated.snapshot.paramMap.get('id');
    if (id) {
      this._accountService.getAccount(+id).subscribe(account => {
        this.accountToUpdate = account;
        this.accountForm.patchValue(account);
      });
    }
  }

  getGroups(): void {
    this.$groups = this._groupService.getGroups();
  }

  goBack() {
    window.history.back()
  }

  update() {
    if (this.accountToUpdate) {
      let account = this.accountForm.value as Account;
      account.id = this.accountToUpdate.id;
      this._accountService.update(account).subscribe(account => {
        this.goBack()
      });
    }
  }

  selectChangeHandler(event: any) {
    this.selectedGroup = event.target.value;
  }
  newGroup(){
    this._router.navigateByUrl("groups/create")
  }

  generateRandomPassword(){
    this.password='';
    var chars = "1234567890qwertzuiopasdfghjklyxcvbnm" +
      "QWERTZUIOPASDFGHJKLYXCVBNM!@$%&*()_+<>:{}[]";
    var passwordLength =16;
    for (var i=0; i< passwordLength; i++){
      var randomNumber = Math.floor(Math.random()* chars.length);
      this.password += chars.substring(randomNumber, randomNumber+1);
    }
    // @ts-ignore
    document.getElementById("encryptedPassword").value = this.password
  }

  popUp_Window_Show(){
    // @ts-ignore
    document.querySelector('.pop-up_background').style.display = 'flex';
  }
  masterPasswordWarning_hide(){
    // @ts-ignore
    document.querySelector('.masterPassword_warning').style.display = 'none';
    // @ts-ignore
    document.querySelector('.pop-up_container_confirm').style.height = '260px';
    // @ts-ignore
    document.querySelector('.pop-up_button_confirm').style.marginTop = '30px';
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
