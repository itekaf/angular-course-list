import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistPageComponent } from './playlist.component';
import { PlaylistModule } from 'src/app/modules/playlist/playlist.module';
import { PlaylistsPageRouters } from './playlist.routing';
import { PlaylistNewComponent } from './add/playlist-new.component';
import { PlaylistEditComponent } from './edit/playlist-edit.component';
import { PlaylistPageListComponent } from './list/playlist-list.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
	imports: [
		CommonModule,
		CoreModule,
		PlaylistModule,
		PlaylistsPageRouters,
	],
	declarations: [
		PlaylistPageComponent,
		PlaylistNewComponent,
		PlaylistEditComponent,
		PlaylistPageListComponent,
	],
	exports: [
		PlaylistPageComponent,
	]
})
export class PlaylistPageModule {}
