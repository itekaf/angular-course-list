import { Component, Input } from '@angular/core';
import { Config } from 'src/app/shared';

@Component({
	selector: 'app-logo',
	templateUrl: './logo.component.html',
	styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

	@Input() public path: string = Config.default.logoPath;
	@Input() public width: string | number = '50';
	@Input() public routerLink: string = '/';

	constructor() {}
}
