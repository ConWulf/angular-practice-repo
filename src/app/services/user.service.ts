import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers : string[] = ['Max', 'Anna'];
  inactiveUsers : string[] = ['Chris', 'Manu'];

  public setToInactive(id : number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  public setToActive(id : number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }


  constructor() { }

  static setToInactive(id: number) {

  }
}
