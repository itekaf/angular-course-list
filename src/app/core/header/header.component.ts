import { Component, Input, OnInit } from '@angular/core';

import { UserModel } from 'src/app/shared/models';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	public userAuth: boolean = false;
	public userData: UserModel;

	constructor(private authService: AuthService) { }

	public ngOnInit(): void {
		this.userData = this.authService.getUserInfo();
		this.userAuth = this.authService.IsAuthenticated();
	}

	public onLogOff(): void {
		this.authService.Logout();
	}
}
