import { MonthDisplayService } from '@writetome51/calendar-helpers';
import { MonthNamesData } from '@writetome51/calendar-helpers';
import { SelectedData } from '@writetome51/calendar-helpers';
import React from 'react';


export class MonthOptions extends React.Component {

	selected = SelectedData;
	monthNames = MonthNamesData;
	monthDisplay = MonthDisplayService;


	render() {
		return (
			<div className="mdc-select__menu demo-width-class mdc-menu mdc-menu-surface">
				<ul className="mdc-deprecated-list">
					{this.__renderOptions()}
				</ul>
			</div>
		);
	}


	private __renderOptions(){
		return this.monthNames.data.map((monthName) => (
			<div className="mdc-select__menu demo-width-class mdc-menu mdc-menu-surface">
				<ul className="mdc-deprecated-list">
					<li className="mdc-deprecated-list-item" data-value="grains">
						<span className="mdc-deprecated-list-item__text">
							Bread, Cereal, Rice, and Pasta
						</span>
					</li>
					<li className="mdc-deprecated-list-item  mdc-deprecated-list-item--selected"
						data-value="vegetables" aria-selected="true">
									<span className="mdc-deprecated-list-item__text">
										Vegetables
									</span>
					</li>
					<li className="mdc-deprecated-list-item" data-value="fruit">
						<span className="mdc-deprecated-list-item__text">Fruit</span>
					</li>
				</ul>
			</div>
		));
	}

}
