import { SelectedData as selected } from '@writetome51/calendar-helpers';
import React from 'react';


export function SelectedYear() {
	return (
		<div id="year-container" className="calendar-input-container"
			 style={{paddingLeft: '8px', top: '30px'}}
		>
			{selected.year}
		</div>
	);
}
