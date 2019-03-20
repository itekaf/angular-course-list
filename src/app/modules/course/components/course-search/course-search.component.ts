import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Component, Output, Input, EventEmitter } from '@angular/core';

import { Config } from 'src/app/shared';
import { InputResultModel } from 'src/app/shared/models/input-result.model';

@Component({
	selector: 'app-course-search',
	templateUrl: './course-search.component.html',
	styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent {
	@Input() public query: string | number;
	@Input() public icons: Map<string, IconDefinition> = Config.icons;

	@Output() public searchItem: EventEmitter<InputResultModel> = new EventEmitter<InputResultModel>();

	public onSearch($event: InputResultModel): void {
		const { value }: { value: string | number } = $event;
		this.query = value;
		this.triggerEvent();
	}

	public onSubmit(): void { this.triggerEvent(); }

	private triggerEvent(): void {
		const result = new InputResultModel('query', this.query);
		this.searchItem.emit(result);
	}
}
