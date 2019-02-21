import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		FontAwesomeModule,
	],
	declarations: [
		IconComponent,
		InputComponent,
		ButtonComponent,
	],
	exports: [
		IconComponent,
		InputComponent,
		ButtonComponent,
	]
})
export class UiModule { }
