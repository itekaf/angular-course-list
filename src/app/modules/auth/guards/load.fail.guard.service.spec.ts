/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoadFailGuardService } from './load.fail.guard.service';

describe('Service: Load.fail.guard', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [LoadFailGuardService]
		});
	});

	it('should ...', inject([LoadFailGuardService], (service: LoadFailGuardService) => {
		expect(service).toBeTruthy();
	}));
});
