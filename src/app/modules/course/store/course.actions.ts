import { CourseModel } from 'src/app/shared/models';
import { IAction } from 'src/app/shared/interface/action.interface';

export enum CourseActionEnum {
	ReadSuccess = '[Course] Read Success',
	DeleteSuccess = '[Course] Delete Success',
	CreateSuccess = '[Course] Create Success',
	UpdateSuccess = '[Course] Update Success',
	ReadByIdSuccess = '[Course] Read By Id Success',

	Read = '[Course] Read',
	Create = '[Course] Create',
	Update = '[Course] Update',
	Delete = '[Course] Delete',
	Concat = '[Course] Concat',
	ReadById = '[Course] Read By Id',

	CourseError = '[Course] Courses Error',
	CourseRedirect = '[Course] Redirect to Courses',
}

export class CourseReadById implements IAction<string> {
	public readonly type: CourseActionEnum =  CourseActionEnum.ReadById;
	constructor(public payload: string) {}
}

export class CourseReadByIdSuccess implements IAction<CourseModel> {
	public readonly type: CourseActionEnum =  CourseActionEnum.ReadByIdSuccess;
	constructor(public payload: CourseModel) {}
}

export class CourseRedirect implements IAction {
	public readonly type: CourseActionEnum =  CourseActionEnum.CourseRedirect;
}

export class CourseError implements IAction {
	public readonly type: CourseActionEnum =  CourseActionEnum.CourseError;
	constructor(public payload: any) {}
}

export class CourseReadSuccess implements IAction<CourseModel[]> {
	public readonly type: CourseActionEnum =  CourseActionEnum.ReadSuccess;
	constructor(public payload: CourseModel[]) {}
}

export class CourseDeleteSuccess implements IAction<string> {
	public readonly type: CourseActionEnum =  CourseActionEnum.DeleteSuccess;
	constructor(public payload: string) {}
}

export class CourseCreateSuccess implements IAction<CourseModel> {
	public readonly type: CourseActionEnum =  CourseActionEnum.CreateSuccess;
	constructor(public payload: CourseModel) {}
}

export class CourseUpdateSuccess implements IAction<CourseModel> {
	public readonly type: CourseActionEnum = CourseActionEnum.UpdateSuccess;
	constructor(public payload: CourseModel) {}
}

export class CourseRead implements IAction< { query: string, from: number, count: number }> {
	public readonly type: CourseActionEnum = CourseActionEnum.Read;
	constructor(public payload: { query: string, from: number, count: number }) {}
}

export class CourseCreate implements IAction<CourseModel> {
	public readonly type: CourseActionEnum =  CourseActionEnum.Create;
	constructor(public payload: CourseModel) {}
}

export class CourseDelete implements IAction<string> {
	public readonly type: CourseActionEnum =  CourseActionEnum.Delete;
	constructor(public payload: string) {}
}

export class CourseUpdate implements IAction<{ id: string, data: CourseModel }> {
	public readonly type: CourseActionEnum = CourseActionEnum.Update;
	constructor(public payload: { id: string, data: CourseModel }) {}
}

export class CourseConcat implements IAction<CourseModel[]> {
	public readonly type: CourseActionEnum = CourseActionEnum.Concat;
	constructor(public payload: CourseModel[]) {}
}

export type CourseActionTypes =
	CourseRead |
	CourseCreate |
	CourseDelete |
	CourseUpdate |
	CourseConcat |
	CourseReadSuccess |
	CourseCreateSuccess |
	CourseDeleteSuccess |
	CourseUpdateSuccess |
	CourseError;
