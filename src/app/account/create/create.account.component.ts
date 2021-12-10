import { Component, OnInit } from '@angular/core';
import {AccountService} from "../shared/account.service";
import {GroupService} from "../../groups/shared/group.service";
import {Observable} from "rxjs";
import {GroupList} from "../../groups/shared/group-list.model";
import {Account} from "../shared/account.model";
import {Group} from "../../groups/shared/group.model";

@Component({
  selector: 'app-account',
  templateUrl: './create.account.component.html',
  styleUrls: ['./create.account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  $groups: Observable<GroupList> | undefined;
  public selectedGroup: number = 0;

  constructor(private _accountService: AccountService, private _groupService: GroupService) { }

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
    this._accountService.createAccount({email, name, encryptedPassword, masterPassword, groupId} as Account).subscribe(value => {
    });
  }

  goBack(){
    window.history.back();
  }
}
