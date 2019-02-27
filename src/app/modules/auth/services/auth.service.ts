import { Injectable } from '@angular/core';

import { UserModel } from 'src/app/shared/models';
import { JwtService } from './jwt.service';
import { UserService } from './user.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private token: string = 'token';
	private defaultData: UserModel = new UserModel(1, 'username', 'password');
	public isAuth: boolean;

	constructor(
		private jwtService: JwtService,
		private userService: UserService,
	) { }

	public isAuthenticated(): boolean {
		return this.isAuth;
	}

	public getUserInfo(): UserModel {
		const result = this.userService.getData();
		return result;
	}

	public login(username: string, password: string): boolean {
		if (this.isAuth) {
			throw new Error(
				'You are already logged. Please, log out first!');
		}

		this.isAuth = true;
		this.jwtService.setToken(this.token);
		this.userService.setData(this.defaultData);

		const resultAuth = this.isAuthenticated();
		console.log(`Login: ${resultAuth}`);
		return resultAuth;
	}

	public logout(): boolean {
		if (!this.isAuth) {
			throw new Error(
				'You are not auth. Please, login first!');
		}
		this.isAuth = false;
		this.jwtService.removeToken();
		this.userService.removeData();

		const resultAuth = this.isAuthenticated();
		console.log(`Logout: ${!resultAuth}`);
		return resultAuth;
	}
}
