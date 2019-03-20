import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutes } from './courses.routing';
import { CourseListModule } from 'src/app/modules/course/course.module';

import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { CoursesComponent } from './courses.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
	imports: [
		CourseListModule,
		CommonModule,
		CoreModule,
		CoursesRoutes
	],
	declarations: [
		CoursesComponent,
		ListComponent,
		NewComponent,
		EditComponent,
	],
	exports: [
		CoursesComponent,
	]
})
export class CoursesModule { }
