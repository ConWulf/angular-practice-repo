import { Component } from "@angular/core";


@Component({
  // similar to selecting in css, with exception of id
  // selector: '[app-server]' *-select element by attribute
  // selector: '.app-server' *-select element by class
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  severId: number = Math.floor(Math.random() * 100);
  serverStatus: string;

  constructor() {
    this.serverStatus = Math.floor(Math.random() * 2) === 0 ? 'offline':'online'
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'rgba(78, 199, 78, 1)' : 'rgba(239, 68, 68, 1)'
  }
}
