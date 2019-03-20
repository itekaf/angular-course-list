import { Store } from '@ngrx/store';
import { Config } from 'src/app/shared';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Component, Input, OnInit } from '@angular/core';

import { RegistryModel } from '../../shared/models/registry.model';
import { InputResultModel } from 'src/app/shared/models/input-result.model';

import { AuthRegistry } from 'src/app/modules/auth/store/auth.actions';
import { IAuthState } from 'src/app/modules/auth/store/auth.reducer';
import { getIsLoading } from 'src/app/core/loading/store/loading.selectors';
import { HistoryGoBack } from 'src/app/modules/routers/store/history.actions';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-registry',
	templateUrl: './registry.component.html',
	styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {
	@Input() public className: string = 'registry-form';
	@Input() public icons: Map<string, IconDefinition> = Config.icons;

	public data: RegistryModel = new RegistryModel();
	public loading$: Observable<boolean>;

	constructor(
		private store$: Store<{auth: IAuthState}>,
	) { }

	public ngOnInit(): void {
		this.loading$ = this.store$.select(getIsLoading);
	}
	public onSubmit(): void {
		this.store$.dispatch(new AuthRegistry(this.data));
	}

	public onChange($event: InputResultModel): void {
		const { name, value }: { name: string, value: string | number } = $event;
		this.data[name] = value.toString();
	}

	public onBack(): void { this.store$.dispatch(new HistoryGoBack()); }
}
