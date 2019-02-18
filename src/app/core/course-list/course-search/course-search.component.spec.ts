import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSearchComponent } from './course-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

describe('CourseSearchComponent', () => {
	let component: CourseSearchComponent;
	let fixture: ComponentFixture<CourseSearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ BrowserModule, FormsModule, FontAwesomeModule ],
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
});
