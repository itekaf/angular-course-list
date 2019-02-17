import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faEdit, faTrashAlt, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';

import { CourseModel } from 'src/models';

@Component({
	selector: 'app-course-list-item',
	templateUrl: './course-list-item.component.html',
	styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {

	public icons = {
		edit: faEdit,
		date: faCalendarAlt,
		remove: faTrashAlt,
		duration: faClock,
	};

	public defaultImage: string = 'https://via.placeholder.com/500x400';

	@Input() public courseItem: CourseModel;
	@Output() public removeItem: EventEmitter<CourseModel> = new EventEmitter<CourseModel>();

	constructor() { }

	public ngOnInit() {}

	public edit(item: CourseModel): void  {
		console.log(item.id);
	}

	public remove(item: CourseModel): void {
		this.removeItem.emit(item);
	}

}
