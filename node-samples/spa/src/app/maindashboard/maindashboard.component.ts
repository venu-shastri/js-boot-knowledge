import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Subscription } from 'rxjs';

@Component({
  selector: 'main-dash-board',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css']
})
export class MaindashboardComponent implements OnInit,OnDestroy {
  currentUser:string="";
  sunscriptionRef:Subscription
  constructor(private acr:ActivatedRoute) { }

  ngOnInit(): void {

    //Executed Only Once
   this.sunscriptionRef= this.acr.paramMap.subscribe((params)=>{
      this.currentUser=params.get("userName");
    })
  }
  ngOnDestroy(){
    this.sunscriptionRef.unsubscribe();

  }

}
