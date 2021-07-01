import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {TimeInterval} from "rxjs";

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() onStart = new EventEmitter<number>();
  startNumber : number = 0;
  interval : number | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.interval = setInterval(() => {
      this.startNumber += 1;
      this.onStart.emit(this.startNumber)
    }, 1000)
  }

  stop() {
    clearInterval(this.interval)
  }


}
