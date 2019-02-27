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
export class BreadcrumbsComponent	{
	@Input() public text: string = 'Courses';

	constructor() { }
}
