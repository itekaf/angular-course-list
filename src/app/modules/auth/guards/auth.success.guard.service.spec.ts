import { TestBed } from '@angular/core/testing';

import { AuthSuccessGuardService } from './auth.success.guard.service';

describe('GuardService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: AuthSuccessGuardService = TestBed.get(AuthSuccessGuardService);
		expect(service).toBeTruthy();
	});
});
