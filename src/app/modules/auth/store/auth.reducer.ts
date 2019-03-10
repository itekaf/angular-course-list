import { UserModel } from 'src/app/shared/models';
import { AuthActionsTypes, AuthActionsEnum, LoginSuccess } from './auth.actions';

export interface IAuthState {
	isAuth: boolean;
	data: UserModel | null;
}

export const initState: IAuthState = {
	isAuth: false,
	data: null,
};

export function authReducer(state: IAuthState = initState, action: AuthActionsTypes): IAuthState {
	switch (action.type) {
		case AuthActionsEnum.LoginSuccess : {
			return {
				...state,
				isAuth: true,
				data: (action as LoginSuccess).payload
			};
		}

		case AuthActionsEnum.LogoutSucces : {
			return initState;
		}
		default: {
			return state;
		}
	}
}
