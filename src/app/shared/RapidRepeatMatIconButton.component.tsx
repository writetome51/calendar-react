import { ClickExecuteRapidRepeatFunctionContext }
	from './ClickExecuteRapidRepeatFunction_component/click-execute-rapid-repeat-function-context.interface';
import React from 'react';
import { ClickExecuteRapidRepeatFunction }
	from './ClickExecuteRapidRepeatFunction_component/ClickExecuteRapidRepeatFunction.component';


export class RapidRepeatMatIconButton extends React.Component {

	props: { context: ClickExecuteRapidRepeatFunctionContext; [prop: string]: any } =
		{context: {function: () => undefined}};


	render() {
		return (
			<ClickExecuteRapidRepeatFunction context={this.props.context}>
				<button className="mdc-icon-button material-icons"
					onKeyDown.enter={this.props.context.function}
				>
					{this.props.inner}
				</button>
			</ClickExecuteRapidRepeatFunction>
		);
	}

}
