import { Observable } from 'rxjs';
import * as uuid from 'uuid/v4';

import { UserModel, LoginModel, AnswerModel } from 'src/app/shared/models';
import { AuthService } from './auth.service';

const dummyData = {
	userData: new UserModel(uuid(), 'dummy', 'dummy'),
	password: '123',
};

describe('AuthService', () => {
	let service: AuthService;
	let jwtServiceSpy;
	let userServiceSpy;

	beforeEach(() => {
		jwtServiceSpy = jasmine.createSpyObj('JwtService', ['setToken', 'removeToken']);
		userServiceSpy = jasmine.createSpyObj('UserService', ['setData', 'removeData', 'getData']);
		userServiceSpy.getData.and.returnValue(dummyData.userData);

		// service = new AuthService(jwtServiceSpy, userServiceSpy);
	});

	describe('Service alone', () => {
		it('should be created', () => {
			expect(service).toBeTruthy();
		});

		it('should login user', () => {
			// Arrange
			const username = dummyData.userData.username;
			const password = dummyData.password;
			const loginData = new LoginModel(username, password);

			// Act
			const output = service.login(loginData);

			// Assert
			expect(output).toBeTruthy();
			expect(userServiceSpy.setData.calls.any()).toBeTruthy();
			expect(jwtServiceSpy.setToken.calls.any()).toBeTruthy();
		});

		it('should return throw if the user is already login', () => {
			// Arrange
			const username = dummyData.userData.username;
			const password = dummyData.password;
			const loginData = new LoginModel(username, password);

			// Act
			service.login(loginData);
			const loginError = (): Observable<AnswerModel> => service.login(loginData);

			// Assert
			expect(loginError).toThrow();
		});

		it('should logout user', () => {
			// Arrange
			const username = dummyData.userData.username;
			const password = dummyData.password;
			const loginData = new LoginModel(username, password);

			// Act
			service.login(loginData);
			const output = service.logout();

			// Assert
			expect(output).toBeFalsy();
			expect(userServiceSpy.removeData.calls.any()).toBeTruthy();
			expect(jwtServiceSpy.removeToken.calls.any()).toBeTruthy();
		});
		it('should return throw if the user is not login', () => {
			// Act
			const logoutError = (): Observable<boolean> => service.logout();

			// Assert
			expect(logoutError).toThrow();
		});
	});
});
