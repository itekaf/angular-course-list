import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseModel } from 'src/app/shared/models';
import { Config } from 'src/app/shared';

@Component({
	selector: 'app-course-form',
	templateUrl: './course-form.component.html',
	styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

	@Input() public icons = Config.icons;
	@Input() public title: string;
	@Input() public courseItem: CourseModel;

	@Output() public submitEvent: EventEmitter<CourseModel> = new EventEmitter<CourseModel>();
	@Output() public cancelEvent: EventEmitter<void> = new EventEmitter<void>();

	constructor() { }

	public onSubmit(): void {
		this.submitEvent.emit(this.courseItem);
	}

	public onCancel(): void {
		this.cancelEvent.emit();
	}
}
