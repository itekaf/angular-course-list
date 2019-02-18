import { IUser } from '../interface/user.interface';

export class UserModel implements IUser {
	public id: number;
	public lastName: string;
	public firstName: string;

	constructor(
		id?: number,
		firstName?: string,
		lastName?: string
	) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
	}
}
