import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CourseAddComponent } from './course-add/course-add.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';

@NgModule({
	imports: [
		FormsModule,
		CommonModule
	],
	declarations: [
		CourseAddComponent,
		CourseListComponent,
		CourseSearchComponent,
		CourseListItemComponent,
	],
	exports: [
		CourseListComponent,
	]
})
export class CourseListModule { }
