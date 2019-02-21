import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

import { UiModule } from './ui/ui.module';

@NgModule({
	imports: [
		UiModule,
		RouterModule,
		CommonModule,
	],
	declarations: [
		LogoComponent,
		FooterComponent,
		HeaderComponent,
		BreadcrumbsComponent,
	],
	exports: [
		UiModule,
		LogoComponent,
		FooterComponent,
		HeaderComponent,
		BreadcrumbsComponent,
	]
})
export class CoreModule { }
