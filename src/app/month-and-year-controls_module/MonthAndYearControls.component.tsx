import React from 'react';
import { MonthControls } from './MonthControls_component/MonthControls.component';
import { YearControls } from './YearControls_component/YearControls.component';


export class MonthAndYearControls extends React.Component {

	render() {
		return (
			<div id="month-and-year-controls" style={{display: 'flex', justifyContent: 'center'}}>
				<MonthControls />
				<YearControls />
			</div>
		);
	}
}
