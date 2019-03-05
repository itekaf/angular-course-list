import { TestBed } from '@angular/core/testing';

import { BodyHttpMiddelware } from './body.service';

describe('BodyService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: BodyHttpMiddelware = TestBed.get(BodyHttpMiddelware);
		expect(service).toBeTruthy();
	});
});
