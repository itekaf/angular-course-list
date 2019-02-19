import { Component, OnInit, Input } from '@angular/core';
import { ICourse } from 'src/app/shared/interface';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Config } from 'src/app/shared';

const defaultData = [
	{
		id: 1,
		title: 'Course 1',
		creationDate: new Date(),
		duration: 1,
	},
	{
		id: 2,
		title: 'Course 2',
		creationDate: new Date(),
		duration: 2,
		description: 'Description'
	}
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

	public query: string = '';
	public courses: ICourse[];

	constructor() { }

	public ngOnInit(): void {
		this.courses = defaultData;
	}

	public onSearchItem(query: string): void {
		this.courses = this.courses.filter((course: ICourse) => {
			return course.title.toLocaleLowerCase().includes(query.toLocaleLowerCase());
		});
	}

	public onRemoveItem(item: ICourse): void {
		this.courses = this.courses.filter((course: ICourse) => course.id !== item.id);
	}

	public onLoadMore(): void {
		this.courses = this.courses.concat(this.courses);
	}
}
