import { Injectable } from '@angular/core';
import { BehaviorSubject } from '@reactivex/rxjs';
import { UserModel } from '../models/user.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService) { }

  result = new BehaviorSubject<UserModel[]>([]);

  updateUser(response: UserModel) {
    this.result.next(
      this.result.getValue().map( element => {
        if(element.id === response.id)
          return response;
        return element;
      })
    );
  }

  getList() {
    this.http.get().subscribe(
      response => {
        if(this.result.getValue().length>0) {
          this.result.next(this.result.getValue());
          return;
        }
        this.result.next(response);
      }
    )
  }
}
