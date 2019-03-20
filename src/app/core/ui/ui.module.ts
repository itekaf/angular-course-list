import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { IconComponent } from './icon/icon.component';
import { LabelComponent } from './label/label.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { TextareaComponent } from './textarea/textarea.component';

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
		LabelComponent,
		TextareaComponent,
	],
	exports: [
		LabelComponent,
		IconComponent,
		InputComponent,
		ButtonComponent,
		TextareaComponent,
	]
})
export class UiModule { }
