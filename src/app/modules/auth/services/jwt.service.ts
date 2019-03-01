import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class JwtService {
	public key: string = 'jwtToken';

	constructor() {	}

	public setToken(token: string): void {
		localStorage.setItem(this.key, token);
	}

	public removeToken(): void {
		localStorage.removeItem(this.key);
	}

	public getToken(): string {
		return localStorage.getItem(this.key);
	}
}
