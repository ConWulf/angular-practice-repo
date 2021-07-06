import { Injectable } from '@angular/core';
import {CounterService} from "./counter.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers : string[] = ['Max', 'Anna'];
  inactiveUsers : string[] = ['Chris', 'Manu'];

  public setToInactive(id : number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.countActiveToInactive();
  }

  public setToActive(id : number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.countInactiveToActive()
  }


  constructor(private counterService: CounterService) { }

}
