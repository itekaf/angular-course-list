import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';

import {
	JwtService,
	AuthService,
	UserService,
} from './services';

import {
	AuthSuccessGuardService,
	AuthLoadSuccessGuardService,
	AuthFailGuardService,
	AuthLoadFailGuardService,
	AuthCheckGuardService,
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

				AuthFailGuardService,
				AuthCheckGuardService,
				AuthSuccessGuardService,

				AuthLoadFailGuardService,
				AuthLoadSuccessGuardService,
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
