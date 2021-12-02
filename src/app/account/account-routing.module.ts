import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountDashboardComponent} from "./dashboard/account.dashboard.component";

const routes: Routes = [
  {path: 'dashboard', component: AccountDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
