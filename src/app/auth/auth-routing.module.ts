import {GroupsComponent} from "./create/groups/groups.component";
import {AccountComponent} from "./create/account/account.component";
import {UserComponent} from "./create/user/user.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'create/group', component: GroupsComponent},
  {path: 'create/account', component: AccountComponent},
  {path: 'create/user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
