import { Component, OnInit, Input } from '@angular/core';
import { Config } from 'src/app/shared';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services';
import { InputResultModel } from 'src/app/shared/models/input-result.model';
import { RegistryModel } from './registry.model';

@Component({
	selector: 'app-registry',
	templateUrl: './registry.component.html',
	styleUrls: ['./registry.component.scss']
})
export class RegistryComponent {
	private redirectPage = '/login';
	@Input() public icons: Map<string, IconDefinition> = Config.icons;

	public username: string;
	public password: string;
	public lastName: string;
	public firstName: string;
	public passwordConfirmation: string;

	constructor(
		private router: Router,
		private authService: AuthService
	) { }

	public onSubmit(): void {
		try {
			const registryData = new RegistryModel(
				this.username,
				this.password,
				this.passwordConfirmation,
				this.lastName,
				this.firstName,
			);
			this.authService.registry(registryData)
				.subscribe(
					() => {
						this.router.navigate([this.redirectPage]);
					}
				);
		} catch (e) {
			console.error(e);
		}
	}

	public onChange($event: InputResultModel): void {
		const { name, value }: { name: string, value: string } = $event;
		this[name] = value;
	}
}
