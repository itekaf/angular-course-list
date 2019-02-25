import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { ModulesModule } from '../modules/modules.module';

import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { NoContentComponent } from './no-content/no-content.component';

@NgModule({
	imports: [
		FormsModule,
		CoreModule,
		ModulesModule,
		CommonModule
	],
	declarations: [
		LoginComponent,
		CoursesComponent,
		NoContentComponent
	],
})
export class PagesModule { }
