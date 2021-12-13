import { Component, OnInit } from '@angular/core';
import {Group} from "../shared/group.model";
import {ActivatedRoute, Router} from "@angular/router";
import {GroupService} from "../shared/group.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})

export class UpdateComponent implements OnInit {
  groupForm = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  groupToUpdate: Group | undefined;


    constructor(private _activated: ActivatedRoute,
                private _groupService: GroupService,
                private _router: Router) { }

  ngOnInit(): void {
    let id = this._activated.snapshot.paramMap.get('id');
    if (id){
      this._groupService.getGroup(+id).subscribe(group => {
        this.groupToUpdate = group;
        this.groupForm.patchValue(group);
      });
    }
  }

  update(){
      if(this.groupToUpdate){
        let group = this.groupForm.value as Group;
        group.id = this.groupToUpdate.id;
        this._groupService.update(group).subscribe(group => {
          this._router.navigateByUrl('/groups')
        })
      }
  }

}
