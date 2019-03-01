import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { Config } from 'src/app/shared';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { InputResultModel } from 'src/app/shared/models/input-result.model';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	private redirectPage = '/courses';
	@Input() public icons: Map<string, IconDefinition> = Config.icons;

	public username: string;
	public password: string;

	constructor(
		private router: Router,
		private authService: AuthService
	) { }

	public onSubmit(): void {
		try {
			// TODO: RL: subsribe
			this.authService.login(this.username, this.password);
			this.router.navigate([this.redirectPage]);
		} catch (e) {
			console.error(e);
		}
	}

	public onChange($event: InputResultModel): void {
		const { name, value }: { name: string, value: string } = $event;
		this[name] = value;
	}
}
