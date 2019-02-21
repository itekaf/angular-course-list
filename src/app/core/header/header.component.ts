import { Component, Input, OnInit } from '@angular/core';

import { UserModel } from 'src/app/shared/models';

const userData = new UserModel(1, 'Vasey');

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	public userData: UserModel;

	constructor() { }

	public ngOnInit(): void {
		this.userData = userData;
	}
	public onLogOff(): void {
		console.log(this.userData.firstName);
	}
}
