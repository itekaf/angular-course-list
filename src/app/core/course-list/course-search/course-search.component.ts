import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Config } from 'src/app/shared';

@Component({
	selector: 'app-course-search',
	templateUrl: './course-search.component.html',
	styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent implements OnInit {

	public icons: Map<string, IconDefinition> = Config.icons;

	@Input() public query?: string;
	@Output() public searchItem: EventEmitter<string> = new EventEmitter<string>();

	constructor() {
	}

	public ngOnInit() {
	}

	public search(): void {
		this.searchItem.emit(this.query);
	}
}
