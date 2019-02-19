import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Component, Output, Input, EventEmitter } from '@angular/core';

import { Config } from 'src/app/shared';

@Component({
	selector: 'app-course-search',
	templateUrl: './course-search.component.html',
	styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent {

	public icons: Map<string, IconDefinition> = Config.icons;

	@Input() public query?: string;
	@Output() public searchItem: EventEmitter<string> = new EventEmitter<string>();

	public onSearch(): void {
		this.searchItem.emit(this.query);
	}
}
