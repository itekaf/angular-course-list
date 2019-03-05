import { mergeMap } from 'rxjs/operators';
import { Observable, throwError, timer } from 'rxjs';

import { RetryStrategyModel } from '../models';

export const genericRetryStrategy =
	(errors: Observable<any>, data: RetryStrategyModel = new RetryStrategyModel()): Observable<any> => {
		return errors.pipe(
			mergeMap((error: any, i: number) => {
				const retryCounter = i + 1;
				if (retryCounter > data.maxRetry) {
					return throwError(error);
				}
				console.log(`${retryCounter}: retrying in ${retryCounter * data.duration}ms`);
				return timer(retryCounter * data.duration);
			})
		);
	};
