import { finalize } from 'rxjs/operators';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Component, Input, OnInit } from '@angular/core';

import { Config } from 'src/app/shared';
import { LoginModel } from '../../shared/models/login.model';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { HistoryService } from 'src/app/modules/routers/history.service';
import { InputResultModel } from 'src/app/shared/models/input-result.model';
import { Store } from '@ngrx/store';
import { IAuthState } from 'src/app/modules/auth/store/auth.reducer';
import { Observable } from 'rxjs';
import { Login } from 'src/app/modules/auth/store/auth.actions';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { getIsLoading } from 'src/app/core/loading/store/loading.selectors';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	private pasMinLength = 5;
	private pasMaxLength = 50;
	private pasPattern = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]*$';
	public loginForm = new FormGroup({
		login: new FormControl('', [ Validators.email, Validators.required]),
		password: new FormControl('', [
			Validators.required,
			Validators.minLength(this.pasMinLength),
			Validators.maxLength(this.pasMaxLength),
			Validators.pattern(this.pasPattern)
		]),
	});

	@Input() public className: string = 'login-form';
	@Input() public icons: Map<string, IconDefinition> = Config.icons;

	public loading: boolean;
	public data: LoginModel = new LoginModel();

	constructor(
		private store: Store<{ auth: IAuthState }>,
		private history: HistoryService,
		private authService: AuthService
	) {	}

	public ngOnInit(): void {
		this.store
			.select(getIsLoading)
			.subscribe((value: boolean) => {
				this.loading = value;
			});
	}

	get login(): AbstractControl { return this.loginForm.get('login'); }
	get password(): AbstractControl { return this.loginForm.get('password'); }

	public onSubmit(): void {
		this.store.dispatch(new Login(this.data));
	}

	public onSubmitNew(): void {
		console.log(this.login);
	}

	public onChange($event: InputResultModel): void {
		const { name, value }: { name: string, value: string } = $event;
		this.data[name] = value;
	}
}
