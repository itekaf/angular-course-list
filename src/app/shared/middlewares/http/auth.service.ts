import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { JwtService } from 'src/app/modules/auth/services';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AuthHttpMiddelware implements HttpInterceptor {
	constructor(
		private jwt: JwtService
	) { }

	public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
		const tokenValue: string = this.jwt.getToken();
		const tokenResult: string = tokenValue ? `${this.jwt.schema}  ${tokenValue}` : undefined;
		const modifiedRequest = tokenValue ? req.clone({ setHeaders: { 'Authorization': tokenResult }}) : req;
		return next.handle(modifiedRequest);
	}
}
