import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { UserModel } from 'src/app/shared/models';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private userDataObj: BehaviorSubject<UserModel> = new BehaviorSubject(null);

	constructor() { }

	get userData(): UserModel {
		return this.userDataObj.value;
	}
	public getData(): BehaviorSubject<UserModel> {
		return this.userDataObj;
	}

	public setData(model: UserModel): void {
		this.userDataObj.next(model);
	}

	public updateData(model: UserModel): void {
		this.userDataObj.next(model);
	}

	public removeData(): void {
		this.userDataObj.next(null);
	}
}
