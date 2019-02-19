import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { CourseModel } from 'src/app/shared/models';
import { ICourse } from 'src/app/shared/interface';
import { Config } from 'src/app/shared/index';

@Component({
	selector: 'app-course-list-item',
	templateUrl: './course-list-item.component.html',
	styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent {
	@Input() public courseItem: ICourse = new CourseModel();
	@Input() public icons: Map<string, IconDefinition> = Config.icons;
	@Input() public defaultImagePath: string = Config.default.imagePath;

	@Output() public editItem: EventEmitter<ICourse> = new EventEmitter<ICourse>();
	@Output() public removeItem: EventEmitter<ICourse> = new EventEmitter<ICourse>();

	constructor() { }

	public onEdit(): void  {
		this.editItem.emit(this.courseItem);
	}

	public onRemove(): void {
		this.removeItem.emit(this.courseItem);
	}

}
