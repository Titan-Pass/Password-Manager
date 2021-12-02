import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountDashboardComponent} from "./dashboard/account.dashboard.component";
import {CreateAccountComponent} from "./create/create.account.component";

const routes: Routes = [
  {path: 'dashboard', component: AccountDashboardComponent},
  {path: 'create', component: CreateAccountComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
