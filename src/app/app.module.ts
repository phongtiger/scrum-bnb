import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeadComponent } from './head/head.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import {httpInterceptorProviders} from './auth/auth-interceptor';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CreateHomeComponent } from './create-home/create-home.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeadComponent,
    LoginComponent,
    ProfileComponent,
    ChangePasswordComponent,
    CreateHomeComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
