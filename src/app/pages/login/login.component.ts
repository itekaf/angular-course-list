import { Store } from '@ngrx/store';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Component, Input, OnInit } from '@angular/core';

import { AuthLogin } from 'src/app/modules/auth/store/auth.actions';
import { Config } from 'src/app/shared';
import { LoginModel } from '../../shared/models/login.model';
import { IAuthState } from 'src/app/modules/auth/store/auth.reducer';
import { getIsLoading } from 'src/app/core/loading/store/loading.selectors';
import { InputResultModel } from 'src/app/shared/models/input-result.model';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	@Input() public className: string = 'login-form';
	@Input() public icons: Map<string, IconDefinition> = Config.icons;

	public loading$: Observable<boolean>;
	public data: LoginModel = new LoginModel();

	constructor(
		private store: Store<{ auth: IAuthState }>,
	) {	}

	public ngOnInit(): void {
		this.loading$ = this.store.select(getIsLoading);
	}

	public onSubmit(): void {
		this.store.dispatch(new AuthLogin(this.data));
	}

	public onChange($event: InputResultModel): void {
		const { name, value }: { name: string, value: string | number } = $event;
		this.data[name] = value;
	}
}
