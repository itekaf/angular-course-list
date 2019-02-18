import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/shared/interface';
import { UserModel } from 'src/app/shared/models';

@Component({
	selector: 'app-user-widget',
	templateUrl: './user-widget.component.html',
	styleUrls: ['./user-widget.component.scss']
})
export class UserWidgetComponent implements OnInit {
	@Input() public butttonText: string = 'Log Off';

	public userData: IUser;

	constructor() { }

	public ngOnInit(): void {
		const userModel = new UserModel(1, 'Vasya');
		this.userData = userModel;
	}
	public logOff(): void {
		console.log(this.userData.firstName);
	}
}
