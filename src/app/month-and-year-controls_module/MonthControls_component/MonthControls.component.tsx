import React from 'react';


export class MonthControls extends React.Component {

	render() {
		return (
			<div id="month-controls" className="controls-container"
				 style={{marginTop: 0, marginRight: '5px'}}
			>
				<div className="left-and-right-arrow-buttons-container" style={{marginRight:'5px'}}>
					<back-one-month-button className="control-button" />
					<forward-one-month-button className="control-button" />
				</div>

				<selected-month />
			</div>
		);
	}
}
