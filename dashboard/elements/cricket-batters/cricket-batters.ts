const {customElement, property} = Polymer.decorators;

import {CurrentInnings} from '../../../src/types/schemas/currentInnings';
const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');

@customElement('cricket-batters')
export default class CricketBatters extends Polymer.MutableData(Polymer.Element) {
	@property({type: Object})
	currentInnings: CurrentInnings

    ready() {
			super.ready();

			currentInningsRep.on('change', newVal => {
				console.log('Batting players updated!');
				this.currentInnings = newVal;
				this.notifyPath('currentInnings');
			});
	}
}