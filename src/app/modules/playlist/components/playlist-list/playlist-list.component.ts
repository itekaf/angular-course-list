import { Component, OnInit, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Config } from 'src/app/shared';
import { PlaylistModel, InputResultModel } from 'src/app/shared/models';
import { Store } from '@ngrx/store';
import { IPlaylistState } from '../../store/playlist.reducer';
import { ActivatedRoute } from '@angular/router';
import { getIsLoading } from 'src/app/core/loading/store/loading.selectors';
import { pluck, map } from 'rxjs/operators';
import { PlaylistRead, PlaylistDelete } from '../../store/playlist.actions';
import { HistoryGoToUrl } from 'src/app/modules/routers/store/history.actions';
import { getPlaylistLists } from '../../store/playlist.selectors';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-playlist-list',
	templateUrl: './playlist-list.component.html',
	styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {

	@Input() public className: string = 'playlist-list';
	@Input() public pageStep: number = 5;
	@Input() public title: string = 'Find or add angular playlist ...';
	@Input() public icons: Map<string, IconDefinition> = Config.icons;
	@Input() public loadMoreText: string = 'Load More';
	@Input() public noDataMessage: string = 'NO DATA. FEEL FREE TO ADD NEW PLAYLIST';

	public items$: Observable<PlaylistModel[]>;
	public loading$: Observable<boolean>;

	public query: string;

	constructor(
		private store$: Store<{ playlists: IPlaylistState }>,
		private activatedRouter: ActivatedRoute,
	) { }

	public ngOnInit(): void {
		this.items$ = this.store$.select(getPlaylistLists);
		this.loading$ = this.store$.select(getIsLoading);
		this.updateItems();
	}

	public onSearchItem($event: InputResultModel): void {
		this.query = $event.value.toString();
		this.updateItems();
	}

	public onRemoveItem(id: string): void {
		this.store$.dispatch(new PlaylistDelete(id));
	}

	public onLoadMore(): void {
		this.updateItems();
	}

	public onEditItem(id: string): void {
		const url = `./${id}`;
		const extras = {  relativeTo: this.activatedRouter };
		this.store$.dispatch(new HistoryGoToUrl({ url, extras }));
	}

	public onAdd(): void {
		const url = `./new`;
		const extras = {  relativeTo: this.activatedRouter };
		this.store$.dispatch(new HistoryGoToUrl({ url, extras }));
	}

	private updateItems(
		query: string  = this.query,
		from: number =  0,
		count: number = this.pageStep,
	): void {
		this.store$.dispatch(new PlaylistRead({
			query, from, count,
		}));
	}
}
