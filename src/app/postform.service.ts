import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostformService {

  constructor(private http:HttpClient) { }
  getGreetFromBot(data){
    console.log("form received");
    console.log(data);
  }
}
