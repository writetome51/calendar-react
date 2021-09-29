import { MonthDisplayService } from '@writetome51/calendar-helpers';
import { MonthNamesData } from '@writetome51/calendar-helpers';
import { SelectedData } from '@writetome51/calendar-helpers';
import React from 'react';


export class SelectedMonth extends React.Component {

	selected = SelectedData;
	monthNames = MonthNamesData;
	monthDisplay = MonthDisplayService;


	render() {
		return (
			<div id="month-name" className="calendar-input-container"
				 style={{display:'inline-block'}}
			>
				<mat-form-field appearance="outline" className="fills-parent-height"
					style={{width:'140px', padding:0}}>

					<mat-select id="month-selector" class="fills-parent-dimensions"
						style={{paddingLeft:'4px'}}
						[(value)]="selected.month" [placeholder]="selected.month"
						(valueChange)="monthDisplay.updateOnChangeOfSelectedMonthOrYear()"
					>
						<mat-option *ngFor="let monthName of monthNames.data" [value]="monthName">
							{{monthName}}
						</mat-option>
					</mat-select>

				</mat-form-field>
			</div>
		);
	}

}
