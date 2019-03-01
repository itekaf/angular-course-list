import { Router, ActivatedRoute } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Component, OnInit, Input } from '@angular/core';

import { Config } from 'src/app/shared';
import { CourseModel } from 'src/app/shared/models';
import { CourseService } from '../../services/course.service';
import { InputResultModel } from 'src/app/shared/models/input-result.model';
import { HttpParams } from '@angular/common/http';

@Component({
	selector: 'app-course-list',
	templateUrl: './course-list.component.html',
	styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
	@Input() public pageStep: string = '5';
	@Input() public title: string = 'Find or add angular courses ...';
	@Input() public icons: Map<string, IconDefinition> = Config.icons;
	@Input() public loadMoreText: string = 'Load More';
	@Input() public noDataMessage: string = 'NO DATA. FELL FREE TO ADD NEW COURSE';

	public query: string = '';
	public courses: CourseModel[];
	public sortedByDate: boolean = true;
	public sortedByTitle: boolean = true;
	public sortedByDuration: boolean = true;

	constructor(
		private router: Router,
		private courseService: CourseService,
		private activatedRouter: ActivatedRoute,
	) { }

	public ngOnInit(): void {
		console.log(this.courses);
		this.courseService.read(null, '0', this.pageStep).subscribe((items: CourseModel[]) => {
			this.courses = items.map((item: CourseModel) => {
				const itemImagePath = item.imagePath || Config.default.imagePath;
				item.imagePath = itemImagePath;
				return item;
			});
		});
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

	public onSearchItem($event: InputResultModel): void {
		this.query = $event.value;
	}

	public onRemoveItem(id: string): CourseModel[] {
		const resultOfModalWindow = true;
		if (resultOfModalWindow) {
			this.courses = this.courseService.delete(id);
		}

		return this.courses;
	}

	public onLoadMore(): CourseModel[] {
		this.courseService.read(
			null, this.courses.length.toString(), this.pageStep.toString(),
		).subscribe((items: CourseModel[]) => {
			const result = items.map((item: CourseModel) => {
				const itemImagePath = item.imagePath || Config.default.imagePath;
				item.imagePath = itemImagePath;
				return item;
			});
			this.courses = this.courses.concat(result);
			console.log(`TOTAL: ${this.courses.length}`);
		});
		return this.courses;
	}

	public onEditItem(id: string): CourseModel[] {
		this.router.navigate(['./', id], { relativeTo: this.activatedRouter });
		return this.courses;
	}

	public onAdd(): CourseModel[] {
		this.router.navigate(['./new'], { relativeTo: this.activatedRouter });
		return this.courses;
	}
}
