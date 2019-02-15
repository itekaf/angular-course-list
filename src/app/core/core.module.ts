import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		LogoComponent,
		FooterComponent,
		HeaderComponent,
		BreadcrumbsComponent
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		BreadcrumbsComponent,
	]

})
export class CoreModule { }
