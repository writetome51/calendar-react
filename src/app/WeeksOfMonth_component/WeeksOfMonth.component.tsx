import { DaysOfMonth } from '@writetome51/calendar-helpers';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { getPage } from '@writetome51/array-get-page';
import { getRoundedUp } from '@writetome51/get-rounded-up-down';
import React from 'react';
import { DayOfMonth } from './DayOfMonth.component';


export class WeeksOfMonth extends React.Component {

	weeks: DaysOfMonth[] = [];
	props: { days: DaysOfMonth | undefined } = {days: undefined};


	render() {
		this.__prepareToRender();
		return this.weeks.map((week) => this.__renderWeek(week));
	}


	private __prepareToRender() {
		if (this.props.days) this.weeks = this.__getSplitIntoWeeks(this.props.days);
	}


	private __renderWeek(week: any[]) {
		return (
			<div className="week-block">
				{week.map((day: number) => this.__renderDay(day))}
			</div>
		);
	}


	private __renderDay(day: number) {
		return (
			<div className="day-column">
				<DayOfMonth number={day}/>
			</div>
		);
	}


	private __getSplitIntoWeeks(days: DaysOfMonth) {
		let weeks = getArrFilled(
			getRoundedUp(days.length / 7),
			// @ts-ignore
			(i) => getPage(i + 1, 7, days)
		);
		let last = weeks.length - 1;
		weeks[last].push(...this.__getFillerForLastWeek(last));
		return weeks;
	}


	private __getFillerForLastWeek(lastWeekIndex: number): ''[] {
		let lastLen = this.weeks[lastWeekIndex].length;
		if (lastLen < 7) return getArrFilled(7 - lastLen, () => '');
		else return [];
	}

}
