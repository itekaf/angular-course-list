import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ FooterComponent ]
		})
		.compileComponents();
	}));

	describe('Component Alone', () => {
		let component: FooterComponent;
		let fixture: ComponentFixture<FooterComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(FooterComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
		});

		it('should have default current year', () => {
			// Arrange
			const currentYear = new Date().getFullYear();
			const selectorCopy = '.footer__copy';

			// Act
			const nativeElement = fixture.nativeElement;
			const copyTextElement = nativeElement.querySelector(selectorCopy);

			// Assert
			expect(copyTextElement.textContent).toContain(currentYear);
		});
	});
});
