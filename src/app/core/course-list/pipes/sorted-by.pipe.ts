import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from 'src/app/shared/interface';

@Pipe({
	name: 'sortedBy'
})
export class SortedByPipe implements PipeTransform {
	// TODO: RL: Refactor this + create test
	public transform<K extends keyof ICourse>(courses: ICourse[], key: K, value: boolean = true): ICourse[] {
		if (!courses || !key) {
			return courses;
		}
		return courses.sort((a: ICourse, b: ICourse) => {
			return value ? this.sortedByUp(a, b, key) : this.sortedByDown(a, b, key) ;
		});
	}

	private sortedByDown<K extends keyof ICourse>(a: ICourse, b: ICourse, key: K): number {
		if (a[key] > b[key]) {
			return -1;
		} else if (a[key] < b[key]) {
			return 1;
		} else {
			return 0;
		}
	}

	private sortedByUp<K extends keyof ICourse>(a: ICourse, b: ICourse, key: K): number {
		if (a[key] < b[key]) {
			return -1;
		} else if (a[key] > b[key]) {
			return 1;
		} else {
			return 0;
		}
	}
}
