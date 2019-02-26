import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';
import { LoginComponent } from './pages/login/login.component';
import { NoContentComponent } from './pages/no-content/no-content.component';

const routes: Routes = [
	{ path: 'courses', component: CoursesComponent },
	// { path: 'courses/new', component: },
	// { path: 'courses/:id', component: },
	{ path: 'login', component: LoginComponent },
	{ path: '', redirectTo: 'courses', pathMatch: 'full' },
	{ path: '**', component: NoContentComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
