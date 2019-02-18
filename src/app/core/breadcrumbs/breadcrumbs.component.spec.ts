import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsComponent } from './breadcrumbs.component';
import { Component } from '@angular/core';

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

	describe('component alone', () => {
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
			// Arrage
			const selector = '.breadcrumbs__text';
			const defaultText = 'Courses';

			// Act
			const nativeElement = fixture.nativeElement;
			const textElement = nativeElement.querySelector(selector);

			// Assert
			expect(textElement.textContent).toBe(defaultText);
		});
	});
	describe('host test', () => {
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
			// Arrage
			const selector = '.breadcrumbs__text';
			const defaultText = 'Changed Text';

			// Act
			const nativeElement = fixture.debugElement.nativeElement;
			const textElement = nativeElement.querySelector(selector);

			// Assert
			expect(textElement.textContent).toBe(defaultText);
		});
	});

});
