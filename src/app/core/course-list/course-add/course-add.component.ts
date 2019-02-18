import { Component, OnInit, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Config } from 'src/app/shared';

@Component({
	selector: 'app-course-add',
	templateUrl: './course-add.component.html',
	styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {
	@Input() public text: string = 'Add Course';
	@Input() public icon: IconDefinition = Config.icons.get('plus');

	public ngOnInit() {
	}

	public onAdd() {
		console.log('add new course');
	}
}
