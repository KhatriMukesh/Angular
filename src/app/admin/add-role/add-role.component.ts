import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']

})
export class AddRoleComponent implements OnInit {
  roleName:string=""
  constructor(private roleService:RoleService, private router:Router) { }
  saverole(){

    let role ={roleName:this.roleName}
    this.roleService.addRole(role).subscribe(resp=>{
      console.log(resp);
     this.router.navigateByUrl("/listrole")
    })
  }
  ngOnInit(): void {
  }

}
