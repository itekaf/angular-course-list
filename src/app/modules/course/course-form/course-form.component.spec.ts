import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormComponent } from './course-form.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CourseEditComponent', () => {
	let component: CourseFormComponent;
	let fixture: ComponentFixture<CourseFormComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CourseFormComponent ],
			schemas: [ NO_ERRORS_SCHEMA ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CourseFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
