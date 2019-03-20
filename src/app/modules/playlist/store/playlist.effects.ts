import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, pluck, switchMap, tap } from 'rxjs/operators';

import { PlaylistModel } from 'src/app/shared/models';
import { PlaylistService } from '../services';
import { HistoryGoBack, HistoryGoToError } from '../../routers/store/history.actions';
import { PlaylistActionEnum, PlaylistCreateSuccess, PlaylistUpdateSuccess, PlaylistReadSuccess, PlaylistDeleteSuccess, PlaylistError, PlaylistReadByIdSuccess } from './playlist.actions';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class PlaylistsEffect {
	@Effect()
	public readById$ = this.actions$
		.pipe(
			ofType(PlaylistActionEnum.ReadById),
			pluck('payload'),
			switchMap((id: string) => {
				return this.playlistService
					.getById(id)
					.pipe(
						map((data: PlaylistModel) => new PlaylistReadByIdSuccess(data)),
						catchError(() => of(new HistoryGoToError()))
					);
			})
		);

	@Effect()
	public read$ = this.actions$
		.pipe(
			ofType(PlaylistActionEnum.Read),
			pluck('payload'),
			switchMap((data: { query: string, from: number, count: number }): Observable<PlaylistReadSuccess | PlaylistError> => {
				return this.playlistService
					.read(
						data.query,
						data.from,
						data.count
					)
					.pipe(
						map((value: PlaylistModel[]) => new PlaylistReadSuccess(value)),
						catchError((err) => of(new PlaylistError(err))),
					);
			})
		);

	@Effect()
	public create$  = this.actions$
		.pipe(
			ofType(PlaylistActionEnum.Create),
			pluck('payload'),
			switchMap((data: PlaylistModel) => {
				return this.playlistService
					.create(data)
					.pipe(
						map((item: PlaylistModel) => new PlaylistCreateSuccess(item)),
						catchError((err) => of(new PlaylistError(err))),
					);
			})
		);

	@Effect()
	public delete$  = this.actions$
		.pipe(
			ofType(PlaylistActionEnum.Delete),
			pluck('payload'),
			switchMap((removedId: string) => {
				return this.playlistService
					.delete(removedId)
					.pipe(
						map(() => new PlaylistDeleteSuccess(removedId)),
						catchError((err) => of(new PlaylistError(err))),
					);
			})
		);

	@Effect()
	public update$ = this.actions$
		.pipe(
			ofType(PlaylistActionEnum.Update),
			pluck('payload'),
			switchMap((data: { id: string, data: PlaylistModel }) => {
				return this.playlistService
					.update(
						data.id,
						data.data
					)
					.pipe(
						map((answer: PlaylistModel) => new PlaylistUpdateSuccess(answer)),
						catchError((err) => of(new PlaylistError(err))),
					);
			})
		);

	@Effect()
	public PlaylistRedirect$ = this.actions$
			.pipe(
				ofType(PlaylistActionEnum.CreateSuccess, PlaylistActionEnum.UpdateSuccess, PlaylistActionEnum.PlaylistRedirect),
				switchMap(() => [
					new HistoryGoBack()
				])
			);

	@Effect({ dispatch: false })
	public error$ = this.actions$
			.pipe(
				ofType(PlaylistActionEnum.PlaylistError),
				pluck('payload'),
				tap((err: HttpErrorResponse) => {
					this.toastrService.error(err.statusText, 'Playlist Error');
				})
			);

	constructor(
		private actions$: Actions,
		private toastrService: ToastrService,
		private playlistService: PlaylistService,
	) {}
}
