import {
	MonthNamesData as monthNames,
	SelectedData as selected,
	TodayData as today
} from '@writetome51/calendar-helpers';
import React from 'react';
import { DayScheduleService } from '../shared/day-schedule.service';
import { Appointment } from '../shared/appointment.type';


export class DayOfMonth extends React.Component {

	appointments: Appointment[] | void = undefined;
	props: { number: number | undefined } = {number: undefined};
	rootElementClasses = 'calendar-day day-square ';


	constructor(private __schedule: DayScheduleService) {
		// @ts-ignore
		super(props);
	}


	// eslint-disable-next-line react/require-render-return
	async render() {
		await this.__prepareToRender();
		return (
			<div className={this.rootElementClasses}>
				&nbsp;{this.props.number}&nbsp;

				{this.appointments && this.appointments.length ?
					this.__renderNumAppointments() : ''}
			</div>
		);
	}


	private async __prepareToRender() {
		this.appointments = await this.__schedule.get(
			selected.year, this.__getMonthNumber(selected.month), Number(this.props.number)
		);
		this.rootElementClasses += (this.__isToday() ? 'today' : '');
	}


	private __renderNumAppointments() {
		return (
			<span className="num-appointments">
				{ // @ts-ignore
					this.appointments.length
				}
			</span>
		);
	}


	private __isToday(): boolean {
		return (
			today.data.day === this.props.number &&
			monthNames.data[today.data.monthIndex] === selected.month &&
			today.data.year === selected.year
		);
	}


	private __getMonthNumber(monthName: string) {
		return monthNames.data.indexOf(monthName) + 1;
	}

}
