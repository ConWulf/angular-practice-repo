import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[] | undefined;
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private userService: UserService) {
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }
}
