import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faEdit, faClock, faTrashAlt, faCalendarAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

export class Config {
	public static icons: Map<string, IconDefinition> = new Map([
		['plus', faPlus],
		['edit', faEdit],
		['clock', faClock],
		['trash', faTrashAlt],
		['search', faSearch],
		['calendar', faCalendarAlt],
	]);
}
