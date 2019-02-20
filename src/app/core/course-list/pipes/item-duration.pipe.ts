import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'itemDuration'
})
export class ItemDurationPipe implements PipeTransform {
	private minutsInHour: number = 60;
	private houres: number;
	private minutes: number;
	public transform(value: number): string {
		if (!value) { return ''; }
		const houres = this.getHoures(value);
		const minutes = this.getMinutes(value);
		return this.generateTemplate(houres, minutes);
	}

	private generateTemplate(
		houres: number = this.houres,
		minutes: number = this.minutes
	): string {
		const houresTemplate = `${houres ? houres + ' h' : ''}`;
		const minutesTemplate = `${minutes ? minutes + ' min' : ''}`;
		return `${houresTemplate} ${minutesTemplate}`.trim();
	}

	private getHoures(value: number): number {
		this.houres = Math.floor(value / this.minutsInHour);
		return this.houres;
	}

	private getMinutes(value: number, houres: number = this.houres): number {
		this.minutes = value - (houres * this.minutsInHour);
		return this.minutes;
	}
}
