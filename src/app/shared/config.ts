import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faEdit, faClock, faTrashAlt, faCalendarAlt, faSearch, faSortAmountDown, faSortAmountUp, faSortNumericDown, faSortNumericUp, faStar } from '@fortawesome/free-solid-svg-icons';

export class Config {
	public static icons: Map<string, IconDefinition> = new Map([
		['star', faStar],
		['plus', faPlus],
		['edit', faEdit],
		['clock', faClock],
		['trash', faTrashAlt],
		['search', faSearch],
		['calendar', faCalendarAlt],
		['sortAmountUp', faSortAmountUp],
		['sortNumericUp', faSortNumericUp],
		['sortAmountDown', faSortAmountDown],
		['sortNumericDown', faSortNumericDown],
	]);

	public static default = {
		logoPath: 'https://cdn3.iconfinder.com/data/icons/logos-3/250/angular-512.png',
		imagePath: 'https://via.placeholder.com/500x400',
	};
}
