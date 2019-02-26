import { Injectable } from '@angular/core';

import { UserModel } from 'src/app/shared/models';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	public userData: UserModel | undefined;

	constructor() { }

	public getData(): UserModel {
		const result = this.userData;
		return result;
	}

	public setData(model: UserModel): void {
		this.userData = model;
	}

	public updateData(model: UserModel): void {
		this.userData = model;
	}

	public removeData(): void {
		this.userData = undefined;
	}
}
