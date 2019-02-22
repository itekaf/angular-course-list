import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Config } from 'src/app/shared';
import { SortedItemComponent } from './sorted-item.component';

const dummyData = {
	icons: {
		asc: Config.icons.get('plus'),
		desc: Config.icons.get('minus')
	},
	className: 'dummy-class',
	dummyContent: 'Dummy content',
	defaultSortIcon: Config.icons.get('dummy'),
};

@Component({
	template: `
		<app-sorted-item
			[icons]="icons"
			[className]="className"
			[defaultSortIcon]="defaultSortIcon"
			(clickEvent)="onClick()"
		>
			{{dummyContent}}
		</app-sorted-item>
	`,
})
class TestHostComponent {
	public icons = dummyData.icons;
	public className = dummyData.className;
	public dummyContent = dummyData.dummyContent;
	public defaultSortIcon = dummyData.defaultSortIcon;

	public sortClicked: boolean = false;

	public onClick(): void {
		this.sortClicked = !this.sortClicked;
	}
}
describe('SortedItemComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ SortedItemComponent, TestHostComponent ],
			schemas: [ NO_ERRORS_SCHEMA ],
		})
		.compileComponents();
	}));

	describe('Component alone', () => {
		let component: SortedItemComponent;
		let fixture: ComponentFixture<SortedItemComponent>;

		beforeEach(() => {
			fixture = TestBed.createComponent(SortedItemComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
		});

		it('should have default properties', () => {
			// Arange
			// TODO: RL: How to test it?

			// Act

			// Assert
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
			// Arange
			// TODO: RL: How to test it?

			// Act

			// Assert
		});

		it('should change icon by click', () => {
			// Arange
			// TODO: RL: How to test it?

			// Act

			// Assert
		});
	});
});
