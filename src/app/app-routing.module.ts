import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';

import { NoContentComponent } from './pages/no-content/no-content.component';
import { RegistryComponent } from './pages/registry/registry.component';
import { AuthSuccessGuardService, AuthFailGuardService, AuthCheckGuardService, AuthLoadSuccessGuardService } from './modules/auth/guards';

const routes: Routes = [
	{
		path: 'courses',
		loadChildren: './pages/pages.module#PagesModule',
		canLoad: [ AuthLoadSuccessGuardService ],
		canActivate: [ AuthSuccessGuardService ],
	},
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [ AuthFailGuardService ],
		data: {
			label: 'Login'
		}
	},
	{
		path: 'signup',
		component: RegistryComponent,
		canActivate: [ AuthFailGuardService ],
		data: {
			label: 'Registry'
		}
	},
	{
		path: '',
		redirectTo: 'courses',
		pathMatch: 'full',
	},
	{
		path: '**',
		component: NoContentComponent,
		canActivate: [ AuthCheckGuardService ],
		data: {
			label: 'Error'
		}
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
