import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { take, switchMap } from 'rxjs/operators';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { JwtService } from 'src/app/modules/auth/services';
import { IAuthState } from 'src/app/modules/auth/store/auth.reducer';
import { getAuthStatus } from 'src/app/modules/auth/store/auth.selectors';

@Injectable({
	providedIn: 'root'
})
export class AuthHttpMiddelware implements HttpInterceptor {
	constructor(
		private jwt: JwtService,
		private store$: Store<{ auth: IAuthState}>,
	) { }

	public intercept(req: HttpRequest<object>, next: HttpHandler): Observable<HttpEvent<object>>{
		return this.store$.select(getAuthStatus).pipe(
			take(1),
			switchMap((value: boolean): Observable<HttpEvent<object>> => {
				const tokenValue: string = this.jwt.getToken();
				const tokenResult: string = tokenValue && value ? `${this.jwt.schema}  ${tokenValue}` : undefined;
				const modifiedRequest = tokenValue && value ? req.clone({ setHeaders: { 'Authorization': tokenResult }}) : req;
				const result = next.handle(modifiedRequest);
				return result;
			})
		)
	}
}
