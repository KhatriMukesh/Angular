import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId : string=""
  firstName : string=""

  constructor(private aRoute:ActivatedRoute,private roleService:RoleService,private router:Router) { }

  ngOnInit(): void {
    this.userId = this.aRoute.snapshot.params["userId"]
    this.getUserByUserId() 
  }
  getUserByUserId(){
    this.roleService.getUserById(this.userId).subscribe(resp=>{
      this.firstName = resp.data.firstName
    })
  }
  updateUser(){
    let user={
      userId:this.userId,
      firstName:this.firstName
    }
    this.roleService.updateUser(user).subscribe(resp=>{
      this.router.navigateByUrl("/listuser")
      console.log(resp);
      
    })
  }
}
