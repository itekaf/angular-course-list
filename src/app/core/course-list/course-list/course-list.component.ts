import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/shared/interface';

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
	public title: string = 'Find or add angular courses ...';
	public query: string = '';
	public courses: ICourse[];

	constructor() { }

	public ngOnInit() {
		this.courses = defaultData;
	}

	public searchItem(query: string): void {
		this.courses = this.courses.filter((course: ICourse) => {
			return course.title.toLocaleLowerCase().includes(query.toLocaleLowerCase());
		});
	}

	public removeItem(item: ICourse): void {
		this.courses = this.courses.filter((course: ICourse) => course.id !== item.id);
	}

	public loadMore(): void {
		this.courses = this.courses.concat(this.courses);
	}
}
