import React from 'react';


export class DayNames extends React.Component {

	readonly data = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];


	render() {
		return (
			<div className="week-block">
				{this.data.map((name) => this.renderDayName(name))}
			</div>
		);
	}


	renderDayName(name: string) {
		return (
			<div className="day-column" style={{border: '1px solid transparent'}}>
				<div className="calendar-day day-name">{name}</div>
			</div>
		);
	}

}
