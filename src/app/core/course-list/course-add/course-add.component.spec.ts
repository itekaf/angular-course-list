import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CourseAddComponent } from './course-add.component';
import { createSandbox } from 'sinon';
import { Config } from 'src/app/shared';

const sandbox = createSandbox();

describe('CourseAddComponent', () => {
	let component: CourseAddComponent;
	let fixture: ComponentFixture<CourseAddComponent>;

	beforeEach(() => {
		sandbox.mock(Config);
	});

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ FontAwesomeModule ],
			declarations: [ CourseAddComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CourseAddComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	afterEach(() => {
		sandbox.reset();
		sandbox.restore();
	});

	it('')
	it('should create', () => {
		expect(component).toBeTruthy();

	});

	it('should have default text and icon', () => {
		const nativeElement: HTMLElement = fixture.nativeElement;
		const textElement: HTMLElement = nativeElement.querySelector('.button-transparent__text');
		const iconElement: HTMLElement = nativeElement.querySelector('.button-transparent__img svg');

		expect(textElement.textContent).toBe('Add Course');
	});
	it('add course', () => {
		expect(component.onAdd()).toBeUndefined();
	});
});
