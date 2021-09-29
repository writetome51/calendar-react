import React from 'react';
import { BackOneMonthButton } from './BackOneMonthButton.component';
import { ForwardOneMonthButton } from './ForwardOneMonthButton.component';
import { SelectedMonth } from './SelectedMonth.component';


export class MonthControls extends React.Component {

	render() {
		return (
			<div id="month-controls" className="controls-container"
				 style={{marginTop: 0, marginRight: '5px'}}
			>
				<div className="left-and-right-arrow-buttons-container" style={{marginRight:'5px'}}>
					<BackOneMonthButton className="control-button" />
					<ForwardOneMonthButton className="control-button" />
				</div>

				<SelectedMonth />
			</div>
		);
	}
}
