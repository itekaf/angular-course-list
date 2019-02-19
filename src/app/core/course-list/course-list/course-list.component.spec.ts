import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseModel } from 'src/app/shared/models';
import { CourseListComponent } from './course-list.component';
import { By } from '@angular/platform-browser';

const dummyData = {
	title: 'Dummy title',
	icons: new Map([
		['plus', faTrash ]
	]),
	moreText: 'Dummy more',
};
@Component({
	template: `
		<app-course-list
			[title]="title"
			[icons]="icons"
			[loadMoreText]="loadMoreText"
		></app-course-list>
	`,
})
class TestHostComponent {
	public title: string = dummyData.title;
	public icons: Map<string, IconDefinition> = dummyData.icons;
	public loadMoreText: string = dummyData.moreText;
}
describe('CourseListComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				FormsModule,
				FontAwesomeModule
			],
			declarations: [
				TestHostComponent,
				CourseListComponent,
			],
			schemas: [ NO_ERRORS_SCHEMA ],
		})
		.compileComponents();
	}));

	describe('Component Alone', () => {
		let component: CourseListComponent;
		let fixture: ComponentFixture<CourseListComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(CourseListComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
		});

		it('should have default properties', () => {
			// Arrange
			const selectorTitle = '.course-list__title';
			const resultTitle = 'Find or add angular courses ...';

			// Act
			const nativeElement = fixture.debugElement.nativeElement;
			const titleElement = nativeElement.querySelector(selectorTitle);

			// Assert
			expect(titleElement.textContent).toBe(resultTitle);
		});

		it('should get courses list', () => {
			// Act
			expect(component.courses.length).not.toBe(0);
		});
		it('should load more', () => {
			// Arrange
			const firstItem = new CourseModel();
			const inputData = [ firstItem ];
			const outputData = [ firstItem, firstItem ];
			component.courses = inputData;

			// Act

			component.onLoadMore();

			// Assert
			expect(component.courses).toEqual(outputData);
		});
		it('should remove item', () => {
			// Arrange
			const firstItem = new CourseModel();
			const secondItem = new CourseModel(1);
			const inputData =  [ secondItem, firstItem ];
			const outputData = [ firstItem ];
			component.courses = inputData;

			// Act
			component.onRemoveItem(secondItem);

			// Assert
			expect(component.courses).toEqual(outputData);
		});
		it('should search item', () => {
			// Arrange
			const firstItem = new CourseModel(1, 'title 1');
			const secondItem = new CourseModel(1, 'title 2');

			const inputData =  [ firstItem, secondItem ];
			const outputData = [ firstItem ];
			component.courses = inputData;

			// Act
			component.onSearchItem('1');

			// Assert
			expect(component.courses).toEqual(outputData);
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

		it('should change default properties', () => {
			// Arrange
			const selectorTitle = '.course-list__title';
			const resultTitle =  dummyData.title;

			// Act
			const nativeElement = fixture.debugElement.nativeElement;
			const titleElement = nativeElement.querySelector(selectorTitle);

			// Assert
			expect(titleElement.textContent).toBe(resultTitle);
		});
	});
});
