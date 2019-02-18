import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSearchComponent } from './course-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

describe('CourseSearchComponent', () => {
	let component: CourseSearchComponent;
	let fixture: ComponentFixture<CourseSearchComponent>;

	beforeEach(() => {

	});

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ FormsModule, FontAwesomeModule ],
			declarations: [ CourseSearchComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CourseSearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('search', () => {
		expect(component.search()).toBeUndefined();
	});
});
