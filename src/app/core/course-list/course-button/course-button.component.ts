import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-course-button',
	templateUrl: './course-button.component.html',
	styleUrls: ['./course-button.component.scss'],
})
export class CourseButtonComponent {
	@Input() public text: string;
	@Input() public icon: IconDefinition;
	@Input() public className: string = 'button-transparent';
	@Input() public type: string = 'button';

	@Output() public clickButton: EventEmitter<void> = new EventEmitter<void>();

	public onClick(): void {
		this.clickButton.emit();
	}
}
