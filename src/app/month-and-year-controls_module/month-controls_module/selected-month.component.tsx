import { Component } from '@angular/core';
import { MonthDisplayService } from '../month-display_service/month-display.service';
import { MonthNamesData } from '@shared/month-names.data';
import { SelectedData } from '@app/month-and-year-controls_module/selected.data';


@Component({
	selector: 'selected-month',
	template: `
		<div id="month-name" class="calendar-input-container">
			<mat-form-field appearance="outline" class="fills-parent-height">

				<mat-select id="month-selector" class="fills-parent-dimensions"
							[(value)]="selected.month" [placeholder]="selected.month"
							(valueChange)="monthDisplay.updateOnChangeOfSelectedMonthOrYear()"
				>
					<mat-option *ngFor="let monthName of monthNames.data" [value]="monthName">
						{{monthName}}
					</mat-option>
				</mat-select>

			</mat-form-field>
		</div>
	`,
	styles: [
		`#month-name {
			display: inline-block;
		}`,
		`mat-form-field {
			width: 140px;
			padding: 0;
		}`,
		`#month-selector {
			padding-left: 4px;
		}`
	]
})
export class SelectedMonthComponent {

	selected = SelectedData;
	monthNames = MonthNamesData;


	constructor(public monthDisplay: MonthDisplayService) {}

}