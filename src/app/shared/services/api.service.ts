import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { JwtService } from 'src/app/modules/auth/services';

@Injectable({
	providedIn: 'root'
})
export class ApiClient {
	private apiUri: string = 'http://localhost:4000/api/v1/';

	constructor(
		private http: HttpClient,
		private jwtService: JwtService,
	) { }

	public get<T>(url: string, options?: object): Observable<T> {
		const currentOptions = this.setHeaders(options);
		return this.http.get<T>(`${this.apiUri}${url}`, currentOptions);
	}
	// tslint:disable-next-line:no-any
	public put<T>(url: string, body: any, options?: object): Observable<T> {
		const currentOptions = this.setHeaders(options);
		return this.http.put<T>(`${this.apiUri}${url}`, body, currentOptions);
	}
	// tslint:disable-next-line:no-any
	public delete<T>(url: string, options?: object): Observable<T> {
		const currentOptions = this.setHeaders(options);
		const resultUrl = `${this.apiUri}${url}`;
		return this.http.delete<T>(resultUrl, currentOptions);
	}
	// tslint:disable-next-line:no-any
	public post<T>(url: string, body: any, options?: object): Observable<T> {
		const currentUrl = `${this.apiUri}${url}`;
		const currentBody = JSON.stringify(body);
		const currentOptions = this.setHeaders(options);
		return this.http.post<T>(currentUrl, currentBody, currentOptions);
	}

	private setHeaders(options?: object): object {
		let headers = new HttpHeaders();
		headers = headers.set('Content-Type', 'application/json');
		const token = this.jwtService.getToken();
		if (token) { headers = headers.set('Authorization', `Bearer ${token}`); }
		const httpOptions = {
			headers,
			withCredentials: true
		};
		return httpOptions;
	}
}
