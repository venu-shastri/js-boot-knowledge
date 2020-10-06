import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onLogin(){

    //Validate Credentials
    //Navigate -> MainDashBoard
    let userName="tom";
    this.route.navigate(['dashboard',userName]);

  }

}
