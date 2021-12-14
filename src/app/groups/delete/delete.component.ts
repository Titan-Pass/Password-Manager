import { Component, OnInit } from '@angular/core';
import {GroupService} from "../shared/group.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(private _groupService: GroupService,
              private _router: Router) { }

  ngOnInit(): void {
  }

}
