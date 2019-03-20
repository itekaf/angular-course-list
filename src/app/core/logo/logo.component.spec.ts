import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Config } from 'src/app/shared';
import { LogoComponent } from './logo.component';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
	template: `<app-logo [path]="path" [width]="width" [routerLink]="routerLink"></app-logo>`,
})
class TestHostComponent {
	public path: string = 'https://via.placeholder.com/100';
	public width: number = 100;
	public routerLink: string = '/change';
}

describe('LogoComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
			declarations: [ LogoComponent, TestHostComponent ]
		})
		.compileComponents();
	}));
	describe('Component Alone', () => {
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

		it('Should have default properties', () => {
			// Arrange
			const selectorLink = 'a';
			const selectorLogo = 'img';
			const resultPath = Config.default.logoPath;
			const resultWidth = 50;
			const resultRouterLink = '/';

			// Act
			const nativeElement = fixture.debugElement.nativeElement;
			const linkLogoElement = nativeElement.querySelector(selectorLink);
			const imageLogoElement = nativeElement.querySelector(selectorLogo);

			// Assert
			expect(imageLogoElement.src).toBe(resultPath);
			expect(imageLogoElement.width).toBe(resultWidth);
			expect(linkLogoElement.href).toContain(resultRouterLink);
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
			const selectorLink = 'a';
			const selectorLogo = 'img';
			const resultPath = 'https://via.placeholder.com/100';
			const resultWidth = 100;
			const resultRouterLink = '/change';

			// Act
			const nativeElement = fixture.debugElement.nativeElement;
			const linkLogoElement = nativeElement.querySelector(selectorLink);
			const imageLogoElement = nativeElement.querySelector(selectorLogo);

			// Assert
			expect(imageLogoElement.src).toBe(resultPath);
			expect(imageLogoElement.width).toBe(resultWidth);
			expect(linkLogoElement.href).toContain(resultRouterLink);
		});
	});
});
