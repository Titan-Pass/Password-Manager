import { Component, OnInit } from '@angular/core';
import {GroupService} from "../shared/group.service";
import {Group} from "../shared/group.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private _groupService: GroupService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  create(name: string,):void {
    if(name != ""){
      this._groupService.add({name} as Group).subscribe(value=> name);
      this.showPopUpWindow()
    }
    else{
      this.groupName_Warning_CannotBeNull();
    }
  }
  groupName_Warning_CannotBeNull(){
    // @ts-ignore
    document.querySelector('.groupName_Warning-CanNotBeNull').style.display = 'flex';
    // @ts-ignore
    document.querySelector('.WhiteContainer').style.height = '280px';
    // @ts-ignore
    document.querySelector('.CreateButton').style.marginTop = '50px';
  }
  groupName_Warning_reset(){
    // @ts-ignore
    document.querySelector('.groupName_Warning-CanNotBeNull').style.display = 'none';
    // @ts-ignore
    document.querySelector('.WhiteContainer').style.height = '260px';
    // @ts-ignore
    document.querySelector('.CreateButton').style.marginTop = '30px';
  }


  goBack(){
    window.history.back();
  }

  continue(){
    this._router.navigateByUrl('accounts/dashboard');
  }
  showPopUpWindow(){
    // @ts-ignore
    document.querySelector('.pop-up_background').style.display = 'flex';
  }

}
