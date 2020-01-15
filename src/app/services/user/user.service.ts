import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login(user: User) {
    if (user.email.length > 0 && user.password === 'admin') {
      return true;
    } else {
      return false;
    }
  }
}
