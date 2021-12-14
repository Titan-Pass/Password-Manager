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
        this._router.navigateByUrl('/dashboard')
      });
    }
  }

  selectChangeHandler(event: any) {
    this.selectedGroup = event.target.value;
  }
}
