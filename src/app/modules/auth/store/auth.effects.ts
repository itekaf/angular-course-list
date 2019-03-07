import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, tap, switchMap, pluck } from 'rxjs/operators';

import { AuthService } from '../services';
import { HistoryService } from '../../routers/history.service';
import { AuthActionsEnum, LoginSuccess, RegistrySuccess } from './auth.actions';

@Injectable()
export class AuthEffects {
	@Effect()
	public check$ = this.actions$
		.pipe(
			ofType(AuthActionsEnum.AuthCheck),
			map(() => {
				return this.authService.checkAuth();
			})
		);

	@Effect()
	public registry$ = this.actions$
		.pipe(
			ofType(
				AuthActionsEnum.Registry
			),
			pluck('payload'),
			switchMap((data: any): Observable<any> => {
				return this.authService
					.registry(data)
					.pipe(
						map(() => new RegistrySuccess()),
					);
			})
		);

	@Effect()
	public login$ = this.actions$
		.pipe(
			ofType(
				AuthActionsEnum.Login
			),
			pluck('payload'),
			switchMap((data: any): Observable<any> => {
				return this.authService
					.login(data)
					.pipe(
						map((info) => new LoginSuccess(data)),
					);
			})
		);

	@Effect({ dispatch: false })
	public loginSuccess$ = this.actions$
		.pipe(
			ofType(
				AuthActionsEnum.LoginSuccess,
			),
			tap(() => { this.historyService.goTo('/'); })
		);

	@Effect({ dispatch: false })
	public loginRedirect$ = this.actions$
		.pipe(
			ofType(
				AuthActionsEnum.Logout,
				AuthActionsEnum.LoginRedirect,
				AuthActionsEnum.RegistrySuccess,
			),
			tap(() => { this.historyService.goTo('/login'); })
		);

	@Effect({ dispatch: false })
	public registryRedirect$ = this.actions$
			.pipe(
				ofType(
					AuthActionsEnum.RegistryRedirect
				),
				tap(() => { this.historyService.goTo('/signup'); })
			);

	constructor(
		private actions$: Actions,
		private authService: AuthService,
		private historyService: HistoryService,
	) { }
}
