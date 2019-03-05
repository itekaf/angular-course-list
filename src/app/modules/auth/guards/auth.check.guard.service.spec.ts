import { TestBed } from '@angular/core/testing';

import {AuthCheckGuardService } from './auth.check.guard.service';

describe('Auth.CheckService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
	const service: AuthCheckGuardService = TestBed.get(AuthCheckGuardService);
	expect(service).toBeTruthy();
	});
});
