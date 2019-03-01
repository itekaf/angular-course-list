import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services';
import { HistoryService } from '../../routers/history.service';

@Injectable({
	providedIn: 'root'
})
export class AuthFailGuardService {
	constructor(
		private router: Router,
		private historyService: HistoryService,
		private authService: AuthService
	) { }

	public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		return !this.authService.isAuth;
	}
}
