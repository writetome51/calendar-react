import { MonthDisplayService, MonthNamesData, SelectedData } from '@writetome51/calendar-helpers';
import React from 'react';
import { MonthOptions } from './MonthOptions.component';
import { MDCSelect } from '@material/select';


export class SelectedMonth extends React.Component {

	// @ts-ignore
	mdcSelect: MDCSelect;
	selected = SelectedData;
	monthNames = MonthNamesData;
	monthDisplay = MonthDisplayService;


	render() {
		return (
			<div id="month-selector" className="fills-parent-dimensions"
				 style={{paddingLeft: '4px'}}
			>
				{this.__initialize_mdcSelect()}
				<MonthOptions/>

			</div>
		);
	}


	private __initialize_mdcSelect() {
		// @ts-ignore
		this.mdcSelect = new MDCSelect(document.getElementById('month-selector'));
		this.mdcSelect.value = this.selected.month;
		this.mdcSelect.listen('MDCSelect:change', () => {
			this.monthDisplay.updateOnChangeOfSelectedMonthOrYear();
			this.mdcSelect.value = this.selected.month;
		});
	}

}
