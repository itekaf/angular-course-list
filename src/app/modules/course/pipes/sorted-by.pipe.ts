import { Pipe, PipeTransform } from '@angular/core';

import { CourseModel } from 'src/app/shared/models';

@Pipe({
	name: 'sortedBy'
})
export class SortedByPipe implements PipeTransform {
	public transform<K extends keyof CourseModel>(courses: CourseModel[], key: K, value: boolean = true): CourseModel[] {
		const result = (!courses || !key) ? courses : this.sorted(courses, key, value);
		return result;
	}

	private sorted<K extends keyof CourseModel>(courses: CourseModel[], key: K, value: boolean = true): CourseModel[] {
		const result = courses.sort((a: CourseModel, b: CourseModel) => {
			return value ? this.sortedByKey(a, b, key) : this.sortedByKey(a, b, key) * -1 ;
		});
		return result;
	}
	// tslint:disable-next-line: prefer-function-over-method
	private sortedByKey<K extends keyof CourseModel>(a: CourseModel, b: CourseModel, key: K): number {
		if (a[key] < b[key]) {
			return -1;
		} else if (a[key] > b[key]) {
			return 1;
		} else {
			return 0;
		}
	}
}
