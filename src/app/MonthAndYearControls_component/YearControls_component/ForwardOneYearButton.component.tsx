import { MonthDisplayService as monthDisplay, SelectedData } from '@writetome51/calendar-helpers';
import React from 'react';
import { RapidRepeatMatIconButton } from '../../shared/RapidRepeatMatIconButton.component';
import { ClickExecuteRapidRepeatFunctionContext }
	from '../../shared/ClickExecuteRapidRepeatFunction_component/click-execute-rapid-repeat-function-context.interface';


export class ForwardOneYearButton extends React.Component
	implements ClickExecuteRapidRepeatFunctionContext {

	props: { [prop: string]: any } = {};
	selected = SelectedData;


	render() {
		return (
			<RapidRepeatMatIconButton matIcon="keyboard_arrow_right" id="forward-one-year"
				aria-label="add one year"
			/>
		);
	}


	function() {
		++this.selected.year;
		monthDisplay.updateOnChangeOfSelectedMonthOrYear();
	}

}
