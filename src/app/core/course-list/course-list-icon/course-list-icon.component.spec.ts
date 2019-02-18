import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListIconComponent } from './course-list-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('CourseListIconComponent', () => {
	let component: CourseListIconComponent;
	let fixture: ComponentFixture<CourseListIconComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ FontAwesomeModule ],
			declarations: [ CourseListIconComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CourseListIconComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('shoud have a text', () => {
		// Arrage
		const dummyText: string = 'dummy text';
		const dummyTitle: string = 'dummy title';

		component.text = dummyText;
		component.title = dummyTitle;

		// Act
		fixture.detectChanges();
		const nativeElement: HTMLElement = fixture.nativeElement;
		const textElement: HTMLElement = nativeElement.querySelector('.course-item-icon__text');
		const titleElement: HTMLElement = nativeElement.querySelector('.course-item-icon__title');

		// Asert
		expect(textElement.textContent).toBe(dummyText);
		expect(titleElement.textContent).toBe(dummyTitle);
	});
});
