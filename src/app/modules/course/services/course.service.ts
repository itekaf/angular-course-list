import { Injectable } from '@angular/core';

import { Config } from 'src/app/shared';
import { CourseModel } from 'src/app/shared/models';

@Injectable({
	providedIn: 'root'
})
export class CourseService {
	private defaultData: CourseModel[] = [
		new CourseModel(1, 'Course 1', 1, true, null, null, new Date()),
		// tslint:disable-next-line: no-magic-numbers
		new CourseModel(2, 'Course 2', 65, true, null, 'Description', new Date()),
		// tslint:disable-next-line: no-magic-numbers
		new CourseModel(3, 'Course 3', 2, false, null, 'Description', new Date(1)),
	];

	constructor() {	}

	public getList(): CourseModel[] {
		const items = this.defaultData;
		const result = items.map((item: CourseModel) => {
			item.imagePath = item.imagePath || Config.default.imagePath;
			return item;
		});
		return result;
	}

	public create(data: CourseModel): CourseModel[] {
		this.defaultData.push(data);
		return this.defaultData;
	}

	public edit(id: number, data: CourseModel): CourseModel[] {
		this.defaultData = this.defaultData.map((course: CourseModel) => {
			return course.id === id ? data : course;
		});
		return this.defaultData;
	}

	public remove(id: number): CourseModel[] {
		this.defaultData = this.defaultData.filter((x: CourseModel) => x.id !== id );
		return this.defaultData;
	}

	public getById(id: number): CourseModel | undefined {
		const result = this.defaultData.find((x: CourseModel) => x.id === id);
		return result;
	}
}
