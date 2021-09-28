import { DaysOfMonth } from '@writetome51/calendar-helpers';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { getPage } from '@writetome51/array-get-page';
import { getRoundedUp } from '@writetome51/get-rounded-up-down';
import React from 'react';
import { DayOfMonth } from './DayOfMonth.component';


export class WeeksOfMonth extends React.Component {

	weeks: DaysOfMonth[] = [];
	props: { days: DaysOfMonth | undefined; } = {days: undefined};


	render() {
		if (this.props.days) {
			this.__set_weeks(this.props.days);

			return this.weeks.map((week) => this.renderWeek(week));
		}
	}


	renderWeek(week: any[]) {
		return (
			<div className="week-block">
				{week.map((day) => this.renderDay(day))}
			</div>
		);
	}


	renderDay(day: number) {
		return (
			<div className="day-column">
				<DayOfMonth number={day} />
			</div>
		);
	}


	private __set_weeks(days: DaysOfMonth){
		this.weeks = getArrFilled(
			getRoundedUp(days.length / 7),
			// @ts-ignore
			(i) => getPage(i + 1, 7, dys)
		);
		let last = this.weeks.length - 1;
		this.weeks[last].push(...this.__getFillerForLastWeek(last));
	}


	private __getFillerForLastWeek(lastWeekIndex: number): ''[] {
		let lastLen = this.weeks[lastWeekIndex].length;
		if (lastLen < 7) return getArrFilled(7 - lastLen, () => '');
		else return [];
	}

}
