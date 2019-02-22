import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				HomeComponent,
			],
			schemas: [ NO_ERRORS_SCHEMA ],
		})
		.compileComponents();
	}));

	describe('Component Alone', () => {
		let component: HomeComponent;
		let fixture: ComponentFixture<HomeComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(HomeComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
		});
	});
});
