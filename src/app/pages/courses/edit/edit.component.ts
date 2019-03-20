import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { CourseModel } from 'src/app/shared/models';
import { ICourseState } from 'src/app/modules/course/store/course.reduces';
import { getIsLoading } from 'src/app/core/loading/store/loading.selectors';
import { HistoryGoBack } from 'src/app/modules/routers/store/history.actions';
import { getCurrentCourse } from 'src/app/modules/course/store/course.selectors';
import { CourseUpdate, CourseReadById } from 'src/app/modules/course/store/course.actions';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {
	public item$: Observable<CourseModel>;
	public loading$: Observable<boolean>;

	private routerParamsSub: Subscription;

	constructor(
		private store$: Store<{ courses: ICourseState}>,
		private activatedRouter: ActivatedRoute,
	) { }

	public ngOnInit(): void {
		this.item$ = this.store$.select(getCurrentCourse);
		this.loading$ = this.store$.select(getIsLoading);
		this.routerParamsSub = this.activatedRouter.params
			.subscribe((data: Params) => {
				this.setItem(data);
			});
	}

	public ngOnDestroy(): void {
		if (this.routerParamsSub) { this.routerParamsSub.unsubscribe(); }
	}

	public onSubmit($event: CourseModel): void {
		this.store$.dispatch(new CourseUpdate({
			id: $event.id,
			data: $event,
		}));
	}

	public onCancel(): void { this.store$.dispatch(new HistoryGoBack()); }

	public setItem(data: Params): void {
		this.store$.dispatch(new CourseReadById(data['courseId']));
	}
}
