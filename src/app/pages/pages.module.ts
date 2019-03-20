import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { CoursesModule } from './courses/courses.module';
import { ModulesModule } from '../modules/modules.module';

import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';
import { NoContentComponent } from './no-content/no-content.component';
import { PlaylistPageModule } from './playlist/playlist.module';

@NgModule({
	imports: [
		ReactiveFormsModule,
		CoreModule,
		FormsModule,
		CommonModule,
		ModulesModule,
		CoursesModule,
		PlaylistPageModule,
		RouterModule,
	],
	declarations: [
		LoginComponent,
		NoContentComponent,
		RegistryComponent,
	],
})
export class PagesModule { }
