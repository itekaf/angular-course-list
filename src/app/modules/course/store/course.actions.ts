import { Action } from '@ngrx/store';

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
	constructor(public payload: any) {}
}

export class RequestError implements Action {
	public readonly type: CourseActionEnum =  CourseActionEnum.CourseError;
	constructor(public payload: any) {}
}

export class ReadSuccess implements Action {
	public readonly type: CourseActionEnum =  CourseActionEnum.ReadSuccess;
	constructor(public payload: any) {}
}

export class DeleteSuccess implements Action {
	public readonly type: CourseActionEnum =  CourseActionEnum.DeleteSuccess;
	constructor(public payload: any) {}
}

export class CreateSuccess implements Action {
	public readonly type: CourseActionEnum =  CourseActionEnum.CreateSuccess;
	constructor(public payload: any) {}
}

export class UpdateSuccess implements Action {
	public readonly type: CourseActionEnum = CourseActionEnum.UpdateSuccess;
	constructor(public payload: any) {}
}

export class Read implements Action {
	public readonly type: CourseActionEnum = CourseActionEnum.Read;

	constructor(public payload: any) {}
}

export class Create implements Action {
	public readonly type: CourseActionEnum =  CourseActionEnum.Create;
	constructor(public payload: any) {}
}

export class Delete implements Action {
	public readonly type: CourseActionEnum =  CourseActionEnum.Delete;
	constructor(public payload: any) {}
}

export class Update implements Action {
	public readonly type: CourseActionEnum = CourseActionEnum.Update;
	constructor(public payload: any) {}
}

export class Concat implements Action {
	public readonly type: CourseActionEnum = CourseActionEnum.Concat;
	constructor(public payload: any) {}
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
	RequestError;
