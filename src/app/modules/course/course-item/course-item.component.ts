import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IEdit } from 'src/app/shared/interface/edit.interface';
import { Config } from 'src/app/shared/index';
import { CourseModel } from 'src/app/shared/models';

type EditCourseType = IEdit<CourseModel>;

@Component({
	selector: 'app-course-item',
	templateUrl: './course-item.component.html',
	styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent {
	// TODO: RL: move courseItem, and e.t.c like a DI
	@Input() public courseItem: CourseModel = new CourseModel(1, 'temp');
	@Input() public icons: Map<string, IconDefinition> = Config.icons;

	@Output() public editEvent: EventEmitter<EditCourseType> = new EventEmitter<EditCourseType>();
	@Output() public removeEvent: EventEmitter<number> = new EventEmitter<number>();

	// TODO: RL: Move out it
	constructor() {	}

	public onEdit(): void  {
		const editData = {
			id: this.courseItem.id,
			data: this.courseItem,
		};
		this.editEvent.emit(editData);
	}

	public onRemove(): void {
		const result = confirm('Do you really want to delete this course?');
		if (result) { this.removeEvent.emit(this.courseItem.id); }
	}

}
