import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ LoginComponent ],
			schemas: [ NO_ERRORS_SCHEMA ]
		})
		.compileComponents();
	}));

	describe('Component Alone', () => {
		let component: LoginComponent;
		let fixture: ComponentFixture<LoginComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(LoginComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
		});

		it('should success login', () => {
			// Arange

			// Act

			// Assert
		});
	});
});
