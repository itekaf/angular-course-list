import { FormsModule } from '@angular/forms';
import { MockComponent } from 'ng-mocks';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseAddComponent } from '../course-add/course-add.component';
import { CourseListComponent } from './course-list.component';
import { CourseSearchComponent } from '../course-search/course-search.component';
import { CourseListItemComponent } from '../course-list-item/course-list-item.component';
import { CourseListIconComponent } from '../course-list-icon/course-list-icon.component';

describe('CourseListComponent', () => {
	let component: CourseListComponent;
	let fixture: ComponentFixture<CourseListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				FormsModule,
				FontAwesomeModule
			],
			declarations: [
				CourseListComponent,
				MockComponent(CourseAddComponent),
				MockComponent(CourseListItemComponent),
				MockComponent(CourseListIconComponent),
				MockComponent(CourseSearchComponent),
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CourseListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('load more', () => {
		expect(component.loadMore()).toBeUndefined();
	});
	it('remove item', () => {
		expect(component.searchItem('')).toBeUndefined();
	});
	it('search item', () => {

	});
});
