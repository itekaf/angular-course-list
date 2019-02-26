import { TestBed } from '@angular/core/testing';

import { CourseService } from './course.service';
import { Component } from '@angular/core';

@Component({
	template: ``
})
class TestHostComponent {
	constructor(private cousrService: CourseService) {}

	public onRead(): void {}
	public onCreate(): void {}
	public onUpdate(): void {}
	public onDelete(): void {}
}
describe('CourseService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	describe('Service alone', () => {
		it('should be created', () => {
			const service: CourseService = TestBed.get(CourseService);
			expect(service).toBeTruthy();
		});
		it('get method', () => {});
		it('put method', () => {});
		it('delete method', () => {});
		it('update method', () => {});
	});

	describe('Test Host Component', () => {
		it('should be create', () => {});
		it('get method', () => {});
		it('put method', () => {});
		it('delete method', () => {});
		it('update method', () => {});
	});

});
