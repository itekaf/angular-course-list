import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWidgetComponent } from './user-widget.component';

@Component({
	template: `<app-user-widget [butttonText]="buttonText"></app-user-widget>`,
})
class TestHostComponent {
	public buttonText: string  = 'Log out';
}

describe('UserWidgetComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ UserWidgetComponent, TestHostComponent ]
		})
		.compileComponents();
	}));

	describe('Component Alone', () => {
		let component: UserWidgetComponent;
		let fixture: ComponentFixture<UserWidgetComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(UserWidgetComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
		});

		it('should get user data', () => {
			// Act
			expect(component.userData).toBeTruthy();
		});
		it('should have default properties', () => {
			// Arrange
			const selectorText = '.user-article__button';
			const resultText = 'Log Off';

			// Act
			const nativeElement = fixture.debugElement.nativeElement;
			const buttonElement = nativeElement.querySelector(selectorText);

			// Assert
			expect(buttonElement.textContent).toBe(resultText);
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
			const selectorText = '.user-article__button';
			const resultText = 'Log out';

			// Act
			const nativeElement = fixture.debugElement.nativeElement;
			const buttonElement = nativeElement.querySelector(selectorText);

			// Assert
			expect(buttonElement.textContent).toBe(resultText);
		});
	});
});
