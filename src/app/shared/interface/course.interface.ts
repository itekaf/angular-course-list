export interface ICourse {
	id: string;
	title: string;
	creationDate: Date;
	duration: number;
	topRated?: boolean;
	description?: string;
}
