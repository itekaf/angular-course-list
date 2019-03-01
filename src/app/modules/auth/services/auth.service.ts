import * as uuid from 'uuid/v4';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { UserModel } from 'src/app/shared/models';
import { JwtService } from './jwt.service';
import { UserService } from './user.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private token: string = 'token';
	private isAuthObj: BehaviorSubject<boolean> = new BehaviorSubject(false);

	constructor(
		private jwtService: JwtService,
		private userService: UserService,
	) {	}

	get isAuth(): boolean {
		return this.isAuthObj.value;
	}

	public isAuthenticated(): Observable<boolean> {
		const token = this.jwtService.getToken();
		this.isAuthObj.next(!!token);
		return this.isAuthObj;
	}

	public login(username: string, password: string): Observable<boolean> {
		if (this.isAuthObj.value) {
			throw new Error(
				'You are already logged. Please, log out first!');
		}

		const userModel = new UserModel(uuid(), username, password);

		this.isAuthObj.next(true);
		// TODO: RL: Get From Back
		this.jwtService.setToken(this.token);
		this.userService.setData(userModel);
		return this.isAuthObj;
	}

	public logout(): Observable<boolean> {
		if (!this.isAuthObj.value) {
			throw new Error(
				'You are not auth. Please, login first!');
		}
		this.isAuthObj.next(false);
		this.jwtService.removeToken();
		this.userService.removeData();
		return this.isAuthObj;
	}
}
