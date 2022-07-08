

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.baseurl + '/users/',
    {headers: this.httpHeaders});
  }
  getOneUser(id: any): Observable<any> {
    return this.http.get(this.baseurl + '/users/' + id + '/',
    {headers: this.httpHeaders});
  }
  updateUser(user: any): Observable<any> {
    const body = {email: user.email , password: user.password, created_by: user.year, company: user.company };
    return this.http.put(this.baseurl + '/users/' + user.id + '/', body,
    {headers: this.httpHeaders});
  }
  createUser(user: any): Observable<any> {
    const body = {email: user.email , password: user.password, created_by: user.year, company: user.company };
    return this.http.post(this.baseurl + '/users/', body,
    {headers: this.httpHeaders});
  }
  deleteUser(id: any): Observable<any> {
    return this.http.delete(this.baseurl + '/users/' + id + '/',
    {headers: this.httpHeaders});
  }
}