import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Config } from 'src/app/shared/index';
import { CourseModel } from 'src/app/shared/models';

@Component({
	selector: 'app-course-item',
	templateUrl: './course-item.component.html',
	styleUrls: ['./course-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent {
	// TODO: RL: move courseItem, and e.t.c like a DI
	@Input() public courseItem: CourseModel = new CourseModel(1, 'temp');
	@Input() public icons: Map<string, IconDefinition> = Config.icons;

	@Output() public editEvent: EventEmitter<number> = new EventEmitter<number>();
	@Output() public removeEvent: EventEmitter<number> = new EventEmitter<number>();

	constructor() {	}

	public onEdit(): void  {
		this.editEvent.emit(this.courseItem.id);
	}

	public onRemove(): void {
		this.removeEvent.emit(this.courseItem.id);
	}

}
