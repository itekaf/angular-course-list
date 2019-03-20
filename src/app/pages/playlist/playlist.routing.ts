import { RouterModule, Routes } from '@angular/router';
import { PlaylistPageComponent } from './playlist.component';
import { PlaylistNewComponent } from './add/playlist-new.component';
import { PlaylistEditComponent } from './edit/playlist-edit.component';
import { PlaylistPageListComponent } from './list/playlist-list.component';
import { AuthSuccessGuardService } from 'src/app/modules/auth/guards';

const routes: Routes = [
	{
		path: '',
		component: PlaylistPageComponent,
		data: {
			label: 'Playlists'
		},
		children: [
			{
				path: '',
				component: PlaylistPageListComponent,
				data: {
					label: 'List'
				},
			},
			{
				path: 'new',
				component: PlaylistNewComponent,
				data: {
					label: 'New'
				}
			},
			{
				path: ':playlistId',
				component: PlaylistEditComponent,
				data: {
					label: 'Edit'
				}
			},
			{
				path: ':playlistId/courses',
				loadChildren: '../courses/courses.module#CoursesModule',
				canLoad: [ AuthSuccessGuardService ],
				canActivate: [ AuthSuccessGuardService ],
			},
		]
	},
];
export const PlaylistsPageRouters = RouterModule.forChild(routes);
