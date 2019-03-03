export class AnswerModel {
	public status: number;

	public data?: object;
	public token?: string;
	public errors?: object[] = [];
	public message?: string;
	public hasErrors?: boolean = false;

	constructor(
		status: number,
		data?: object,
		token?: string,
		errors?: object[],
		message?: string,
		hasErrors?: boolean,
	) {
		this.status = status;

		this.data = data;
		this.token = token;
		this.errors = errors;
		this.message = message;
		this.hasErrors = hasErrors;
	}
}
