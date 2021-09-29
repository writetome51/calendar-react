import React from 'react';


export class YearControls extends React.Component {

	render() {
		return (
			<div id="year-controls" className="controls-container">

				<selected-year></selected-year>

				<div className="left-and-right-arrow-buttons-container"
					 style={{marginLeft:'5px', height:'100%'}}
				>
					<back-one-year-button className="control-button"></back-one-year-button>
					<forward-one-year-button className="control-button"></forward-one-year-button>
				</div>
			</div>
		);
	}
}
