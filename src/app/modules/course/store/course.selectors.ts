import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { CourseModel } from 'src/app/shared/models';
import { ICourseState } from './course.reduces';

export const getAllCourses = createFeatureSelector('courses');
export const getCoursesList = createSelector(
	getAllCourses,
	(state: ICourseState) => state.data
);
export const findCourseById = (id: string): MemoizedSelector<ICourseState, CourseModel> => createSelector(
	getAllCourses,
	(state: ICourseState) => state.data.find((item: CourseModel) => item.id === id)
);
export const getCurrentCourse = createSelector(
	getAllCourses,
	(state: ICourseState) => state.current
);
