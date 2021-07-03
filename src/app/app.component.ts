import {Component, OnInit} from '@angular/core';
import {AccountService} from "./services/account.service";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountService]
})
export class AppComponent implements OnInit {
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

  // accounts : {name : string, status : string}[] = [];
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];

  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }
  activeUsers : string[] = [];
  inactiveUsers : string[] = [];
  constructor(private accountService: AccountService, private userService: UserService) {
  }

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
    // this.accounts = this.accountService.accounts;
  }


}
