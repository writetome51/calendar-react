import { BackOneMonthButton } from './BackOneMonthButton.component';
import { ForwardOneMonthButton } from './ForwardOneMonthButton.component';
import { SelectedMonth } from './SelectedMonth.component';


export function MonthControls() {
	return (
		<div id="month-controls" className="controls-container"
			 style={{marginTop: 0, marginRight: '5px'}}
		>
			<div className="left-and-right-arrow-buttons-container" style={{marginRight: '5px'}}>
				<BackOneMonthButton className="control-button"/>
				<ForwardOneMonthButton className="control-button"/>
			</div>
			<div id="month-name" className="calendar-input-container"
				 style={{display: 'inline-block'}}
			>
				<SelectedMonth/>
			</div>

		</div>
	);
}
