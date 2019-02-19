import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListIconComponent } from './course-list-icon.component';

const dummyData = {
	icon: faTrash,
	text: 'Dummy text',
	title: 'Dummy title',
};

@Component({
	template: `
		<app-course-list-icon
			[icon]="icon"
			[text]="text"
			[title]="title"
		></app-course-list-icon>
	`,
})
class TestHostComponent {
	public icon: IconDefinition = dummyData.icon;
	public text: string = dummyData.text;
	public title: string = dummyData.title;
}
describe('CourseListIconComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ FontAwesomeModule ],
			declarations: [ CourseListIconComponent, TestHostComponent ]
		})
		.compileComponents();
	}));

	describe('Component Alone', () => {
		let component: CourseListIconComponent;
		let fixture: ComponentFixture<CourseListIconComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(CourseListIconComponent);
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

		it('should have a text', () => {
			// Arrange
			const selectorText: string = '.course-item-icon__text';
			const selectorTitle: string = '.course-item-icon__title';
			const selectorIcon: string = '.course-item-icon__img svg';
			const resultText: string = dummyData.text;
			const resultTitle: string = dummyData.title;
			const resultIcon: string = 'trash';

			// Act
			fixture.detectChanges();
			const nativeElement: HTMLElement = fixture.debugElement.nativeElement;
			const textElement: HTMLElement = nativeElement.querySelector(selectorText);
			const titleElement: HTMLElement = nativeElement.querySelector(selectorTitle);
			const iconElement: HTMLElement = nativeElement.querySelector(selectorIcon);

			// Assert
			expect(iconElement.dataset.icon).toBe(resultIcon);
			expect(textElement.textContent).toBe(resultText);
			expect(titleElement.textContent).toBe(resultTitle);
		});
	});

});
