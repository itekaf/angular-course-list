import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faEdit, faClock, faTrashAlt, faCalendarAlt, faSearch, faSortAmountDown, faSortAmountUp, faSortNumericDown, faSortNumericUp, faStar, faAt, faKey, faSmile, faMinus, faUsers, faSignature, faListAlt } from '@fortawesome/free-solid-svg-icons';

export class Config {
	// TODO: RL: Need to refactor this
	public static icons: Map<string, IconDefinition> = new Map([
		['at', faAt],
		['key', faKey],
		['star', faStar],
		['plus', faPlus],
		['edit', faEdit],
		['minus', faMinus],
		['dummy', faSmile],
		['clock', faClock],
		['users', faUsers],
		['search', faSearch],
		['trash', faTrashAlt],
		['listAlt', faListAlt],
		['calendar', faCalendarAlt],
		['signature', faSignature],
		['sortAmountUp', faSortAmountUp],
		['sortNumericUp', faSortNumericUp],
		['sortAmountDown', faSortAmountDown],
		['sortNumericDown', faSortNumericDown],
	]);

	public static default = {
		logoPath: 'https://cdn3.iconfinder.com/data/icons/logos-3/250/angular-512.png',
		imagePath: 'https://via.placeholder.com/500x400',
		pages: {
			error: {
				code: 404,
				message: 'Page Not Found. Sorry :('
			}
		}
	};
}
