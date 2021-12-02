import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountDashboardComponent} from "./dashboard/account.dashboard.component";
import {CreateAccountComponent} from "./create/create.account.component";
import {AuthGuard} from "../auth/guards/auth.guard";

const routes: Routes = [
  {path: 'dashboard', component: AccountDashboardComponent, canActivate: [AuthGuard]},
  {path: 'create', component: CreateAccountComponent, canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
