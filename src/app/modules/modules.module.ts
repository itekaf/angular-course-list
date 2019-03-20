import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseListModule } from './course/course.module';
import { PlaylistModule } from './playlist/playlist.module';

@NgModule({
	imports: [
		CommonModule,
		CourseListModule,
		PlaylistModule
	],
	exports: [
		PlaylistModule,
		CourseListModule
	]
})
export class ModulesModule { }
