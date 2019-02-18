import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWidgetComponent } from './user-widget.component';
import { Component } from '@angular/core';

@Component({
	template: `<app-user-widget [butttonText]="butttonText"></app-user-widget>`,
})
class TestHostComponent {
	public butttonText: string  = 'Log out';
}

describe('UserWidgetComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ UserWidgetComponent, TestHostComponent ]
		})
		.compileComponents();
	}));

	describe('component alone', () => {
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
		it('should have default propeties', () => {
			// Arrage
			const selector = '.user-article__button';
			const defaultText = 'Log Off';

			// Act
			const nativeElement = fixture.debugElement.nativeElement;
			const buttonElement = nativeElement.querySelector(selector);

			// Assert
			expect(buttonElement.textContent).toBe(defaultText);
		});
	});
	describe('host component', () => {
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
		it('should change default propeties', () => {
			// Arrage
			const selector = '.user-article__button';
			const defaultText = 'Log out';

			// Act
			const nativeElement = fixture.debugElement.nativeElement;
			const buttonElement = nativeElement.querySelector(selector);

			// Assert
			expect(buttonElement.textContent).toBe(defaultText);
		});
	});
});
