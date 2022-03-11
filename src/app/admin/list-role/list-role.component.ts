import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {
  roles:Array<any> = []
  constructor(private roleService:RoleService,private router:Router) { }

  ngOnInit(): void {
    this.roleService.getAllRoles().subscribe(resp=>{
      console.log(resp);
       this.roles =  resp.data 
  })
  }
  deleteRole(roleId:any){
    this.roleService.deleteRole(roleId).subscribe(resp=>{
          this.getAllRoles() 
    
    })
}

  editRole(roleId:any){
    this.router.navigateByUrl("/editrole/"+roleId)
  }

  getAllRoles(){
    this.roleService.getAllRoles().subscribe(resp=>{
      console.log(resp);
       this.roles =  resp.data 
    }) 
  }
}


