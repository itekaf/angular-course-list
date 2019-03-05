import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { SecurityModel } from '../../models/security.model';

@Injectable({
	providedIn: 'root'
})
export class BodyHttpMiddelware implements HttpInterceptor {
	public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const modifiedRequest = req.clone({ body: this.convertBody(req.body)});
		return next.handle(modifiedRequest);
	}

	private convertBody(body: object): JSON {
		return body ? JSON.parse(JSON.stringify(SecurityModel.create(body))) : body;
	}
}
