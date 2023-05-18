import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { AccountComponent } from './shared/account/account.component';
import { CanactiveGuard } from './shared/guards/canactive.guard';
import { CanDeactiveGuard } from './shared/guards/can-deactive.guard';

const routes: Routes = [{
  path:'',
  component: HomeComponent
  },
  {
  path:'account',
  component: AccountComponent,
  canActivate: [CanactiveGuard],
  canDeactivate: [CanDeactiveGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
