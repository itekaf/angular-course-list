import { Action } from '@ngrx/store';
import { RegistryModel, LoginModel, UserModel, AnswerModel } from 'src/app/shared/models';

export enum AuthActionsEnum {
	Logout = '[Auth] Logout',
	LogoutSucces = '[Auth] Logout Success',

	AuthCheck = '[Auth] Check',

	Registry = '[Auth] Registry',
	RegistrySuccess = '[Auth] Registry Success',
	RegistryRedirect = '[Auth] Registry Redirect',

	Login = '[Auth] Login',
	LoginSuccess = '[Auth] Login Success',
	LoginRedirect = '[Auth] Login Redirect',

	AuthError = '[Auth] Error',
}

export class AuthError implements Action {
	public readonly type: AuthActionsEnum = AuthActionsEnum.AuthError;
}

export class AuthCheck implements Action {
	public readonly type: AuthActionsEnum = AuthActionsEnum.AuthCheck;
}

export class Logout implements Action {
	public readonly type: AuthActionsEnum = AuthActionsEnum.Logout;
}

export class LogoutSucces implements Action {
	public readonly type: AuthActionsEnum = AuthActionsEnum.LogoutSucces;
}

export class Registry implements Action {
	public readonly type: AuthActionsEnum = AuthActionsEnum.Registry;
	constructor(public payload: RegistryModel) {}
}
export class RegistryRedirect implements Action {
	public readonly type: AuthActionsEnum = AuthActionsEnum.RegistryRedirect;
}
export class RegistrySuccess implements Action {
	public readonly type: AuthActionsEnum = AuthActionsEnum.RegistrySuccess;
}

export class Login implements Action {
	public readonly type: AuthActionsEnum = AuthActionsEnum.Login;
	constructor(public payload: LoginModel) {}
}
export class LoginSuccess implements Action {
	public readonly type: AuthActionsEnum = AuthActionsEnum.LoginSuccess;
	constructor(public payload: UserModel) {}
}
export class LoginRedirect implements Action {
	public readonly type: AuthActionsEnum = AuthActionsEnum.LoginRedirect;
}

export type AuthActionsTypes =
	Logout |

	Registry |
	RegistryRedirect |
	RegistrySuccess |

	Login |
	LoginSuccess |
	LoginRedirect;
