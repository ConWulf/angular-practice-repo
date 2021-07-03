import { Component, EventEmitter, Input, Output } from '@angular/core';
import {LoggingService} from '../services/logging.service';
import {AccountService} from "../services/account.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string} | undefined;
  @Input() id: number | undefined;


  onSetTo(status: string) {
    this.accountService.updateStatus(status, this.id);
    // console.log('A server status changed, new status: ' + status);
    // this.log.logStatusChange(status);
    this.accountService.statusUpdated.emit(status);
  }

  constructor(private log : LoggingService, private accountService : AccountService) {
  }
}
