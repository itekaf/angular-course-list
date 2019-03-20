import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'itemDuration'
})
export class ItemDurationPipe implements PipeTransform {
	private minutsInHour: number = 60;
	private hours: number;
	private minutes: number;

	public transform(value: number): string {
		if (!value) { return ''; }
		const hours = this.getHours(value);
		const minutes = this.getMinutes(value);
		const result = this.buildTemplate(hours, minutes);
		return result;
	}

	private getHours(value: number): number {
		this.hours = Math.floor(value / this.minutsInHour);
		return this.hours;
	}

	private getMinutes(value: number, hours: number = this.hours): number {
		this.minutes = value - (hours * this.minutsInHour);
		return this.minutes;
	}

	private buildTemplate(
		hours: number = this.hours,
		minutes: number = this.minutes
	): string {
		const hoursTemplate = `${hours ? hours + ' h' : ''}`;
		const minutesTemplate = `${minutes ? minutes + ' min' : ''}`;
		const resultTemplate = `${hoursTemplate} ${minutesTemplate}`.trim();
		return resultTemplate;
	}
}
