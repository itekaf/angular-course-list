import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-course-add',
	templateUrl: './course-add.component.html',
	styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {

	public icons = {
		add: faPlus,
	};

	constructor() { }

	public ngOnInit() {
	}

	public add() {
		console.log('add new course');
	}

}
