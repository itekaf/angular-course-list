import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { ApiClient } from 'src/app/shared/services/api.service';
import { CourseModel } from 'src/app/shared/models';
import { AnswerModel } from 'src/app/shared/models/answer.model';

const BASE_URL: string = 'playlists/5c7d005a7eb44210640fc739/courses';

@Injectable({
	providedIn: 'root'
})
export class CourseService {
	constructor(
		private apiClient: ApiClient,
	) {	}

	public read(
		query: string,
		from: number = 0,
		count: number = 5,
	): Observable<CourseModel[]> {
		return this.apiClient
			.get<AnswerModel>(BASE_URL, { params: { from, count, query }})
			.pipe(pluck('data'));
	}

	public create(data: CourseModel): Observable<CourseModel> {
		return this.apiClient
			.post<AnswerModel>(BASE_URL, data)
			.pipe(pluck('data'));
	}

	public update(id: string, data: CourseModel): Observable<CourseModel> {
		const resultUri = `${BASE_URL}/${id}`;
		return this.apiClient
			.put<AnswerModel>(resultUri, data)
			.pipe(pluck('data'));
	}

	public delete(id: string): Observable<CourseModel> {
		const resultUri = `${BASE_URL}/${id}`;
		return this.apiClient
			.delete<AnswerModel>(resultUri)
			.pipe(pluck('data'));
	}

	public getById(id: string): Observable<CourseModel> {
		const resultUri = `${BASE_URL}/${id}`;
		return this.apiClient
			.get<AnswerModel>(resultUri)
			.pipe(pluck('data'));
	}
}
