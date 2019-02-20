import { ICourse } from '../interface/';

export class CourseModel implements ICourse {
	public id: number;
	public title: string;
	public duration: number;
	public creationDate: Date;

	public topRated?: boolean;
	public description?: string;

	constructor(
		id?: number,
		title?: string,
		duration?: number,
		creationDate?: Date,
		description?: string,
		topRated?: boolean,
	) {
		this.id = id;
		this.title = title;
		this.duration = duration;
		this.topRated = topRated;
		this.description = description;
		this.creationDate = creationDate;
	}
}
