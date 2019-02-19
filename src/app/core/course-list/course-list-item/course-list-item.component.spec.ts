import { By } from '@angular/platform-browser';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component, DebugElement } from '@angular/core';

import { Config } from 'src/app/shared';
import { ICourse } from 'src/app/shared/interface';
import { CourseModel } from 'src/app/shared/models';
import { CourseListItemComponent } from './course-list-item.component';

const dummyData = {
	icons:  new Map([
		['edit', Config.icons.get('plus')],
		['trash', Config.icons.get('plus')],
		['clock', Config.icons.get('plus')],
		['calendar', Config.icons.get('plus')],
	]),
	imgPath: 'https://via.placeholder.com/100',
	model: new CourseModel(1, 'Angular Vasey')
};

@Component({
	template: `
		<app-course-list-item
			[icons]="icons"
			[defaultImagePath]="defaultImagePath"
			[courseItem]="courseItem"
			(removeItem)="onRemoveItem($event)"
			(editItem)="onEditItem($event)"
		></app-course-list-item>
	`,
})
class TestHostComponent {
	public icons: Map<string, IconDefinition> = dummyData.icons;
	public defaultImagePath: string = dummyData.imgPath;
	public courseItem: ICourse = dummyData.model;
	public removeItem: ICourse;
	public editItem: ICourse;
	public onRemoveItem(item: ICourse): void {
		this.removeItem = item;
	}
	public onEditItem(item: ICourse): void {
		this.editItem = item;
	}
}
describe('CourseListItemComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ FontAwesomeModule ],
			declarations: [
				TestHostComponent,
				CourseListItemComponent,
			],
			schemas: [ NO_ERRORS_SCHEMA ],
		})
		.compileComponents();
	}));

	describe('Component Alone', () => {
		let component: CourseListItemComponent;
		let fixture: ComponentFixture<CourseListItemComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(CourseListItemComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
		});

		it('should have default properties', () => {
			// Arrange
			const selectorImage: string = '.box-course-item__img img';
			const resultImagePath: string = Config.default.imagePath;

			// Act
			const nativeElement: HTMLElement = fixture.debugElement.nativeElement;
			const imageElement: HTMLElement = nativeElement.querySelector(selectorImage);

			// Assert
			expect(imageElement.getAttribute('src')).toBe(resultImagePath);
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
			const selectorIcon: string = '.box-course-item__button svg';
			const selectorImage: string = '.box-course-item__img img';
			const selectorItemTitle: string = '.box-course-item__title';
			const resultImagePath: string = dummyData.imgPath;
			const resutIcon: string = 'plus';
			const resultItemTitle = dummyData.model.title;

			// Act
			const nativeElement: HTMLElement = fixture.debugElement.nativeElement;
			const iconElement: HTMLElement = nativeElement.querySelector(selectorIcon);
			const imageElement: HTMLElement = nativeElement.querySelector(selectorImage);
			const titleElement: HTMLElement = nativeElement.querySelector(selectorItemTitle);

			// Assert
			expect(iconElement.dataset.icon).toBe(resutIcon);
			expect(titleElement.textContent).toBe(resultItemTitle);
			expect(imageElement.getAttribute('src')).toBe(resultImagePath);
		});

		it('should remove item', () => {
			// Arrange
			const selectorButtonRemove: string = '.box-course-item__remove';

			// Act
			const buttonElement: DebugElement = fixture.debugElement.query(By.css(selectorButtonRemove));
			buttonElement.triggerEventHandler('click', null);

			// Assert
			expect(component.removeItem).toEqual(dummyData.model);
		});

		it('should edit item', () => {
			// Arrange
			const selectorButtonRemove: string = '.box-course-item__edit';

			// Act
			const buttonElement: DebugElement = fixture.debugElement.query(By.css(selectorButtonRemove));
			buttonElement.triggerEventHandler('click', null);

			// Assert
			expect(component.editItem).toEqual(dummyData.model);
		});
	});
});
