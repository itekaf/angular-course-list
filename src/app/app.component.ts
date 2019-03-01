import { Component } from '@angular/core';
import { HistoryService } from './modules/routers/history.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	constructor(
		private histrory: HistoryService,
	) {
		this.histrory.loadHistory();
	}
}
