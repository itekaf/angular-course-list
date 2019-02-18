import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CourseListComponent } from 'src/app/core/course-list/course-list/course-list.component';
import { CourseSearchComponent } from 'src/app/core/course-list/course-search/course-search.component';
import { CourseAddComponent } from 'src/app/core/course-list/course-add/course-add.component';
import { CourseListIconComponent } from 'src/app/core/course-list/course-list-icon/course-list-icon.component';
import { CourseListItemComponent } from 'src/app/core/course-list/course-list-item/course-list-item.component';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				HomeComponent,
				CourseAddComponent,
				CourseListComponent,
				CourseSearchComponent,
				CourseListItemComponent,
				CourseListIconComponent,
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
