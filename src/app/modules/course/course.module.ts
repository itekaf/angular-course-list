import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UiModule } from '../../core/ui/ui.module';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { CourseItemComponent } from './course-item/course-item.component';

import { SortedByPipe } from './pipes/sorted-by.pipe';
import { ItemDurationPipe } from './pipes/item-duration.pipe';
import { FilterByQueryPipe } from './pipes/filter-by-query.pipe';

import { ItemRatedLightDirective } from './directives/item-rated-light.directive';
import { ItemStatusLightDirective } from './directives/item-status-light.directive';
import { SortedItemComponent } from './sorted-item/sorted-item.component';

@NgModule({
	imports: [
		UiModule,
		FormsModule,
		CommonModule,
		BrowserModule,
		FontAwesomeModule,
	],
	declarations: [
		SortedItemComponent,
		CourseItemComponent,
		CourseListComponent,
		CourseSearchComponent,

		ItemRatedLightDirective,
		ItemStatusLightDirective,

		SortedByPipe,
		ItemDurationPipe,
		FilterByQueryPipe,
	],
	exports: [
		CourseListComponent,
	]
})
export class CourseListModule { }
