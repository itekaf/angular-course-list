import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { LoginComponent } from './login.component';
import { InputResultModel } from 'src/app/shared/models/input-result.model';

const dummyData = {
	username: 'dummy username',
	password: 'dummy password',
};

@Component({
	template: `<app-login></app-login>`
})
class TestHostComponent { }

describe('LoginComponent', () => {
	let serviceObj;
	beforeEach(async(() => {
		serviceObj = jasmine.createSpyObj('AuthService', ['login']);
		TestBed.configureTestingModule({
			declarations: [ LoginComponent, TestHostComponent ],
			providers: [
				{ provide: AuthService, useValue: serviceObj }
			],
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

		it('should change properties by change', () => {
			// Arrange
			const usernameName = 'username';
			const usernameValue = dummyData.username;
			const usernameResult = dummyData.username;
			const inputEvent = new InputResultModel(usernameName, usernameValue);

			// Act
			component.onChange(inputEvent);

			// Assert
			expect(component.username).toBe(usernameResult);
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

		it('should success login', () => {
			// Arange
			const selectElement = 'form';

			// Act
			const debugElement = fixture.debugElement;
			const formElement = debugElement.query(By.css(selectElement));
			formElement.triggerEventHandler('submit', null);

			// Assert
			expect(serviceObj.login.calls.any()).toBe(true);
		});
	});
});
