import { DayName } from './DayName.component';


export function DayNames() {

	const data = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

	return (
		<div className="week-block">
			{data.map((name) => <DayName key={name} name={name}/>)}
		</div>
	);
}
