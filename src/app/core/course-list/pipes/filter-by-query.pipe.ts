import { Pipe, PipeTransform } from '@angular/core';

import { ICourse } from 'src/app/shared/interface';

@Pipe({
	name: 'filterByQuery'
})
export class FilterByQueryPipe implements PipeTransform {

	// TODO: RL: Create test
	public transform(courses: ICourse[], query: string): ICourse[] {
		const result = (!query || !courses) ? courses : this.getEmptyItems(courses, query);
		return result;
	}

	private getEmptyItems(courses: ICourse[], query: string): ICourse[] {
		const result = courses.filter((course: ICourse) => {
			return course.title.toLocaleLowerCase().includes(query.toLocaleLowerCase());
		});
		return result;
	}
}
