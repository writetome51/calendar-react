import React from 'react';
import { DaysOfMonthData, MonthDisplayService as monthDisplay }
	from '@writetome51/calendar-helpers';
import { WeeksOfMonth } from './weeks-of-month_module/WeeksOfMonth.component';
import { DayNames } from './DayNames.component';
import { DayScheduleService } from './shared/day-schedule.service';
import { CalendarContext } from './calendar-context.interface';
import { MonthAndYearControls }
	from './month-and-year-controls_module/MonthAndYearControls.component';


export class AppCalendar extends React.Component {

	// If left undefined, the calendar is a simple date-picker widget.
	context: CalendarContext | undefined;

	daysOfMonth = DaysOfMonthData;


	constructor(
		private __daySchedule: DayScheduleService
	) {
		// @ts-ignore
		super(props);
		monthDisplay.init();
	}


	ngOnInit() {
		if (this.context) this.__daySchedule.setImplementation(this.context.daySchedule);
	}


	render() {
		return (
			<div id="cal-boundary">
				<MonthAndYearControls />

				<DayNames />

				<WeeksOfMonth days={this.daysOfMonth.data} />
			</div>
		);
	}
}
