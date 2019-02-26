import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseListModule } from './course/course.module';

@NgModule({
	imports: [
		CommonModule,
		CourseListModule,
	],
	exports: [
		CourseListModule
	]
})
export class ModulesModule { }
