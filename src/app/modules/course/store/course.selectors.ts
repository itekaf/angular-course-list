import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { CourseModel } from 'src/app/shared/models';
import { ICourseState } from './course.reduces';

export const getStateCourses = createFeatureSelector('courses');
export const getCourseById = (id: string): MemoizedSelector<ICourseState, CourseModel> => createSelector(
	getStateCourses,
	(state: ICourseState) => state.data.find((item: CourseModel) => item.id === id)
);
