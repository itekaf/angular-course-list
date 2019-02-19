import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeaderComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				HeaderComponent
			],
			schemas: [ NO_ERRORS_SCHEMA ]
		})
		.compileComponents();
	}));

	describe('Component Alone', () => {
		let component: HeaderComponent;
		let fixture: ComponentFixture<HeaderComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(HeaderComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
		});
	});

});
