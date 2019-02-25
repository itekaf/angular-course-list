import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

class LabelConfig {
	public icon: IconDefinition;
	public title: string;
	public text: string;
	public className: string;
}
@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
	// TODO: RL: Implement Label Config
	@Input() public label: LabelConfig;
	@Input() public name: string;
	@Input() public type: string = 'text';
	@Input() public placeholder: string = 'Enter value ...';
	@Input() public defaultValue: string = '';

	@Output() public inputEvent: EventEmitter<string> = new EventEmitter<string>();

	public value: string = this.defaultValue;

	constructor() { }

	public onInput(): void {
		this.inputEvent.emit(this.value);
	}
}
