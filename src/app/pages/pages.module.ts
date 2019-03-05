import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { CoursesModule } from './courses/courses.module';
import { ModulesModule } from '../modules/modules.module';

import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';
import { NoContentComponent } from './no-content/no-content.component';

@NgModule({
	imports: [
		CoreModule,
		FormsModule,
		CommonModule,
		ModulesModule,
		CoursesModule,
		RouterModule,
	],
	declarations: [
		LoginComponent,
		NoContentComponent,
		RegistryComponent,
	],
})
export class PagesModule { }
