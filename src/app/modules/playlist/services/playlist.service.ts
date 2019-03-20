import { pluck, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Config } from 'src/app/shared';
import { ApiClient } from 'src/app/shared/services/api.service';
import { AnswerModel } from 'src/app/shared/models/answer.model';
import { PlaylistModel } from 'src/app/shared/models';
import { ActivatedRoute } from '@angular/router';

const BASE_URL: string = 'playlists';

@Injectable({
	providedIn: 'root'
})
export class PlaylistService {
	constructor(
		private apiClient: ApiClient,
	) {	}

	public read(
		query: string,
		from: number = 0,
		count: number = 5,
	): Observable<PlaylistModel[]> {
		return this.apiClient
			.get<AnswerModel>(BASE_URL, { params: { from, count, query }})
			.pipe(
				pluck('data'),
				map((items: PlaylistModel[]) => items.map(this.setDefaultProps))
			);
	}

	public create(data: PlaylistModel): Observable<PlaylistModel> {
		const correctData = this.convertDefaultProps(data);
		return this.apiClient
			.post<AnswerModel>(BASE_URL, correctData)
			.pipe(pluck('data'));
	}

	public update(id: string, data: PlaylistModel): Observable<PlaylistModel> {
		const resultUri = `${BASE_URL}/${id}`;
		const correctData = this.convertDefaultProps(data);
		return this.apiClient
			.put<AnswerModel>(resultUri, correctData)
			.pipe(pluck('data'));
	}

	public delete(id: string): Observable<PlaylistModel> {
		const resultUri = `${BASE_URL}/${id}`;
		return this.apiClient
			.delete<AnswerModel>(resultUri)
			.pipe(pluck('data'));
	}

	public getById(id: string): Observable<PlaylistModel> {
		const resultUri = `${BASE_URL}/${id}`;
		return this.apiClient
			.get<AnswerModel>(resultUri)
			.pipe(
				pluck('data'),
				map(this.setDefaultProps)
			);
	}

	private convertDefaultProps(item: PlaylistModel): PlaylistModel {
		let users: string[] = [];
		(item.users as Set<string>).forEach((id: string) => { users.push(id); });
		item.users = users;
		return item;
	}

	private setDefaultProps(item: PlaylistModel): PlaylistModel {
		item.users = item.users instanceof Set ? item.users : new Set(item.users);
		item.imagePath = item.imagePath || Config.default.imagePath;
		return item;
	}
}
