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
export class CourseListItemComponent implements OnInit {

	public icons: Map<string, IconDefinition> = Config.icons;

	public defaultImage: string = 'https://via.placeholder.com/500x400';

	@Input() public courseItem: ICourse = new CourseModel();
	@Output() public removeItem: EventEmitter<ICourse> = new EventEmitter<ICourse>();

	constructor() { }

	public ngOnInit() {}

	public edit(item: ICourse): void  {
		console.log(item.id);
	}

	public remove(item: ICourse): void {
		this.removeItem.emit(item);
	}

}
