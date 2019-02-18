import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CourseAddComponent } from './course-add/course-add.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CourseListIconComponent } from './course-list-icon/course-list-icon.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		CommonModule,
		FontAwesomeModule,
	],
	declarations: [
		CourseAddComponent,
		CourseListComponent,
		CourseSearchComponent,
		CourseListItemComponent,
		CourseListIconComponent,
	],
	exports: [
		CourseListComponent,
	]
})
export class CourseListModule { }
