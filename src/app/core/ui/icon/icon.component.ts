import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.component.html',
	styleUrls: [ './icon.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
	@Input() public icon: IconDefinition;
	@Input() public title: string;
	@Input() public text: string;
	@Input() public className: string;

	constructor() { }
}
