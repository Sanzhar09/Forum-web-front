import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../interfaces/User'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private _url = 'backend/api/user/'
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  Login(user: User): Observable<User> {
    return this.http.post<User>(this._url + 'login', user, this.httpHeaders)
  }

  SignUp(user: User): Observable<User> {
    return this.http.post<User>(this._url + 'signUp', user, this.httpHeaders)
  }

  LoginAsRoot(user: User): Observable<User> {
    return this.http.post<User>(this._url + 'loginAdmin', user, this.httpHeaders)
  }
}
