import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material'

import { UserAddComponent } from '../user-add/user-add.component'

import { IUser } from '../../models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input()
  users: IUser[];
  @Output()
	userSelected: EventEmitter<number> = new EventEmitter();
	@Output()
	onShowAddUser: EventEmitter<null> = new EventEmitter()
	usersTable = {
		columns: ['id', 'name', 'cardNumber', 'cardType']
	}
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  navigateToUser(id: number) {
    this.userSelected.emit(id);
	}
	triggerShowAddUser(event){
		this.onShowAddUser.emit()
	}
}
