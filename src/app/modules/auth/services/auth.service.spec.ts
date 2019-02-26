import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { UserModel } from 'src/app/shared/models';

const dummyData = {
	userData: new UserModel(1, 'dummy', 'dummy'),
};

describe('AuthService', () => {
	let service: AuthService;
	let jwtServiceSpy;
	let userServiceSpy;

	beforeEach(() => {
		jwtServiceSpy = jasmine.createSpyObj('JwtService', ['setToken', 'removeToken']);
		userServiceSpy = jasmine.createSpyObj('UserService', ['setData', 'removeData', 'getData']);
		userServiceSpy.getData.and.returnValue(dummyData.userData);

		service = new AuthService(jwtServiceSpy, userServiceSpy);
	});

	describe('Service alone', () => {
		it('should be created', () => {
			expect(service).toBeTruthy();
		});

		it('should return user info', () => {
			// Arrange
			const resultData = dummyData.userData;

			// Act
			const output = service.getUserInfo();

			// Assert
			expect(output).toEqual(resultData);
			expect(userServiceSpy.getData.calls.any()).toBeTruthy();
		});
		it('should login user', () => {
			// Arrange
			const username = dummyData.userData.userName;
			const password = dummyData.userData.password;

			// Act
			const output = service.login(username, password);

			// Assert
			expect(output).toBeTruthy();
			expect(userServiceSpy.setData.calls.any()).toBeTruthy();
			expect(jwtServiceSpy.setToken.calls.any()).toBeTruthy();
		});

		it('logout method', () => []);
	});

	describe('Test Host Component', () => {
		it('should be create', () => {});
		it('is auth method', () => {});
		it('get info method', () => []);
		it('login method', () => {});
		it('logout method', () => []);
	});
});
