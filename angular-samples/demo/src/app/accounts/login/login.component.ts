import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string=""
  password:string=""
  errorMessage=""
  constructor() { }

  ngOnInit(): void {
  }

  onUserNameEdit(value){
this.userName=value;

  }

  onPasswordEdit(value){
    this.password=value;

  }
  onLogin(){

    if(this.userName=="admin" && this.password=="admin@123"){
      this.errorMessage="Login Successfull";
    }
    else{
      this.errorMessage="Invald Credentials";
    }

  }
  onReset(){

    this.userName="";
    this.password="";
    this.errorMessage="";
  }

}
