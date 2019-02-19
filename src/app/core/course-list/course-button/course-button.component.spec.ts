import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Config } from 'src/app/shared';
import { CourseButtonComponent } from './course-button.component';
import { By } from '@angular/platform-browser';

const dummyData = {
	text: 'Dummy text',
	type: 'Submit',
	icon: Config.icons.get('plus'),
	className: 'button-dummy',
};

@Component({
	template: `
		<app-course-button
			[text]="text"
			[icon]="icon"
			[className]="className"
			[type]="type"
			(clickButton)="onClickButton()"
		></app-course-button>
	`,
})
class TestHostComponent {
	public text: string = dummyData.text;
	public icon: IconDefinition = dummyData.icon;
	public className: string = dummyData.className;
	public type: string = dummyData.type;
	public eventClick: boolean;
	public onClickButton(): void { this.eventClick = true; }
}
describe('CourseButtonComponent', () => {

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ FontAwesomeModule ],
			declarations: [ CourseButtonComponent, TestHostComponent ]
		})
		.compileComponents();
	}));

	describe('Component Alone', () => {
		let component: CourseButtonComponent;
		let fixture: ComponentFixture<CourseButtonComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(CourseButtonComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
		});

		it('should have default properties', () => {
			// Arrange
			const selectorButton: string = 'button';
			const resultType: string = 'button';
			const resultClassName: string = 'button-transparent';

			// Act
			const nativeElement: HTMLElement = fixture.debugElement.nativeElement;
			const buttonElement: HTMLElement = nativeElement.querySelector(selectorButton);

			// Assert
			expect(buttonElement.getAttribute('type')).toBe(resultType);
			expect(buttonElement.classList.contains(resultClassName)).toBeTruthy();
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

		it('should change default properties and set ', () => {
			// Arrange
			const selectorText = `.${dummyData.className}__text`;
			const selectorIcon = `.${dummyData.className}__img svg`;
			const selectorButton = 'button';
			const resultText: string = dummyData.text;
			const resultIcon: string = 'plus';
			const resultType: string = dummyData.type;

			// Act
			const nativeElement: HTMLElement = fixture.debugElement.nativeElement;
			const textElement: HTMLElement = nativeElement.querySelector(selectorText);
			const iconElement: HTMLElement = nativeElement.querySelector(selectorIcon);
			const buttonElement: HTMLElement = nativeElement.querySelector(selectorButton);

			// Assert
			expect(textElement).toBeTruthy();
			expect(iconElement).toBeTruthy();
			expect(textElement.textContent).toBe(resultText);
			expect(iconElement.dataset.icon).toBeTruthy(resultIcon);
			expect(buttonElement.getAttribute('type')).toBe(resultType);
		});

		it('should click button', () => {
			// Arrange
			const selectButton: string = 'button';

			// Act
			const buttonElement = fixture.debugElement.query(By.css(selectButton));
			buttonElement.triggerEventHandler('click', null);

			// Assert
			expect(component.eventClick).toBeTruthy();
		});
	});

});
