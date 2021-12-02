import {GroupsComponent} from "../groups/groups.component";
import {CreateAccountComponent} from "../account/create/create.account.component";
import {UserComponent} from "./create/user/user.component";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'create/group', component: GroupsComponent},
  {path: 'create/account', component: CreateAccountComponent},
  {path: 'create/user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
