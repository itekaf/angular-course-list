import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
	@Input() public text: string;
	@Input() public icon: IconDefinition;
	@Input() public type: string = 'button';
	@Input() public className: string = 'button-transparent';

	@Output() public clickButton: EventEmitter<void> = new EventEmitter<void>();

	public onClick(): void {
		this.clickButton.emit();
	}
}
