import { User } from "../models/user";
import { Observable } from "rxjs";


export interface UserRepository {
  getUsers(): Observable<User[]>;
}
