import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, pluck, switchMap, tap } from 'rxjs/operators';

import { CourseModel } from 'src/app/shared/models';
import { CourseService } from '../services';
import { HistoryGoBack, HistoryGoToError } from '../../routers/store/history.actions';
import { CourseActionEnum, CourseCreateSuccess, CourseUpdateSuccess, CourseReadSuccess, CourseDeleteSuccess, CourseError, CourseReadByIdSuccess } from './course.actions';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CoursesEffect {
	@Effect()
	public readById$ = this.actions$
		.pipe(
			ofType(CourseActionEnum.ReadById),
			pluck('payload'),
			switchMap((id: string) => {
				return this.courseService
					.getById(id)
					.pipe(
						map((data: CourseModel) => new CourseReadByIdSuccess(data)),
						catchError(() => of(new HistoryGoToError()))
					);
			})
		);

	@Effect()
	public read$ = this.actions$
		.pipe(
			ofType(CourseActionEnum.Read),
			pluck('payload'),
			switchMap((data: { query: string, from: number, count: number }): Observable<CourseReadSuccess | CourseError> => {
				return this.courseService
					.read(
						data.query,
						data.from,
						data.count
					)
					.pipe(
						map((value: CourseModel[]) => new CourseReadSuccess(value)),
						catchError((err) => of(new CourseError(err))),
					);
			})
		);

	@Effect()
	public create$  = this.actions$
		.pipe(
			ofType(CourseActionEnum.Create),
			pluck('payload'),
			switchMap((data: CourseModel) => {
				return this.courseService
					.create(data)
					.pipe(
						map((item: CourseModel) => new CourseCreateSuccess(item)),
						catchError((err) => of(new CourseError(err))),
					);
			})
		);

	@Effect()
	public delete$  = this.actions$
		.pipe(
			ofType(CourseActionEnum.Delete),
			pluck('payload'),
			switchMap((removedId: string) => {
				return this.courseService
					.delete(removedId)
					.pipe(
						map(() => new CourseDeleteSuccess(removedId)),
						catchError((err) => of(new CourseError(err))),
					);
			})
		);

	@Effect()
	public update$ = this.actions$
		.pipe(
			ofType(CourseActionEnum.Update),
			pluck('payload'),
			switchMap((data: { id: string, data: CourseModel }) => {
				return this.courseService
					.update(
						data.id,
						data.data
					)
					.pipe(
						map((answer: CourseModel) => new CourseUpdateSuccess(answer)),
						catchError((err) => of(new CourseError(err))),
					);
			})
		);

	@Effect()
	public courseRedirect$ = this.actions$
			.pipe(
				ofType(CourseActionEnum.CreateSuccess, CourseActionEnum.UpdateSuccess, CourseActionEnum.CourseRedirect),
				switchMap(() => [
					new HistoryGoBack()
				])
			);

	@Effect({ dispatch: false })
	public error$ = this.actions$
			.pipe(
				ofType(CourseActionEnum.CourseError),
				pluck('payload'),
				tap((err: HttpErrorResponse) => {
					this.toastrService.error(err.statusText, 'Course Error');
				})
			);

	constructor(
		private actions$: Actions,
		private toastrService: ToastrService,
		private courseService: CourseService,
	) {}
}
