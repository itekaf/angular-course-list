import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CourseModel } from 'src/app/shared/models';
import { CourseService } from 'src/app/modules/course/services';
import { HistoryService } from 'src/app/modules/routers/history.service';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
	public item: CourseModel;

	constructor(
		private history: HistoryService,
		private courseService: CourseService,
		private activatedRouter: ActivatedRoute,
	) { }

	public ngOnInit(): void {
		this.activatedRouter.params.subscribe((data: Params) => {
			this.setItem(data);
		});
	}

	public onSubmit($event: CourseModel): void {
		// TODO: RL: rxjs
		this.courseService.update($event.id, $event);
		this.history.goBack();
	}

	public onCancel(): void { this.history.goBack(); }

	public setItem(data: Params): void {
		const itemId = data['id'];
		const itemData = itemId ? this.courseService.getById(itemId) : null;

		itemData
			? this.item = itemData
			: this.history.goToError();
	}
}
