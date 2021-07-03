import {EventEmitter, Injectable} from '@angular/core';
import {LoggingService} from "./logging.service";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated : EventEmitter<string> = new EventEmitter<string>();
  addAccount(name : string, status : string) {
    this.accounts.push({name, status});
    this.loggingService.logStatusChange(status);
  }

  updateStatus(newStatus: string, id?: number) : void {
    if(id !== undefined)
      this.accounts[id].status = newStatus;
    this.loggingService.logStatusChange(newStatus);
  }

  constructor(private loggingService: LoggingService) { }
}
