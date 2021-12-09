import { Component, OnInit } from '@angular/core';
import {AccountService} from "../shared/account.service";
import {GroupService} from "../../groups/shared/group.service";
import {Observable} from "rxjs";
import {GroupList} from "../../groups/shared/group-list.model";

@Component({
  selector: 'app-account',
  templateUrl: './create.account.component.html',
  styleUrls: ['./create.account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  $groups: Observable<GroupList> | undefined;

  constructor(private _accountService: AccountService, private _groupService: GroupService) { }

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(): void {
    this.$groups = this._groupService.getGroups();
  }



  goBack(){
    window.history.back();
  }


}
