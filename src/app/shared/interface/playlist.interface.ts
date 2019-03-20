export interface IPlaylist {
	id: string;
	name: string;
	description: string;
	users: Set<string> | string[];
	courses: string[];
}
