import { Component, OnInit, Input } from '@angular/core';
import { Config } from 'src/app/shared';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	public username: string;
	public password: string;

	public icons: Map<string, IconDefinition> = Config.icons;

	constructor() { }

	public onSubmit(): void {
		console.log(`${this.username} logged in successfully`);
	}
}
