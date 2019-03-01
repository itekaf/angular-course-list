import uuid from 'uuid/v4';
import { CourseService } from './course.service';
import { CourseModel } from 'src/app/shared/models';
import { Config } from 'src/app/shared';

const dummyData = [
	new CourseModel(uuid(), 'Dummy 1'),
	// tslint:disable-next-line: no-magic-numbers
	new CourseModel(uuid(), 'Dummy 2'),
];

describe('CourseService', () => {
	let service: CourseService;
	beforeEach(() => {
		service = new CourseService();
		service.items = dummyData;
	});

	describe('Service alone', () => {
		it('should be created', () => {
			expect(service).toBeTruthy();
		});

		it('should return data array and set default properties', () => {
			// Arrange
			const resultItems: CourseModel[] = dummyData.map((item: CourseModel) => {
				item.imagePath = Config.default.imagePath;
				return item;
			});

			// Act
			const output: CourseModel[] = service.read();

			// Assert
			expect(output).toEqual(resultItems);
		});
		it('should add new item and return data array', () => {
			// Arrange
			const newItemId = '3';
			const newItemModel = new CourseModel(newItemId, 'Dummy 3');
			const resultItems = dummyData.concat([newItemModel]);

			// Act
			const output = service.create(newItemModel);

			// Assert
			expect(output).toEqual(resultItems);
		});
		it('should remove item and return data array', () => {
			// Arrange
			const removeItem = dummyData[1];
			const resultItems = dummyData.filter((item: CourseModel) => item.id !== removeItem.id);

			// Act
			const output = service.delete(removeItem.id);

			// Assert
			expect(output).toEqual(resultItems);
		});
		it('should update item and return data array', () => {
			// Arrange
			const updateItemId = uuid();
			const updateItemModel = new CourseModel(updateItemId, 'Dummy 4');
			const resultItems = dummyData.map((item: CourseModel) => {
				return item.id === updateItemId ? updateItemModel : item;
			});

			// Act
			const output = service.update(updateItemId, updateItemModel);

			// Assert
			expect(output).toEqual(resultItems);
		});
	});
});
