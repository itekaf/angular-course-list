import { IUser } from '../interface/user.interface';

export class UserModel implements IUser {
	public id: string;
	public userName: string;
	public password: string;

	public lastName?: string;
	public firstName?: string;

	constructor(
		id: string,
		userName: string,
		password: string,
		firstName?: string,
		lastName?: string
	) {
		this.id = id;
		this.userName = userName,
		this.password = password,

		this.lastName = lastName;
		this.firstName = firstName;
	}

	get name(): string {
		return this.firstName || this.userName;
	}
}
