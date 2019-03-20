import { TestBed } from '@angular/core/testing';

import { HeadersHttpMiddelware } from './headers.service';

describe('HeadersService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: HeadersHttpMiddelware = TestBed.get(HeadersHttpMiddelware);
		expect(service).toBeTruthy();
	});
});
