import * as uuid from 'uuid/v4';
import { CourseModel } from 'src/app/shared/models';
import { SortedByPipe } from './sorted-by.pipe';

describe('SortedByPipe', () => {
	const pipe = new SortedByPipe();
	const dummyItems = [
		new CourseModel(uuid(), 'Dummy title 1'),
		new CourseModel(uuid(), 'Dummy title 2'),
	];

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('should sort by descending', () => {
		// Arrange
		const sortedItems = dummyItems;
		const unsortedItems = dummyItems.reverse();

		// Act
		const resultSortedItems = pipe.transform(unsortedItems, 'title', true);

		// Assert
		expect(resultSortedItems).toEqual(sortedItems);
	});

	it('should sort by ascending', () => {
		// Arrange
		const sortedItems = dummyItems.reverse();
		const unsortedItems = dummyItems;

		// Act
		const resultSortedItems = pipe.transform(unsortedItems, 'title', false);

		// Assert
		expect(resultSortedItems).toEqual(sortedItems);
	});
});
