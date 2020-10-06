import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientlistComponent} from './patientlist/patientlist.component'

const routes: Routes = [
  {path:"",redirectTo:'patientList',pathMatch:'full'},
  {path:'patientList', component:PatientlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
