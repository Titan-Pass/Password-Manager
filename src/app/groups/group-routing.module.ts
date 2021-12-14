import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./create/create.component";
import {AuthGuard} from "../auth/guards/auth.guard";
import {UpdateComponent} from "./update/update.component";
import {AccountDashboardComponent} from "../account/dashboard/account.dashboard.component";
import {DeleteComponent} from "./delete/delete.component";

const routes: Routes = [
  {path: 'create', component: CreateComponent, canActivate:[AuthGuard]},
  {path: 'update', component: UpdateComponent, canActivate:[AuthGuard]},
  {path: 'delete', component: DeleteComponent, canActivate:[AuthGuard]},
  {path: 'dashboard', component: AccountDashboardComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
