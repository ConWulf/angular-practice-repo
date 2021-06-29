import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private _allowNewServers = true;
  private _serverCreationStatus = 'No Server Was Created.'
  private _serverName = '';
  private _serverCreated = false;
  private _showParagraph = false;
  private _servers = ['test server']
  private _clicks : Date[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onServerCreated() {
    this._serverCreated = !this._serverCreated;
    this._servers.push(this._serverName)
    this._serverCreationStatus = 'server was created!'
  }

  toggleParagraph() {
    this._showParagraph = !this._showParagraph;
    this._clicks.push(new Date())
    console.log(this._clicks);
  }

  get allowNewServers(): boolean {
    return this._allowNewServers;
  }

  set allowNewServers(value: boolean) {
    this._allowNewServers = value;
  }

  get serverCreationStatus(): string {
    return this._serverCreationStatus;
  }

  set serverCreationStatus(value: string) {
    this._serverCreationStatus = value;
  }

  get serverName(): string {
    return this._serverName;
  }

  set serverName(value: string) {
    this._serverName = value;
  }

  get serverCreated(): boolean {
    return this._serverCreated;
  }

  set serverCreated(value: boolean) {
    this._serverCreated = value;
  }


  get servers(): string[] {
    return this._servers;
  }

  set servers(value: string[]) {
    this._servers = value;
  }


  get showParagraph(): boolean {
    return this._showParagraph;
  }

  set showParagraph(value: boolean) {
    this._showParagraph = value;
  }


  get clicks(): Date[] {
    return this._clicks;
  }

  set clicks(value: Date[]) {
    this._clicks = value;
  }

// onUpdateServerName(e: any)  {
  //   this.serverName = e.target.value;
  // }

}
