import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormComponent } from './course-form.component';
import { NO_ERRORS_SCHEMA, Component, DebugElement } from '@angular/core';
import { CourseModel } from 'src/app/shared/models';
import { InputResultModel } from 'src/app/shared/models/input-result.model';
import { By } from '@angular/platform-browser';

const dummyData = {
	item: new CourseModel(1, 'Dummy')
};

@Component({
	template: `
		<app-course-form
			[courseItem]="courseItem"
			(submitEvent)="onSubmit($event)"
			(cancelEvent)="onCancel($event)"
		></app-course-form>
	`
})
class TestHostComponent {
	public courseItem: CourseModel = dummyData.item;

	public isSubmit = false;
	public isCancel = false;
	public onSubmit(): void { this.isSubmit = true; }
	public onCancel(): void { this.isCancel = true; }
}

describe('CourseFormComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CourseFormComponent, TestHostComponent ],
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

		it('should change single property by change methods', () => {
			// Arrange
			const dummyItem = dummyData.item;
			const changeName = 'title';
			const changeValue = 'Dummy title';
			const inputChangeResult = new InputResultModel(changeName, changeValue);
			component.courseItem = dummyItem;

			// Act
			component.onChange(inputChangeResult);

			// Assert
			expect(component.courseItem.title).toBe(changeValue);
		});
	});

	describe('Test Host Component', () => {
		let component: TestHostComponent;
		let fixture: ComponentFixture<TestHostComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(TestHostComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
		});

		it('should submit form by event', () => {
			// Arrange
			const selectElemet = 'form';

			// Act
			const formElement: DebugElement = fixture.debugElement.query(By.css(selectElemet));
			formElement.triggerEventHandler('submit', null);

			// Assert
			expect(component.isSubmit).toBeTruthy();
		});
	});
});
