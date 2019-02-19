import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/shared/interface';
import { UserModel } from 'src/app/shared/models';

const userModel = new UserModel(1, 'Vasey');

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
		this.userData = userModel;
	}
	public logOff(): void {
		console.log(this.userData.firstName);
	}
}
