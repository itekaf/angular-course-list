import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { CourseService } from '../services';
import { HistoryService } from '../../routers/history.service';
import { pipe, Observable, of } from 'rxjs';
import { CourseActionEnum, CreateSuccess, UpdateSuccess, Concat, Read, ReadSuccess, DeleteSuccess, CourseError } from './course.actions';
import { map, exhaustMap, tap, catchError, pluck, switchMap } from 'rxjs/operators';
import { CourseModel } from 'src/app/shared/models';

@Injectable()
export class CoursesEffect {

	@Effect()
	public read$ = this.actions$
		.pipe(
			ofType(CourseActionEnum.Read),
			pluck('payload'),
			switchMap((data: { query: string, from: number, count: number }): Observable<ReadSuccess | CourseError> => {
				return this.courseService
					.read(
						data.query,
						data.from,
						data.count
					)
					.pipe(
						// TODO: RL: Join
						map((value: CourseModel[]) => new ReadSuccess(value)),
						catchError(() => of(new CourseError())),
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
						catchError(() => of(new CourseError())),
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
						map(() => new DeleteSuccess(removedId)),
						catchError(() => of(new CourseError())),
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
						map((answer: CourseModel) => new UpdateSuccess(answer)),
						catchError(() => of(new CourseError())),
					);
			})
		);

	@Effect({ dispatch: false })
	public courseRedirect$ = this.actions$
			.pipe(
				ofType(CourseActionEnum.CreateSuccess, CourseActionEnum.UpdateSuccess, CourseActionEnum.CourseRedirect),
				tap(() => { this.historyService.goBack(); })
			);

	constructor(
		private actions$: Actions,
		private courseService: CourseService,
		private historyService: HistoryService,
	) {}
}
