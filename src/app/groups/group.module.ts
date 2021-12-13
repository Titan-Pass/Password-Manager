import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import {AccountDashboardComponent} from "../account/dashboard/account.dashboard.component";
import { CreateComponent } from './create/create.component';
import { HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AccountDashboardComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    GroupRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class GroupModule { }
