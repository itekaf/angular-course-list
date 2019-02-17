import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-course-search',
	templateUrl: './course-search.component.html',
	styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent implements OnInit {

	public icons = {
		search: faSearch,
	};

	@Input() public query: string;
	@Output() public searchItem: EventEmitter<string> = new EventEmitter<string>();

	constructor() {
	}

	public ngOnInit() {
	}

	public search(): void {
		this.searchItem.emit(this.query);
	}
}
