import { ClickExecuteRapidRepeatFunctionContext }
	from './ClickExecuteRapidRepeatFunction_component/click-execute-rapid-repeat-function-context.interface';
import React from 'react';
import { ClickExecuteRapidRepeatFunction }
	from './ClickExecuteRapidRepeatFunction_component/ClickExecuteRapidRepeatFunction.component';


export class RapidRepeatMatIconButton extends React.Component {

	context: ClickExecuteRapidRepeatFunctionContext = {function: () => undefined};
	props: { [prop: string]: any } = {};


	render() {
		// onKeyDown event should only trigger if key is ENTER
		return (
			<ClickExecuteRapidRepeatFunction context={this.context}>
				<button className="mdc-icon-button material-icons" id={this.props.id}
					// @ts-ignore
					onKeyDown={this.__callFuncIfEnterKey}
				>
					{this.props.matIcon}
				</button>
			</ClickExecuteRapidRepeatFunction>
		);
	}


	private __callFuncIfEnterKey(event: KeyboardEvent) {
		console.log(event);
		//	if (event.key === 'enter') this.props.context.function();
	}

}
