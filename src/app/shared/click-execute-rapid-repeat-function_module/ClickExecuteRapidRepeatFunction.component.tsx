import { ClickExecuteRapidRepeatFunctionContext } from './click-execute-rapid-repeat-function-context.interface';
import { not } from '@writetome51/not';
import React from 'react';
import { ReactComponent } from '*.svg';


export class ClickExecuteRapidRepeatFunction extends React.Component {

	props: { context: ClickExecuteRapidRepeatFunctionContext } =
		{context: {function: () => undefined}};

	private readonly __defaultInitialDelayBeforeRapid = 500; // ms
	private readonly __defaultRapidDelay = 70; // ms
	private __clickEnded = true;

	private get __context() {return this.props.context}


	render() {
		this.__prepareToRender();
		return (
			<div className="click-execute-rapid-repeat-function"
				 onMouseDown={this.start} onMouseUp={this.stop}
				 onTouchStart={this.start} onTouchEnd={this.stop}
			>
				<ReactComponent/>
			</div>
		);
	}


	start(event: { preventDefault: () => void; stopPropagation: () => void; }) {
		event.preventDefault();
		event.stopPropagation();

		if (not(this.__clickEnded)) return;
		this.__clickEnded = false;
		this.__context.function();

		const outerInterval = setInterval(
			() => {
				const inner: number = setInterval(
					() => this.__actionToRepeat(inner), this.__context.rapidDelay
				);
				clearInterval(outerInterval);
			},
			this.__context.initialDelayBeforeRapid // only happens once
		);
	}


	stop() {
		this.__clickEnded = true;
	}


	private __prepareToRender() {
		if (not(this.__context.initialDelayBeforeRapid))
			this.__context.initialDelayBeforeRapid = this.__defaultInitialDelayBeforeRapid;
		if (not(this.__context.rapidDelay)) this.__context.rapidDelay = this.__defaultRapidDelay;
	}


	private __actionToRepeat(interval: number) {
		if (not(this.__clickEnded)) this.__context.function();
		else clearInterval(interval);
	}

}
