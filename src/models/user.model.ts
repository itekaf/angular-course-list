import { IUser } from '../interface/user.interface';

export class UserModel implements IUser {
	public id: number;
	public lastName: string;
	public firstName: string;
}
