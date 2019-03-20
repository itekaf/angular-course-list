import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { IAuthState } from 'src/app/modules/auth/store/auth.reducer';
import { AuthLogout, AuthLoginRedirect } from 'src/app/modules/auth/store/auth.actions';
import { getAuthUserData, getAuthStatus, getAllAuth } from 'src/app/modules/auth/store/auth.selectors';
import { UserModel } from 'src/app/shared/models';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	public userAuth: boolean;
	public userData: UserModel;

	constructor(
		private store$: Store<{ auth: IAuthState }>,
	) {

	}

	public ngOnInit(): void {
		this.store$.pipe(select(getAllAuth))
			.subscribe((state: IAuthState) => {
				this.userData = state.data;
				this.userAuth = state.isAuth;
			});
	}

	public onLogin(): void { this.store$.dispatch(new AuthLoginRedirect()); }
	public onLogout(): void { this.store$.dispatch(new AuthLogout()); }
}
