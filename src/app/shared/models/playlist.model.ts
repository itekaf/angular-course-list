import { Config } from '../config';
import { IPlaylist } from '../interface';

export class PlaylistModel implements IPlaylist {
	public id: string;
	public name: string;
	public description: string;
	public imagePath: string;
	public users: Set<string> | string[];
	public courses: string[];

	constructor(
		id?: string,
		name?: string,
		description?: string,
		users?: Set<string> | string[],
		courses?: string[],
		imagePath?: string,
	) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.courses = courses || [];
		this.users = users || new Set();
		this.imagePath = imagePath || Config.default.imagePath;
	}
}
