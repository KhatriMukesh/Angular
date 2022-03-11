import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  projectTitle: string = ""
  projectId: string = ""
  constructor(private aRoute: ActivatedRoute, private roleService: RoleService, private router: Router) { }


  ngOnInit(): void {

    this.projectId = this.aRoute.snapshot.params["projectId"]
    this.getProjectByProjectId
  }
  getProjectByProjectId() {
    this.roleService.getUserById(this.projectId).subscribe(resp => {
      this.projectTitle = resp.data.projectTitle
    })
  }

  updateProject() {
    let project = {
      projectId: this.projectId,
      projectTitle: this.projectTitle
    }
    this.roleService.updateProject(project).subscribe(resp => {
      this.router.navigateByUrl("/listproject")
      console.log(resp);
      
    })
  }
}
