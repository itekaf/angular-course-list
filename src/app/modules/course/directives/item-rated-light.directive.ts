import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

import { ItemRatedLightEnum } from '../enums/item-rated-light.enum';

@Directive({
	selector: '[appItemRatedLight]'
})
export class ItemRatedLightDirective {
	private styleName: string = 'background-color';
	private defaultDehavior: boolean = false;

	@Input('appItemRatedLight') set itemRatedLight(rated: boolean) {
		const ratedColor: ItemRatedLightEnum = this.getRatedColor(rated);
		this.render.setStyle(this.el.nativeElement, this.styleName, ratedColor);
	}

	constructor(private el: ElementRef, private render: Renderer2) { }

	private getRatedColor(isTop: boolean = this.defaultDehavior): ItemRatedLightEnum {
		return isTop ? ItemRatedLightEnum.top : ItemRatedLightEnum.default;
	}
}
