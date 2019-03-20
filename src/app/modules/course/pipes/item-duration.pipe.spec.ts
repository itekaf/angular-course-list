import { ItemDurationPipe } from './item-duration.pipe';

describe('ItemDurationPipe', () => {
	const pipe = new ItemDurationPipe();
	const dummyData = {
		full: 65,
		hours: 60,
		minutes: 30,
	};

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('should return full template with hours and minutes', () => {
		// Arrange
		const inputDuration = dummyData.full;
		const resultTemplate = `1 h 5 min`;

		// Act
		const resultOutput = pipe.transform(inputDuration);

		// Assert
		expect(resultOutput).toBe(resultTemplate);
	});

	it('should return only hours', () => {
		// Arrange
		const inputDuration = dummyData.hours;
		const resultTemplate = `1 h`;

		// Act
		const resultOutput = pipe.transform(inputDuration);

		// Assert
		expect(resultOutput).toBe(resultTemplate);
	});

	it('should return only minutes', () => {
		// Arrange
		const inputDuration = dummyData.minutes;
		const resultTemplate = `30 min`;

		// Act
		const resultOutput = pipe.transform(inputDuration);

		// Assert
		expect(resultOutput).toBe(resultTemplate);
	});
});
