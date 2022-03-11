import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    firstName:string=""
    email:string=""
    password:string=""
    constructor(private sessionService:SessionService) {}

  ngOnInit(): void {
  }

  saveuser(){

    let user ={"firestName":this.firstName,"email":this.email,"password":this.password,"role":"62131a6b5f6c8f82d032f302"}
    this.sessionService.saveUser(user).subscribe(resp=>{
      console.log(resp);
    })
  }

}
