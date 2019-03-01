import { Component, OnInit } from '@angular/core';

import { UserModel } from 'src/app/shared/models';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { UserService } from 'src/app/modules/auth/services/user.service';
import { HistoryService } from 'src/app/modules/routers/history.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	private loginPageUrl: string = '/login';

	public userAuth: boolean;
	public userData: UserModel;

	constructor(
		private userService: UserService,
		private authService: AuthService,
		private historyService: HistoryService,
	) { }

	public ngOnInit(): void {
		this.authService
			.isAuthenticated()
			.subscribe((isAuth: boolean) => {
				this.userAuth = isAuth;
			});
		this.userService
			.getData()
			.subscribe((userData: UserModel) => {
				this.userData = userData;
			});
	}

	public onLogin(): void { this.historyService.goTo(this.loginPageUrl); }
	public onLogout(): void {
		this.authService.logout();
		this.historyService.goTo(this.loginPageUrl);
	}
}
