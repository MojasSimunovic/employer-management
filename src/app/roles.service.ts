import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from './models/role';
import { Observable } from 'rxjs';
import { Designation } from './models/designation';
import { Client } from './models/class/client';
import { environment } from '../environments/environment.development';
import { Employee } from './models/employee';
import { Constant } from './constant/Constant';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  http = inject(HttpClient);

  rolesList: Role[] = [];

  constructor() {}

  getAllRoles() {
    return this.http.get(environment.API_URL + Constant.API_METHOD.GET_ROLES);
  }

  getDesignations(): Observable<any> {
    return this.http.get(
      environment.API_URL + Constant.API_METHOD.GET_DESIGNATIONS
    );
  }

  getAllClients(): Observable<any> {
    return this.http.get<any>(
      environment.API_URL + Constant.API_METHOD.GET_CLIENTS
    );
  }

  addUpdate(obj: Client): Observable<Client> {
    return this.http.post<Client>(
      environment.API_URL + Constant.API_METHOD.ADD_CLIENT,
      obj
    );
  }

  getAllEmployees(): Observable<any> {
    return this.http.get<any>(
      environment.API_URL + Constant.API_METHOD.GET_EMPLOYEES
    );
  }

  addClientProjectUpdate(project: any): Observable<any> {
    return this.http.post<any>(
      environment.API_URL + Constant.API_METHOD.ADD_PROJECT,
      project
    );
  }

  getAllProjects(): Observable<any> {
    return this.http.get<any>(
      environment.API_URL + Constant.API_METHOD.GET_PROJECTS
    );
  }

  // getClient(id: number): Observable<Client> {
  //   return this.http.get<Client>(
  //     environment.API_URL + 'GetClientByClientId?clientId=' + id
  //   );
  // }

  deleteClient(id: number): Observable<Client> {
    return this.http.delete<any>(
      environment.API_URL + Constant.API_METHOD.DELETE_CLIENT + id
    );
  }
}
