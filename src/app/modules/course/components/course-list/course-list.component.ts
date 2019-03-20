import { Store } from '@ngrx/store';
import { map, pluck } from 'rxjs/operators';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { Config } from 'src/app/shared';
import { CourseModel } from 'src/app/shared/models';
import { ICourseState } from '../../store/course.reduces';
import { getIsLoading } from 'src/app/core/loading/store/loading.selectors';
import { HistoryGoToUrl } from 'src/app/modules/routers/store/history.actions';
import { InputResultModel } from 'src/app/shared/models/input-result.model';
import { CourseDelete, CourseRead } from '../../store/course.actions';
import { getCoursesList } from '../../store/course.selectors';
import { Observable } from 'rxjs';

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
	@Input() public noDataMessage: string = 'NO DATA. FEEL FREE TO ADD NEW COURSE';

	public items$: Observable<CourseModel[]>;
	public loading$: Observable<boolean>;

	public query: string;
	public sortedByDate: boolean = true;
	public sortedByTitle: boolean = true;
	public sortedByDuration: boolean = true;

	constructor(
		private store$: Store<{ courses: ICourseState }>,
		private activatedRouter: ActivatedRoute,
	) { }

	public ngOnInit(): void {
		this.items$ = this.store$.select(getCoursesList);
		this.loading$ = this.store$.select(getIsLoading);
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

	public onSearchItem($event: InputResultModel): void {
		this.query = $event.value.toString();
		this.updateItems();
	}

	public onRemoveItem(id: string): void {
		this.store$.dispatch(new CourseDelete(id));
	}

	public onLoadMore(): void {
		this.updateItems();
	}

	public onEditItem(id: string): void {
		const url = `./${id}`;
		const extras = {  relativeTo: this.activatedRouter };
		this.store$.dispatch(new HistoryGoToUrl({ url, extras }));
	}

	public onAdd(): void {
		const url = `./new`;
		const extras = {  relativeTo: this.activatedRouter };
		this.store$.dispatch(new HistoryGoToUrl({ url, extras }));
	}

	private updateItems(
		query: string  = this.query,
		from: number = 0,
		count: number = this.pageStep,
	): void {
		this.store$.dispatch(new CourseRead({
			query, from, count,
		}));
	}
}
