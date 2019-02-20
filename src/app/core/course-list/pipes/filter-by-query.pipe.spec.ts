import { CourseModel } from 'src/app/shared/models';
import { FilterByQueryPipe } from './filter-by-query.pipe';

const dummyData = {
	coruses: [
		new CourseModel(1, 'Dummy Title 1'),
		new CourseModel(1, 'Dummy tiTle 2')
	],
	query: '1'
};

describe('FilterByQueryPipe', () => {
	it('create an instance', () => {
		const pipe = new FilterByQueryPipe();
		expect(pipe).toBeTruthy();
	});

	it('should be find courses by query', () => {
		// Arrange
		const query = dummyData.query;
		const pipe = new FilterByQueryPipe();
		const inputItems = dummyData.coruses;
		const resultItem = dummyData.coruses.slice(0, 1);

		// Act
		const result = pipe.transform(inputItems, query);

		// Assert
		expect(result).toEqual(resultItem);
	});
});
