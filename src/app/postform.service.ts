import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
// THIS IS SAMPLE OF SERVICE IN ANGULAR
// FOR THIS SERVICE WE DO ONLY HTTP REQUEST
export class PostformService {

  constructor(private http:HttpClient) {
    
  }

  // LETS CRAFT A SPECIAL SERVICE METHOD TO USE
  getGreetFromBot(data){
    //this is where you prepare data for your back-end service
    console.log("form received");
    // no need to process recieved data... just return what ever the result
    // any error just do on the component that using this method on this service
    // for example.. flash message for success or error do it in you component
    return this.http.post('https://jsonplaceholder.typicode.com/posts',data,httpOptions);   
  }
}
