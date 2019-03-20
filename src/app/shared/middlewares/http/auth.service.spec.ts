import { TestBed } from '@angular/core/testing';

import { AuthHttpMiddelware } from './auth.service';

describe('AuthService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: AuthHttpMiddelware = TestBed.get(AuthHttpMiddelware);
		expect(service).toBeTruthy();
	});
});
