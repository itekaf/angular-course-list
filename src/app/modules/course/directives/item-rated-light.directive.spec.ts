import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { ItemRatedLightEnum } from '../enums/item-rated-light.enum';
import { ItemRatedLightDirective } from './item-rated-light.directive';

@Component({
	template: `
		<div [appItemRatedLight]='on'>Directive On</div>
		<div [appItemRatedLight]='off'>Directive Off</div>
		<div>Directive Missing</div>
	`,
})
class TestHostComponent {
	public on = true;
	public off = false;
}

describe('ItemRatedLightDirective', () => {
	let fixture: ComponentFixture<TestHostComponent>;
	let component: TestHostComponent;
	let directivesElements: DebugElement[];

	beforeEach(() => {
		fixture = TestBed.configureTestingModule({
			declarations: [ ItemRatedLightDirective, TestHostComponent ]
		})
		.createComponent(TestHostComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();

		directivesElements = fixture.debugElement.queryAll(By.directive(ItemRatedLightDirective));
	});

	it('should create an instance', () => {
		// Assert
		expect(component).toBeTruthy();
	});

	it('should have two rated items elements', () => {
		// Arrange
		const itemsCount = 2;

		// Act
		const resultCount = directivesElements.length;

		// Assert
		expect(resultCount).toBe(itemsCount);
	});

	it('should lighted 1st element as "top"', () => {
		// Arange
		const topRatedElement = directivesElements[0];

		// Act
		const resultLight = topRatedElement.nativeElement.style.backgroundColor;

		// Assert
		expect(resultLight).toBe(ItemRatedLightEnum.top);
	});

	it('should lighted 2st element as "default"', () => {
		// Arange
		const noRatedElement = directivesElements[1];

		// Act
		const resultLight = noRatedElement.nativeElement.style.backgroundColor;

		// Assert
		expect(resultLight).toBe(ItemRatedLightEnum.default);
	});

	it('bare element should not have a style property', () => {
		// Arrange
		const selectorNoDirective = 'div:not([appItemRatedLight])';
		const noDirectiveElement = fixture.debugElement.query(By.css(selectorNoDirective));

		// Act
		const resultLight = noDirectiveElement.properties['background-color'];

		// Assert
		expect(resultLight).toBeUndefined();
	});
});
