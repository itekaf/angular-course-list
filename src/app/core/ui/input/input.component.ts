import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

class LabelConfig {
	public icon: IconDefinition;
	public title: string;
	public text: string;
	public className: string;
}
@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent {
	@Input() public label: LabelConfig;
	@Input() public type: string = 'text';
	@Input() public value: string;
	@Input() public placeholder: string = 'Enter value ...';

	@Output() public inputEvent: EventEmitter<string> = new EventEmitter<string>();

	constructor() { }

	public onInput(): void {
		this.inputEvent.emit(this.value);
	}
}
