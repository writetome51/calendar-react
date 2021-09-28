import React from 'react';
import { DaysOfMonthData, MonthDisplayService as monthDisplay }
	from '@writetome51/calendar-helpers';
import { WeeksOfMonth } from './weeks-of-month_module/WeeksOfMonth.component';


export class AppCalendar extends React.Component<any, any> {

	// If left undefined, the calendar is a simple date-picker widget.
	// context: CalendarContext | undefined;

	daysOfMonth = DaysOfMonthData;


	constructor(
		// private __daySchedule: DayScheduleService
	) {
		// @ts-ignore
		super(props);
		monthDisplay.init();
	}


	render() {
		return (
			<div id="cal-boundary">
				<month-and-year-controls/>

				<day-names/>

				<WeeksOfMonth days={this.daysOfMonth.data} />
			</div>
		);
	}
}
