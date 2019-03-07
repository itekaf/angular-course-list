import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { UserModel } from 'src/app/shared/models';
import { UserService } from '../services/user.service';
import { UserActionsEnum } from './user.actions';

@Injectable()
export class UserEffects {

	@Effect()
	public read$ = this.actions$
		.pipe(
			ofType(UserActionsEnum.Read),
			map(() => this.userService.getData())
		);

	@Effect()
	public delete$ = this.actions$
		.pipe(
			ofType(UserActionsEnum.Delete),
			map(() => this.userService.removeData())
		);

	@Effect()
	public create$ = this.actions$
		.pipe(
			ofType(UserActionsEnum.Create),
			map((data: UserModel) => this.userService.setData(data))
		);

	@Effect()
	public update$ = this.actions$
		.pipe(
			ofType(UserActionsEnum.Update),
			map((data: UserModel) => this.userService.updateData(data))
		);

	constructor(
		private actions$: Actions,
		private userService: UserService,
	) {}

}
