import { SecurityModel } from 'src/app/shared/models/security.model';

export class RegistryModel extends SecurityModel {
	public username: string;
	public password: string;
	public passwordConfirmation: string;
	public firstName: string;
	public lastName: string;

	constructor(
		username: string,
		password: string,
		passwordConfirmation: string,

		firstName?: string,
		lastName?: string,

		token?: string,
		provider?: string,
	) {
		super(token, provider);

		this.username = username;
		this.password = password;
		this.passwordConfirmation = passwordConfirmation;
		this.lastName = lastName;
		this.firstName = firstName;
	}
}
