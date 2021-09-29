import { SelectedData } from '@writetome51/calendar-helpers';
import React from 'react';


export class SelectedYear extends React.Component {

	selected = SelectedData;


	render() {
		return (
			<div id="year-container" className="calendar-input-container"
				 style={{paddingLeft: '8px', top: '30px'}}
			>
				{this.selected.year}
			</div>
		);
	}

}
