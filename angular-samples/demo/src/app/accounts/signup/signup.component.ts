import { Component, Inject, OnInit } from '@angular/core';
import {ConsoleLoggerService} from '../../utility/services/consoleLogger.service'
@Component({
  selector: 'signup-comp',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loggerService:any;
  constructor(@Inject("logger") loggerService:any) {

    this.loggerService=loggerService;
   }

  userName:string;
  password:string;
  email:string;
  errorMessage:string;

  ngOnInit(): void {
  }

  onSignup(){

    this.errorMessage=`${this.userName} ${this.password} ${this.email}`
    this.loggerService.write(this.errorMessage);
  }
  onReset(){

    this.userName="";
    this.password="";
    this.email="";
    this.errorMessage="";
  }
}
