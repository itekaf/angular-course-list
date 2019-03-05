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
		private user: UserService,
		private auth: AuthService,
		private history: HistoryService,
	) { }

	public ngOnInit(): void {
		this.user
			.getData()
			.subscribe((data: UserModel) => {
				this.userAuth = !!data;
				this.userData = data;
			});
	}

	public onLogin(): void { this.redirect(); }
	public onLogout(): void {
		this.auth
			.logout()
			.subscribe(() => { this.redirect(); });

	}

	private redirect(): void {
		this.history.goTo(this.loginPageUrl);
	}
}
