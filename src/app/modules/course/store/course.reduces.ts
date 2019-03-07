import { CourseModel } from 'src/app/shared/models';
import { CourseActionTypes, CourseActionEnum } from './course.actions';

export interface IPlaylist {
	id: string;
	name: string;
	description: string;
	courses: CourseModel[];
}

export class PlaylistModel implements IPlaylist {
	public id: string;
	public name: string;
	public description: string;
	public courses: CourseModel[];

	constructor(
		id: string,
		name: string,
		description: string,
		courses: CourseModel[],
	) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.courses = courses;
	}
}

export interface ICourseState {
	playlist: string;
	data: CourseModel[];
}

export const initState: ICourseState = {
	playlist: '5c7d005a7eb44210640fc739',
	data: [],
};

export function courseReducer(state: ICourseState = initState, action: CourseActionTypes): ICourseState {
	switch (action.type) {
		case CourseActionEnum.ReadSuccess: {
			return {
				...state,
				data: action.payload
			};
		}

		case CourseActionEnum.CreateSuccess: {
			const createdItem = action.payload as CourseModel;
			return {
				...state,
				data: [...state.data, createdItem]
			};
		}

		case CourseActionEnum.DeleteSuccess: {
			const removedId = action.payload;
			return {
				...state,
				data: state.data.filter((item: CourseModel) => item.id !== removedId)
			};
		}

		case CourseActionEnum.UpdateSuccess: {
			const updatedItem = action.payload as CourseModel;
			return {
				...state,
				data: state.data.map((item: CourseModel) => item.id === updatedItem.id ? updatedItem : item)
			};
		}

		case CourseActionEnum.Concat: {
			return {
				...state,
				data: state.data.concat(action.payload)
			};
		}

		default: {
			return state;
		}
	}
}
