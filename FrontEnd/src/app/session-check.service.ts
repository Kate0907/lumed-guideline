import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionCheckService {

  constructor() { }

  public checkSession(): boolean {
    if (sessionStorage.getItem('loggedIn') === 'true') {
      return true;
    }
    return false;
  }
}
