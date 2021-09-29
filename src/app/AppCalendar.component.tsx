import React from 'react';
import { DaysOfMonthData, MonthDisplayService as monthDisplay }
	from '@writetome51/calendar-helpers';
import { WeeksOfMonth } from './WeeksOfMonth_component/WeeksOfMonth.component';
import { DayNames } from './DayNames.component';
import { DayScheduleService } from './shared/day-schedule.service';
import { CalendarContext } from './calendar-context.interface';
import { MonthAndYearControls }
	from './month-and-year-controls_module/MonthAndYearControls.component';


export class AppCalendar extends React.Component {

	// If context is left undefined, the calendar is a simple date-picker widget.
	props: {context: CalendarContext | undefined} = {context: undefined};

	daysOfMonth = DaysOfMonthData;


	constructor(
		private __daySchedule: DayScheduleService
	) {
		// @ts-ignore
		super(props);
		monthDisplay.init();
	}


	render() {
		if (this.props.context) this.__daySchedule.setImplementation(
			this.props.context.daySchedule
		);
		return (
			<div id="cal-boundary">
				<MonthAndYearControls />
				<DayNames />
				<WeeksOfMonth days={this.daysOfMonth.data} />
			</div>
		);
	}
}
