import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, tap, switchMap, pluck, catchError, finalize } from 'rxjs/operators';

import { AuthService } from '../services';
import { HistoryService } from '../../routers/history.service';
import { AuthActionsEnum, LoginSuccess, RegistrySuccess, AuthError, LogoutSucces } from './auth.actions';
import { LoginModel, UserModel, AnswerModel, RegistryModel } from 'src/app/shared/models';

@Injectable()
export class AuthEffects {
	@Effect()
	public check$ = this.actions$
		.pipe(
			ofType(AuthActionsEnum.AuthCheck),
			map(() => {
				return this.authService
					.checkAuth()
					.pipe(
						catchError(() => of(new AuthError())),
					);
			}),
		);

	@Effect()
	public logout$ = this.actions$
		.pipe(
			ofType(AuthActionsEnum.Logout),
			switchMap(() => {
				return this.authService
					.logout()
					.pipe(
						map(() => new LogoutSucces()),
						catchError(() => of(new AuthError()))
					);
			}),
		);

	@Effect()
	public registry$ = this.actions$
		.pipe(
			ofType(
				AuthActionsEnum.Registry
			),
			pluck('payload'),
			switchMap((data: RegistryModel): Observable<RegistrySuccess | AuthError> => {
				return this.authService
					.registry(data)
					.pipe(
						map(() => new RegistrySuccess()),
						catchError(() => of(new AuthError()))
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
			switchMap((data: LoginModel): Observable<LoginSuccess | AuthError> => {
				return this.authService
					.login(data)
					.pipe(
						map((answer: UserModel) => new LoginSuccess(answer)),
						catchError(() => of(new AuthError())),
					);
			}),
		);

	@Effect({ dispatch: false })
	public loginSuccess$ = this.actions$
		.pipe(
			ofType(AuthActionsEnum.LoginSuccess),
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
