import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
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
import { AuthEffects } from './modules/auth/store/auth.effects';
import { authReducer } from './modules/auth/store/auth.reducer';

import { CoursesEffect } from './modules/course/store/course.effects';
import { courseReducer } from './modules/course/store/course.reduces';

import { loadingReducer } from './core/loading/store/loading.reducer';
import { LoadingEffects } from './core/loading/store/loading.effects';

import { HistoryEffects } from './modules/routers/store/history.effects';
import { historyReducer } from './modules/routers/store/history.reducers';

import { PlaylistsEffect } from './modules/playlist/store/playlist.effects';
import { playlistReducer } from './modules/playlist/store/playlist.reducer';

const store  = {
	auth: authReducer,
	loading: loadingReducer,
	courses: courseReducer,
	history: historyReducer,
	playlist: playlistReducer,
};

const effects = [
	AuthEffects,
	CoursesEffect,
	LoadingEffects,
	HistoryEffects,
	PlaylistsEffect,
];

const services = [
	HistoryService,
];

const modules = [
	BrowserModule,
	AppRoutingModule,
	CoreModule,
	PagesModule,
	HttpClientModule,

	ReactiveFormsModule,
	ToastContainerModule,
	BrowserAnimationsModule,

	AuthModule.forRoot(),
	ToastrModule.forRoot(),
	StoreModule.forRoot(store),
	EffectsModule.forRoot([ ...effects ]),

	StoreDevtoolsModule.instrument({
		maxAge: 25,
		logOnly: environment.production,
	}),
];

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
		...modules,
	],
	providers: [
		...httpInterceptors,
		...services,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
