import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';

describe('Courses Page Component', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				CoursesComponent,
			],
			schemas: [ NO_ERRORS_SCHEMA ],
		})
		.compileComponents();
	}));

	describe('Component Alone', () => {
		let component: CoursesComponent;
		let fixture: ComponentFixture<CoursesComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(CoursesComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
		});
	});
});
