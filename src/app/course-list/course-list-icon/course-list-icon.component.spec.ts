import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListIconComponent } from './course-list-icon.component';

describe('CourseListIconComponent', () => {
	let component: CourseListIconComponent;
	let fixture: ComponentFixture<CourseListIconComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CourseListIconComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CourseListIconComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
