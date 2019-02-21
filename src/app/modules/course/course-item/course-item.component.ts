import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CourseModel } from 'src/app/shared/models';

import { Config } from 'src/app/shared/index';

@Component({
	selector: 'app-course-item',
	templateUrl: './course-item.component.html',
	styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent {
	@Input() public courseItem: CourseModel = new CourseModel();
	@Input() public icons: Map<string, IconDefinition> = Config.icons;
	@Input() public defaultImagePath: string = Config.default.imagePath;

	@Output() public editEvent: EventEmitter<CourseModel> = new EventEmitter<CourseModel>();
	@Output() public removeEvent: EventEmitter<CourseModel> = new EventEmitter<CourseModel>();

	constructor() { }

	public onEdit(): void  {
		this.editEvent.emit(this.courseItem);
	}

	public onRemove(): void {
		this.removeEvent.emit(this.courseItem);
	}

}
