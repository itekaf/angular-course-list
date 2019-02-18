
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent, MockedComponent, MockRender } from 'ng-mocks';

import { CourseListItemComponent } from './course-list-item.component';
import { CourseListIconComponent } from '../course-list-icon/course-list-icon.component';
import { ICourse } from 'src/app/shared/interface';
import { CourseModel } from 'src/app/shared/models';
import { Config } from 'src/app/shared';
import { SinonStubbedInstance, createSandbox } from 'sinon';

const sandbox = createSandbox();

describe('CourseListItemComponent', () => {
	let component: CourseListItemComponent;
	let fixture: ComponentFixture<CourseListItemComponent>;

	const courseInstanceStub: SinonStubbedInstance<ICourse> = sandbox.createStubInstance(CourseModel);

	beforeEach(() => {
		sandbox.mock(Config);
	});

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ FontAwesomeModule ],
			declarations: [
				CourseListItemComponent,
				MockComponent(CourseListIconComponent)
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CourseListItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	afterEach(() => {
		sandbox.reset();
		sandbox.restore();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should edit', () => {
		expect(component.edit(courseInstanceStub)).toBeUndefined();
	});
});
