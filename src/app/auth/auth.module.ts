import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GroupsComponent } from './create/groups/groups.component';
import { AccountComponent } from './create/account/account.component';
import { UserComponent } from './create/user/user.component';



@NgModule({
  declarations: [
    LoginComponent,
    GroupsComponent,
    AccountComponent,
    UserComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})

export class AuthModule { }
