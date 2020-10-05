import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms'
import {AccountsService} from './services/accounts.service'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,FormsModule,HttpClientModule
  ],
  exports:[LoginComponent,SignupComponent],
  providers:[{provide:AccountsService,useClass:AccountsService}]
})
export class AccountsModule { }
