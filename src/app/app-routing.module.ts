import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { EditProjectComponent } from './admin/edit-project/edit-project.component';
import { EditRoleComponent } from './admin/edit-role/edit-role.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { ListProjectComponent } from './admin/list-project/list-project.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path:"Login",component:LoginComponent },
  { path:"signup",component:SignupComponent },
  { path: "", component: LoginComponent },
  { path:"addrole", component:AddRoleComponent},
  { path:"listrole",component:ListRoleComponent},
  { path:"adduser",component:AddUserComponent},
  { path:"listuser",component:ListUserComponent},
  { path:"addproject",component:AddProjectComponent},
  { path:"listproject",component:ListProjectComponent},
  { path:"editrole/:roleId",component:EditRoleComponent},
  { path:"edituser/:userId",component:EditUserComponent},
  { path:"editproject/:projectId",component:EditProjectComponent},
  { path:"admin-dashboard",component:AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
