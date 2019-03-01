import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { CoursesModule } from './courses/courses.module';
import { ModulesModule } from '../modules/modules.module';

import { LoginComponent } from './login/login.component';
import { NoContentComponent } from './no-content/no-content.component';

@NgModule({
	imports: [
		CoreModule,
		FormsModule,
		CommonModule,
		ModulesModule,
		CoursesModule,
	],
	declarations: [
		LoginComponent,
		NoContentComponent,
	],
})
export class PagesModule { }
