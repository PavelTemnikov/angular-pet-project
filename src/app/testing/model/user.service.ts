import { Injectable } from "@angular/core";


@Injectable()
export class UserService {
    isLoggedIn = true;
    user = { name: 'Admin' };
}