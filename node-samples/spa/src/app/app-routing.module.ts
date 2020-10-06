import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';
import {AuthGuardService} from './services/authRouteGuard.service'
import {UserCanDeactivate} from './services/userCanDeactivateGuard.service'
const routes: Routes = [
  {path:"" , redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent , children:[
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent}
  ]},
  {path:'dashboard/:userName', canActivate:[AuthGuardService],canDeactivate:[UserCanDeactivate],
  component:MaindashboardComponent,
  children:[
    {path:'users',component:UsersComponent},
    {path:'patients',loadChildren: ()=>import('./patients/patients.module').then(m=>m.PatientsModule)}
  ]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
