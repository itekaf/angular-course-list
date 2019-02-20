import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent {
	@Input() public type: string = 'text';
	@Input() public value: string;
	@Input() public placeholder: string = 'Enter value ...';

	@Output() public change: EventEmitter<string> = new EventEmitter<string>();
	constructor() { }

	public onChange(): void {
		this.change.emit(this.value);
	}
}
