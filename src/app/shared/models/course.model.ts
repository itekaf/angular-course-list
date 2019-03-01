import { Config } from '../config';
import { ICourse, IUser } from '../interface/';

export class CourseModel implements ICourse {
	public id: string;
	public title: string;
	public duration: number;
	public creationDate: Date;

	public authors?: IUser[];
	public topRated?: boolean;
	public imagePath?: string;
	public description?: string;

	constructor(
		id?: string,
		title?: string,
		duration?: number,
		topRated?: boolean,
		imagePath?: string,
		description?: string,
		creationDate?: Date,
		authors?: IUser[],
	) {
		this.id = id;
		this.title = title;
		this.authors = authors;
		this.duration = duration;
		this.topRated = topRated;
		this.imagePath = imagePath || Config.default.imagePath;
		this.description = description;
		this.creationDate = creationDate;
	}
}
