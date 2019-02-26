import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { UiModule } from '../../core/ui/ui.module';

import { SortedItemComponent } from './sorted-item/sorted-item.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseSearchComponent } from './course-search/course-search.component';

import { SortedByPipe } from './pipes/sorted-by.pipe';
import { ItemDurationPipe } from './pipes/item-duration.pipe';
import { FilterByQueryPipe } from './pipes/filter-by-query.pipe';

import { ItemRatedLightDirective } from './directives/item-rated-light.directive';
import { ItemStatusLightDirective } from './directives/item-status-light.directive';

import { CourseService } from './services/course.service';

@NgModule({
	imports: [
		UiModule,
		FormsModule,
		CommonModule,
		BrowserModule,
		FontAwesomeModule,
	],
	declarations: [
		CourseFormComponent,
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
		CourseFormComponent,
		CourseSearchComponent,
	]
})
export class CourseListModule {
	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: CourseListModule,
			providers: [
				CourseService,
			],
		};
	}
 }
