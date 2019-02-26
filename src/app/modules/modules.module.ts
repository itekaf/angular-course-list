import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from './auth/auth.module';
import { CourseListModule } from './course/course.module';

@NgModule({
	imports: [
		AuthModule,
		CommonModule,
		CourseListModule,
	],
	exports: [
		CourseListModule
	]
})
export class ModulesModule { }
