import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSearchComponent } from './course-search.component';
import { InputResultModel } from 'src/app/shared/models/input-result.model';

const dummyData = {
	query: 'test query'
};
@Component({
	template: `
		<app-course-search
			[query]="query"
			(searchItem)="onSearchItem($event)"
		></app-course-search>
	`,
})
class TestHostComponent {
	public query: string = dummyData.query;

	public searchedQuery: InputResultModel;
	public onSearchItem($event: InputResultModel): void {
		this.searchedQuery = $event;
	}
}
describe('CourseSearchComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ FormsModule, FontAwesomeModule ],
			declarations: [ CourseSearchComponent, TestHostComponent ],
			schemas: [ NO_ERRORS_SCHEMA ],
		})
		.compileComponents();
	}));

	describe('Component Alone', () => {
		let component: CourseSearchComponent;
		let fixture: ComponentFixture<CourseSearchComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(CourseSearchComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
		});
	});
	describe('Test Host Component', () => {
		let component: TestHostComponent;
		let fixture: ComponentFixture<TestHostComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(TestHostComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
		});

		it('should search item by submit', () => {
			// Arrange
			const selectButton: string = '.course-search-form';
			const resultQuery: string = dummyData.query;

			// Act
			const buttonElement: DebugElement = fixture.debugElement.query(By.css(selectButton));
			buttonElement.triggerEventHandler('submit', null);

			// Assert
			expect(component.searchedQuery.value).toBe(resultQuery);
		});
	});

});
