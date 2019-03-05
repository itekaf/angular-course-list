import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { AuthService } from '../services';

@Injectable({
	providedIn: 'root'
})
export class AuthCheckGuardService implements CanActivate {
	constructor(
		private authService: AuthService,
	) { }

	public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
		return this.authService
			.checkAuth()
			.pipe(
				map(() => true),
			);
	}
}
