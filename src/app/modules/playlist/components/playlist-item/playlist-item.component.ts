import * as uuid from 'uuid/v4';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlaylistModel } from 'src/app/shared/models';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Config } from 'src/app/shared';

@Component({
	selector: 'app-playlist-item',
	templateUrl: './playlist-item.component.html',
	styleUrls: ['./playlist-item.component.scss']
})
export class PlaylistItemComponent {

	@Input() public className: string = 'playlist-item';
	// TODO: RL: move courseItem, and e.t.c like a DI
	@Input() public item: PlaylistModel = new PlaylistModel(uuid(), 'temp');
	@Input() public icons: Map<string, IconDefinition> = Config.icons;

	@Output() public editEvent: EventEmitter<string> = new EventEmitter<string>();
	@Output() public removeEvent: EventEmitter<string> = new EventEmitter<string>();

	constructor() {	}

	public onEdit(): void  {
		this.editEvent.emit(this.item.id);
	}

	public onRemove(): void {
		this.removeEvent.emit(this.item.id);
	}
}
