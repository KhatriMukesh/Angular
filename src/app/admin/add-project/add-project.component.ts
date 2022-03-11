import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  projectTitle:string=""
  description:string=""
  technology:string=""
  estimatedHours:string=""
  startDate:string=""
  //projectManagerID:string=""

  constructor(private roleService:RoleService, private router:Router) { }
  saveproject(){

    let project={projectTitle:this.projectTitle,description:this.description,technology:this.technology,estimatedHours:this.estimatedHours,startDate:this.startDate}
    
    this.roleService.addProject(project).subscribe(resp=>{
    console.log(resp);
    this.router.navigateByUrl("/listproject")
    })
  }
  ngOnInit(): void {
  }

}
