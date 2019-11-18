import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeadComponent } from './head/head.component';
import { LoginComponent } from './login/login.component';
import {DesktopComponent} from './desktop/desktop.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeadComponent,
    LoginComponent,
    DesktopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
