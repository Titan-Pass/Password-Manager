import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'auth', loadChildren: () =>
  import('./auth/auth.module')
    .then(f => f.AuthModule)},

  {path: 'accounts', loadChildren: () =>
  import('./account/account.module')
    .then(value => value.AccountModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
