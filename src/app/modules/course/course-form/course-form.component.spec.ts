import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormComponent } from './course-form.component';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';

const dummyData = {

};

@Component({
	template: `
		<app-course-form

		></app-course-form>
	`
})
class TestHostComponent {

}

describe('CourseFormComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CourseFormComponent ],
			schemas: [ NO_ERRORS_SCHEMA ]
		})
		.compileComponents();
	}));

	describe('Component alone', () => {
		let component: CourseFormComponent;
		let fixture: ComponentFixture<CourseFormComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(CourseFormComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
		});

		it('should have default properites', () => {});
		it('should change single property by change methods', () => {});
	});

	describe('Test Host Component', () => {
		let component: CourseFormComponent;
		let fixture: ComponentFixture<CourseFormComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(CourseFormComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
		});

		it('should change default properties', () => {});
		it('should submit form by event', () => {});
		it('should cancel from by event', () => {});
	});
});
