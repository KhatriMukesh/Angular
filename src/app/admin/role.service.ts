import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpClient:HttpClient) { }

  addRole(role:any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/roles",role)
  }
  addUser(user:any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/users",user)
  }  
  addProject(project:any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/projects",project)
  }



  updateRole(role:any):Observable<any>{
    return this.httpClient.put("http://localhost:3000/roles",role)
   }
   updateUser(user:any):Observable<any>{
     return this.httpClient.put("http://localhost:3000/users",user)
   }
   updateProject(project:any):Observable<any>{
     return this.httpClient.put("http://localhost:3000/projects",project)
   }





   deleteRole(roleId:any):Observable<any>{
    return this.httpClient.delete("http://localhost:3000/roles/"+roleId)
  }
  deleteUser(userId:any):Observable<any>{
    return this.httpClient.delete("http://localhost:3000/users/"+userId)
  }



  getRoleById(roleId:any):Observable<any>{
    return this.httpClient.get("http://localhost:3000/roles/"+roleId)
  }
  getUserById(userId:any):Observable<any>{
    return this.httpClient.get("http://localhost:3000/users/"+userId)
  }
  getProjectById(projectId:any):Observable<any>{
    return this.httpClient.get("http://localhost:3000/projects/"+projectId)
  }



  
  getAllRoles():Observable<any>{
    return this.httpClient.get("http://localhost:3000/roles")
  }
  getAllUsers():Observable<any>{
    return this.httpClient.get("http://localhost:3000/users")
  }
  getAllProjects():Observable<any>{
    return this.httpClient.get("http://localhost:3000/projects")
  }

}
