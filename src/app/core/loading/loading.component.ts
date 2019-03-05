import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { LoadingDirective } from './loading.directive';
import { ComponentFactoryResolver } from '@angular/core/src/render3';

@Component({
	selector: 'app-loading',
	templateUrl: './loading.component.html',
	styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
	private dynamicComponent: any;

	constructor(
		public vcRef: ViewContainerRef
	) { }
}
