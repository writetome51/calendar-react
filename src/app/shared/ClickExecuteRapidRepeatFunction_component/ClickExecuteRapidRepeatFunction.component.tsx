import { ClickExecuteRapidRepeatFunctionContext }
	from './click-execute-rapid-repeat-function-context.interface';
import { not } from '@writetome51/not';
import React from 'react';


export class ClickExecuteRapidRepeatFunction extends React.Component {

	props: { context: ClickExecuteRapidRepeatFunctionContext; [prop: string]: any } =
		{context: {function: () => undefined, initialDelayBeforeRapid: 500, rapidDelay: 70}};

	private __initialDelayBeforeRapid = 500; // ms
	private __rapidDelay = 70; // ms
	private __clickEnded = true;

	private get __context(): ClickExecuteRapidRepeatFunctionContext {return this.props.context}


	render() {
		this.__prepareToRender();
		return (
			<div className="click-execute-rapid-repeat-function"
				 onMouseDown={this.start} onMouseUp={this.stop}
				 onTouchStart={this.start} onTouchEnd={this.stop}
			>
				{this.props.inner}
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
				// @ts-ignore
				const inner = setInterval(
					() => this.__actionToRepeat(inner), this.__rapidDelay
				);
				clearInterval(outerInterval);
			},
			this.__initialDelayBeforeRapid // only happens once
		);
	}


	stop() {
		this.__clickEnded = true;
	}


	private __prepareToRender() {
		if (this.__context.initialDelayBeforeRapid)
			this.__initialDelayBeforeRapid = this.__context.initialDelayBeforeRapid;
		if (this.__context.rapidDelay) this.__rapidDelay = this.__context.rapidDelay;
	}


	private __actionToRepeat(interval: number) {
		if (not(this.__clickEnded)) this.__context.function();
		else clearInterval(interval);
	}

}
