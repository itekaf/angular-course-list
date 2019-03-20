import { pluck, map, take } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Injectable, OnInit, OnDestroy } from '@angular/core';

import { ApiClient } from 'src/app/shared/services/api.service';
import { CourseModel } from 'src/app/shared/models';
import { AnswerModel } from 'src/app/shared/models/answer.model';
import { Config } from 'src/app/shared';
import { ActivatedRoute, Params } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class CourseService implements OnInit, OnDestroy{
	private _playlistId: string;
	private routerParamsSub: Subscription;

	constructor(
		private apiClient: ApiClient,
		private activatedRouter: ActivatedRoute,
	) {	}

	set playlistId(value: string) {
		this._playlistId = `playlists/${value}/courses`;
	}

	get BASE_URL(): string { return this._playlistId; }

	public ngOnInit(): void {
		this.routerParamsSub = this.activatedRouter.params
			.pipe(take(1))
			.subscribe((data: Params) => {
				console.log(data);
				this.playlistId = data['playlistId'];
			});
	}

	public ngOnDestroy(): void {
		this.routerParamsSub.unsubscribe();
	}

	public read(
		query: string,
		from: number = 0,
		count: number = 5,
	): Observable<CourseModel[]> {
		console.log(this.activatedRouter);
		return this.apiClient
			.get<AnswerModel>(this.BASE_URL, { params: { from, count, query }})
			.pipe(
				pluck('data'),
				map(this.setDefaultProps),
			);
	}

	public create(data: CourseModel): Observable<CourseModel> {
		return this.apiClient
			.post<AnswerModel>(this.BASE_URL, data)
			.pipe(pluck('data'));
	}

	public update(id: string, data: CourseModel): Observable<CourseModel> {
		const resultUri = `${this.BASE_URL}/${id}`;
		return this.apiClient
			.put<AnswerModel>(resultUri, data)
			.pipe(pluck('data'));
	}

	public delete(id: string): Observable<CourseModel> {
		const resultUri = `${this.BASE_URL}/${id}`;
		return this.apiClient
			.delete<AnswerModel>(resultUri)
			.pipe(pluck('data'));
	}

	public getById(id: string): Observable<CourseModel> {
		const resultUri = `${this.BASE_URL}/${id}`;
		return this.apiClient
			.get<AnswerModel>(resultUri)
			.pipe(pluck('data'));
	}

	private setDefaultProps(items: CourseModel[]): CourseModel[] {
		return items.map((item: CourseModel) => {
			const itemImagePath = item.imagePath || Config.default.imagePath;
			item.imagePath = itemImagePath;
			return item;
		});
	}
}
