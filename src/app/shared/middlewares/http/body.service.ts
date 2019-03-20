import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { SecurityModel } from '../../models/security.model';

@Injectable({
	providedIn: 'root'
})
export class BodyHttpMiddelware implements HttpInterceptor {
	public intercept(req: HttpRequest<object>, next: HttpHandler): Observable<HttpEvent<object>> {
		const modifiedRequest = req.clone({ body: this.createSecurityObject(req.body)});
		return next.handle(modifiedRequest);
	}

	// tslint:disable-next-line: prefer-function-over-method
	private createSecurityObject(obj: object): JSON {
		return obj ? JSON.parse(JSON.stringify(SecurityModel.create(obj))) : obj;
	}
}
