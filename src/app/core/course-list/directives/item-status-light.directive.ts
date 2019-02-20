import { ItemStatusLightEnum } from '../enums/item-status-light.enum';
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appItemStatusLight]'
})
export class ItemStatusLightDirective {
	private currentDate: Date = new Date();
	private styleName: string = 'border-color';

	// TODO: RL: Refactor this + create test
	@Input('appItemStatusLight') set itemStatusLight(creationDate: Date) {
		const borderColor: string = this.getStatusColor(creationDate);
		this.render.setStyle(this.el.nativeElement, this.styleName, borderColor);
	}

	constructor(private el: ElementRef, private render: Renderer2) {}

	private getStatusColor(creationDate: Date): ItemStatusLightEnum {
		const maxDayForNewItem: number = 14;
		const lastDateForNewItem: Date = new Date();
		lastDateForNewItem.setDate(-1 * maxDayForNewItem);

		const isNew = creationDate < this.currentDate && creationDate >= lastDateForNewItem;
		const isFuture = creationDate > this.currentDate;
		return isNew ? ItemStatusLightEnum.new
			: isFuture ? ItemStatusLightEnum.future : ItemStatusLightEnum.default;
	}
}
