import React from 'react';
import { SelectedYear } from './SelectedYear.component';
import { ForwardOneYearButton } from './ForwardOneYearButton.component';
import { BackOneYearButton } from './BackOneYearButton.component';


export class YearControls extends React.Component {

	render() {
		return (
			<div id="year-controls" className="controls-container">

				<SelectedYear />

				<div className="left-and-right-arrow-buttons-container"
					 style={{marginLeft:'5px', height:'100%'}}
				>
					<BackOneYearButton className="control-button" />
					<ForwardOneYearButton className="control-button" />
				</div>
			</div>
		);
	}
}
