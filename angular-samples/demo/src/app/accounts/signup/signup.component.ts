import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup-comp',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  userName:string;
  password:string;
  email:string;
  errorMessage:string;

  ngOnInit(): void {
  }

  onSignup(){

    this.errorMessage=`${this.userName} ${this.password} ${this.email}`
    console.log(this.errorMessage);
  }
  onReset(){

    this.userName="";
    this.password="";
    this.email="";
    this.errorMessage="";
  }
}
