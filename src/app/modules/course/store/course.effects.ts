import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { CourseService } from '../services';
import { HistoryService } from '../../routers/history.service';
import { pipe, Observable, of } from 'rxjs';
import { CourseActionEnum, CreateSuccess, UpdateSuccess, Concat, Read, ReadSuccess, DeleteSuccess, RequestError } from './course.actions';
import { map, exhaustMap, tap, catchError, pluck, switchMap } from 'rxjs/operators';
import { CourseModel } from 'src/app/shared/models';

@Injectable()
export class CoursesEffect {

	@Effect()
	public read$ = this.actions$
		.pipe(
			ofType(CourseActionEnum.Read),
			pluck('payload'),
			switchMap((data: any): Observable<any> => {
				return this.courseService
					.read(
						data.query,
						data.from,
						data.count
					)
					.pipe(
						// TODO: RL: Join
						map((value: CourseModel[]) => of(new ReadSuccess(value))),
						catchError((err) => of(new RequestError(err))),
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
						map((item: CourseModel) => new CreateSuccess(item)),
						catchError((err) => of(new RequestError(err))),
					);
			})
		);

	@Effect()
	public delete$  = this.actions$
		.pipe(
			ofType(CourseActionEnum.Delete),
			pluck('payload'),
			switchMap((data: any) => {
				return this.courseService
					.delete(data)
					.pipe(
						map((data) => new DeleteSuccess(data)),
						catchError((err) => of(new RequestError(err))),
					);
			})
		);

	@Effect()
	public update$ = this.actions$
		.pipe(
			ofType(CourseActionEnum.Update),
			pluck('payload'),
			switchMap((data: any) => {
				return this.courseService
					.update(
						data.id,
						data.data
					)
					.pipe(
						map((data) => new UpdateSuccess(data)),
						catchError((err) => of(new RequestError(err))),
					);
			})
		);

	@Effect({ dispatch: false })
	public courseRedirect$ = this.actions$
			.pipe(
				ofType(CourseActionEnum.CreateSuccess, CourseActionEnum.UpdateSuccess, CourseActionEnum.CourseRedirect),
				tap(() => { this.historyService.goBack(); })
			);

	@Effect({ dispatch: false })
		public courseError$ = this.actions$
				.pipe(
					ofType(CourseActionEnum.CourseError),
					tap((err) => console.log(err))
				);

	constructor(
		private actions$: Actions,
		private courseService: CourseService,
		private historyService: HistoryService,
	) {}
}
