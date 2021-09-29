import { ClickExecuteRapidRepeatFunctionContext }
	from './ClickExecuteRapidRepeatFunction_component/click-execute-rapid-repeat-function-context.interface';
import React from 'react';
import { ClickExecuteRapidRepeatFunction }
	from './ClickExecuteRapidRepeatFunction_component/ClickExecuteRapidRepeatFunction.component';


export class RapidRepeatMatIconButton extends React.Component {

	props: { context: ClickExecuteRapidRepeatFunctionContext } =
		{context: {function: () => undefined}};


	render() {
		return (
			<ClickExecuteRapidRepeatFunction context={this.props.context}>
				<button mat-icon-button onKeyDown.enter={this.props.context.function}>
					<mat-icon>
						<ng-content></ng-content>
					</mat-icon>
				</button>
			</ClickExecuteRapidRepeatFunction>
		);
	}

}
