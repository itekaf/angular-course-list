import { Store } from '@ngrx/store';
import { Component, ViewChild, OnInit } from '@angular/core';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';

import { IHistoryState } from './modules/routers/store/history.reducers';
import { HistoryLoading } from './modules/routers/store/history.actions';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

	@ViewChild(ToastContainerDirective) public toastContainer: ToastContainerDirective;
	constructor(
		private store$: Store<{ history: IHistoryState }>,
		private toastrService: ToastrService,
	) {
		this.store$.dispatch(new HistoryLoading());
	}

	public ngOnInit(): void {
		this.toastrService.overlayContainer = this.toastContainer;
	}
}
