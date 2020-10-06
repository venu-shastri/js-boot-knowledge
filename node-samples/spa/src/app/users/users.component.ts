import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'users-board',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userName:string="";
  constructor(private acr:ActivatedRoute) { }

  ngOnInit(): void {
    this.acr.parent.params.subscribe((params)=>{
        this.userName=params.userName;

    });
  }

}
