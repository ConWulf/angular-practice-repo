import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactive : number = 0;
  inactiveToActive : number = 0;

  countActiveToInactive() : void {
    this.activeToInactive++
    console.log("active to inactive total: "+this.activeToInactive);
  }

  countInactiveToActive() : void {
    this.inactiveToActive++
    console.log("inactive to active total: "+this.inactiveToActive);
  }

  constructor() { }
}
