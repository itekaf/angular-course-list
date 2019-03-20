import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { PlaylistModel } from 'src/app/shared/models';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IPlaylistState } from 'src/app/modules/playlist/store/playlist.reducer';
import { ActivatedRoute, Params } from '@angular/router';
import { getIsLoading } from 'src/app/core/loading/store/loading.selectors';
import { getCurrentPlaylist } from 'src/app/modules/playlist/store/playlist.selectors';
import { PlaylistUpdate, PlaylistReadById } from 'src/app/modules/playlist/store/playlist.actions';
import { HistoryGoBack } from 'src/app/modules/routers/store/history.actions';

@Component({
	selector: 'app-playlist-edit',
	templateUrl: './playlist-edit.component.html',
	styleUrls: ['./playlist-edit.component.scss']
})
export class PlaylistEditComponent implements OnInit, OnDestroy {
	@Input() public className: string = 'playlist-edit';
	public item$: Observable<PlaylistModel>;
	public loading$: Observable<boolean>;

	private routerParamsSub: Subscription;

	constructor(
		private store$: Store<{ courses: IPlaylistState}>,
		private activatedRouter: ActivatedRoute,
	) { }

	public ngOnInit(): void {
		this.routerParamsSub = this.activatedRouter.params
			.subscribe((data: Params) => {
				this.setItem(data);
			});
		this.loading$ = this.store$.select(getIsLoading);
		this.item$ = this.store$.select(getCurrentPlaylist);
	}

	public ngOnDestroy(): void {
		if (this.routerParamsSub) { this.routerParamsSub.unsubscribe(); }
	}

	public onSubmit($event: PlaylistModel): void {
		this.store$.dispatch(new PlaylistUpdate({
			id: $event.id,
			data: $event,
		}));
	}

	public onCancel(): void { this.store$.dispatch(new HistoryGoBack()); }

	public setItem(data: Params): void {
		this.store$.dispatch(new PlaylistReadById(data['playlistId']));
	}
}
