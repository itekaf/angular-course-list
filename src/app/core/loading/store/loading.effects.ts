import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadingShow, LoadingHide } from './loading.actions';
import { map, tap } from 'rxjs/operators';
import { AuthActionsEnum } from 'src/app/modules/auth/store/auth.actions';
import { CourseActionEnum } from 'src/app/modules/course/store/course.actions';

@Injectable()
export class LoadingEffects {

	@Effect()
	public isShow$ = this.actions$
		.pipe(
			ofType(
				CourseActionEnum.Read,
				CourseActionEnum.Delete,
				CourseActionEnum.Update,
				CourseActionEnum.Create,

				AuthActionsEnum.Login,
				AuthActionsEnum.Registry,
			),
			map(() => new LoadingShow())
		);

	@Effect()
	public isHide$ = this.actions$
		.pipe(
			ofType(
				CourseActionEnum.CourseError,
				CourseActionEnum.ReadSuccess,
				CourseActionEnum.DeleteSuccess,
				CourseActionEnum.UpdateSuccess,
				CourseActionEnum.CreateSuccess,

				AuthActionsEnum.AuthError,
				AuthActionsEnum.LoginSuccess,
				AuthActionsEnum.RegistrySuccess,
			),
			map(() => new LoadingHide())
		);
	constructor(
		private actions$: Actions,
	) {}
}
