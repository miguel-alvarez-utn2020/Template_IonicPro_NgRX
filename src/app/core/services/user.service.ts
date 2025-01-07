import { UserRepository } from "src/app/domain/repositories/user.repository";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/domain/models/user";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService  {
    private http = inject(HttpClient);
  constructor() {}

  /* getUsers(): Observable<User[]> {
    return this.userRepository.getUsers();
  } */

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
    }
}
