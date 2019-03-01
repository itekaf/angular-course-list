/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthFailGuardService } from './auth.fail.guard.service';

describe('Service: Auth.fail.guard', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [AuthFailGuardService]
		});
	});

	it('should ...', inject([AuthFailGuardService], (service: AuthFailGuardService) => {
		expect(service).toBeTruthy();
	}));
});
