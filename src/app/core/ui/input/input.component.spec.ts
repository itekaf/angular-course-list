/* tslint:disable:no-unused-variable */
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { InputResultModel } from 'src/app/shared/models/input-result.model';

const dummyData = {
	type: 'dummy',
	name: 'dummy',
	value: 'dummy value',
	placeholder: 'dummy placeholder',
};

@Component({
	template: `
		<app-input
			[type]="type"
			[name]="name"
			[value]="value"
			[placeholder]="placeholder"
			(inputEvent)="onInput($event)"
		></app-input>
	`,
})
class TestHostComponent {
	public type: string = dummyData.type;
	public name: string = dummyData.name;
	public value: string = dummyData.value;
	public placeholder: string = dummyData.placeholder;

	public hasInputEvent: InputResultModel;

	public onInput($event: InputResultModel): void {
		this.hasInputEvent = $event;
	}
}

describe('InputComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ InputComponent, TestHostComponent ],
			schemas: [ NO_ERRORS_SCHEMA ]
		})
		.compileComponents();
	}));

	describe('Component alone', () => {
		let component: InputComponent;
		let fixture: ComponentFixture<InputComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(InputComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
		});

		it('should have default properties', () => {
			// Arrange
			const selectInput = 'input';
			const resultType = 'text';
			const resultPlaceholder = 'Enter value ...';

			// Act
			const inputElement: HTMLElement = fixture.nativeElement.querySelector(selectInput);

			// Assert
			expect(inputElement.getAttribute('type')).toBe(resultType);
			expect(inputElement.getAttribute('placeholder')).toBe(resultPlaceholder);
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

		it('should change default properties', () => {
			// Arrange
			const selectInput: string = 'input';
			const resultType: string = dummyData.type;
			const resultPlaceholder: string = dummyData.placeholder;

			// Act
			const inputElement: HTMLElement = fixture.debugElement.query(By.css(selectInput)).nativeElement;

			// Assert
			expect(inputElement.getAttribute('type')).toBe(resultType);
			expect(inputElement.getAttribute('placeholder')).toBe(resultPlaceholder);
		});

		it('should change input by event', () => {
			// Arrange
			const selectElement: string = 'input';

			// Act
			const inputElement = fixture.debugElement.query(By.css(selectElement));
			inputElement.triggerEventHandler('input', null);

			// Assert
			expect(component.hasInputEvent).toBeTruthy();
		});
	});
});
