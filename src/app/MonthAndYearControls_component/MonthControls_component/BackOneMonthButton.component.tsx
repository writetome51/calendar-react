import { MonthDisplayService as monthDisplay } from '@writetome51/calendar-helpers';
import React from 'react';
import { ClickExecuteRapidRepeatFunctionContext }
	from '../../shared/ClickExecuteRapidRepeatFunction_component/click-execute-rapid-repeat-function-context.interface';
import { RapidRepeatMatIconButton } from '../../shared/RapidRepeatMatIconButton.component';


export class BackOneMonthButton extends React.Component
	implements ClickExecuteRapidRepeatFunctionContext {

	props: { [prop: string]: any } = {};


	render() {
		return (
			<RapidRepeatMatIconButton matIcon="keyboard_arrow_left" id="back-one-month"
				className="month-button fills-parent-dimensions" aria-label="subtract one month"
			/>
		);
	}


	function() {
		monthDisplay.goForwardOrBackOne(-1);
	}

}
