import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
  projects:Array<any> = []
  constructor(private roleService:RoleService,private router:Router) { }

  ngOnInit(): void {
    this.roleService.getAllProjects().subscribe(resp=>{
      console.log(resp);
       this.projects =  resp.data 

        })
  
}
  editproject(projectId:any){
    this.router.navigateByUrl("/editproject/"+projectId)
  }
  getAllProjects(){
    this.roleService.getAllProjects().subscribe(resp=>{
     // console.log(resp);
       this.projects =  resp.data 
    }) 
  }

}
