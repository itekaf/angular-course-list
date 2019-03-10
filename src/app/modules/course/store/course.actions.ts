import { Action } from '@ngrx/store';
import { CourseModel } from 'src/app/shared/models';

export enum CourseActionEnum {
	ReadSuccess = '[Course] Read Success',
	DeleteSuccess = '[Course] Delete Success',
	CreateSuccess = '[Course] Create Success',
	UpdateSuccess = '[Course] Update Success',

	Read = '[Course] Read',
	Create = '[Course] Create',
	Update = '[Course] Update',
	Delete = '[Course] Delete',
	Concat = '[Course] Concat',

	CourseError = '[Course] Courses Error',
	CourseRedirect = '[Course] Redirect to Courses',
}

export class Redirect implements Action {
	public readonly type: CourseActionEnum =  CourseActionEnum.CourseRedirect;
}

export class CourseError implements Action {
	public readonly type: CourseActionEnum =  CourseActionEnum.CourseError;
}

export class ReadSuccess implements Action {
	public readonly type: CourseActionEnum =  CourseActionEnum.ReadSuccess;
	constructor(public payload: CourseModel[]) {}
}

export class DeleteSuccess implements Action {
	public readonly type: CourseActionEnum =  CourseActionEnum.DeleteSuccess;
	constructor(public payload: string) {}
}

export class CreateSuccess implements Action {
	public readonly type: CourseActionEnum =  CourseActionEnum.CreateSuccess;
	constructor(public payload: CourseModel) {}
}

export class UpdateSuccess implements Action {
	public readonly type: CourseActionEnum = CourseActionEnum.UpdateSuccess;
	constructor(public payload: CourseModel) {}
}

export class Read implements Action {
	public readonly type: CourseActionEnum = CourseActionEnum.Read;
	constructor(public payload: { query: string, from: number, count: number }) {}
}

export class Create implements Action {
	public readonly type: CourseActionEnum =  CourseActionEnum.Create;
	constructor(public payload: CourseModel) {}
}

export class Delete implements Action {
	public readonly type: CourseActionEnum =  CourseActionEnum.Delete;
	constructor(public payload: string) {}
}

export class Update implements Action {
	public readonly type: CourseActionEnum = CourseActionEnum.Update;
	constructor(public payload: { id: string, data: CourseModel }) {}
}

export class Concat implements Action {
	public readonly type: CourseActionEnum = CourseActionEnum.Concat;
	constructor(public payload: CourseModel[]) {}
}

export type CourseActionTypes =
	Read |
	Create |
	Delete |
	Update |
	Concat |
	ReadSuccess |
	CreateSuccess |
	DeleteSuccess |
	UpdateSuccess |
	CourseError;
