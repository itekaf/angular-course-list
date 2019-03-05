import { retryWhen } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Config } from '..';
import { genericRetryStrategy } from '../strategy/genericRetryStrategy';

@Injectable({
	providedIn: 'root'
})
export class ApiClient {
	private apiSettings =  Config.default.api;

	constructor(
		private http: HttpClient,
	) { }

	public get<T>(url: string, options?: object): Observable<T> {
		return this.http
			.get<T>(this.createApiUri(url), options)
			.pipe(
				retryWhen((err: Observable<any>) => genericRetryStrategy(err))
			);
	}

	public put<T>(url: string, body: object, options?: object): Observable<T> {
		return this.http
			.put<T>(this.createApiUri(url), body, options)
			.pipe(
				retryWhen((err: Observable<any>) => genericRetryStrategy(err))
			);
	}

	public delete<T>(url: string, options?: object): Observable<T> {
		return this.http
			.delete<T>(this.createApiUri(url), options)
			.pipe(
				retryWhen((err: Observable<any>) => genericRetryStrategy(err))
			);
	}

	public post<T>(url: string, body: object, options?: object): Observable<T> {
		return this.http
			.post<T>(this.createApiUri(url), body, options)
			.pipe(
				retryWhen((err: Observable<any>) => genericRetryStrategy(err))
			);
	}

	private createApiUri(url: string): string {
		const apiUrlParts = [
			this.apiSettings.prefix,
			this.apiSettings.version,
		];
		const currentApiUrl = apiUrlParts.reduce((uri: string, part: string) => {
			if (part) { uri += `/${part}`; }
			return uri;
		}, this.apiSettings.uri);
		return `${currentApiUrl}/${url}`;
	}
}
