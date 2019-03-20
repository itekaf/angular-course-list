import { ItemStatusLightEnum } from '../enums/item-status-light.enum';
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appItemStatusLight]'
})
export class ItemStatusLightDirective {
	private currentDate: Date = new Date();
	private styleName: string = 'border-color';

	@Input('appItemStatusLight') set itemStatusLight(creationDate: Date) {
		if (!creationDate) { return; }
		const statusColor: string = this.getStatusColor(creationDate);
		this.render.setStyle(this.el.nativeElement, this.styleName, statusColor);
	}

	constructor(private el: ElementRef, private render: Renderer2) {}

	private getStatusColor(creationDate: Date): ItemStatusLightEnum {
		const maxDaysForNewItem: number = 14;
		const lastDateForNewItem: Date = new Date();
		lastDateForNewItem.setDate(-1 * maxDaysForNewItem);

		const correctDate = creationDate instanceof Date ? creationDate : new Date(creationDate);
		const isNew = correctDate < this.currentDate && correctDate.getDate() >= lastDateForNewItem.getDate();
		const isFuture = correctDate > this.currentDate;
		return isNew ? ItemStatusLightEnum.new
			: isFuture ? ItemStatusLightEnum.future : ItemStatusLightEnum.default;
	}
}
