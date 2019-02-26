import { Component, OnInit, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { Config } from 'src/app/shared';
import { CourseModel } from 'src/app/shared/models';
import { CourseService } from '../services/course.service';
import { IEdit } from 'src/app/shared/interface/edit.interface';

type EditCourseType = IEdit<CourseModel>;

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

	constructor(private courseService: CourseService) { }

	public ngOnInit(): void {
		this.courses = this.courseService.read();
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

	public onRemoveItem(id: number): CourseModel[] {
		const resultOfModalWindow = true;
		if (resultOfModalWindow) {
			this.courses = this.courseService.delete(id);
		}

		return this.courses;
	}

	public onLoadMore(): void {
		this.courses = this.courses.concat(this.courses);
	}

	public onEditItem(id: number): CourseModel[] {
		const selectCourse = this.courses.find((x: CourseModel) => x.id === id);
		this.courses = selectCourse ? this.courseService.update(id, selectCourse) : this.courses;
		return this.courses;
	}

	public onAdd(): CourseModel[] {
		const tempData = new CourseModel(1, 'Course temp');
		this.courses = this.courseService.create(tempData);
		return this.courses;
	}
}
