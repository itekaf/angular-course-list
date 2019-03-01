import uuid from 'uuid/v4';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Config } from 'src/app/shared';
import { CourseModel } from 'src/app/shared/models';
import { CourseItemComponent } from './course-item.component';
import { ItemDurationPipe } from '../../pipes';

const dummyData = {
	icons:  new Map([
		['edit', Config.icons.get('plus')],
		['trash', Config.icons.get('plus')],
		['clock', Config.icons.get('plus')],
		['calendar', Config.icons.get('plus')],
	]),
	model: new CourseModel(uuid(), 'Dummy title')
};

@Component({
	template: `
		<app-course-item
			[icons]="icons"
			[courseItem]="courseItem"
			(editItem)="onEditItem($event)"
			(removeItem)="onRemoveItem($event)"
		></app-course-item>
	`,
})
class TestHostComponent {
	public icons: Map<string, IconDefinition> = dummyData.icons;
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

		it('should remove item by click', () => {
			// Arrange
			const inputModel = dummyData.model;
			component.courseItem = inputModel;

			// Assert
			component.removeEvent.subscribe((output: string) => {
				expect(output).toBe(inputModel.id);
			});

			// Act
			component.onRemove();
		});

		it('should edit item by click', () => {
			// Arrange
			const inputModel = dummyData.model;
			component.courseItem = inputModel;

			// Assert
			component.editEvent.subscribe((output: string) => {
				expect(output).toBe(inputModel.id);
			});

			// Act
			component.onEdit();
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
			const selectorItemTitle: string = '.box-course-item__title';
			const resultItemTitle: string = dummyData.model.title;

			// Act
			const nativeElement: HTMLElement = fixture.debugElement.nativeElement;
			const titleElement: HTMLElement = nativeElement.querySelector(selectorItemTitle);

			// Assert
			expect(titleElement.textContent).toContain(resultItemTitle);
		});
	});
});
