import { Config } from '../config';
import { ICourse, IUser } from '../interface/';

export class CourseModel implements ICourse {
	public id: string;
	public name: string;
	public length: number;
	public date: Date;

	public authors?: IUser[];
	public isTopRated?: boolean;
	public imagePath?: string;
	public description?: string;

	constructor(
		id?: string,
		name?: string,
		length?: number,
		isTopRated?: boolean,
		imagePath?: string,
		description?: string,
		date?: Date,
		authors?: IUser[],
	) {
		this.id = id;
		this.name = name;
		this.authors = authors;
		this.length = length;
		this.isTopRated = isTopRated;
		this.imagePath = imagePath || Config.default.imagePath;
		this.description = description;
		this.date = date;
	}
}
