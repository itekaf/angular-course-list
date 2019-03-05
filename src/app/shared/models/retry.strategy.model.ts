export class RetryStrategyModel {
	public maxRetry?: number;
	public duration?: number;

	constructor(
		maxRetry: number = 3,
		duration: number = 1000,
	) {
		this.maxRetry = maxRetry;
		this.duration = duration;
	}
}
