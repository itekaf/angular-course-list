import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { AuthService } from '../services';
import { IAuthState } from '../store/auth.reducer';
import { Store, select } from '@ngrx/store';
import { getAuthStatus } from '../store/auth.selectors';

@Injectable({
	providedIn: 'root'
})
export class AuthCheckGuardService implements CanActivate {
	constructor(
		private store$: Store<{ auth: IAuthState}>,
		private authService: AuthService,
	) { }

	public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
		return this.store$.pipe(select(getAuthStatus));
	}
}
