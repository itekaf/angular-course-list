/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthLoadSuccessGuardService } from './auth.load.success.guard.service';

describe('Service: Load', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [AuthLoadSuccessGuardService]
		});
	});

	it('should ...', inject([AuthLoadSuccessGuardService], (service: AuthLoadSuccessGuardService) => {
		expect(service).toBeTruthy();
	}));
});
