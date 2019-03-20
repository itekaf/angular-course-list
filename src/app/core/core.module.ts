import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

import { UiModule } from './ui/ui.module';
import { LoadingDirective } from './loading/loading.directive';
import { LoadingComponent } from './loading/loading.component';

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
		LoadingComponent,
		LoadingDirective,
	],
	exports: [
		UiModule,
		LogoComponent,
		FooterComponent,
		HeaderComponent,
		LoadingDirective,
		BreadcrumbsComponent,
	],
	entryComponents: [
		LoadingComponent
	]
})
export class CoreModule { }
