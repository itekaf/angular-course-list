import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaComponent } from './textarea.component';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { InputResultModel } from 'src/app/shared/models/input-result.model';
import { text } from '@angular/core/src/render3';
import { By } from '@angular/platform-browser';

const dummyData = {
	rows: '30',
	cols: '30',
	name: 'dummy-name',
	placeholder: 'dummy placeholder',
	defaultValue: 'dummy value',
};

@Component({
	template: `
		<app-textarea
			[rows]="rows"
			[cols]="cols"
			[name]="name"
			[placeholder]="placeholder"
			[defaultValue]="defaultValue"
			(inputEvent)="onInput($event)"
		></app-textarea>
	`
})
class TestHostComponent {
	public rows: string = dummyData.rows;
	public cols: string = dummyData.cols;
	public name: string = dummyData.name;
	public placeholder: string = dummyData.placeholder;
	public defaultValue: string = dummyData.defaultValue;

	public hasInputEvent: InputResultModel;

	public onInput($event: InputResultModel): void {
		this.hasInputEvent = $event;
	}

}
describe('TextareaComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ TextareaComponent, TestHostComponent ],
			schemas: [ NO_ERRORS_SCHEMA ]
		})
		.compileComponents();
	}));

	describe('Component alone', () => {
		let component: TextareaComponent;
		let fixture: ComponentFixture<TextareaComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(TextareaComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
		});

		it('should have default values', () => {
			// Arrange
			const selectElement = 'textarea';
			const resultRows = '10';
			const resultCols = '45';

			// Act
			const nativeElement = fixture.nativeElement;
			const textareaElement: HTMLElement = nativeElement.querySelector(selectElement);

			// Assert
			expect(textareaElement.getAttribute('rows')).toBe(resultRows);
			expect(textareaElement.getAttribute('cols')).toBe(resultCols);
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

		it('should changed default values', () => {
			// Arrange
			const selectElement = 'textarea';
			const resultRows =  dummyData.rows;
			const resultCols = dummyData.cols;

			// Act
			const debugElement = fixture.debugElement;
			const textareaElement: HTMLElement = debugElement.query(By.css(selectElement)).nativeElement;

			// Assert
			expect(textareaElement.getAttribute('rows')).toBe(resultRows);
			expect(textareaElement.getAttribute('cols')).toBe(resultCols);
		});

		it('should change value by input event', () => {
			// Arrange
			const selectElement: string = 'textarea';

			// Act
			const textareaElement = fixture.debugElement.query(By.css(selectElement));
			textareaElement.triggerEventHandler('input', null);

			// Assert
			expect(component.hasInputEvent).toBeTruthy();
		});
	});
});
