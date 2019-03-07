import { UserModel } from 'src/app/shared/models';
import { UserActionsTypes, UserActionsEnum } from './user.actions';

export interface IUserState {
	language: string;
	data: UserModel | null;
}

export const initUserState: IUserState = {
	language: navigator.language,
	data: null,
};

export function userReducer(state: IUserState = initUserState, action: UserActionsTypes): IUserState {
	switch (action.type) {
		case UserActionsEnum.Create:
		case UserActionsEnum.Update:
			{
				return {
					...state,
					data: (state as IUserState).data
				};
			}

		case UserActionsEnum.Delete: {
			return initUserState;
		}

		default: {
			return state;
		}
	}
}
