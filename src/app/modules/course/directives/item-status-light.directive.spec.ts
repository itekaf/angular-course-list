import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemStatusLightEnum } from '../enums/item-status-light.enum';
import { ItemStatusLightDirective } from './item-status-light.directive';

const setDate = (value: number): Date => {
	const currentDate = new Date();
	currentDate.setDate(currentDate.getDate() + value);
	return currentDate;
};

const dateDifference = {
	new: -1,
	future: 1,
	outOfDate: -16,
};

@Component({
	template: `
		<div [appItemStatusLight]="new">Is New</div>
		<div [appItemStatusLight]="future">Is Future</div>
		<div [appItemStatusLight]="outOfDate">Is out of date</div>
		<div>No directive</div>
	`,
})
class TestHostComponent {
	public new: Date = setDate(dateDifference.new);
	public future: Date = setDate(dateDifference.future);
	public outOfDate: Date = setDate(dateDifference.outOfDate);
}

describe('ItemStatusLightDirective', () => {
	let fixture: ComponentFixture<TestHostComponent>;
	let component: TestHostComponent;
	let directiveElements: DebugElement[];

	beforeEach(() => {
		fixture = TestBed.configureTestingModule({
			declarations: [ ItemStatusLightDirective, TestHostComponent],
		}).createComponent(TestHostComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();

		directiveElements = fixture.debugElement.queryAll(By.directive(ItemStatusLightDirective));
	});

	it('should create an instance', () => {
		// Assert
		expect(component).toBeTruthy();
	});

	it('should have three elements with directive', () => {
		// Arrange
		const elementsCount = 3;

		// Act
		const resultCount = directiveElements.length;

		// Assert
		expect(resultCount).toBe(elementsCount);
	});

	it('should have new light of element', () => {
		// Arrange
		const newElement = directiveElements[0];

		// Act
		const resultLight = newElement.nativeElement.style.borderColor;

		// Assert
		expect(resultLight).toBe(ItemStatusLightEnum.new);
	});

	it('should have future light of element', () => {
		// Arrange
		const futureElement = directiveElements[1];

		// Act
		const resultLight = futureElement.nativeElement.style.borderColor;

		// Assert
		expect(resultLight).toBe(ItemStatusLightEnum.future);
	});

	it('should have default light of element', () => {
		// Arrange
		const secondElement = 2;
		const defaultElement = directiveElements[secondElement];

		// Act
		const resultLight = defaultElement.nativeElement.style.borderColor;

		// Assert
		expect(resultLight).toBe(ItemStatusLightEnum.default);
	});

	it('bare <div> should not have a style property', () => {
		// Arrange
		const selectorNoDirective = 'div:not([appItemStatusLight])';
		const noDirectiveElement = fixture.debugElement.query(By.css(selectorNoDirective));

		// Act
		const resultLight = noDirectiveElement.properties['border-color'];

		// Assert
		expect(resultLight).toBeUndefined();
	});
});
