import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient:HttpClient) { }
 
  saveUser(user:any):Observable<any>{
    console.log(user);
    return this.httpClient.post("http://localhost:3000/users",user)
  
  }

  authenticate(user:any):Observable<any>{
    console.log(user);
    return this.httpClient.post("http://locallhost:3000/users",user)
  }
}
