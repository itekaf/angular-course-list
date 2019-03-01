import * as uuid from 'uuid/v4';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { UserModel } from 'src/app/shared/models';

const dummyData = {
	userData: new UserModel(uuid(), 'dummy', 'dummy password'),
};

describe('UserService', () => {
	let service: UserService;
	beforeEach(() => {
		service = new UserService();
	});

	describe('Service alone', () => {
		it('should be created', () => {
			// Assert
			expect(service).toBeTruthy();
		});

		it('should return user data', () => {
			// Arrange
			const resultData = dummyData.userData;
			const defaultData = dummyData.userData;

			// Act
			service.setData(defaultData);
			const output = service.getData();

			// Arrange
			expect(output).toEqual(resultData);
		});
		it('should set user data', () => {
			// Arrange
			const resultData = dummyData.userData;
			const inputData = dummyData.userData;

			// Act
			service.setData(inputData);

			// Arrange
			expect(service.userData).toEqual(resultData);
		});
		it('should remove user data', () => {
			// Arrange
			const resultData = undefined;
			const inputData = dummyData.userData;

			// Act
			service.setData(inputData);
			service.removeData();

			// Assert
			expect(service.userData).toEqual(resultData);
		});
		it('should update user data', () => {
			// Arrange
			const resultData = dummyData.userData;
			const inputData = dummyData.userData;

			// Act
			service.updateData(inputData);

			// Assert
			expect(service.userData).toEqual(resultData);
		});
	});
});
