import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-project';
  name = 'connor';
  // numArray : number[] = [];
  //
  //
  // oddEven(e : number) {
  //   this.numArray.push(e);
  // }
  //
  // filterEvens() {
  //   return this.numArray.filter(num => num % 2 == 0)
  // }
  // filterOdds() {
  //   return this.numArray.filter(num => num % 2 != 0)
  // }

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

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id?: number, newStatus: string}) : void {
    if(updateInfo.id !== undefined)
      this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }

}
