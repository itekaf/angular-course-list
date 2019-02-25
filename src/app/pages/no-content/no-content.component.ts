import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-no-content',
	templateUrl: './no-content.component.html',
	styleUrls: ['./no-content.component.scss']
})
export class NoContentComponent {

	@Input() public statusCode: string | number = 404;
	@Input() public statusMessage: string = 'Page Not Found. Sorry :(';

	constructor() { }
}
