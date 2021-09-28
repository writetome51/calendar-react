import { ImplementationContainer } from './implementation-container';
import { CalendarContextDaySchedule } from '../calendar-context-day-schedule.interface';
import { Appointment } from './appointment.type';


export class DayScheduleService extends ImplementationContainer<CalendarContextDaySchedule> {

	async get(
		year: number, month: number, dayOfMonth: number
	): Promise<Appointment[] | void> {

		if (!(this._implementation)) return;
		if (dayOfMonth < 1) return;

		return this._implementation.get(year, month, dayOfMonth);
	}

}
