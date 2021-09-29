import { MonthDisplayService as monthDisplay, SelectedData } from '@writetome51/calendar-helpers';
import React from 'react';
import { RapidRepeatMatIconButton } from '../../shared/RapidRepeatMatIconButton.component';
import { ClickExecuteRapidRepeatFunctionContext }
	from '../../shared/ClickExecuteRapidRepeatFunction_component/click-execute-rapid-repeat-function-context.interface';


export class ForwardOneYearButton extends React.Component
	implements ClickExecuteRapidRepeatFunctionContext {

	selected = SelectedData;


	render() {
		return (
			<RapidRepeatMatIconButton context={this} aria-label="add one year"
									  id="forward-one-year"
			>
				keyboard_arrow_right
			</RapidRepeatMatIconButton>
		);
	}


	function() {
		++this.selected.year;
		monthDisplay.updateOnChangeOfSelectedMonthOrYear();
	}

}
