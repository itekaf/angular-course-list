import { Observable } from 'rxjs';
import * as uuid from 'uuid/v4';

import { UserModel } from 'src/app/shared/models';
import { AuthService } from './auth.service';

const dummyData = {
	userData: new UserModel(uuid(), 'dummy', 'dummy'),
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

		it('should return throw if the user is already login', () => {
			// Arrange
			const username = dummyData.userData.userName;
			const password = dummyData.userData.password;

			// Act
			service.login(username, password);
			const loginError = (): Observable<boolean> => service.login(username, password);

			// Assert
			expect(loginError).toThrow();
		});

		it('should logout user', () => {
			// Arrange
			const username = dummyData.userData.userName;
			const password = dummyData.userData.password;

			// Act
			service.login(username, password);
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
