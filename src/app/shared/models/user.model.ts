import { IUser } from '../interface/user.interface';

export class UserModel implements IUser {
	public id: string;
	public userName: string;

	public lastName?: string;
	public firstName?: string;

	constructor(
		id: string,
		userName: string,
		firstName?: string,
		lastName?: string
	) {
		this.id = id;
		this.userName = userName,

		this.lastName = lastName;
		this.firstName = firstName;
	}

	get name(): string {
		return this.firstName || this.userName;
	}
}
