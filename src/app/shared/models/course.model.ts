import { ICourse } from '../interface/';

export class CourseModel implements ICourse {
	public id: number;
	public title: string;
	public duration: number;
	public creationDate: Date;
	public description?: string;
}
