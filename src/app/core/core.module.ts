import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

import { WidgetsModule } from './widgets/widgets.module';
import { UiModule } from './ui/ui.module';

@NgModule({
	imports: [
		UiModule,
		RouterModule,
		CommonModule,
		WidgetsModule,
	],
	declarations: [
		LogoComponent,
		FooterComponent,
		HeaderComponent,
		BreadcrumbsComponent,
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		BreadcrumbsComponent,
	]

})
export class CoreModule { }
