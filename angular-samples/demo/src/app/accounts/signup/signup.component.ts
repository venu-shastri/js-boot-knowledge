import { Component, Inject, OnInit } from '@angular/core';
import {ConsoleLoggerService} from '../../utility/services/consoleLogger.service'
import { AccountsService } from '../services/accounts.service';
@Component({
  selector: 'signup-comp',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loggerService:any;
  accountsServiceRef:AccountsService;
  constructor(@Inject("logger") loggerService:any,accountServiceRef:AccountsService) {

    this.loggerService=loggerService;
    this.accountsServiceRef=accountServiceRef;
   }

  userName:string;
  password:string;
  email:string;
  errorMessage:string;

  ngOnInit(): void {
  }

  onSignup(){

    this.errorMessage=`${this.userName} ${this.password} ${this.email}`
    let user={name:this.userName,password:this.password,email:this.email};
    let observableStream=this.accountsServiceRef.signup(user);
    //observe
    observableStream.subscribe(
      (data:any)=>{
        this.loggerService.write(data.message);
      },
      (error)=>{
        this.loggerService.write(error);
      },
      ()=>{
        this.loggerService.write("Request Completed");
      });


  }

  onReset(){

    this.userName="";
    this.password="";
    this.email="";
    this.errorMessage="";
  }
}
