import { IUser } from '../interface/user.interface';

export class UserModel implements IUser {
	public id: number;
	public userName: string;
	public password: string;

	public lastName?: string;
	public firstName?: string;

	constructor(
		id: number,
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

	get firsName(): string {
		return this.firsName || this.userName;
	}
}
