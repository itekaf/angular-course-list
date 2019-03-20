import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Config } from 'src/app/shared';

const ErrorPage = Config.default.pages.error;

@Component({
	selector: 'app-no-content',
	templateUrl: './no-content.component.html',
	styleUrls: ['./no-content.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoContentComponent {

	@Input() public statusCode: string | number = ErrorPage.code;
	@Input() public statusMessage: string = ErrorPage.message;

	constructor() { }
}
