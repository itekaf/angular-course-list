import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Config } from 'src/app/shared';

@Component({
	selector: 'app-course-add',
	templateUrl: './course-add.component.html',
	styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {

	public icons: Map<string, IconDefinition> = Config.icons;

	public ngOnInit() {
	}

	public add() {
		console.log('add new course');
	}
}
