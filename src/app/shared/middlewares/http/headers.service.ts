import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class HeadersHttpMiddelware implements HttpInterceptor {
	private customHeaders: { [name: string]: string | string[] } = {
		'Content-Type': 'application/json'
	};

	constructor() {}

	public intercept(req: HttpRequest<object>, next: HttpHandler): Observable<HttpEvent<object>> {
		const modifiedRequest = req.clone({ setHeaders: this.customHeaders} );
		return next.handle(modifiedRequest);
	}
}
