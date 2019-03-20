import { TestBed } from '@angular/core/testing';

import { JwtService } from './jwt.service';

const dummyData = {
	token: 'dummy token',
};

describe('JwtService', () => {
	let service: JwtService;
	let store = {};

	beforeEach(() => {
		service = new JwtService();

		const mockLocalStorage = {
			getItem: (key: string): string => {
				return key in store ? store[key] : null;
			},
			setItem: (key: string, value: string): void => {
				store[key] = `${value}`;
			},
			removeItem: (key: string): void => {
				delete store[key];
			},
			clear: (): void => {
				store = {};
			}
		};

		spyOn(localStorage, 'getItem')
			.and.callFake(mockLocalStorage.getItem);
		spyOn(localStorage, 'setItem')
			.and.callFake(mockLocalStorage.setItem);
		spyOn(localStorage, 'removeItem')
			.and.callFake(mockLocalStorage.removeItem);
		spyOn(localStorage, 'clear')
			.and.callFake(mockLocalStorage.clear);
	});

	describe('Service alone', () => {
		it('should be created', () => {
			// Assert
			expect(service).toBeTruthy();
		});
		it('should set token', () => {
			// Arrange
			const inputValue = dummyData.token;
			const resultValue = dummyData.token;

			// Act
			service.setToken(inputValue);
			const output = localStorage.getItem(service.key);

			// Assert
			expect(output).toBe(resultValue);
		});
		it('should remove token', () => {
			// Arrange
			const inputValue = dummyData.token;
			const resultValue = null;
			localStorage.setItem(service.key, inputValue);

			// Act

			service.removeToken();
			const output = localStorage.getItem(service.key);

			// Assert
			expect(output).toBe(resultValue);
		});
		it('should return token', () => {
			// Arrange
			const inputValue = dummyData.token;
			const resultValue = dummyData.token;
			localStorage.setItem(service.key, inputValue);

			// Act
			const result = service.getToken();

			// Assert
			expect(result).toBe(resultValue);
		});
	});
});
