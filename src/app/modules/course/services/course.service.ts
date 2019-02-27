import { Injectable } from '@angular/core';

import { Config } from 'src/app/shared';
import { CourseModel } from 'src/app/shared/models';

const defaultData: CourseModel[] = [
	new CourseModel(1, 'Course 1', 1, true, null, null, new Date()),
	// tslint:disable-next-line: no-magic-numbers
	new CourseModel(2, 'Course 2', 65, true, null, 'Description', new Date()),
	// tslint:disable-next-line: no-magic-numbers
	new CourseModel(3, 'Course 3', 2, false, null, 'Description', new Date(1)),
];

@Injectable({
	providedIn: 'root'
})
export class CourseService {
	public items: CourseModel[] = defaultData;

	constructor() {	}

	public read(): CourseModel[] {
		const result = this.items.map((item: CourseModel) => {
			const itemImagePath = item.imagePath || Config.default.imagePath;
			item.imagePath = itemImagePath;
			return item;
		});
		return result;
	}

	public create(data: CourseModel): CourseModel[] {
		this.items.push(data);
		const result = this.items;
		return result;
	}

	public update(id: number, data: CourseModel): CourseModel[] {
		this.items = this.items.map((item: CourseModel) => {
			return item.id === id ? data : item;
		});
		const result = this.items;
		return result;
	}

	public delete(id: number): CourseModel[] {
		this.items = this.items.filter((item: CourseModel) => item.id !== id );
		const result = this.items;
		return result;
	}

	public getById(id: number): CourseModel | undefined {
		const result = this.items.find((item: CourseModel) => item.id === id);
		return result;
	}
}
