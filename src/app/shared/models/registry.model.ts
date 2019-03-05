import { SecurityModel } from 'src/app/shared/models/security.model';

export class RegistryModel extends SecurityModel {
	public lastName: string;
	public username: string;
	public password: string;
	public firstName: string;
	public passwordConfirmation: string;

	constructor(
		username?: string,
		password?: string,
		passwordConfirmation?: string,

		firstName?: string,
		lastName?: string,

		token?: string,
		provider?: string,
	) {
		super(token, provider);

		this.username = username;
		this.password = password;
		this.lastName = lastName;
		this.firstName = firstName;
		this.passwordConfirmation = passwordConfirmation;
	}
}
