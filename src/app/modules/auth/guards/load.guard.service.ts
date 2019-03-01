import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment } from '@angular/router';

import { AuthService } from '../services';
import { HistoryService } from '../../routers/history.service';

@Injectable({
	providedIn: 'root'
})
export class LoadGuardService implements CanLoad {
	private loginPageUrl: string = './login';

	constructor(
		private historyService: HistoryService,
		private authService: AuthService,
	) { }

	public canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
		const isAuth = this.authService.isAuth;
		if (isAuth) {
			return true;
		}

		this.historyService.goTo(this.loginPageUrl);
		return false;
	}
}
