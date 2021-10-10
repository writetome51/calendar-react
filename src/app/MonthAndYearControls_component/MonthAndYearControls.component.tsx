import { MonthControls } from './MonthControls_component/MonthControls.component';
import { YearControls } from './YearControls_component/YearControls.component';


export function MonthAndYearControls() {
	return (
		<div id="month-and-year-controls" style={{display: 'flex', justifyContent: 'center'}}>
			<MonthControls/>
			<YearControls/>
		</div>
	);
}
