import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { MatDialog } from '@angular/material'

import { GetUsers } from './../../store/actions/user.actions';
import { IAppState } from '../../store/state/app.state';
import { selectUserList, selectLastUserId } from '../../store/selectors/user.selector';

import { UserAddContainerComponent } from '../user-add-container/user-add-container.component'
import { IUser } from '../../models/user.interface';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	users$ = this._store.pipe(select(selectUserList));
  constructor(private _store: Store<IAppState>, private _router: Router, public dialog: MatDialog) {}

  ngOnInit() {
		this._store.dispatch(new GetUsers());
  }
	showAddUser(){
		this.dialog.open(UserAddContainerComponent, {
      width: '250px',
      data: {
				"id": 1,
				"name": "Luis Suarez",
				"cardNumber": "XXXX-XXXX-XXXX-4321",
				"cardType": "Visa"
			}
    })
	}
  navigateToUser(id: number) {
    this._router.navigate(['user', id]);
  }
}
