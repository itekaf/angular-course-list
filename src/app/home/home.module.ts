import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { CourseListModule } from '../course-list/course-list.module';

@NgModule({
	imports: [
		CommonModule,
		CourseListModule,
	],
	declarations: [
		HomeComponent
	],
	exports: [
		HomeComponent
	]
})
export class HomeModule { }
