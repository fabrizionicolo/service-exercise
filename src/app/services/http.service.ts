import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel, UserHttp } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>("https://jsonplaceholder.typicode.com/posts");
  }

  post(data: UserHttp): Observable<UserModel> {
    return this.http.post<UserModel>("https://jsonplaceholder.typicode.com/posts", data);
  }

  put(id: number, data: UserHttp): Observable<UserModel> {
    return this.http.put<UserModel>("https://jsonplaceholder.typicode.com/posts/" + id, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>("https://jsonplaceholder.typicode.com/posts/" + id);
  }

  getObjectById(id: number): Observable<UserModel> {
    return this.http.get<UserModel>("https://jsonplaceholder.typicode.com/posts/" + id);
  }

}