import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  loggedIn = false;
  urls = {
    "employeeData": "http://localhost:3000/employee_details/"
  }
  getEmployeeData() {
    return this.http.get(this.urls.employeeData);
  }

  postEmployeeData(data: any) {
    return this.http.post(this.urls.employeeData, data);
  }
  username:any=null;
}
