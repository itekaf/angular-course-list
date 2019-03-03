import * as jwtDecode from 'jwt-decode';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { UserModel } from 'src/app/shared/models';
import { JwtService } from './jwt.service';
import { UserService } from './user.service';
import { LoginModel } from 'src/app/pages/login/login.model';
import { ApiClient } from 'src/app/shared/services/api.service';
import { AnswerModel } from 'src/app/shared/models/answer.model';
import { RegistryModel } from 'src/app/pages/registry/registry.model';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private isAuthObj: BehaviorSubject<boolean> = new BehaviorSubject(false);

	constructor(
		private apiClient: ApiClient,
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

	public registry(data: RegistryModel): Observable<AnswerModel> {
		return this.apiClient.post<AnswerModel>('signup/local/', data);
	}

	public login(data: LoginModel): BehaviorSubject<boolean> {
		if (this.isAuthObj.value) {
			throw new Error(
				'You are already logged. Please, log out first!');
		}

		this.apiClient.post<AnswerModel>('signin/local/', data)
			.subscribe(
				(res: AnswerModel) => {
					this.isAuthObj.next(true);
					const decode = jwtDecode(res.token);
					const userModel = new UserModel(decode.id, decode.username);
					this.jwtService.setToken(res.token);
					this.userService.setData(userModel);
				},
				// tslint:disable-next-line:no-any
				(err: any) => {
					console.error(err);
				}
			);
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
