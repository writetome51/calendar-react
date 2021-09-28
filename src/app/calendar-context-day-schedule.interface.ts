import { Appointment } from './shared/appointment.type';


export interface CalendarContextDaySchedule {

	get: (y: any, m: any, d: any) => Appointment[];

}
