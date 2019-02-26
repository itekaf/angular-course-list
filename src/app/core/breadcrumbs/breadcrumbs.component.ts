import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivationEnd, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, distinctUntilChanged, map, pluck, buffer } from 'rxjs/operators';

export interface IBreadCrumb {
	label: string;
	url: string;
}

@Component({
	selector: 'app-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit	{
	// public breadcrumbList: object[] = [];
	// public bcLoadedData;
	// public bcForDisplay;
	// public breadcrumbs = this._router.events.pipe(
	// 	filter(event => event instanceof ActivationEnd),
	// 	distinctUntilChanged(),
	// 	filter(event => event instanceof NavigationEnd),
	// 	map(event => this.buildBreadCrumb(this.activatedRoute.root))
	// );
	@Input() public text: string = 'Courses';

	constructor(
		// private _router: Router,
		// private activatedRoute: ActivatedRoute,
	) { }

	public ngOnInit(): void {
		// this.listenRouting();
	}
	// public buildBreadCrumb(route: ActivatedRoute, url: string = '',
	// 				breadcrumbs: IBreadCrumb[] = []): IBreadCrumb[] {
	// 	// If no routeConfig is avalailable we are on the root path
	// 	const label = route.routeConfig ? route.routeConfig.data['breadcrumb'] : 'Home';
	// 	const path = route.routeConfig ? route.routeConfig.path : '';
	// 	// In the routeConfig the complete path is not available,
	// 	// so we rebuild it each time
	// 	const nextUrl = `${url}${path}/`;
	// 	const breadcrumb = {
	// 		label: label,
	// 		url: nextUrl,
	// 	};
	// 	const newBreadcrumbs = [...breadcrumbs, breadcrumb];
	// 	if (!route.firstChild) {
	// 		return newBreadcrumbs;
	// 	}
	// 	const result = this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
	// 	return result;

	// }

	// private listenRouting(): void {
	// 	const navigationEnd$ = this._router.events.pipe(filter((value: Event) => {
	// 		return value instanceof NavigationEnd;
	// 	}));

	// 	this._router.events.pipe(
	// 		filter((value: Event) => {
	// 			return value instanceof ActivationEnd;
	// 		}),
	// 		pluck('snapshot'),
	// 		pluck('data'),
	// 		buffer(navigationEnd$),
	// 		map((bcData: any[]) => bcData.reverse())
	// 	)
	// 	.subscribe(x => {
	// 		this.bcLoadedData = x;

	// 		this.bcForDisplay = this.bcLoadedData.reduce((rootAcc, rootElement) => {
	// 		let breakIn = [];
	// 		if (rootElement.breakIn) {
	// 			breakIn = rootElement.breakIn.reduce(
	// 			(acc, e) => [...acc, `break in ${e}'s home`],
	// 			[]
	// 			);
	// 		}
	// 		return [...rootAcc, rootElement.bc, ...breakIn];
	// 		}, []);
	// 	});
	// }
}
