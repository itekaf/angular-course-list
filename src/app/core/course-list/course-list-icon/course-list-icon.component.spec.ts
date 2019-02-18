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
});
