import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListItemComponent } from './course-list-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseListIconComponent } from '../course-list-icon/course-list-icon.component';

describe('CourseListItemComponent', () => {
	let component: CourseListItemComponent;
	let fixture: ComponentFixture<CourseListItemComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ FontAwesomeModule ],
			declarations: [ CourseListItemComponent, CourseListIconComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CourseListItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
