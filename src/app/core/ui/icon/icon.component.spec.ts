/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';

import { IconComponent } from './icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Config } from 'src/app/shared';

const dummyData = {
	icon: Config.icons.get('plus'),
	title: 'Dummy title',
	text: 'Dummy text',
	className: 'dummy-class',
};

@Component({
	template: `
		<app-icon
			[icon]="icon"
			[text]="text"
			[title]="title"
			[className]="className"
		></app-icon>
	`,
})
class TestHostComponent {
	public text: string = dummyData.text;
	public title: string = dummyData.title;
	public icon: IconDefinition = dummyData.icon;
	public className: string = dummyData.className;
}

describe('IconComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ FontAwesomeModule ],
			declarations: [ IconComponent, TestHostComponent ]
		})
		.compileComponents();
	}));

	describe('Component alone', () => {
		let component: IconComponent;
		let fixture: ComponentFixture<IconComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(IconComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
		});

		it('should have default properties', () => {
			// Arrange
			const selectorIcon = '.app-icon';

			// Act
			const iconElement = fixture.nativeElement.querySelector(selectorIcon);

			// Assert
			expect(iconElement).toBeTruthy();
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

		it('should change input properties', () => {
			// Arrange
			const selectChild = `.${dummyData.className}-icon`;
			const selectorIcon = `.${dummyData.className}__icon`;
			const selectorText = `.${dummyData.className}__text`;
			const selectorTitle = `.${dummyData.className}__title`;

			const resultText = dummyData.text;
			const resultTitle = dummyData.title;

			// Act
			const debugElement = fixture.debugElement;

			const childElement = debugElement.query(By.css(selectChild));
			const iconElement = debugElement.query(By.css(selectorIcon));
			const textElement = debugElement.query(By.css(selectorText)).nativeElement;
			const titleElement = debugElement.query(By.css(selectorTitle)).nativeElement;

			// Assert
			expect(childElement).toBeTruthy();
			expect(iconElement).toBeTruthy();
			expect(textElement.textContent).toBe(resultText);
			expect(titleElement.textContent).toBeTruthy(resultTitle);
		});
	});
});
