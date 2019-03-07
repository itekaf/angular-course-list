import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './modules/auth/auth.module';
import { HistoryService } from './modules/routers/history.service';

import { BodyHttpMiddelware } from './shared/middlewares/http/body.service';
import { AuthHttpMiddelware } from './shared/middlewares/http/auth.service';
import { HeadersHttpMiddelware } from './shared/middlewares/http/headers.service';

import { environment } from '../environments/environment';
import { authReducer } from './modules/auth/store/auth.reducer';
import { AuthEffects } from './modules/auth/store/auth.effects';
import { courseReducer } from './modules/course/store/course.reduces';
import { CoursesEffect } from './modules/course/store/course.effects';

const httpInterceptors = [
	{
		provide: HTTP_INTERCEPTORS,
		useClass: BodyHttpMiddelware,
		multi: true
	},
	{
		provide: HTTP_INTERCEPTORS,
		useClass: HeadersHttpMiddelware,
		multi: true,
	},
	{
		provide: HTTP_INTERCEPTORS,
		useClass: AuthHttpMiddelware,
		multi: true,
	}
];

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		StoreModule.forRoot({
			auth: authReducer,
			courses: courseReducer,
		}),
		EffectsModule.forRoot([ AuthEffects, CoursesEffect ]),
		HttpClientModule,
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		AuthModule.forRoot(),
		PagesModule,

		StoreDevtoolsModule.instrument({
			maxAge: 25, // Retains last 25 states
			logOnly: environment.production, // Restrict extension to log-only mode
		}),
	],
	providers: [
		...httpInterceptors,
		HistoryService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
