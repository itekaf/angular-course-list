import { CourseModel } from 'src/app/shared/models';
import { CourseActionEnum } from './course.actions';
import { IAction } from 'src/app/shared/interface/action.interface';

export interface ICourseState {
	playlist: string | null;
	current: CourseModel | null;
	data: CourseModel[];
}

export const initState: ICourseState = {
	playlist: '5c7d005a7eb44210640fc739',
	current: null,
	data: [],
};

export function courseReducer(state: ICourseState = initState, action: IAction): ICourseState {
	switch (action.type) {
		case CourseActionEnum.ReadByIdSuccess: {
			return {
				...state,
				current: action.payload,
			};
		}

		case CourseActionEnum.ReadSuccess: {
			return {
				...state,
				data: action.payload
			};
		}

		case CourseActionEnum.CreateSuccess: {
			return {
				...state,
				data: [...state.data, action.payload]
			};
		}

		case CourseActionEnum.DeleteSuccess: {
			return {
				...state,
				data: state.data.filter((item: CourseModel) => item.id !== action.payload)
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
