import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';

import { NoContentComponent } from './pages/no-content/no-content.component';
import { LoadGuardService, AuthGuardService, AuthFailGuardService } from './modules/auth/guards';

const routes: Routes = [
	{
		path: 'courses',
		loadChildren: './pages/pages.module#PagesModule',
		canLoad: [ LoadGuardService ],
		canActivate: [ AuthGuardService ],
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
		path: '',
		redirectTo: 'courses',
		pathMatch: 'full',
	},
	{
		path: '**',
		component: NoContentComponent,
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
