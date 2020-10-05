import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class AccountsService{

  httpClient:HttpClient;
  baseUrl:string;
  constructor(httpClient:HttpClient,@Inject('apiBaseAddress')baseUrl:string){
    this.httpClient=httpClient;
    this.baseUrl=baseUrl;
  }

  signup(user){
    let observableStream=this.httpClient.post(`${this.baseUrl}/accounts/register`,user);
    return observableStream;
  }
}
