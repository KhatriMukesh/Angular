import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users:Array<any> = []
  constructor(private roleService:RoleService,private router:Router) { }

  ngOnInit(): void {
    this.roleService.getAllUsers().subscribe(resp=>{
     // console.log(resp);
      this.users = resp.data
    })
  }
  deleteUser(userId:any){
    this.roleService.deleteUser(userId).subscribe(resp=>{
      this.getAllUsers() 
      
    })
}
  editUser(userId:any){
    this.router.navigateByUrl("/edituser/"+userId)
  }
  getAllUsers(){
    this.roleService.getAllUsers().subscribe(resp=>{
     // console.log(resp);
       this.users =  resp.data 
    }) 
  }

}