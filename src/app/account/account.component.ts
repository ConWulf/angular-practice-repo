import { Component, EventEmitter, Input, Output } from '@angular/core';
import {LoggingService} from '../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string} | undefined;
  @Input() id: number | undefined;
  @Output() statusChanged = new EventEmitter<{id?: number, newStatus: string}>();


  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status);
    this.log.logStatusChange(status);
  }

  constructor(private log : LoggingService) {
  }
}
