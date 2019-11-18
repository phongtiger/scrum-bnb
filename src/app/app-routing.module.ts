import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {ChangePasswordComponent} from './change-password/change-password.component';


const routes: Routes = [
  {path: 'register',
    component: RegisterComponent
  },
  {path: 'login',
    component: LoginComponent
  },
  {
    path: 'addprofile',
    component: ProfileComponent
  },
  {
    path: 'editPassword',
    component: ChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
