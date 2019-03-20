import {
	PlaylistFormComponent,
	PlaylistItemComponent,
	PlaylistListComponent,
	PlaylistSearchComponent
} from './components';

import { } from './directives';

import { } from './pipes';

import {
	PlaylistService
} from './services';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CommonModule } from '@angular/common';
import { UiModule } from 'src/app/core/ui/ui.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';

const angularDeclaration = [
	PlaylistFormComponent,
	PlaylistItemComponent,
	PlaylistListComponent,
	PlaylistSearchComponent,
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		UiModule,
		CoreModule,
		FormsModule,
		FontAwesomeModule,
	],
	declarations: angularDeclaration,
	exports: angularDeclaration,
})
export class PlaylistModule {
	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: PlaylistModule,
			providers: [
				PlaylistService,
			],
		};
	}
}
