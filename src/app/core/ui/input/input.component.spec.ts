/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
	let component: InputComponent;
	let fixture: ComponentFixture<InputComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ InputComponent ],
			schemas: [ NO_ERRORS_SCHEMA ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
