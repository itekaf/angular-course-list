import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { AuthActionsEnum } from 'src/app/modules/auth/store/auth.actions';
import { CourseActionEnum } from 'src/app/modules/course/store/course.actions';
import { LoadingShow, LoadingHide } from './loading.actions';

const showActions = [
	CourseActionEnum.Read,
	CourseActionEnum.ReadById,
	CourseActionEnum.Delete,
	CourseActionEnum.Update,
	CourseActionEnum.Create,

	AuthActionsEnum.AuthLogin,
	AuthActionsEnum.AuthRegistry,
];

const hideActions = [
	CourseActionEnum.ReadByIdSuccess,
	CourseActionEnum.CourseError,
	CourseActionEnum.ReadSuccess,
	CourseActionEnum.DeleteSuccess,
	CourseActionEnum.UpdateSuccess,
	CourseActionEnum.CreateSuccess,

	AuthActionsEnum.AuthError,
	AuthActionsEnum.AuthLoginSuccess,
	AuthActionsEnum.AuthRegistrySuccess,
];

@Injectable()
export class LoadingEffects {

	@Effect()
	public isShow$ = this.actions$
		.pipe(
			ofType(...showActions),
			map(() => new LoadingShow())
		);

	@Effect()
	public isHide$ = this.actions$
		.pipe(
			ofType(...hideActions),
			map(() => new LoadingHide())
		);
	constructor(
		private actions$: Actions,
	) {}
}
