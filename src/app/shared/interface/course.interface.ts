export interface ICourse {
	id: string;
	name: string;
	date: Date;
	length: number;
	isTopRated?: boolean;
	description?: string;
}
