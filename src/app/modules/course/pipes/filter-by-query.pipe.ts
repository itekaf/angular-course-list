import { Pipe, PipeTransform } from '@angular/core';

import { CourseModel } from 'src/app/shared/models';

@Pipe({
	name: 'filterByQuery'
})
export class FilterByQueryPipe implements PipeTransform {
	public transform(courses: CourseModel[], query: string): CourseModel[] {
		const result = (!query || !courses) ? courses : this.getClearItems(courses, query);
		return result;
	}

	// tslint:disable-next-line: prefer-function-over-method
	private getClearItems(courses: CourseModel[], query: string): CourseModel[] {
		const result = courses.filter((course: CourseModel) => {
			return course.title.toLocaleLowerCase().includes(query.toLocaleLowerCase());
		});
		return result;
	}
}
