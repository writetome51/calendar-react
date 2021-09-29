import { MonthDisplayService as monthDisplay } from '@writetome51/calendar-helpers';
import React from 'react';
import { ClickExecuteRapidRepeatFunctionContext } from '../../shared/ClickExecuteRapidRepeatFunction_component/click-execute-rapid-repeat-function-context.interface';
import { RapidRepeatMatIconButton } from '../../shared/RapidRepeatMatIconButton.component';


export class ForwardOneMonthButton extends React.Component
	implements ClickExecuteRapidRepeatFunctionContext {

	render() {
		return (
			<RapidRepeatMatIconButton context={this} aria-label="add one month"
				id="forward-one-month" class="month-button fills-parent-dimensions"
			>
				keyboard_arrow_right
			</RapidRepeatMatIconButton>
		)
	}


	function() {
		monthDisplay.goForwardOrBackOne(1);
	}

}
