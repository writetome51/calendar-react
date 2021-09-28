import { Appointment } from '@shared/appointment.type';
import { DayScheduleService } from '@shared/day-schedule.service';
import { MonthNamesData as monthNames } from '@writetome51/calendar-helpers';
import { SelectedData as selected } from '@writetome51/calendar-helpers';
import { TodayData as today } from '@writetome51/calendar-helpers';
import React from 'react';


export class DayOfMonth extends React.Component<any, any>{

	appointments: Appointment[] | undefined;


	constructor(private __schedule: DayScheduleService) {
		// @ts-ignore
		super(props);
	}


	async ngOnInit() { // @ts-ignore
		this.appointments = await this.__schedule.get(
			selected.year, this.__getMonthNumber(selected.month), Number(this.props.number)
		);
	}


	render() {
		return (
			<div className="calendar-day day-square {this.isToday() ? today : ''}">
				&nbsp;{this.props.number}&nbsp;

				{this.appointments && this.appointments.length ? this.renderNumAppointments(): ''}
			</div>
		);
	}


	renderNumAppointments(){
		return (
			<span className="num-appointments">
				{ // @ts-ignore
					this.appointments.length
				}
			</span>
		);
	}


	isToday(): boolean {
		return (
			today.data.day === this.props.number &&
			monthNames.data[today.data.monthIndex] === selected.month  &&
			today.data.year === selected.year
		);
	}


	private __getMonthNumber(monthName: string) {
		return monthNames.data.indexOf(monthName) + 1;
	}

}
