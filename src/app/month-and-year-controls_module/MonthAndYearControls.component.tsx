import React from 'react';


export class MonthAndYearControls extends React.Component {

	render() {
		return (
			<div id="month-and-year-controls" style={display: flex; justify-content: center}>
				<month-controls />
				<year-controls />
			</div>
		);
	}
}
