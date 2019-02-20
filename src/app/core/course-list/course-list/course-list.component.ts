import { Component, OnInit, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { ICourse } from 'src/app/shared/interface';
import { Config } from 'src/app/shared';
import { CourseModel } from 'src/app/shared/models';

const defaultData = [
	new CourseModel(1, 'Course 1', 1, new Date()),
	new CourseModel(2, 'Course 2', 65, new Date(), 'Description', true),
	new CourseModel(3, 'Course 3', 2, new Date(1), 'Description', true),
];

@Component({
	selector: 'app-course-list',
	templateUrl: './course-list.component.html',
	styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
	@Input() public title: string = 'Find or add angular courses ...';
	@Input() public icons: Map<string, IconDefinition> = Config.icons;
	@Input() public loadMoreText: string = 'Load More';
	@Input() public noDataMessage: string = 'NO DATA. FELL FREE TO ADD NEW COURSE';

	public query: string = '';
	public courses: CourseModel[];
	public sortedByDate: boolean = true;
	public sortedByTitle: boolean = true;
	public sortedByDuration: boolean = true;

	constructor() { }

	public ngOnInit(): void {
		this.courses = defaultData;
	}

	// TODO: RL: Refactor this + create test
	public onSortedByTitle(): void {
		this.sortedByTitle = !this.sortedByTitle;
	}

	public onSortedByDate(): void {
		this.sortedByDate = !this.sortedByDate;
	}

	public onSortedByDuration(): void {
		this.sortedByDuration = !this.sortedByDuration;
	}

	public onSearchItem(query: string): void {
		this.query = query;
	}

	public onRemoveItem(item: ICourse): void {
		this.courses = this.courses.filter((course: ICourse) => course.id !== item.id);
	}

	public onLoadMore(): void {
		this.courses = this.courses.concat(this.courses);
	}
}
