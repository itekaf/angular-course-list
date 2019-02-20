import { ItemRatedLightEnum } from '../enums/item-rated-light.enum';
import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
	selector: '[appItemRatedLight]'
})
export class ItemRatedLightDirective {
	private styleName: string = 'background-color';

	// TODO: RL: Refactor this + create test
	@Input('appItemRatedLight') set itemRatedLight(rated: boolean) {
		const backgroundColor: ItemRatedLightEnum = this.getRatedColor(rated);
		this.render.setStyle(this.el.nativeElement, this.styleName, backgroundColor);
	}

	constructor(private el: ElementRef, private render: Renderer2) { }

	private getRatedColor(isTop: boolean): ItemRatedLightEnum {
		return isTop ? ItemRatedLightEnum.top : ItemRatedLightEnum.default;
	}
}
