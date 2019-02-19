import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserWidgetComponent } from './user-widget/user-widget.component';

@NgModule({
	declarations: [
		UserWidgetComponent,
	],
	imports: [
		CommonModule
	],
	exports: [
		UserWidgetComponent,
	]
})
export class WidgetsModule { }
