import { Component, OnInit, Input } from '@angular/core';
import { PlaylistModel } from 'src/app/shared/models';
import { Store } from '@ngrx/store';
import { IPlaylistState } from 'src/app/modules/playlist/store/playlist.reducer';
import { getIsLoading } from 'src/app/core/loading/store/loading.selectors';
import { PlaylistCreate } from 'src/app/modules/playlist/store/playlist.actions';
import { HistoryGoBack } from 'src/app/modules/routers/store/history.actions';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-playlist-new',
	templateUrl: './playlist-new.component.html',
	styleUrls: ['./playlist-new.component.scss']
})
export class PlaylistNewComponent implements OnInit {

	@Input() public className: string = 'playlist-new';

	public item: PlaylistModel = new PlaylistModel();
	public title: string = 'Create new Playlist';
	public loading$: Observable<boolean>;

	constructor(
		private store$: Store<{ playlists: IPlaylistState}>,
	) {	}

	public ngOnInit(): void {
		this.loading$ = this.store$.select(getIsLoading)
	}

	public onSubmit($event: PlaylistModel): void {
		this.store$.dispatch(new PlaylistCreate($event));
	}

	public onCancel(): void { this.store$.dispatch(new HistoryGoBack()); }
}
