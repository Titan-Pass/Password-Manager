import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import {AccountDashboardComponent} from "./dashboard/account.dashboard.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {CreateAccountComponent} from "./create/create.account.component";

@NgModule({
  declarations: [
    AccountDashboardComponent,
    CreateAccountComponent
  ],

  imports: [
    CommonModule,
    AccountRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
