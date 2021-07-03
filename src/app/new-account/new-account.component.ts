import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from '../services/logging.service';
import {AccountService} from "../services/account.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {


  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
    // this.log.logStatusChange(accountStatus)

  }
  constructor(private log : LoggingService, private accountService : AccountService) {
    this.accountService.statusUpdated.subscribe((status : string) => {
      alert('new status '+status);
    })
  }

}
