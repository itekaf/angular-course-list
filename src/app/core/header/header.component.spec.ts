import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

describe('HeaderComponent', () => {
	let authServiceSpy;

	beforeEach(async(() => {
		authServiceSpy = jasmine.createSpyObj('AuthService', ['getUserInfo', 'logout', 'isAuthenticated']);

		TestBed.configureTestingModule({
			declarations: [
				HeaderComponent,
			],
			providers: [
				{ provide: AuthService, useValue: authServiceSpy }
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
			// Assert
			expect(component).toBeTruthy();
		});

		it('should check auth by init ', () => {
			// Assert
			expect(authServiceSpy.getUserInfo.calls.any()).toBeTruthy();
			expect(authServiceSpy.isAuthenticated.calls.any()).toBeTruthy();
		});

		it('should logout by event', () => {
			// Act
			component.onLogOff();

			// Assert
			expect(authServiceSpy.logout.calls.any()).toBeTruthy();
		});
	});
});
