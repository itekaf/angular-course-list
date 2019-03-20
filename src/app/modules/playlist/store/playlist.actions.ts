import { PlaylistModel } from 'src/app/shared/models';
import { IAction } from 'src/app/shared/interface/action.interface';

export enum PlaylistActionEnum {
	ReadSuccess = '[Playlist] Read Success',
	DeleteSuccess = '[Playlist] Delete Success',
	CreateSuccess = '[Playlist] Create Success',
	UpdateSuccess = '[Playlist] Update Success',
	ReadByIdSuccess = '[Playlist] Read By Id Success',

	Read = '[Playlist] Read',
	Create = '[Playlist] Create',
	Update = '[Playlist] Update',
	Delete = '[Playlist] Delete',
	Concat = '[Playlist] Concat',
	ReadById = '[Playlist] Read By Id',

	PlaylistError = '[Playlist] Playlists Error',
	PlaylistRedirect = '[Playlist] Redirect to Playlists',
}

export class PlaylistReadById implements IAction<string> {
	public readonly type: PlaylistActionEnum =  PlaylistActionEnum.ReadById;
	constructor(public payload: string) {}
}

export class PlaylistReadByIdSuccess implements IAction<PlaylistModel> {
	public readonly type: PlaylistActionEnum =  PlaylistActionEnum.ReadByIdSuccess;
	constructor(public payload: PlaylistModel) {}
}

export class PlaylistRedirect implements IAction {
	public readonly type: PlaylistActionEnum =  PlaylistActionEnum.PlaylistRedirect;
}

export class PlaylistError implements IAction {
	public readonly type: PlaylistActionEnum =  PlaylistActionEnum.PlaylistError;
	constructor(public payload: any) {}
}

export class PlaylistReadSuccess implements IAction<PlaylistModel[]> {
	public readonly type: PlaylistActionEnum =  PlaylistActionEnum.ReadSuccess;
	constructor(public payload: PlaylistModel[]) {}
}

export class PlaylistDeleteSuccess implements IAction<string> {
	public readonly type: PlaylistActionEnum =  PlaylistActionEnum.DeleteSuccess;
	constructor(public payload: string) {}
}

export class PlaylistCreateSuccess implements IAction<PlaylistModel> {
	public readonly type: PlaylistActionEnum =  PlaylistActionEnum.CreateSuccess;
	constructor(public payload: PlaylistModel) {}
}

export class PlaylistUpdateSuccess implements IAction<PlaylistModel> {
	public readonly type: PlaylistActionEnum = PlaylistActionEnum.UpdateSuccess;
	constructor(public payload: PlaylistModel) {}
}

export class PlaylistRead implements IAction< { query: string, from: number, count: number }> {
	public readonly type: PlaylistActionEnum = PlaylistActionEnum.Read;
	constructor(public payload: { query: string, from: number, count: number }) {}
}

export class PlaylistCreate implements IAction<PlaylistModel> {
	public readonly type: PlaylistActionEnum =  PlaylistActionEnum.Create;
	constructor(public payload: PlaylistModel) {}
}

export class PlaylistDelete implements IAction<string> {
	public readonly type: PlaylistActionEnum =  PlaylistActionEnum.Delete;
	constructor(public payload: string) {}
}

export class PlaylistUpdate implements IAction<{ id: string, data: PlaylistModel }> {
	public readonly type: PlaylistActionEnum = PlaylistActionEnum.Update;
	constructor(public payload: { id: string, data: PlaylistModel }) {}
}

export class PlaylistConcat implements IAction<PlaylistModel[]> {
	public readonly type: PlaylistActionEnum = PlaylistActionEnum.Concat;
	constructor(public payload: PlaylistModel[]) {}
}

export type PlaylistActionTypes =
	PlaylistRead |
	PlaylistCreate |
	PlaylistDelete |
	PlaylistUpdate |
	PlaylistConcat |
	PlaylistReadSuccess |
	PlaylistCreateSuccess |
	PlaylistDeleteSuccess |
	PlaylistUpdateSuccess |
	PlaylistReadById |
	PlaylistReadByIdSuccess |
	PlaylistError;
