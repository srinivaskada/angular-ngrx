import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IUser } from '../../models/user.interface'

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
	@Output()
	public addUser: EventEmitter<IUser> = new EventEmitter();
	newUserFormGroup = new FormGroup({
		name: new FormControl('', Validators.required),
		cardNumber: new FormControl('', Validators.required),
		cardType: new FormControl('', Validators.required)
	})
  constructor(@Inject(MAT_DIALOG_DATA) data: IUser) { }

  ngOnInit() {
  }
	submit(){
		this.addUser.emit(this.newUserFormGroup.getRawValue())
	}
}
