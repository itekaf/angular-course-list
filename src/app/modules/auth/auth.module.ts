import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';

import { AuthService } from './services/auth.service';
import { JwtService } from './services/jwt.service';
import { UserService } from './services/user.service';

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
