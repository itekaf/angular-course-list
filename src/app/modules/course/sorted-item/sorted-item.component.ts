import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Config } from 'src/app/shared';
import { ItemSortedIconsEnum } from '../enums/item-sorted-icons.enum';

@Component({
	selector: 'app-sorted-item',
	templateUrl: './sorted-item.component.html',
	styleUrls: ['./sorted-item.component.scss']
})
export class SortedItemComponent {
	// TODO: RL: create type for this object
	@Input()
	public icons = {
		asc: Config.icons.get(ItemSortedIconsEnum.asc),
		desc: Config.icons.get(ItemSortedIconsEnum.desc)
	};

	@Input()
	public className: string = 'button-blue';

	@Output()
	public clickEvent: EventEmitter<string> = new EventEmitter<string>();

	@Input()
	public defaultSortIcon: IconDefinition = this.icons.asc;

	private sortIcon: IconDefinition = this.defaultSortIcon;

	constructor() { }

	public onClick(): void {
		this.sortIcon = this.sortIcon === this.icons.asc
			? this.icons.desc : this.icons.asc;
		this.clickEvent.emit();
	}
}
