import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users: BehaviorSubject<String[]>= new BehaviorSubject<String[]>([]);
  constructor() { }

  addUser(user: string):void{
    const users = this.users.value.slice();
    users.push(user);
    this.users.next(users);
  }
}
