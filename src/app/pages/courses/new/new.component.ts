import { Component } from '@angular/core';

import { CourseModel } from 'src/app/shared/models';
import { CourseService } from 'src/app/modules/course/services';
import { HistoryService } from 'src/app/modules/routers/history.service';

@Component({
	selector: 'app-new',
	templateUrl: './new.component.html',
	styleUrls: ['./new.component.scss']
})
export class NewComponent {
	public item: CourseModel = new CourseModel();
	public title: string = 'Create new Course';

	constructor(
		private history: HistoryService,
		private courseService: CourseService,
	) { }

	public onSubmit($event: CourseModel): void {
		// TODO: RL: subsribe
		this.courseService.create($event);
		this.history.goBack();
	}

	public onCancel(): void { this.history.goBack(); }
}
