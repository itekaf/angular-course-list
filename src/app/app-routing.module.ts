import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';

import { NoContentComponent } from './pages/no-content/no-content.component';
import { RegistryComponent } from './pages/registry/registry.component';
import {
	AuthSuccessGuardService,
	AuthFailGuardService,
	AuthCheckGuardService,
} from './modules/auth/guards';

const routes: Routes = [
	{
		path: 'playlists',
		loadChildren: './pages/playlist/playlist.module#PlaylistPageModule',
		canLoad: [ AuthSuccessGuardService ],
		canActivate: [ AuthSuccessGuardService ],
	},
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [ AuthCheckGuardService, AuthFailGuardService ],
		data: {
			label: 'Login'
		}
	},
	{
		path: 'signup',
		component: RegistryComponent,
		canActivate: [ AuthCheckGuardService, AuthFailGuardService ],
		data: {
			label: 'Registry'
		}
	},
	{
		path: '',
		redirectTo: 'playlists',
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
