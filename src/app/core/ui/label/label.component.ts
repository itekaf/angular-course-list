import { Component, Input } from '@angular/core';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
	selector: 'app-label',
	templateUrl: './label.component.html',
	styleUrls: ['./label.component.scss']
})
export class LabelComponent {

	@Input()
	public for: string;

	@Input()
	public text: string;

	@Input()
	public icon: IconDefinition;

	@Input()
	public className: string;

	constructor() { }
}
