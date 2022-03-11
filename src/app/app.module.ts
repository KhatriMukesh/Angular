import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { ListProjectComponent } from './admin/list-project/list-project.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { EditRoleComponent } from './admin/edit-role/edit-role.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { EditProjectComponent } from './admin/edit-project/edit-project.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddRoleComponent,
    AdminHeaderComponent,
    ListRoleComponent,
    AddUserComponent,
    ListUserComponent,
    AddProjectComponent,
    ListProjectComponent,
    AdminDashboardComponent,
    EditRoleComponent,
    EditUserComponent,
    EditProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
