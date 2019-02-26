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
	@Input() public placeholder: string;
	@Input() public defaultValue: string = '';

	@Output() public inputEvent: EventEmitter<InputResultModel> = new EventEmitter<InputResultModel>();

	public text: string = this.defaultValue;

	constructor() { }

	public onInput(): void {
		const result = new InputResultModel(this.name, this.text);
		this.inputEvent.emit(result);
	}
}
