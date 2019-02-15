import { Component, OnInit } from '@angular/core';
import { CourseModel } from 'src/models';

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
	public query: string = '';
	public courses: CourseModel[];

	constructor() { }

	public ngOnInit() {
		this.courses = defaultData;
	}

	public searchItem(query: string): void {
		this.courses = defaultData.filter((x: CourseModel) => {
			return x.title.toLocaleLowerCase().includes(query.toLocaleLowerCase());
		});
	}

	public removeItem(item: CourseModel): void {
		this.courses = this.courses.filter((x: CourseModel) => x.id !== item.id);
	}

	public loadMore(): void {
		this.courses = this.courses.concat(this.courses);
	}
}
