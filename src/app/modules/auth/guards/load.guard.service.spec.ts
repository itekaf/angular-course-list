/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoadGuardService } from './load.guard.service';

describe('Service: Load', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [LoadGuardService]
		});
	});

	it('should ...', inject([LoadGuardService], (service: LoadGuardService) => {
		expect(service).toBeTruthy();
	}));
});
