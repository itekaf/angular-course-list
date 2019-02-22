import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { ModulesModule } from '../modules/modules.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
	imports: [
		FormsModule,
		CoreModule,
		ModulesModule,
		CommonModule
	],
	declarations: [
		LoginComponent,
		HomeComponent,
		PageNotFoundComponent
	],
})
export class PagesModule { }
