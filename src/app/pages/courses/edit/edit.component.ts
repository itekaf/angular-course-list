import { finalize } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { CourseModel } from 'src/app/shared/models';
import { CourseService } from 'src/app/modules/course/services';
import { HistoryService } from 'src/app/modules/routers/history.service';
import { Store } from '@ngrx/store';
import { ICourseState } from 'src/app/modules/course/store/course.reduces';
import { Update } from 'src/app/modules/course/store/course.actions';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {
	public item: CourseModel = new CourseModel();
	public loading: boolean = false;

	private routerParamsSub: Subscription;

	private courses$: Observable<ICourseState>;

	constructor(
		private store$: Store<{ courses: ICourseState}>,
		private history: HistoryService,
		private courseService: CourseService,
		private activatedRouter: ActivatedRoute,
	) { }

	public ngOnInit(): void {
		// TODO: RL: Move to effects
		this.courses$ = this.store$.select('courses');
		this.routerParamsSub = this.activatedRouter.params
			.subscribe((data: Params) => {
				this.setItem(data);
			});
	}

	public ngOnDestroy(): void {
		if (this.routerParamsSub) { this.routerParamsSub.unsubscribe(); }
	}

	public onSubmit($event: CourseModel): void {
		const data = {
			id: $event.id,
			data: $event,
		};
		this.store$.dispatch(new Update(data));
	}

	public onCancel(): void { this.history.goBack(); }

	public setItem(data: Params): void {
		// TODO: RL: Move to effects
		this.loading = true;
		this.courseService
			.getById(data['id'])
			.pipe(
				finalize(() => { this.loading = false; }),
			)
			.subscribe(
				(result: CourseModel) => {
					this.item = result;
				},
				() => {
					this.history.goToError();
				},
			);
	}
}
