import { Action } from '@ngrx/store';

export abstract class IAction<T> implements Action {
	public readonly type: string;
	public payload: T;
}

export enum AuthActionsEnum {
	Logout = '[Auth] Logout',
	AuthCheck = '[Auth] Check',

	Registry = '[Auth] Registry',
	RegistrySuccess = '[Auth] Registry Success',
	RegistryRedirect = '[Auth] Registry Redirect',

	Login = '[Auth] Login',
	LoginSuccess = '[Auth] Login Success',
	LoginRedirect = '[Auth] Login Redirect',
}

export class AuthCheck implements Action {
	public readonly type: AuthActionsEnum = AuthActionsEnum.AuthCheck;
}

export class Logout implements Action {
	public readonly type: AuthActionsEnum = AuthActionsEnum.Logout;
}

export class Registry implements IAction<any> {
	public readonly type: AuthActionsEnum = AuthActionsEnum.Registry;
	constructor(public payload: any) {}
}
export class RegistryRedirect implements Action {
	public readonly type: AuthActionsEnum = AuthActionsEnum.RegistryRedirect;
}
export class RegistrySuccess implements Action {
	public readonly type: AuthActionsEnum = AuthActionsEnum.RegistrySuccess;
}

export class Login implements IAction<any> {
	public readonly type: AuthActionsEnum = AuthActionsEnum.Login;
	constructor(public payload: any) {}
}
export class LoginSuccess implements IAction<any> {
	public readonly type: AuthActionsEnum = AuthActionsEnum.LoginSuccess;
	constructor(public payload: any) {}
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
