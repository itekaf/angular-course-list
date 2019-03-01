import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, NavigationEnd, Event, ActivatedRoute, NavigationExtras } from '@angular/router';

import { HistoryRouterModel } from 'src/app/shared/models/history.router.model';

@Injectable({
	providedIn: 'root'
})
export class HistoryService {
	private historyObj: BehaviorSubject<HistoryRouterModel[]> = new BehaviorSubject([]);

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
	) { }

	public loadHistory(): void {
		this.router.events
			.pipe(
				filter((event: Event) => event instanceof NavigationEnd),
			)
			.subscribe(({urlAfterRedirects, url}: NavigationEnd) => {

				const routeConfig = this.activatedRoute.root.firstChild.routeConfig;

				const routeUrl = urlAfterRedirects;
				const routeLabel = routeConfig && routeConfig.data ? routeConfig.data['label'] : 'Home';
				const routePath = url;

				const historyItem = new HistoryRouterModel(routeUrl, routeLabel, routePath);

				this.historyObj.next([...this.historyObj.value, historyItem]);
			});
	}

	public getHistory(): HistoryRouterModel[] {
		return this.historyObj.value;
	}

	public goBack(): void {
		const currentHistory = this.historyObj.value;
		const lastRouterNumber = -2;
		if (currentHistory.length <= 1) {
			throw Error(`Don't have a previous page`);
		}
		const lastRouterItem: HistoryRouterModel = currentHistory.slice(lastRouterNumber)[0];

		this.router.navigate([lastRouterItem.url]);
	}

	public goToError(): void {
		this.goTo('/404', { skipLocationChange: true });
	}

	public goTo(url: string, extras?: NavigationExtras): void {
		if (!url) { return; }
		this.router.navigate([url], extras);
	}

}
