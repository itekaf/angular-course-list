import { LoadingActionsTypes, LoadingActionsEnum } from './loading.actions';

export interface ILoadingState {
	show: boolean;
}

export const initState: ILoadingState = {
	show: false,
};

export function loadingReducer(state: ILoadingState = initState, action: LoadingActionsTypes): ILoadingState {
	switch (action.type) {
		case LoadingActionsEnum.LoadingHide: {
			return { show: false };
		}
		case LoadingActionsEnum.LoadingShow: {
			return { show: true };
		}

		default: {
			return state;
		}
	}
}
