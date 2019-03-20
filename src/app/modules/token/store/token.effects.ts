import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { JwtService } from '../../auth/services';
import { TokenActionsEnum, TokenGetSuccess, TokenError, TokenSetSuccess, TokenRemoveSucess, TokenDecodeSuccess } from './token.actions';

@Injectable()
export class TokenEffects {

	@Effect()
	public get$ = this.actions$
		.pipe(
			ofType(TokenActionsEnum.Get),
			switchMap((): Observable<TokenGetSuccess | TokenError> => {
				const token = this.jwtService.getToken();
				return of(token ? new TokenGetSuccess(token) : new TokenError());
			})
		);

	@Effect()
	public set$ = this.actions$
		.pipe(
			ofType(TokenActionsEnum.Set),
			switchMap((data: string): Observable<TokenSetSuccess | TokenError> => {
				this.jwtService.setToken(data);
				const token = this.jwtService.getToken();
				return of(token ? new TokenSetSuccess() : new TokenError());
			})
		);

	@Effect()
	public remove$ = this.actions$
		.pipe(
			ofType(TokenActionsEnum.Remove),
			switchMap((): Observable<TokenRemoveSucess | TokenError> => {
				this.jwtService.removeToken();
				const token = this.jwtService.getToken();
				return of(!token ? new TokenRemoveSucess() : new TokenError());
			})
		);

	@Effect()
	public decode$ = this.actions$
		.pipe(
			ofType(TokenActionsEnum.Decode),
			switchMap((token: string): Observable<TokenDecodeSuccess | TokenError> => {
				const data = JwtService.decodeToken(token);
				return of(!data ? new TokenDecodeSuccess(data) : new TokenError());
			})
		);

	constructor(
		private actions$: Actions,
		private jwtService: JwtService,
	) {}
}
