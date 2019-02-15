import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseModel } from 'src/models';

@Component({
	selector: 'app-course-list-item',
	templateUrl: './course-list-item.component.html',
	styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {

	@Input() public courseItem: CourseModel;
	@Output() public removeItem: EventEmitter<CourseModel> = new EventEmitter<CourseModel>();

	constructor() { }

	public ngOnInit() {
	}

	public edit(item: CourseModel): void  {
		console.log(item.id);
	}

	public remove(item: CourseModel): void {
		this.removeItem.emit(item);
	}

}
