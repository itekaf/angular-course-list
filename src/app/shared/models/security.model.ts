import * as uuid from 'uuid/v4';

export class SecurityModel {
	public token: string;
	public provider: string;

	constructor(
		token?: string,
		provider?: string
	) {
		this.token = token || uuid();
		this.provider = provider || 'local';
	}
}
