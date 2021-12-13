import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountDashboardComponent} from "./dashboard/account.dashboard.component";
import {CreateAccountComponent} from "./create/create.account.component";
import {AuthGuard} from "../auth/guards/auth.guard";
import {UpdateComponent} from "../groups/update/update.component";
import {CreateComponent} from "../groups/create/create.component";

const routes: Routes = [
  //Account
  {path: 'dashboard', component: AccountDashboardComponent, canActivate: [AuthGuard]},
  {path: 'create', component: CreateAccountComponent, canActivate:[AuthGuard]},
  //Group
  {path: 'create', component: CreateComponent, canActivate:[AuthGuard]},
  {path: 'update', component: UpdateComponent, canActivate:[AuthGuard]},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
