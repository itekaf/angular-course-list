import { Pipe, PipeTransform } from '@angular/core';

import { CourseModel } from 'src/app/shared/models';

@Pipe({
	name: 'filterByQuery'
})
export class FilterByQueryPipe implements PipeTransform {
	public transform(courses: CourseModel[], query: string): CourseModel[] {
		return (!query || !courses) ? courses : this.getClearItems(courses, query);
	}

	// tslint:disable-next-line: prefer-function-over-method
	public getClearItems(courses: CourseModel[], query: string): CourseModel[] {
		return courses.filter((course: CourseModel) => {
			return course.name.toLocaleLowerCase().includes(query.toLocaleLowerCase());
		});
	}
}
