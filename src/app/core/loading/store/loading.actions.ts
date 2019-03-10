import { Action } from '@ngrx/store';

export enum LoadingActionsEnum {
	LoadingShow = '[Loading] Show',
	LoadingHide = '[Loading] Hide',
}

export class LoadingHide implements Action {
	public readonly type: LoadingActionsEnum = LoadingActionsEnum.LoadingHide;
}

export class LoadingShow implements Action {
	public readonly type: LoadingActionsEnum = LoadingActionsEnum.LoadingShow;
}

export type LoadingActionsTypes = LoadingHide | LoadingShow;
