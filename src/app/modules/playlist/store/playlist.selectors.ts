import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { PlaylistModel } from 'src/app/shared/models';
import { IPlaylistState } from './playlist.reducer';

export const getAllPlaylists = createFeatureSelector('playlist');
export const getPlaylistLists = createSelector(
	getAllPlaylists,
	(state: IPlaylistState) => state.data,
);
export const findPlaylistById = (id: string): MemoizedSelector<IPlaylistState, PlaylistModel> => createSelector(
	getAllPlaylists,
	(state: IPlaylistState) => state.data.find((item: PlaylistModel) => item.id === id)
);
export const getCurrentPlaylist = createSelector(
	getAllPlaylists,
	(state: IPlaylistState) => state.current
);
