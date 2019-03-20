import { By } from '@angular/platform-browser';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelComponent } from './label.component';

const dummyData = {
	for: 'dummy',
	text: 'Dummy text',
	className: 'dummy-class',
	dummyContent: 'Dummy content'
};

@Component({
	template: `
		<app-label
			[for]="for"
			[className]="className"
		>
			{{dummyContent}}
		</app-label>
	`,
})
class TestHostComponent {
	public for: string = dummyData.for;
	public className: string = dummyData.className;
	public dummyContent: string = dummyData.dummyContent;
}

describe('LabelComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ LabelComponent, TestHostComponent ],
			schemas: [ NO_ERRORS_SCHEMA ]
		})
		.compileComponents();
	}));

	describe('Component alone', () => {
		let component: LabelComponent;
		let fixture: ComponentFixture<LabelComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(LabelComponent);
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

		it('should change input properties', () => {
			// Arrange
			const selectLabel = 'label';
			const resultFor = dummyData.for;
			const resultContent = dummyData.dummyContent;
			const resultClassName = dummyData.className;

			// Act
			const labelDebugElement = fixture.debugElement.query(By.css(selectLabel));
			const labelNativeElement: HTMLElement = labelDebugElement.nativeElement;

			// Assert
			expect(labelNativeElement.textContent).toContain(resultContent);
			expect(labelNativeElement.getAttribute('for')).toBe(resultFor);
			expect(labelNativeElement.getAttribute('class')).toContain(resultClassName);
		});
	});

});
