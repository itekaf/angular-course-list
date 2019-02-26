import { Config } from '../config';
import { ICourse } from '../interface/';

export class CourseModel implements ICourse {
	public id: number;
	public title: string;
	public duration: number;
	public creationDate: Date;

	public topRated?: boolean;
	public imagePath?: string;
	public description?: string;

	constructor(
		id: number,
		title: string,
		duration?: number,
		topRated?: boolean,
		imagePath?: string,
		description?: string,
		creationDate?: Date,
	) {
		this.id = id;
		this.title = title;
		this.duration = duration;
		this.topRated = topRated;
		this.imagePath = imagePath || Config.default.imagePath;
		this.description = description;
		this.creationDate = creationDate;
	}
}
