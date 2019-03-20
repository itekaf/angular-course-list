import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-label',
	templateUrl: './label.component.html',
	styleUrls: ['./label.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {

	@Input() public for: string;
	@Input() public text: string;
	@Input() public icon: IconDefinition;
	@Input() public className: string;

	constructor() { }
}
