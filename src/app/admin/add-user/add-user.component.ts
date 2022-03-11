import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  firstName:string=""
  email:string=""
  password:string=""

  constructor(private roleService:RoleService, private router:Router) { }
  saveuser(){

  let user = {firstName:this.firstName,email:this.email,password:this.password}
  this.roleService.addUser(user).subscribe(resp=>{
    console.log(resp);
    this.router.navigateByUrl("/listuser")

  })
  
  }
  ngOnInit(): void {
  }


}
