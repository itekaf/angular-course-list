import { MockComponent } from 'ng-mocks';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeModule } from './views/home/home.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { BreadcrumbsComponent } from './core/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './core/footer/footer.component';

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
				MockComponent(HeaderComponent),
				MockComponent(BreadcrumbsComponent),
				MockComponent(FooterComponent),
			],
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

	// it(`should have as title 'Angular-course-list'`, () => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	const app = fixture.debugElement.componentInstance;
	// 	expect(app.title).toEqual('Angular-course-list');
	// });

	// it('should render title in a h1 tag', () => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	fixture.detectChanges();
	// 	const compiled = fixture.debugElement.nativeElement;
	// 	expect(compiled.querySelector('h1').textContent).toContain('Welcome to Angular-course-list!');
	// });
});
