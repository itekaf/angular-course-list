import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
		HttpClientModule,
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		AuthModule.forRoot(),
		PagesModule,
	],
	providers: [
		...httpInterceptors,
		HistoryService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
