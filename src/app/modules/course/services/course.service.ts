import * as uuid from 'uuid/v4';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { Config } from 'src/app/shared';
import { CourseModel } from 'src/app/shared/models';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiClient } from 'src/app/shared/services/api.service';
import { AnswerModel } from 'src/app/shared/models/answer.model';

const BASE_URL: string = 'http://localhost:3004/courses';

@Injectable({
	providedIn: 'root'
})
export class CourseService {
	private itemsObj: BehaviorSubject<CourseModel[]> = new BehaviorSubject<CourseModel[]>([]);
	public items: CourseModel[];

	constructor(
		private http: HttpClient,
		private apiClient: ApiClient,
	) {	}

	public read(
		textFragment: string = '',
		start: string = '0',
		count: string = '5'
	): Observable<CourseModel[]> {
		const result = this.apiClient.get<AnswerModel>('playlists/')
			.subscribe(
				// tslint:disable-next-line:typedef
				(res) => {
					console.log(res);
				},
				// tslint:disable-next-line:typedef
				(err) => {
					console.log(err);
				}
			);
		return this.http.get<CourseModel[]>(BASE_URL, { params: {
			start,
			count,
			textFragment,
		} }).pipe(
			map((items: CourseModel[]) => {
				this.items = items;
				console.log(items.length);
				return this.items;
			})
		);
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
