import {ALLERGIES_RECEIVED, MEDICATIONS_RECEIVED, CONDITIONS_RECEIVED, FAMILY_HISTORY_RECEIVED, 
	OBSERVATIONS_RECEIVED, REPORTS_RECEIVED, IMMUNIZATIONS_RECEIVED, PROCEDURES_RECEIVED, 
	DEVICES_RECEIVED, DOCUMENTS_RECEIVED, CARE_PLAN_RECEIVED} from './constants';


const initialState = {
	allergies: [],
	medications: [],
	conditions: [],
};

export default (state = initialState, action) => {
	let newState = Object.assign({}, state);

	switch (action.type) {

		case ALLERGIES_RECEIVED:
			newState.allergies = action.allergies;
			break;

		case MEDICATIONS_RECEIVED: 
			newState.medications = action.medications;
			break;

		case CONDITIONS_RECEIVED: 
			newState.conditions = action.conditions;
			break;
					
		default:
			return newState;
	}
    return newState;
};
