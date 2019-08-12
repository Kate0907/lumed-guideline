import { Injectable } from '@angular/core';
import { GuidelineHttpService } from './main-database.service';
import { Item } from './item';
import { ItemType } from './ItemType';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _DB: GuidelineHttpService,) { }

  public async login(user: User): Promise<boolean> {
    const result = await this._DB.login(user);
    if (result === true) {
      sessionStorage.setItem('loggedIn', 'true');
    }
    return result;
  }




}
