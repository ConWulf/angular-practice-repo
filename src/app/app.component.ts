import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-project';
  name = 'connor';
  numArray : number[] = [];


  oddEven(e : number) {
    this.numArray.push(e);
  }

  filterEvens() {
    return this.numArray.filter(num => num % 2 == 0)
  }
  filterOdds() {
    return this.numArray.filter(num => num % 2 != 0)
  }

}
