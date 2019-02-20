import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.component.html',
})
export class IconComponent {

	@Input() public icon: IconDefinition;
	constructor() { }
}
