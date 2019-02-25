import { Injectable } from '@angular/core';

import { UserModel } from 'src/app/shared/models';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private token: string = 'token';
	private defaultData: UserModel = new UserModel(1, 'username', 'password');
	private authenticated: boolean = false;

	constructor() { }

	public IsAuthenticated(): boolean {
		return this.authenticated;
	}

	public getUserInfo(): UserModel | undefined {
		const result = this.defaultData;
		return result;
	}

	public Login(username: string, password: string): boolean {
		this.authenticated = true;
		localStorage.setItem('jwtToken', this.token);
		return this.IsAuthenticated();
	}

	public Logout(): boolean {
		this.authenticated = false;
		localStorage.removeItem('jwtToken');
		return this.IsAuthenticated();
	}
}
