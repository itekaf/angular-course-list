import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Config } from 'src/app/shared';
import { InputResultModel } from 'src/app/shared/models';

@Component({
	selector: 'app-playlist-search',
	templateUrl: './playlist-search.component.html',
	styleUrls: ['./playlist-search.component.scss']
})
export class PlaylistSearchComponent {
	@Input() public className: string = 'playlist-search';
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
