/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthLoadFailGuardService } from './load.fail.guard.service';

describe('Service: Load.fail.guard', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [AuthLoadFailGuardService]
		});
	});

	it('should ...', inject([AuthLoadFailGuardService], (service: AuthLoadFailGuardService) => {
		expect(service).toBeTruthy();
	}));
});
