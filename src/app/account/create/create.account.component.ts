import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './create.account.component.html',
  styleUrls: ['./create.account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goBack(){
    window.history.back();
  }


}
