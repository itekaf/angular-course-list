import * as uuid from 'uuid/v4';
import { CourseModel } from 'src/app/shared/models';
import { FilterByQueryPipe } from './filter-by-query.pipe';

describe('FilterByQueryPipe', () => {
	const pipe = new FilterByQueryPipe();
	const dummyData = {
		coruses: [
			new CourseModel(uuid(), 'Dummy InClUde example 1'),
			new CourseModel(uuid(), 'Dummy include example 2'),
			new CourseModel(uuid(), 'Dummy skip example 3'),
		],
		query: 'include',
	};

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('should find courses by title by the query without letter case', () => {
		// Arrange
		const query = dummyData.query;
		const inputItems = dummyData.coruses;
		// tslint:disable-next-line: no-magic-numbers
		const resultItem = dummyData.coruses.slice(0, 2);

		// Act
		const result = pipe.transform(inputItems, query);

		// Assert
		expect(result).toEqual(resultItem);
	});
});
