import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MaindashboardComponent } from '../maindashboard/maindashboard.component';

Injectable()
export class UserCanDeactivate implements CanDeactivate<MaindashboardComponent> {
canDeactivate() {
	return window.confirm('Do you want to continue?');
	}
}
