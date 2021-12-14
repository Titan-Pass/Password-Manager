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
  getGroups(): void {
    this.$groups = this._groupService.getGroups();
  }

  ngOnInit(): void {
    this.getGroups();
  }

}
