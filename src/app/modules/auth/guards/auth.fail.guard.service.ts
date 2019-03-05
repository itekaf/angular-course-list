import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { AuthService } from '../services';
import { HistoryService } from '../../routers/history.service';

@Injectable({
	providedIn: 'root'
})
export class AuthFailGuardService implements CanActivate {
	private redirectUrl: string = '/';

	constructor(
		private historyService: HistoryService,
		private authService: AuthService
	) { }

	public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
		return this.authService
		.checkAuth()
		.pipe(
			map((isAuth: boolean): boolean => {
				if (!isAuth) {
					return true;
				}

				this.historyService.goTo(this.redirectUrl);
				return false;
			})
		);
	}
}
