import { PlaylistModel } from 'src/app/shared/models';
import { PlaylistActionEnum } from './playlist.actions';
import { IAction } from 'src/app/shared/interface/action.interface';

export interface IPlaylistState {
	current: PlaylistModel | null;
	data: PlaylistModel[];
}

export const initState: IPlaylistState = {
	current: null,
	data: [],
};

export function playlistReducer(state: IPlaylistState = initState, action: IAction): IPlaylistState {
	switch (action.type) {
		case PlaylistActionEnum.ReadByIdSuccess: {
			return {
				...state,
				current: action.payload,
			};
		}

		case PlaylistActionEnum.ReadSuccess: {
			return {
				...state,
				data: action.payload
			};
		}

		case PlaylistActionEnum.CreateSuccess: {
			return {
				...state,
				data: [...state.data, action.payload]
			};
		}

		case PlaylistActionEnum.DeleteSuccess: {
			return {
				...state,
				data: state.data.filter((item: PlaylistModel) => item.id !== action.payload)
			};
		}

		case PlaylistActionEnum.UpdateSuccess: {
			const updatedItem = action.payload as PlaylistModel;
			return {
				...state,
				data: state.data.map((item: PlaylistModel) => item.id === updatedItem.id ? updatedItem : item)
			};
		}

		case PlaylistActionEnum.Concat: {
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
