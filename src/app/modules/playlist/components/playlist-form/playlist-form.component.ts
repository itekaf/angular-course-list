import * as uuid from 'uuid/v4';
import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Config } from 'src/app/shared';
import { PlaylistModel, InputResultModel, UserModel } from 'src/app/shared/models';
import { Store } from '@ngrx/store';
import { IAuthState } from 'src/app/modules/auth/store/auth.reducer';
import { getAuthUserData } from 'src/app/modules/auth/store/auth.selectors';

@Component({
	selector: 'app-playlist-form',
	templateUrl: './playlist-form.component.html',
	styleUrls: ['./playlist-form.component.scss']
})
export class PlaylistFormComponent implements OnInit {
	// TODO: RL: DI
	@Input() public title: string;
	@Input() public icons = Config.icons;
	@Input() public className: string = 'playlist-form';
	@Input() public item: PlaylistModel = new PlaylistModel(uuid(), 'title');

	@Output() public submitEvent: EventEmitter<PlaylistModel> = new EventEmitter<PlaylistModel>();
	@Output() public cancelEvent: EventEmitter<void> = new EventEmitter<void>();

	private userData: UserModel;

	constructor(
		private store$: Store<{ auth: IAuthState }>,
	) { }

	public ngOnInit(): void {
		this.store$.select(getAuthUserData)
			.subscribe((data: UserModel) => {
				this.userData = data;
			});
	}

	public onSubmit(): void {
		if (this.userData) {
			(this.item.users as Set<string>).add(this.userData.id);
		}
		this.submitEvent.emit(this.item);
	}

	public onCancel(): void {
		this.cancelEvent.emit();
	}

	public onChange($event: InputResultModel): void {
		const { name, value }: {name: string, value: string | number } = $event;
		this.item[name] = value;
	}
}
