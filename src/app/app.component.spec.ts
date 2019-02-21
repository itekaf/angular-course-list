import { BrowserModule } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { HomeModule } from './pages/home/home.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				BrowserModule,
				AppRoutingModule,
				RouterTestingModule,
				HomeModule,
			],
			declarations: [
				AppComponent,
			],
			schemas: [ NO_ERRORS_SCHEMA ],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});
});
