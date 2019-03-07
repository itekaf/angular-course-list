import { finalize } from 'rxjs/operators';
import { Component, } from '@angular/core';

import { CourseModel } from 'src/app/shared/models';
import { CourseService } from 'src/app/modules/course/services';
import { HistoryService } from 'src/app/modules/routers/history.service';
import { Store } from '@ngrx/store';
import { ICourseState } from 'src/app/modules/course/store/course.reduces';
import { Observable } from 'rxjs';
import { Create } from 'src/app/modules/course/store/course.actions';

@Component({
	selector: 'app-new',
	templateUrl: './new.component.html',
	styleUrls: ['./new.component.scss']
})
export class NewComponent {
	public item: CourseModel = new CourseModel();
	public title: string = 'Create new Course';
	public loading: boolean = false;

	constructor(
		private store$: Store<{ courses: ICourseState}>,
		private history: HistoryService,
		private courseService: CourseService,
	) {	}

	public onSubmit($event: CourseModel): void {
		this.loading = true;
		// this.courseService
		// 	.create($event)
		// 	.pipe(
		// 		finalize(() => { this.loading = false; }),
		// 	)
		// 	.subscribe(() => {
		// 		this.history.goBack();
		// 	});
		this.store$.dispatch(new Create($event));
	}

	public onCancel(): void { this.history.goBack(); }
}
