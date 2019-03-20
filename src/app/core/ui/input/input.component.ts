import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';

import { InputResultModel } from 'src/app/shared/models/input-result.model';

class LabelConfig {
	public icon: IconDefinition;
	public title: string;
	public text: string;
	public className: string;
}
@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit, OnDestroy {
	// TODO: RL: Implement Label Config
	@Input() public label: LabelConfig;
	@Input() public name: string;
	@Input() public type: string = 'text';
	@Input() public value: string;
	@Input() public className: string;
	@Input() public placeholder: string = 'Enter value ...';

	@Output() public inputEvent: EventEmitter<InputResultModel> = new EventEmitter<InputResultModel>();

	@ViewChild('inputElement') public inputRef: ElementRef;

	private debounceMs: number = 250;
	private inputObserable: Observable<object>;
	private inputObserableSub: Subscription;

	constructor() { }

	public ngOnInit(): void {
		this.inputObserable = fromEvent(this.inputRef.nativeElement, 'input');
		this.inputObserableSub = this.inputObserable
				.pipe(
					map((event: object) => event['target'].value),
					debounceTime(this.debounceMs),
					distinctUntilChanged()
				)
				.subscribe((value: string) => {
					const result = new InputResultModel(this.name, value);
					this.inputEvent.emit(result);
				});
	}

	public ngOnDestroy(): void {
		if (this.inputObserableSub) { this.inputObserableSub.unsubscribe(); }
	}
}
