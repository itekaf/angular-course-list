import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { InputResultModel } from 'src/app/shared/models/input-result.model';

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
	@Input() public value: string = '';
	@Input() public className: string;
	@Input() public placeholder: string;

	@Output() public inputEvent: EventEmitter<InputResultModel> = new EventEmitter<InputResultModel>();

	constructor() { }

	public onInput(): void {
		const result = new InputResultModel(this.name, this.value);
		this.inputEvent.emit(result);
	}
}
