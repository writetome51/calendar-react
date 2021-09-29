import { MonthDisplayService as monthDisplay } from '@writetome51/calendar-helpers';
import React from 'react';
import { ClickExecuteRapidRepeatFunctionContext } from '../../shared/ClickExecuteRapidRepeatFunction_component/click-execute-rapid-repeat-function-context.interface';
import { RapidRepeatMatIconButton } from '../../shared/RapidRepeatMatIconButton.component';


export class BackOneMonthButton extends React.Component
	implements ClickExecuteRapidRepeatFunctionContext {

	render() {
		return (
			<RapidRepeatMatIconButton context={this} aria-label="subtract one month"
				id="back-one-month" className="month-button fills-parent-dimensions"
			>
				keyboard_arrow_left
			</RapidRepeatMatIconButton>
		);
	}


	function() {
		monthDisplay.goForwardOrBackOne(-1);
	}

}
