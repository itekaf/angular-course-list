import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';

import {
	JwtService,
	AuthService,
	UserService,
} from './services';

import {
	AuthGuardService,
	LoadGuardService,
	AuthFailGuardService,
	LoadFailGuardService,
} from './guards';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [

	],
	exports: [

	]
})
export class AuthModule {
	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: AuthModule,
			providers: [
				AuthService,
				JwtService,
				UserService,

				AuthGuardService,
				LoadGuardService,
				AuthFailGuardService,
				LoadFailGuardService,
			],
		};
	}

	constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
		if (parentModule) {
			throw new Error(
				'AuthModule is already loaded. Import it in the AppModule only');
		}
	}
}
