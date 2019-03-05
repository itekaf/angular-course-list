import { map, finalize } from 'rxjs/operators';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { Config } from 'src/app/shared';
import { CourseModel } from 'src/app/shared/models';
import { CourseService } from '../../services/course.service';
import { InputResultModel } from 'src/app/shared/models/input-result.model';
import { HistoryService } from 'src/app/modules/routers/history.service';

// TODO: RL: Refactor this + create test
@Component({
	selector: 'app-course-list',
	templateUrl: './course-list.component.html',
	styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
	@Input() public pageStep: number = 5;
	@Input() public title: string = 'Find or add angular courses ...';
	@Input() public icons: Map<string, IconDefinition> = Config.icons;
	@Input() public loadMoreText: string = 'Load More';
	@Input() public noDataMessage: string = 'NO DATA. FELL FREE TO ADD NEW COURSE';

	public loading: boolean = true;
	public query: string;
	public courses: CourseModel[] = [];
	public sortedByDate: boolean = true;
	public sortedByTitle: boolean = true;
	public sortedByDuration: boolean = true;

	constructor(
		private history: HistoryService,
		private courseService: CourseService,
		private activatedRouter: ActivatedRoute,
	) { }

	public ngOnInit(): void {
		this.updateItems();
	}

	public onSortedByTitle(): void {
		this.sortedByTitle = !this.sortedByTitle;
	}

	public onSortedByDate(): void {
		this.sortedByDate = !this.sortedByDate;
	}

	public onSortedByDuration(): void {
		this.sortedByDuration = !this.sortedByDuration;
	}

	public onPageStep($event: InputResultModel): void {
		this.pageStep = ($event.value * 1);
		this.updateItems();
	}

	public onSearchItem($event: InputResultModel): void {
		this.query = $event.value;
		this.updateItems(this.query, 0);
	}

	public onRemoveItem(id: string): void {
		this.loading = true;
		this.courseService
			.delete(id)
			.pipe(
				finalize(() => { this.loading = false; }),
			)
			.subscribe(() => {
				this.courses = this.courses.filter((x: CourseModel) => x.id !== id);
			});
	}

	public onLoadMore(): void {
		this.updateItems(null, null, null, true);
	}

	public onEditItem(id: string): void {
		this.history.goTo(`./${id}`, {  relativeTo: this.activatedRouter });
	}

	public onAdd(): void {
		this.history.goTo('./new', {  relativeTo: this.activatedRouter });
	}

	private updateItems(
		query: string = this.query,
		from: number = this.courses.length,
		count: number = this.pageStep,
		join: boolean = false,
	): void {
		this.loading = true;
		this.courseService
			.read(query, from, count)
			.pipe(
				map((items: CourseModel[]) => {
					return items.map((item: CourseModel) => {
						const itemImagePath = item.imagePath || Config.default.imagePath;
						item.imagePath = itemImagePath;
						return item;
					});
				}),
				finalize(() => { this.loading = false; }),
			)
			.subscribe((items: CourseModel[]) => {
				this.courses = join ? this.courses.concat(items) : items;
			});
	}
}
