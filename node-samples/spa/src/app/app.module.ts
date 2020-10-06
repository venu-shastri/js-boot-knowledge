import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { UsersComponent } from './users/users.component';
import{AuthGuardService} from './services/authRouteGuard.service'
import {UserCanDeactivate} from './services/userCanDeactivateGuard.service'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    MaindashboardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide:AuthGuardService,useClass:AuthGuardService},
    {provide:UserCanDeactivate,useClass:UserCanDeactivate}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
