import { By } from '@angular/platform-browser';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

const dummyData = {
	text: 'Dummy text',
	type: 'submit',
	className: 'dummy-class',
};

@Component({
	template: `
		<app-button
			[text]="text"
			[type]="type"
			[className]="className"
			(clickButton)="onClickButton()"
		></app-button>
	`,
})
class TestHostComponent {
	public text: string = dummyData.text;
	public type: string = dummyData.type;
	public className: string = dummyData.className;
	public hasClicked: boolean = false;
	public onClickButton(): void { this.hasClicked = true; }
}

describe('ButtonComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ButtonComponent, TestHostComponent ],
			schemas: [ NO_ERRORS_SCHEMA ],
		})
		.compileComponents();
	}));

	describe('Component Alone', () => {
		let component: ButtonComponent;
		let fixture: ComponentFixture<ButtonComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(ButtonComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			// Act
			expect(component).toBeTruthy();
		});

		it('should have default properties', () => {
			// Arrange
			const selectorButton: string = 'button';

			const resultType: string = 'button';
			const resultClassName: string = 'button-transparent';

			// Act
			const nativeElement: HTMLElement = fixture.debugElement.nativeElement;
			const buttonElement: HTMLElement = nativeElement.querySelector(selectorButton);

			// Assert
			expect(buttonElement.getAttribute('type')).toBe(resultType);
			expect(buttonElement.classList.contains(resultClassName)).toBeTruthy();
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

		it('should change default properties and set ', () => {
			// Arrange
			const selectorText = `.${dummyData.className}__text`;
			const selectorButton = 'button';

			const resultText: string = dummyData.text;
			const resultType: string = dummyData.type;

			// Act
			const nativeElement: HTMLElement = fixture.debugElement.nativeElement;
			const textElement: HTMLElement = nativeElement.querySelector(selectorText);
			const buttonElement: HTMLElement = nativeElement.querySelector(selectorButton);

			// Assert
			expect(textElement).toBeTruthy();
			expect(textElement.textContent).toBe(resultText);
			expect(buttonElement.getAttribute('type')).toBe(resultType);
		});

		it('should click button', () => {
			// Arrange
			const selectButton: string = 'button';

			// Act
			const buttonElement = fixture.debugElement.query(By.css(selectButton));
			buttonElement.triggerEventHandler('click', null);

			// Assert
			expect(component.hasClicked).toBeTruthy();
		});
	});
});
