import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-course-add',
	templateUrl: './course-add.component.html',
	styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {

	constructor() { }

	public ngOnInit() {
	}

	public add() {
		console.log('add new course');
	}

}