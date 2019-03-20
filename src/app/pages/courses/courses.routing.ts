import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
	{
		path: '',
		component: CoursesComponent,
		data: {
			label: 'Courses'
		},
		children: [
			{
				path: '',
				component: ListComponent,
				data: {
					label: 'List'
				},
			},
			{
				path: 'new',
				component: NewComponent,
				data: {
					label: 'New'
				}
			},
			{
				path: ':courseId',
				component: EditComponent,
				data: {
					label: 'Edit'
				}
			},
		]
	},
];

export const CoursesRoutes = RouterModule.forChild(routes);
