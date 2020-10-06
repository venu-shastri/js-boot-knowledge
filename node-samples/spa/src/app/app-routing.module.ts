import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"" , redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent , children:[
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent}
  ]},
  {path:'dashboard/:userName',component:MaindashboardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
