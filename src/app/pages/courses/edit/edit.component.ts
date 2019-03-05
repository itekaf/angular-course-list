import { finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { CourseModel } from 'src/app/shared/models';
import { CourseService } from 'src/app/modules/course/services';
import { HistoryService } from 'src/app/modules/routers/history.service';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {
	public item: CourseModel = new CourseModel();
	public loading: boolean = false;

	private routerParamsSub: Subscription;

	constructor(
		private history: HistoryService,
		private courseService: CourseService,
		private activatedRouter: ActivatedRoute,
	) { }

	public ngOnInit(): void {
		this.routerParamsSub = this.activatedRouter.params
			.subscribe((data: Params) => {
				this.setItem(data);
			});
	}

	public ngOnDestroy(): void {
		if (this.routerParamsSub) { this.routerParamsSub.unsubscribe(); }
	}

	public onSubmit($event: CourseModel): void {
		this.loading = true;
		this.courseService
			.update($event.id, $event)
			.pipe(
				finalize(() => { this.loading = false; }),
			)
			.subscribe(() => {
				this.history.goBack();
			});
	}

	public onCancel(): void { this.history.goBack(); }

	public setItem(data: Params): void {
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
