import { Component } from '@angular/core';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';
import { Router, Event, NavigationEnd, ActivatedRoute, UrlSegment } from '@angular/router';

import { BreadCrumbModel } from 'src/app/shared/models/breadcrumb.model';

@Component({
	selector: 'app-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
	private urlSeparator: string = '/';
	public breadcrumbs = this.router.events
		.pipe(
			filter((event: Event) => event instanceof NavigationEnd),
			distinctUntilChanged(),
			map(() => this.createBreadcrumb(this.activatedRouter.root))
		);

	constructor(
		private router: Router,
		private activatedRouter: ActivatedRoute,
	) { }

	public createBreadcrumb(
		route: ActivatedRoute,
		url: string = '',
		breadcrumbs: BreadCrumbModel[] = []
	): BreadCrumbModel[] {
		const itemUrl = this.createAbsoluteUrl(route.snapshot.url, url);
		const itemLabel = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['label'] : 'Home';
		const breadcrumbModel =  new BreadCrumbModel(itemUrl, itemLabel);

		const breadcrumbExist = breadcrumbs.find((item: BreadCrumbModel) => {
			return item.label === breadcrumbModel.label;
		});

		if (!breadcrumbExist) { breadcrumbs.push(breadcrumbModel); }

		if (route.firstChild) {
			return this.createBreadcrumb(route.firstChild, itemUrl, breadcrumbs);
		}
		return breadcrumbs;
	}

	public createAbsoluteUrl(items: UrlSegment[], startUrl: string = ''): string {
		return items.reduce((resultUrl: string, item: UrlSegment) => {
			resultUrl += `${this.urlSeparator}${item.path}`;
			return resultUrl;
		}, startUrl);
	}
}
