import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HistoryService } from '../../routers/history.service';

@Injectable({
	providedIn: 'root'
})
export class AuthSuccessGuardService implements CanActivate {
	private redirectUrl: string = '/login';

	constructor(
		private historyService: HistoryService,
		private authService: AuthService,
	) { }

	public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
		return this.authService
			.checkAuth()
			.pipe(
				map((isAuth: boolean): boolean => {
					if (isAuth) {
						return true;
					}

					this.historyService.goTo(this.redirectUrl);
					return false;
				})
			);
	}
}
