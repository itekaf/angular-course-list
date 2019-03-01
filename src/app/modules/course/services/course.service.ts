import * as uuid from 'uuid/v4';
import { Injectable, OnInit } from '@angular/core';

import { Config } from 'src/app/shared';
import { CourseModel } from 'src/app/shared/models';

const defaultData: CourseModel[] = [
	new CourseModel(uuid(), 'Course 1', 1, true, null, null, new Date()),
	// tslint:disable-next-line: no-magic-numbers
	new CourseModel(uuid(), 'Course 2', 65, true, null, 'Description', new Date()),
	// tslint:disable-next-line: no-magic-numbers
	new CourseModel(uuid(), 'Course 3', 2, false, null, 'Description', new Date(1)),
];

@Injectable({
	providedIn: 'root'
})
export class CourseService {
	public items: CourseModel[] = defaultData;

	constructor() {	}

	public read(): CourseModel[] {
		this.items = this.items.map((item: CourseModel) => {
			const itemImagePath = item.imagePath || Config.default.imagePath;
			item.imagePath = itemImagePath;
			return item;
		});
		return this.items;
	}

	public create(data: CourseModel): CourseModel[] {
		data.id = uuid();
		this.items.push(data);
		return this.items;
	}

	public update(id: string, data: CourseModel): CourseModel[] {
		this.items = this.items.map((item: CourseModel) => {
			return item.id === id ? data : item;
		});
		return this.items;
	}

	public delete(id: string): CourseModel[] {
		this.items = this.items.filter((item: CourseModel) => item.id !== id );
		return this.items;
	}

	public getById(id: string): CourseModel | undefined {
		return this.items.find((item: CourseModel) => item.id === id);
	}
}
