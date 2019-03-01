import * as uuid from 'uuid/v4';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Config } from 'src/app/shared';
import { CourseModel } from 'src/app/shared/models';
import { InputResultModel } from 'src/app/shared/models/input-result.model';

@Component({
	selector: 'app-course-form',
	templateUrl: './course-form.component.html',
	styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
	// TODO: RL: DI
	@Input() public title: string;
	@Input() public icons = Config.icons;
	@Input() public className: string = 'course-form';
	@Input() public courseItem: CourseModel = new CourseModel(uuid(), 'title');

	@Output() public submitEvent: EventEmitter<CourseModel> = new EventEmitter<CourseModel>();
	@Output() public cancelEvent: EventEmitter<void> = new EventEmitter<void>();

	constructor() { }

	public onSubmit(): void {
		this.submitEvent.emit(this.courseItem);
	}

	public onCancel(): void {
		this.cancelEvent.emit();
	}

	public onChange($event: InputResultModel): void {
		const { name, value }: {name: string, value: string} = $event;
		this.courseItem[name] = value;
	}
}
