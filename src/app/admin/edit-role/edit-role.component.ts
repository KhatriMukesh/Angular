import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {

  roleId:string=""
  roleName:string=""

  constructor(private aRoute:ActivatedRoute,private roleService:RoleService,private router:Router) { }

  ngOnInit(): void {
    this.roleId = this.aRoute.snapshot.params["roleId"]
    this.getRoleByRoleId() 
  }

  getRoleByRoleId(){
    this.roleService.getRoleById(this.roleId).subscribe(resp=>{
      this.roleName = resp.data.roleName 

    })
  }

  updateRole(){
    //  alert(this.roleId+" "+this.roleName)
      let role = {
        roleId : this.roleId,
        roleName : this.roleName
      }
      this.roleService.updateRole(role).subscribe(resp=>{
            this.router.navigateByUrl("/listrole")
            console.log(resp);
       
      })
    }
}
