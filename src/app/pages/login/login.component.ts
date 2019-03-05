import { finalize } from 'rxjs/operators';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Component, Input } from '@angular/core';

import { Config } from 'src/app/shared';
import { LoginModel } from '../../shared/models/login.model';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { HistoryService } from 'src/app/modules/routers/history.service';
import { InputResultModel } from 'src/app/shared/models/input-result.model';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	private redirectPage = '/courses';
	@Input() public className: string = 'login-form';
	@Input() public icons: Map<string, IconDefinition> = Config.icons;

	public loading: boolean;
	public data: LoginModel = new LoginModel();

	constructor(
		private history: HistoryService,
		private authService: AuthService
	) { }

	public onSubmit(): void {
		this.loading = true;
		this.authService
			.login(this.data)
			.pipe(
				finalize(() => { this.loading = false; }),
			)
			.subscribe(() => {
				this.history.goTo(this.redirectPage);
			});
	}

	public onChange($event: InputResultModel): void {
		const { name, value }: { name: string, value: string } = $event;
		this.data[name] = value;
	}
}
