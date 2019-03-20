import { Store } from '@ngrx/store';
import { Component, OnInit, } from '@angular/core';

import { CourseCreate } from 'src/app/modules/course/store/course.actions';
import { CourseModel } from 'src/app/shared/models';
import { getIsLoading } from 'src/app/core/loading/store/loading.selectors';
import { ICourseState } from 'src/app/modules/course/store/course.reduces';
import { HistoryGoBack } from 'src/app/modules/routers/store/history.actions';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-new',
	templateUrl: './new.component.html',
	styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
	public item: CourseModel = new CourseModel();
	public title: string = 'Create new Course';
	public loading$: Observable<boolean>;

	constructor(
		private store$: Store<{ courses: ICourseState}>,
	) {	}

	public ngOnInit(): void {
		this.loading$ = this.store$.select(getIsLoading);
	}

	public onSubmit($event: CourseModel): void {
		this.store$.dispatch(new CourseCreate($event));
	}

	public onCancel(): void { this.store$.dispatch(new HistoryGoBack()); }
}
