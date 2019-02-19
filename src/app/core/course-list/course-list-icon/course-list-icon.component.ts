import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-course-list-icon',
	templateUrl: './course-list-icon.component.html',
	styleUrls: ['./course-list-icon.component.scss']
})
export class CourseListIconComponent {

	@Input() public icon?: IconDefinition;
	@Input() public title?: string;
	@Input() public text: string;

	constructor() { }
}
