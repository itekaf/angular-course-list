import { finalize } from 'rxjs/operators';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Component, Input } from '@angular/core';

import { Config } from 'src/app/shared';
import { AuthService } from 'src/app/modules/auth/services';
import { RegistryModel } from '../../shared/models/registry.model';
import { HistoryService } from 'src/app/modules/routers/history.service';
import { InputResultModel } from 'src/app/shared/models/input-result.model';

import { Store } from '@ngrx/store';
import { IAuthState } from 'src/app/modules/auth/store/auth.reducer';
import { Registry } from 'src/app/modules/auth/store/auth.actions';

@Component({
	selector: 'app-registry',
	templateUrl: './registry.component.html',
	styleUrls: ['./registry.component.scss']
})
export class RegistryComponent {
	private redirectPage = '/login';
	@Input() public className: string = 'registry-form';
	@Input() public icons: Map<string, IconDefinition> = Config.icons;

	public data: RegistryModel = new RegistryModel();
	public loading: boolean;

	constructor(
		private store: Store<{auth: IAuthState}>,
		private history: HistoryService,
		private authService: AuthService
	) { }

	public onSubmit(): void {
		this.loading = true;
		// this.authService
		// 	.registry(this.data)
		// 	.pipe(
		// 		finalize(() => { this.loading = false; }),
		// 	)
		// 	.subscribe(() => {
		// 		this.history.goTo(this.redirectPage);
		// 	});
		this.store.dispatch(new Registry(this.data));
	}

	public onChange($event: InputResultModel): void {
		const { name, value }: { name: string, value: string } = $event;
		this.data[name] = value;
	}

	public onBack(): void { this.history.goBack(); }
}
