import { Component, OnInit } from '@angular/core';
import {GroupService} from "../shared/group.service";
import {Group} from "../shared/group.model";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private _groupService: GroupService) { }

  ngOnInit(): void {
  }

  create(name: string,):void {
    this._groupService.add({name} as Group).subscribe(value=>{
    });
  }

  goBack(){
    window.history.back();
  }

}
