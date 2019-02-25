import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-textarea',
	templateUrl: './textarea.component.html',
	styleUrls: ['./textarea.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaComponent {
	@Input() public rows: number = 10;
	@Input() public cols: number = 45;
	@Input() public name: string;
	@Input() public placeholder: string;

	constructor() { }
}
