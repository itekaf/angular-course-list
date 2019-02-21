import { ItemRatedLightEnum } from '../enums/item-rated-light.enum';
import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
	selector: '[appItemRatedLight]'
})
export class ItemRatedLightDirective {
	private styleName: string = 'background-color';

	@Input('appItemRatedLight') set itemRatedLight(rated: boolean) {
		if (!rated) { return; }
		const ratedColor: ItemRatedLightEnum = this.getRatedColor(rated);
		this.render.setStyle(this.el.nativeElement, this.styleName, ratedColor);
	}

	constructor(private el: ElementRef, private render: Renderer2) { }

	// tslint:disable-next-line: prefer-function-over-method
	private getRatedColor(isTop: boolean): ItemRatedLightEnum {
		return isTop ? ItemRatedLightEnum.top : ItemRatedLightEnum.default;
	}
}
