import { Action } from '@ngrx/store';
import { IAction } from 'src/app/shared/interface/action.interface';

export enum TokenActionsEnum {
	Set = '[Token] Set',
	Get = '[Token] Get',
	Remove = '[Token] Remove',
	Decode = '[Token] Decode',

	SetSuccess = '[Token] Set Success',
	GetSuccess = '[Token] Get Success',
	RemoveSucess = '[Token] Remove Success',
	DecodeSuccess = '[Token] Decode Success',

	TokenError = '[Token] Error',
}

export class TokenSet implements IAction<string> {
	public readonly type: TokenActionsEnum = TokenActionsEnum.Set;
	constructor(public paylod: string) {}
}

export class TokenSetSuccess implements IAction {
	public readonly type: TokenActionsEnum = TokenActionsEnum.SetSuccess;
}

export class TokenDecode implements IAction<string> {
	public readonly type: TokenActionsEnum = TokenActionsEnum.Decode;
	constructor(public paylod: string) {}
}

export class TokenDecodeSuccess implements IAction<object> {
	public readonly type: TokenActionsEnum = TokenActionsEnum.DecodeSuccess;
	constructor(public paylod: object) {}
}

export class TokenGet implements IAction {
	public readonly type: TokenActionsEnum = TokenActionsEnum.Get;
}

export class TokenGetSuccess implements IAction<string> {
	public readonly type: TokenActionsEnum = TokenActionsEnum.GetSuccess;
	constructor(public paylod: string) {}
}

export class TokenRemove implements IAction {
	public readonly type: TokenActionsEnum = TokenActionsEnum.Remove;
}

export class TokenRemoveSucess implements IAction {
	public readonly type: TokenActionsEnum = TokenActionsEnum.RemoveSucess;
}

export class TokenError implements IAction {
	public readonly type: TokenActionsEnum = TokenActionsEnum.TokenError;
}

export type TokenActionsTypes =
	TokenGet |
	TokenGetSuccess |

	TokenRemove |
	TokenRemoveSucess |

	TokenSet |
	TokenSetSuccess |

	TokenDecode |
	TokenDecodeSuccess |

	TokenError;
