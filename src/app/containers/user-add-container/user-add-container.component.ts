import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '../../store/state/app.state'

import { IUser } from '../../models/user.interface';
import { AddUser } from '../../store/actions/user.actions';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-user-add-container',
  templateUrl: './user-add-container.component.html',
  styleUrls: ['./user-add-container.component.css']
})
export class UserAddContainerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserAddContainerComponent>, private _store:Store<IAppState>) { }

  ngOnInit() {
  }
	addUser(user: IUser){
		this._store.dispatch(new AddUser(user))
		this.dialogRef.close('User added');
	}
}
