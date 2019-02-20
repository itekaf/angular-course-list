import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseModel } from 'src/app/shared/models';
import { CourseListComponent } from './course-list.component';
import { FilterByQueryPipe } from '../pipes/filter-by-query.pipe';
import { SortedByPipe } from '../pipes/sorted-by.pipe';

const dummyData = {
	title: 'Dummy title',
	icons: new Map([
		['plus', faTrash ]
	]),
	items: [
		new CourseModel(1, 'Dummy title 1'),
		new CourseModel(2, 'Dummy title 2'),
	],
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
				FilterByQueryPipe,
				SortedByPipe,
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
			const inputData = dummyData.items;
			const outputData = dummyData.items.concat(dummyData.items);
			component.courses = inputData;

			// Act
			component.onLoadMore();

			// Assert
			expect(component.courses).toEqual(outputData);
		});
		it('should remove item', () => {
			// Arrange
			const removeItem = dummyData.items[0];
			const inputData =  dummyData.items;
			const outputData = [ dummyData.items[1] ];
			component.courses = inputData;

			// Act
			component.onRemoveItem(removeItem);

			// Assert
			expect(component.courses).toEqual(outputData);
		});
		it('should search item', () => {
			// Arrange
			const inputQuery = '1';
			const outputCount = 1;
			const itemsSelector = '.block-course-list';
			console.log(dummyData.items);
			component.courses = dummyData.items;

			// Act
			component.onSearchItem(inputQuery);
			const items = fixture.nativeElement.querySelector(itemsSelector);
			fixture.detectChanges();

			// Assert
			expect(items.children.length).toEqual(outputCount);
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
