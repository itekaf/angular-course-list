import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsComponent } from './breadcrumbs.component';

@Component({
	template: `<app-breadcrumbs [text]="text" ></app-breadcrumbs>`
})
class TestHostComponent {
	public text: string = 'Changed Text';
}

describe('BreadcrumbsComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ BreadcrumbsComponent, TestHostComponent ]
		})
		.compileComponents();
	}));

	describe('Component Alone', () => {
		let component: BreadcrumbsComponent;
		let fixture: ComponentFixture<BreadcrumbsComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(BreadcrumbsComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
		});

		it('should have default properties', () => {
			// Arrange
			const selectorText = '.breadcrumbs__text';
			const resultText = 'Courses';

			// Act
			const nativeElement = fixture.nativeElement;
			const textElement = nativeElement.querySelector(selectorText);

			// Assert
			expect(textElement.textContent).toBe(resultText);
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
			const selectorText = '.breadcrumbs__text';
			const resultText = 'Changed Text';

			// Act
			const nativeElement = fixture.debugElement.nativeElement;
			const textElement = nativeElement.querySelector(selectorText);

			// Assert
			expect(textElement.textContent).toBe(resultText);
		});
	});

});
