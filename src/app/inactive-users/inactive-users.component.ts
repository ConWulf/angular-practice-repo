import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[] | undefined;
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private userService: UserService) {

  }

  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    this.userService.setToActive(id);
  }

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }
}
