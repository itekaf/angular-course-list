import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Config } from 'src/app/shared';
import { LogoComponent } from './logo.component';

@Component({
	template: `<app-logo [path]="path" [width]="width"></app-logo>`,
})
class TestHostComponent {
	public path: string = 'https://via.placeholder.com/100';
	public width: number = 100;
}

describe('LogoComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ LogoComponent, TestHostComponent ]
		})
		.compileComponents();
	}));

	describe('test host', () => {
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
			const selector = 'img';
			const changedPath = 'https://via.placeholder.com/100';
			const changedWidth = 100;

			// Act
			const nativeElement = fixture.debugElement.nativeElement;
			const logoImage = nativeElement.querySelector(selector);

			// Assert
			expect(logoImage.src).toBe(changedPath);
			expect(logoImage.width).toBe(changedWidth);
		});
	});
	describe('component alone', () => {
		let component: LogoComponent;
		let fixture: ComponentFixture<LogoComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(LogoComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
		});

		it('shloud have default properties', () => {
			// Arrage
			const selector = 'img';
			const defaultPath = Config.default.logoPath;
			const defaultWidth = 50;

			// Act
			const nativeElement = fixture.debugElement.nativeElement;
			const logoImage = nativeElement.querySelector(selector);

			// Assert
			expect(logoImage.src).toBe(defaultPath);
			expect(logoImage.width).toBe(defaultWidth);
		});
	});
});
