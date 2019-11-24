import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {CreateHomeComponent} from './create-home/create-home.component';
import {RoleComponent} from './role/role.component';
import {HostComponent} from './host/host.component';
import {ListHomeComponent} from './host/list-home/list-home.component';
import {InforHomeHostComponent} from './host/infor-home-host/infor-home-host.component';


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
  },
  {
    path: 'role',
    component: RoleComponent
  },
  {
    path: 'host',
    component: HostComponent,
    children: [
      {
      path: 'create-home',
      component: CreateHomeComponent
    },
      {
      path: 'list-home',
        component: ListHomeComponent
      },
      {
        path: ':id',
        component: InforHomeHostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
