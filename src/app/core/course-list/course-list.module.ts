import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CourseButtonComponent } from './course-button/course-button.component';
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
		CourseListComponent,
		CourseButtonComponent,
		CourseSearchComponent,
		CourseListItemComponent,
		CourseListIconComponent,
	],
	exports: [
		CourseListComponent,
	]
})
export class CourseListModule { }
