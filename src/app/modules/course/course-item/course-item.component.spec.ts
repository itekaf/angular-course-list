import { By } from '@angular/platform-browser';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component, DebugElement } from '@angular/core';

import { Config } from 'src/app/shared';
import { CourseModel } from 'src/app/shared/models';
import { ItemDurationPipe } from '../pipes/item-duration.pipe';
import { CourseItemComponent } from './course-item.component';

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
		<app-course-item
			[icons]="icons"
			[courseItem]="courseItem"
			[defaultImagePath]="defaultImagePath"
			(editItem)="onEditItem($event)"
			(removeItem)="onRemoveItem($event)"
		></app-course-item>
	`,
})
class TestHostComponent {
	public icons: Map<string, IconDefinition> = dummyData.icons;
	public defaultImagePath: string = dummyData.imgPath;
	public courseItem: CourseModel = dummyData.model;
	public removeItem: CourseModel;
	public editItem: CourseModel;
	public onRemoveItem(item: CourseModel): void {
		this.removeItem = item;
	}
	public onEditItem(item: CourseModel): void {
		this.editItem = item;
	}
}
describe('CourseItemComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ FontAwesomeModule ],
			declarations: [
				TestHostComponent,
				CourseItemComponent,
				ItemDurationPipe,
			],
			schemas: [ NO_ERRORS_SCHEMA ],
		})
		.compileComponents();
	}));

	describe('Component Alone', () => {
		let component: CourseItemComponent;
		let fixture: ComponentFixture<CourseItemComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(CourseItemComponent);
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
			const selectorImage: string = '.box-course-item__img img';
			const selectorItemTitle: string = '.box-course-item__title';

			const resultImagePath: string = dummyData.imgPath;
			const resultItemTitle: string = dummyData.model.title;

			// Act
			const nativeElement: HTMLElement = fixture.debugElement.nativeElement;
			const imageElement: HTMLElement = nativeElement.querySelector(selectorImage);
			const titleElement: HTMLElement = nativeElement.querySelector(selectorItemTitle);

			// Assert
			expect(titleElement.textContent).toContain(resultItemTitle);
			expect(imageElement.getAttribute('src')).toBe(resultImagePath);
		});

		it('should remove item', () => {
			// // Arrange
			// const selectorButtonRemove: string = '.box-course-item__remove';

			// // Act
			// const buttonElement: DebugElement = fixture.debugElement.query(By.css(selectorButtonRemove));
			// buttonElement.triggerEventHandler('click', null);

			// // Assert
			// expect(component.removeItem).toEqual(dummyData.model);
		});

		it('should edit item', () => {
			// // Arrange
			// const selectorButtonRemove: string = '.box-course-item__edit';

			// // Act
			// const buttonElement: DebugElement = fixture.debugElement.query(By.css(selectorButtonRemove));
			// buttonElement.triggerEventHandler('click', null);

			// // Assert
			// expect(component.editItem).toEqual(dummyData.model);
		});
	});
});
