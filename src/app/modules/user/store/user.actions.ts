import { Action } from '@ngrx/store';

export enum UserActionsEnum {
	Read = '[User] ',
	Create = '[User] ',
	Update = '[User] ',
	Delete = '[User] ',
}

export class Read implements Action {
	public readonly type: UserActionsEnum = UserActionsEnum.Read;
}

export class Create implements Action {
	public readonly type: UserActionsEnum = UserActionsEnum.Create;
	constructor(public payload: any) {}
}

export class Update implements Action {
	public readonly type: UserActionsEnum = UserActionsEnum.Update;
	constructor(public payload: any) {}
}

export class Delete implements Action {
	public readonly type: UserActionsEnum = UserActionsEnum.Delete;
}

export type UserActionsTypes =
	Read |
	Create |
	Update |
	Delete;
