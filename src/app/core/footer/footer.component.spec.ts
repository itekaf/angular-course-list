import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
	let component: FooterComponent;
	let fixture: ComponentFixture<FooterComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ FooterComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FooterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have default current year', () => {
		// Arrage
		const selector = '.footer__copy';
		const currentYear = new Date().getFullYear();
		const copyText = `© ${currentYear}`;

		// Act
		const nativeElement = fixture.nativeElement;
		const copyTextElement = nativeElement.querySelector(selector);

		// Assert
		expect(copyTextElement.textContent).toBe(copyText);
	});
});
